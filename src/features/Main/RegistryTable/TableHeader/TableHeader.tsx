
import {useDispatch} from 'react-redux';


export const TableHeader = ({sortPacks}:PropsType) => {

    const dispatch = useDispatch()

    const onSortPacks = (value: string) => {
        let sort = +!+sortPacks.slice(0, 1)+value
        //dispatch(setSortPacksAC(sort))
    }

    return (
        <tr>
            <th onClick={()=>onSortPacks('name')}>Регистрационный номер</th>
            <th onClick={()=>onSortPacks('cardsCount')}>Наименование программного обеспечения</th>
            <th>Код класса</th>
            <th>Класс программного обеспечения</th>
            <th>Дата регистрации</th>
            <th>Адрес сайта</th>
        </tr>
    )
}
//types
type PropsType = {
    sortPacks:string
}