import PrimaryButton from "../core/PrimaryButton";
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    const goTo = () => {
        navigate("/signin")
    }
    return (
        <nav>
            <div>
                <img />
            </div>
            <div>
                <ul>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Areas</li>
                    <li>Why us</li>
                </ul>
            </div>
            <PrimaryButton to="/signin" label="SIGN IN" />
        </nav>
    )
}
export default Header;