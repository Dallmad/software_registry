import {useSelector} from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'
import {AppRootStateType} from '../../state/store'
import s from './Header.module.scss'
import {PATH} from '../Routes/Routes'
import logo from './../../assets/images/logo.svg'
import bell from './../../assets/images/user_interface/bell.svg'
import search from '../../assets/images/user_interface/search.svg'
import notes from '../../assets/images/user_interface/notes-calendar.svg'
import avatar from '../../assets/images/user.svg'
import arrow from '../../assets/images/user_interface/upper arrow.svg'
import line from '../../assets/images/line.svg'
import undefinedUser from '../../assets/images/user_interface/user-round.svg'
import {Input} from '../../components/Input/Input';



export const Header = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const userName = 'Захар Палазник'

    const navigate = useNavigate()

    const onClickUserName = () => {
        navigate(`${PATH.PROFILE}`)
    }
    const onClickUndefinedUser = () => {
        navigate(`${PATH.LOGIN}`)
    }
    const onClickLogo = () => {
        navigate(`${PATH.MAIN}`)
    }

    return (
        <div className={s.container}>
            <img src={logo} alt={'logo'} className={s.logo} onClick={onClickLogo}/>
            <img src={search} alt={'search'}/>
            <Input
                placeholder={'Поиск'}
            />
            <div className={s.navLink}>
                <NavLink to={PATH.MAIN} className={s.link}>Main</NavLink>
                {/*{isLoggedIn && <NavLink to={PATH.MAIN} className={s.link}>Packs List</NavLink>}*/}
                {!isLoggedIn && <NavLink to={PATH.LOGIN} className={s.link}>Login</NavLink>}
                <NavLink to={PATH.PROFILE} className={s.link}>Profile</NavLink>
                {/*<Logout/>*/}
            </div>
            {isLoggedIn ?
                <>
                    <img src={notes} alt={'notes'}/>
                    <img src={bell} alt={'bell'}/>
                    <img src={line} alt={'line'}/>
                    <img src={avatar} alt={'avatar'}/>
                    <span onClick={onClickUserName} className={s.span}>{userName}</span>
                </>
                :
                <>
                    <img src={undefinedUser} alt={'undefined-user'}/>
                    <span onClick={onClickUndefinedUser}>Вход в аакаунт</span>
                </>
            }

            <img src={arrow} alt={'arrow'}/>
        </div>
    )
}