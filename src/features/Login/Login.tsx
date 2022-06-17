import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import s from './Login.module.scss'
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {Input} from '../../components/Input/Input';
import {Checkbox} from '../../components/Checkbox/Checkbox';
import {Button} from '../../components/Button/Button';
import arrowLeft from '../../assets/images/user_interface/arrow-left.svg'
import {PATH} from '../../app/Routes/Routes';
import {setIsLoggedIn} from '../../state/auth-reducer';


export const Login = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            /* if (!values.name) {
                 errors.name = 'Required';
             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.name)) {
                 errors.name = 'Invalid email address';
             }
             if (!values.password) {
                 errors.password = 'Password is required';
             } else if (values.password.length < 7) {
                 errors.password = 'Password should be more 7 symbols';
             }*/
            return errors;
        },
        onSubmit: values => {
            dispatch(setIsLoggedIn(true))
            formik.resetForm()
        },
    })

    const onClickMainPage = () => {
        navigate(`${PATH.MAIN}`)
    }

    if (isLoggedIn) {
        return <Navigate to="/"/>
    }

    return (

        <>
            <div onClick={onClickMainPage} className={s.box_arrow}>
                <img src={arrowLeft} alt={'arrow-left'} className={s.arrow}/>
                <span className={s.span_title}>Главная</span>
            </div>
            <div className={s.container}>
                <div className={s.title}>Авторизация</div>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <div className={s.form_container}>
                        <Input
                            label="Имя"
                            type="Name"
                            placeholder={'Введите имя'}
                            className={s.input}
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name
                            && <div style={{color: 'red'}}>{formik.errors.name}</div>}

                        <Input
                            label="Пароль"
                            type="password"
                            placeholder={'Введите пароль'}
                            className={s.input}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password
                            && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                        <div>

                            <Checkbox
                                className={s.checkbox}
                                {...formik.getFieldProps('rememberMe')}
                            />
                            <label className={s.checkbox_label}>Запомнить меня на этом компьютере</label>
                        </div>
                        <Button type={'submit'} className={s.button}>
                            <span className={s.button_title}>Вход</span>
                        </Button>
                        <div className={s.box_link}>
                            <a href={'/404'} className={s.link}>
                                Забыли свой пароль?
                            </a>
                        </div>

                        <div className={s.box_link_auth}>
                            Авторизация с использованием ЕС ИФЮЛ
                        </div>
                        <div className={s.box_link_auth}>
                            Авторизация с использованием МСИ
                        </div>
                        <div className={s.question}>
                            У Вас нет аккаунта?
                        </div>
                        <div className={s.box_link}>
                            <a href={'/404'} className={s.link}>Нажмите сюда чтобы создать</a>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

//types
type FormikErrorType = {
    name?: string
    password?: string
    rememberMe?: boolean
}