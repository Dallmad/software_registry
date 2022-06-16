
export const TableCell = ({value}:PropsType) => {

    return (
        <>
            <td>{value}</td>
        </>
    )
}

//types
type PropsType = {
    value: string
}