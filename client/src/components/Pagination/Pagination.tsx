import React from 'react';
import './Pagination.scss'

import {Pagination as PaginationComponent} from '@mantine/core';
import {useSearchParams} from 'hooks';
import {useMediaQuery} from "react-responsive";

interface IPaginationProps {
    total: number;
}


export function Pagination(props: IPaginationProps) {

    const {total} = props;
    const isTinyScreen = useMediaQuery({maxWidth: "441px"});
    const {page, setPageSearchParam} = useSearchParams();


    return (
        <PaginationComponent
            size={isTinyScreen ? "sm" : "md"}
            classNames={{control: "control"}}
            className="pagination"
            total={total}
            onChange={setPageSearchParam}
            value={page && !isNaN(Number(page)) ? Number(page)! : 1}>
        </PaginationComponent>
    );
}