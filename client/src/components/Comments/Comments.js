import { memo, useContext, useEffect, useReducer, useState } from 'react';
import './styles/comments.css';
import { initialState, reducer } from './data/data';
import { changeHandler } from '../../utils/handleChangeEvent';
import * as recipeService from '../../services/recipeService';
import { AuthContext } from '../../contexts/UserContext';

export const Comments = memo(({ recipeId }) => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        recipeService.getAllComments(recipeId)
            .then((comments) => {
                setComments(comments);
            });
    }, [recipeId, user._id]);

    const submitHandler = (ev, comment) => {
        ev.preventDefault();

        if (state.comment !== '') {
            recipeService.createComment(comment, recipeId, user._id)
                .then(() => {
                    recipeService.getAllComments(recipeId)
                        .then((comments) => {
                            setComments(comments);
                        });
                });

            dispatch({ type: 'CLEAR_FIELD', field: 'comment', value: '' });
        }
    }
    
    return (
        <section className="comments-section">
            <form
                className="add-comment"
                onSubmit={(ev) => submitHandler(ev, state)}
            >
                <h1>Add comment:</h1>

                <div className="input-area">
                    <textarea
                        color={50}
                        className="textarea-comment"
                        type="text"
                        id="comment"
                        name="comment"
                        placeholder="We value your feedback. Let us know your thoughts!"
                        value={state.comment}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                    ></textarea>
                </div>

                <button>POST</button>
            </form>

            <article className="comments">
                <h1 className="comments-article-heading">Comments</h1>
                {comments.length > 0 ?
                    comments.map(x => (
                        <div className="comment" key={x._id}>
                            <img src={x.userId?.imageUrl} alt='profile' />
                            <p>{x.userId?.firstName} {x.userId?.lastName}: {x.comment}</p>
                        </div>
                    ))
                    : <h1 className="comments-empty-heading">No comments yet.</h1>
                }
            </article>
        </section>
    );
});