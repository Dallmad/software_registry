import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {AppRootStateType} from '../../state/store'
import s from './Header.module.scss'
import {PATH} from '../Routes/Routes'
import logo from './../../assets/images/logo.svg'
import bell from './../../assets/images/user_interface/bell.svg'
import {Input} from '../../components/Input/Input';

export const Header = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)


    return (
        <div>
            <div>
                <img src={logo} alt='logo' className={s.logo}/>
            </div>
            <Input
            placeholder={'Поиск'}
            />
            <div className={s.navLink}>
                <NavLink to={PATH.MAIN} className={s.link}>Main</NavLink>
                {/*{isLoggedIn && <NavLink to={PATH.MAIN} className={s.link}>Packs List</NavLink>}*/}
                {!isLoggedIn && <NavLink to={PATH.LOGIN} className={s.link}>Login</NavLink>}
                {/*<Logout/>*/}
            </div>
            <div className={s.bell}>
                <img src={bell} alt={'bell'}/>
            </div>
        </div>
    )
}