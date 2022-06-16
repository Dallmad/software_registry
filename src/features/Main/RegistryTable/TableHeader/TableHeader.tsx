import s from './TableHeader.module.scss'
import arrow from '../../../../assets/images/user_interface/arrow-left-right.svg'
import {useDispatch} from 'react-redux';


export const TableHeader = ({sort}:PropsType) => {

    const dispatch = useDispatch()

    const onSortPacks = (value: string) => {
        let sorter = +!+sort.slice(0, 1)+value
        //dispatch(setSortPacksAC(sorter))
    }

    return (
        <tr className={s.tr}>
            <th onClick={()=>onSortPacks('name')} className={s.th}>
                <img src={arrow} alt='arrow' className={s.arrow}/>
                Регистрационный номер
            </th>
            <th onClick={()=>onSortPacks('cardsCount')} className={s.th}>
                <img src={arrow} alt='arrow' className={s.arrow}/>
                Наименование программного обеспечения
            </th>
            <th className={s.th}>Код класса</th>
            <th className={s.th}>Класс программного обеспечения</th>
            <th className={s.th}>Дата регистрации</th>
            <th className={s.th}>Адрес сайта</th>
        </tr>
    )
}
//types
type PropsType = {
    sort:string
}