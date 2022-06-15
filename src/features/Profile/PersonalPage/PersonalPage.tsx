import s from './PersonalPage.module.scss'
import avatar from '../../../assets/images/user.svg'
import {Input} from '../../../components/Input/Input';

export const PersonalPage = () => {

    const dataField = [
        {label: 'Имя',},
        {label: 'Фамилия',},
        {label: 'Отчество',},
        {label: 'Страна',},
        {label: 'Город',},
        {label: 'Мобильный телефон',},
    ]

    return (
        <div className={s.wrapper}>
            <img src={avatar} alt="avatar"/>
            <span>Здравствуй, Захар!</span>
            <hr/>
            <div>Основные данные</div>
            {dataField.map((d, i) => <Input
                    key={i + d.label}
                    label={d.label}
                />
            )}
            <hr/>
            <div>Пароль</div>
            <Input label={'Новый пароль'}/>
            <Input label={'Подтверждение пароля'}/>
        </div>
    )
}