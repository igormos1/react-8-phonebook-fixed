import { useSelector } from "react-redux";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import { authSelectors } from "redux/auth";
import s from './AppBar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
