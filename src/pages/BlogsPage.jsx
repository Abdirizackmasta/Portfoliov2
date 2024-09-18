
import { Outlet } from "react-router-dom"
import css from './BlogsPage.module.scss'
import BackButton from "../components/backButton/BackButton"
function BlogsPage() {
    return (
        <div className={css.container}>
            <BackButton />
            <Outlet />
        </div>
    )
}

export default BlogsPage
