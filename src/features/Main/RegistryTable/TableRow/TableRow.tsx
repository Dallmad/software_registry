import {TableCell} from '../TableCell/TableCell';
import {TableDataType} from '../RegistryTable';
import s from './TableRow.module.scss'

export const TableRow = ({objData}:TableDataType) => {


    return (
        <tr className={s.tr_3}>
            <TableCell value={objData.id}/>
            <TableCell value={objData.nameProgram}/>
            <TableCell value={objData.keyKlass}/>
            <TableCell value={objData.klass}/>
            <TableCell value={objData.data}/>
            <TableCell value={objData.link} className={s.link}/>
        </tr>
    )
}
