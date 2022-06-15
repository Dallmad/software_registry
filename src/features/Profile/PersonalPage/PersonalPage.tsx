import s from './PersonalPage.module.scss'
import avatar from '../../../assets/images/user.svg'
import {Input} from '../../../components/Input/Input';
import {useFormik} from 'formik';
import {Button} from '../../../components/Button/Button';
import React, {useState} from 'react';

export const PersonalPage = () => {

    const dataField = [
        {label: 'Имя',},
        {label: 'Фамилия',},
        {label: 'Отчество',},
        {label: 'Страна',},
        {label: 'Город',},
        {label: 'Мобильный телефон',},
    ]
const [data, setData] = useState(
    {label: 'Имя'}
)

    const formik = useFormik({
        initialValues: {
            firstName: data.label,
            lastName: '',
            middleName: '',
            country: '',
            city: '',
            phone: '',
            password: '',
            repeatPassword: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.firstName) {
                errors.name = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.firstName)) {
                errors.name = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 7) {
                errors.password = 'Password should be more 7 symbols';
            }
            return errors;
        },
        onSubmit: values => {
            //dispatch(login(values))
            //formik.resetForm()
            //setData(values)
        },
    })

    return (
        <div className={s.wrapper}>
            <img src={avatar} alt="avatar"/>
            <span>Здравствуй, Захар!</span>
            <hr/>
            <div>Основные данные</div>
            <form onSubmit={formik.handleSubmit}>
                {dataField.map((d, i) => <Input
                        key={i + d.label}
                        label={d.label}
                        type={d.label}
                    />
                )}
                <hr/>
                <div>Пароль</div>
                <Input label={'Новый пароль'} type={'password'}/>
                <Input label={'Подтверждение пароля'} type={'password'}/>
                <Button type={'submit'}>
                    Сохранить
                </Button>
            </form>
        </div>
    )
}

//types
type FormikErrorType = {
    name?: string
    password?: string
    rememberMe?: boolean
}