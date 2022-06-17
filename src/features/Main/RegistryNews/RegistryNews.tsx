import s from './Registrynews.module.scss'
import calendar from '../../../assets/images/user_interface/notes-calendar.svg'
import foto from '../../../assets/images/news/foto.svg'
import works from '../../../assets/images/news/techWorks.svg'
import tests from '../../../assets/images/news/tests.svg'
import update from '../../../assets/images/news/update.svg'
import attention from '../../../assets/images/news/attention.svg'


export const RegistryNews = () => {

    const dataNews = [
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            logoCalendar: calendar,
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            logoCalendar: calendar,
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            logoCalendar: calendar,
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            logoCalendar: calendar,
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            logoCalendar: calendar,
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
        {
            img: works,
            title: 'Технические работы 30.05.2022',
            data: '30.05.2022',
            logoCalendar: calendar,
            description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...'
        },
    ]


    return (
        <div className={s.container}>
            <div className={s.title}>Новости реестра</div>
            <div className={s.box}>
                {dataNews.map((n,i) =>
                    <div key={n.title+i}>
                    <img src={n.img} alt='news-image'/>
                    </div>

                    )}
            </div>
        </div>
    )
}