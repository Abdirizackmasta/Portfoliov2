import { Link } from "react-router-dom";
import BackButton from "../backButton/BackButton";
import css from './BlogsIntro.module.scss';
function BlogsIntro() {
    return (
        <>
            <div className={css.blogs}>
                <Link to='/blogs/laziness'>
                    <div>
                        <p className={css.topic}>Laziness</p>
                        <p className={css.primary}>What is Laziness? What causes it? And how to overcome it!</p>
                        <p>Published on Aug 6th 2024</p>
                    </div>
                    <img src='/lazy.jpg' alt="blog-header image" />
                </Link>
            </div>
        </>
    );
}

export default BlogsIntro;
