import s from './Registrynews.module.scss'
import calendar from '../../../assets/images/user_interface/notes-calendar.svg'
import foto from '../../../assets/images/news/foto.svg'
import works from '../../../assets/images/news/techWorks.svg'
import tests from '../../../assets/images/news/tests.svg'
import update from '../../../assets/images/news/update.svg'
import attention from '../../../assets/images/news/attention.svg'
import {Button} from '../../../components/Button/Button';


export const RegistryNews = () => {

    const dataNews = [
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
        {
            img: attention,
            title: 'Изменение справочника',
            data: '28.05.2022',
            description: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...'
        },
        {
            img: works,
            title: 'Технические работы 26.05.2022',
            data: '26.05.2022',
            description: 'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...'
        },
        {
            img: foto,
            title: 'Лицензирование в Беларуси',
            data: '25.05.2022',
            description: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...'
        },
        {
            img: tests,
            title: 'Тестирование системы новостей Ед...',
            data: '20.05.2022',
            description: 'Тестирование системы новостей ЕРЛ.'
        },
        {
            img: update,
            title: 'Обновление версии реестра ПО',
            data: '18.05.2022',
            description: 'В новой версии доступны новые функции, которые упрощают использование сервис...'
        },
    ]


    return (
        <div className={s.container}>
            <h2 className={s.title}>Новости реестра</h2>
            <div className={s.container_small}>
                <div className={s.box}>
                    {dataNews.map((n, i) =>
                        <div key={n.title + i} className={s.box_small}>
                            <img src={n.img} alt="news-image" className={s.img}/>
                            <div className={s.second_title}>{n.title}</div>
                            <div className={s.data}>
                                <img src={calendar} alt="calendar" className={s.data_img}/>
                                {n.data}
                            </div>
                            <div className={s.description}>{n.description}</div>
                        </div>
                    )}
                </div>
            </div>
            <Button className={s.button}>
                <span className={s.span}>Показать все</span>
            </Button>
        </div>
    )
}