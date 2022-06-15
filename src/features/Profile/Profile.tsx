import s from './Profile.module.scss';
import {NavBar} from './NavBar/NavBar';
import {PersonalPage} from './PersonalPage/PersonalPage';

export const Profile = () => {
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