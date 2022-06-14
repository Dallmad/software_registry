import React from 'react'
import {AppRoutes} from './Routes/Routes'
import {Header} from './Header/Header';
import s from './App.module.scss';


export const App = () => {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div className={s.routes}>
        <AppRoutes/>
      </div>
    </>
  )
}
