import React from 'react'
import {AppRoutes} from './Routes/Routes'
import {Header} from './Header/Header';
import s from './App.module.scss';


export const App = () => {
    return (
        <div className={s.app}>
            <div className={s.box}>
                <Header/>
                <AppRoutes/>
            </div>
        </div>
    )
}
