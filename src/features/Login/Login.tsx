import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import s from './Login.module.scss'
import {useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {AppRootStateType, useTypedDispatch} from '../../state/store';
//import {login} from '../../state/auth-reducer';
import {Input} from '../../components/Input/Input';
import {Checkbox} from '../../components/Checkbox/Checkbox';
import {Button} from '../../components/Button/Button';
import arrowLeft from '../../assets/images/user_interface/arrow-left.svg'
import {PATH} from '../../app/Routes/Routes';


export const Login = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.name)) {
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
        <div className={s.div}>
            <div  onClick={onClickMainPage}>
                <img src={arrowLeft} alt={'arrow-left'}/>
                <span>Главная</span>
            </div>
            <div className={s.title}>Авторизация</div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.container}>
                    <Input
                        label='Имя'
                        type='Name'
                        placeholder={'Введите имя'}
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name
                        && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                    <Input
                        label='Пароль'
                        type='password'
                        placeholder={'Введите пароль'}
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password
                        && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                    <div className={s.checkbox}>

                        <Checkbox
                            {...formik.getFieldProps('rememberMe')}
                        />
                        <label>Запомнить меня на этом компьютере</label>
                    </div>
                    <Button type={'submit'}>
                        Вход
                    </Button>
                    <a href={'ad'}>
                        Забыли свой пароль?
                    </a>
                    <div>
                        Авторизация с использованием ЕС ИФЮЛ
                    </div>
                    <div>
                        Авторизация с использованием МСИ
                    </div>
                    <div>
                        У Вас нет аккаунта?
                    </div>
                    <a href={'/404'}>Нажмите сюда чтобы создать</a>
                </div>
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