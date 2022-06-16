import {TableCell} from '../TableCell/TableCell';
import {TableDataType} from '../RegistryTable';

export const TableRow = ({objData}:TableDataType) => {


    return (
        <tr>
            <TableCell value={objData.id}/>
            <TableCell value={objData.nameProgram}/>
            <TableCell value={objData.keyKlass}/>
            <TableCell value={objData.klass}/>
            <TableCell value={objData.data}/>
            <TableCell value={objData.link}/>
        </tr>
    )
}
