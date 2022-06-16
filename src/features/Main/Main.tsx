import s from './Main.module.scss'
import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../state/store'
import {Navigate} from 'react-router-dom'
import {RegistrySearch} from './RegistrySearch/RegistrySearch';
import {RegistryTable} from './RegistryTable/RegistryTable';
import {RegistryNews} from './RegistryNews/RegistryNews';
import {QABlock} from './Q&A/QABlock';
import {Documents} from './Documents/Documents';

export const Main = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.container}>
            <div className={s.registrySearch}>
                <RegistrySearch/>
            </div>

            <RegistryTable/>
            <RegistryNews/>
            <QABlock/>
            <Documents/>
        </div>
    )
}