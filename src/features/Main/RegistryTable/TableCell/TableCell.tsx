import s from './TableCell.module.scss'


export const TableCell = ({value, className}:PropsType) => {

    const finalClassName = `${ className ? className: s.td}`

    return (
        <>
            <td className={finalClassName}>{value}</td>
        </>
    )
}

//types
type PropsType = {
    value: string
    className?: string
}