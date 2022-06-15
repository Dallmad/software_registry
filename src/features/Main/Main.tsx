import s from './Main.module.scss';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {Navigate} from 'react-router-dom';

export const Main = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.div} >
            <div>Реестр программного обеспечения</div>
        </div>
    )
}