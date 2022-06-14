import s from './Error404.module.scss';

export const Error404 = () => {
    return (
        <div className={s.div} >
            <div>404</div>
            <div>Page not found!</div>
        </div>
    )
}