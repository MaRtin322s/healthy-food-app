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
            .then(result => {
                setComments(result);
            });
    }, [recipeId]);

    const submitHandler = (ev, comment) => {
        ev.preventDefault();

        if (state.comment !== '') {
            recipeService.createComment(comment, recipeId, user._id)
                .then(() => {
                    recipeService.getAllComments(recipeId)
                        .then(result => {
                            setComments(result);
                        });
                });
        }
    }


    console.log(comments);
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
                <div className="comment">
                    <img src='https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-1/150229103_1361363897531379_3959542739258643856_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=32HLQG6tlToAX8NVFVA&_nc_ht=scontent-fra5-2.xx&oh=00_AfA8LXpyW7Z-dGNrv33wmBanik8oFmmNgBL3gX8WIMF0WQ&oe=650E715A' alt='profile' />
                    <p>email: We value your feedback. Let us know your thoughts!</p>
                </div>
                <div className="comment">
                    <img src='https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-1/150229103_1361363897531379_3959542739258643856_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=32HLQG6tlToAX8NVFVA&_nc_ht=scontent-fra5-2.xx&oh=00_AfA8LXpyW7Z-dGNrv33wmBanik8oFmmNgBL3gX8WIMF0WQ&oe=650E715A' alt='profile' />
                    <p>email: We value your feedback. Let us know your thoughts!</p>
                </div>
                <div className="comment">
                    <img src='https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-1/150229103_1361363897531379_3959542739258643856_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=32HLQG6tlToAX8NVFVA&_nc_ht=scontent-fra5-2.xx&oh=00_AfA8LXpyW7Z-dGNrv33wmBanik8oFmmNgBL3gX8WIMF0WQ&oe=650E715A' alt='profile' />
                    <p>email: We value your feedback. Let us know your thoughts!</p>
                </div>
            </article>
        </section>
    );
});