import React from 'react';
import './Pagination.scss'

import {Pagination as PaginationComponent} from '@mantine/core';
import {useSearchParams} from 'hooks';

interface PaginationProps {
    total: number;
}


export function Pagination(props: PaginationProps) {

    const {total} = props;
    const {page, setPageSearchParam} = useSearchParams();


    return (
        <PaginationComponent
            classNames={{control: "control"}}
            className="pagination"
            total={total}
            onChange={setPageSearchParam}
            value={page && !isNaN(Number(page)) ? Number(page)! : 1}>
        </PaginationComponent>
    );
}