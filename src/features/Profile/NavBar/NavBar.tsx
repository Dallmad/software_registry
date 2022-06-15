import s from './NavBar.module.scss';
import undefinedUser from '../../../assets/images/user_interface/user-round.svg'
import bell from '../../../assets/images/user_interface/bell.svg'
import bookmark from '../../../assets/images/user_interface/note-bookmark.svg'
import paper from '../../../assets/images/user_interface/paper.svg'
import lock from '../../../assets/images/user_interface/lock-closed-II.svg'
import download from '../../../assets/images/user_interface/download.svg'
import logout from '../../../assets/images/user_interface/logout.svg'
import {Button} from '../../../components/Button/Button';
import {useNavigate} from 'react-router-dom';
import {setIsLoggedIn} from '../../../state/auth-reducer';
import {useTypedDispatch} from '../../../state/store';



export const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useTypedDispatch()

    const dataButton = [
        {name:'Мои данные', logo: undefinedUser, onclick:''},
        {name:'Уведомления', logo: bell, onclick:''},
        {name:'Реестры', logo: bookmark, onclick:''},
        {name:'Метаданные', logo: paper, onclick:''},
        {name:'Безопастность', logo: lock, onclick:''},
        {name:'Мои загрузки', logo: download, onclick:''},

    ]
    const onClickLogout = () => {
        dispatch(setIsLoggedIn(false))
    }
    //{name:'Выход', logo: logout, onclick:onClickLogout},

    return (
        <div className={s.container}>
            {dataButton.map(( d, i) => <Button key={d.name+i} onClick={()=>navigate(`/${d.onclick}`)}>
                    {d.name}
            </Button>
            )}
            <Button onClick={onClickLogout}>Выход</Button>
        </div>
    )
}