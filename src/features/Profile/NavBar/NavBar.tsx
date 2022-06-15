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



export const NavBar = () => {

    const navigate = useNavigate()

    const dataButton = [
        {name:'Мои данные', logo: undefinedUser, onclick:''},
        {name:'Уведомления', logo: bell, onclick:''},
        {name:'Реестры', logo: bookmark, onclick:''},
        {name:'Метаданные', logo: paper, onclick:''},
        {name:'Безопастность', logo: lock, onclick:''},
        {name:'Мои загрузки', logo: download, onclick:''},
        {name:'Выход', logo: logout, onclick:''},
    ]

    return (
        <div className={s.container}>
            {dataButton.map(( d, i) => <Button key={d.name+i} onClick={()=>navigate(`/${d.onclick}`)}>
                    {d.name}
            </Button>
            )}
        </div>
    )
}