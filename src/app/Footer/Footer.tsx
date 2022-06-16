import s from './Footer.module.scss'
import logo from '../../assets/images/logo.svg';
import {PATH} from '../Routes/Routes';
import {useNavigate} from 'react-router-dom';

export const Footer = () => {

    const navigate = useNavigate()

    const onClickLogo = () => {
        navigate(`${PATH.MAIN}`)
    }
    return (
        <>
            <div className={s.container}>
                <div className={s.name}>
                    <img src={logo} alt={'logo'} className={s.logo} onClick={onClickLogo}/>
                    <div className={s.firstName}>
                        Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г
                    </div>
                    <div className={s.dev}>
                        Разработчик
                    </div>
                    <div className={s.secondName}>
                        ОАО «Агентство сервисизации и реинжиниринга»
                    </div>
                    <div className={s.address}>
                        Минск, улица Клары Цеткин, 24
                    </div>
                </div>
                <div className={s.information}>
                    <div className={s.title}>Информация</div>
                    <a href="" className={s.link}>Реестры</a>
                    <a href="" className={s.link}>Новости</a>
                    <a href="" className={s.link}>Документы</a>
                    <a href="" className={s.link}>Вопросы</a>
                </div>
                <div className={s.support}>
                    <div className={s.title}>Техническая поддержка</div>
                    <div className={s.time}>
                        Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.
                    </div>
                    <div className={s.phone}>
                        +375 25 111 22 33
                    </div>
                    <div className={s.phone}>
                        +375 29 222 44 55
                    </div>
                    <div className={s.phone}>
                        ReestrPOsupport@mail.ru
                    </div>
                </div>
                <div className={s.contacts}>
                    <div className={s.title}>Контакты</div>
                    <div className={s.phone}>+375 33 112 22 45</div>
                    <div className={s.phone}>+375 29 222 44 88</div>
                    <div className={s.phone}>ReesrtPO@mail.ru</div>
                    <div className={s.phone}>220004 г. Минск, ул. Карла Маркса, 38</div>
                    <a href={''} className={s.link}>Связаться с поддержкой</a>
                </div>
            </div>
            <hr className={s.hr}/>
            <div className={s.after_footer}>
                © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
            </div>
        </>
    )
}