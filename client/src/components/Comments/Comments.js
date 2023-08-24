import './styles/comments.css';

export const Comments = () => {
    return (
        <section className="comments-section">
            <form className="add-comment">
                <h1>Add comment:</h1>

                <div className="input-area">
                    <textarea
                        color={50}
                        className="textarea-comment"
                        type="text"
                        id="comment"
                        name="comment"
                        placeholder="We value your feedback. Let us know your thoughts!"
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
};