import s from './Profile.module.scss';
import {NavBar} from './NavBar/NavBar';
import {PersonalPage} from './PersonalPage/PersonalPage';
import {useSelector} from "react-redux";
import {AppRootStateType} from '../../state/store';
import { Navigate } from 'react-router-dom';

export const Profile = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }
    return (
        <div className={s.container}>
            <div>Личный кабинет</div>
            <div className={s.box}>
                <NavBar/>
                <PersonalPage/>
            </div>
        </div>
    )
}