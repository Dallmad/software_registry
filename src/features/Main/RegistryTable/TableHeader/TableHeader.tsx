import s from './TableHeader.module.scss'
import arrow from '../../../../assets/images/user_interface/arrow-left-right.svg'
import {useDispatch} from 'react-redux';
import {setSortAC} from '../../../../state/main-reducer';
import {useState} from 'react';


export const TableHeader = () => {

    const dispatch = useDispatch()
    const [upDown,setUpDown] = useState<boolean>(false)

    const onSort = (value: string) => {
        setUpDown(!upDown)
        let sorted = +upDown + value
        dispatch(setSortAC(sorted))
    }

    return (
        <tr className={s.tr}>
            <th  className={s.th}>
                <img
                    src={arrow}
                    alt='arrow'
                    className={s.arrow}
                    onClick={()=>onSort('id')}
                />
                Регистрационный номер
            </th>
            <th  className={s.th}>
                <img
                    src={arrow}
                    alt='arrow'
                    className={s.arrow}
                    onClick={()=>onSort('name')}
                />
                Наименование программного обеспечения
            </th>
            <th className={s.th}>Код класса</th>
            <th className={s.th}>Класс программного обеспечения</th>
            <th className={s.th}>Дата регистрации</th>
            <th className={s.th}>Адрес сайта</th>
        </tr>
    )
}
