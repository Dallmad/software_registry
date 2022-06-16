import React, {useState} from 'react';
import s from './Paginator.module.scss';
import {Button} from '../Button/Button';

export const Paginator: React.FC<PaginatorTypeProps> = ({totalCount, pageSize, currentPage, onPageChanged}) => {

    let portionSize = 5

    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)//?
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return (
        <div className={s.container}>
            <Button className={s.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} disabled={portionNumber <= 1}>{'<<'}</Button>
            <Button className={s.button} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }} disabled={portionNumber <= 1}>{'<'}</Button>
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p, i) => {
                    return (
                        <span key={i} onClick={() => {
                            onPageChanged(p);
                        }} className={currentPage === p ? s.selectedPage : s.simplePage}>{p} </span>
                    )
                })}
            <Button className={s.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} disabled={portionCount <= portionNumber}>{'>'}</Button>
            <Button className={s.button} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} disabled={portionCount <= portionNumber}>{'>>'}</Button>
        </div>
    )
}

//types
type PaginatorTypeProps = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (numberPage: number) => void
}

