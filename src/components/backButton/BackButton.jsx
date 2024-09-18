import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import css from './BackButton.module.scss';  

function BackButton() {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Link onClick={handleBack}className={css.link}>
            <button>Go to Home Page</button>
        </Link>
    );
}

export default BackButton;
