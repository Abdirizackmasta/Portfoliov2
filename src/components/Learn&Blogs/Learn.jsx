import { Link } from 'react-router-dom'
import css from './Learn.module.scss'

function Learn() {
    return (
        <div className={css.learn}>
            <Link><button role='link'>Learn with Masta</button></Link>
            <Link to='blogs'><button>Blogs</button></Link>
        </div>
    )
}

export default Learn;
