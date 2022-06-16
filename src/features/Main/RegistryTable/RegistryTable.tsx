import s from './RegistryTable.module.scss'
import filter from '../../../assets/images/user_interface/filter.svg'
import dots from '../../../assets/images/user_interface/three-dots-vertical.svg'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../state/store';
import {TableHeader} from './TableHeader/TableHeader';
import {TableRow} from './TableRow/TableRow';
import {Paginator} from '../../../components/Paginator/Paginator';

const tableData = [
    {
        id: '#1',
        nameProgram: 'Система управления базами данных «Ред База Данных»',
        keyKlass: '2.09',
        klass: 'Системы управления базами данных',
        data: '29.01.2016',
        link: 'Ссылка'
    },
    {
        id: '#2',
        nameProgram: '1С:Школа.Информатика, 11 класс',
        keyKlass: '04.11',
        klass: 'Системы управления процессами организации',
        data: '29.01.2016',
        link: 'Ссылка'
    },
    {
        id: '#3',
        nameProgram: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
        keyKlass: '04.11',
        klass: 'Информационные системы для решения специфических отраслевых задач',
        data: '29.01.2016',
        link: 'Ссылка'
    },
    {
        id: '#4',
        nameProgram: '1С:Комплексная автоматизация 8',
        keyKlass: '04.11',
        klass: 'Системы управления процессами организации',
        data: '20.02.2016',
        link: 'Ссылка'
    },
    {
        id: '#5',
        nameProgram: 'Электронный периодический справочник "Система ГАРАНТ"',
        keyKlass: '04.15',
        klass: 'Прикладное программное обеспечение общего назначения',
        data: '20.02.2016',
        link: 'Ссылка'
    },
    {
        id: '#6',
        nameProgram: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
        keyKlass: '04.13',
        klass: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
        data: '11.03.2016',
        link: 'Ссылка'
    },
    {
        id: '#7',
        nameProgram: 'ABBYY Lingvo',
        keyKlass: '04.07',
        klass: 'Лингвистическое программное обеспечение',
        data: '11.03.2016',
        link: 'Ссылка'
    },
    {
        id: '#8',
        nameProgram: '1С-Битрикс24 (Компания)',
        keyKlass: '04.03',
        klass: 'Офисные приложения',
        data: '14.03.2016',
        link: 'Ссылка'
    },
    {
        id: '#9',
        nameProgram: '1С-Битрикс24 (Проект+)',
        keyKlass: '04.03',
        klass: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
        data: '14.03.2016',
        link: 'Ссылка'
    },
    {
        id: '#10',
        nameProgram: '1С-Битрикс24 (Команда)',
        keyKlass: '04.03',
        klass: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
        data: '14.03.2016',
        link: 'Ссылка'
    },
]


export const RegistryTable = () => {

    /*const sortPacks = useSelector<AppRootStateType, string>(state => state.auth)*/

    return (
        <>
            <div>
                Реестры
                <img src={filter} alt="filter"/>
                <img src={dots} alt="three-dots"/>
                <table>
                    <thead>
                    <TableHeader sortPacks={'sortPacks'}/>
                    </thead>
                    <tbody>
                    {tableData.map((t, i) =>
                        <TableRow
                            key={t.id+i}
                            objData={t}
                        />
                    )}
                    </tbody>
                </table>
                <Paginator
                    currentPage={1}
                    onPageChanged={()=>{}}
                    totalCount={50}
                    pageSize={5}/>
            </div>
        </>
    )
}

//types
export type ObjectDataType = {
    id: string
    nameProgram: string
    keyKlass: string
    klass: string
    data: string
    link: string
}
export type TableDataType = {
    objData:ObjectDataType
}