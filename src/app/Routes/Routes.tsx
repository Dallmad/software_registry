import {Navigate, Route, Routes} from 'react-router-dom'
import {Login} from '../../features/Login/Login';
import {Error404} from '../../features/Error/Error404';
import {Main} from '../../features/Main/Main';


export const PATH = {
    MAIN: '/main',
    LOGIN: '/login',
    ERROR404: '/404',
}

export const AppRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.MAIN}/>}/>
                <Route path={PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
            </Routes>
        </div>
    )
}
