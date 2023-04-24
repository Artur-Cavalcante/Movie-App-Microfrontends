import { useState } from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

import '../styles/Paginator.css';

function Paginator(props) {
    const [active, setActive] = useState(true);


    function bindNextPage(page) {
        props.toggleNextPage(page);
    }

    function bindActive(page) {
        if (page === 'next') {
            setActive(true);
        }
    }

    return (
        <div className="paginator-container">
            <Pagination >
                <PaginationItem>
                    <PaginationLink
                        first
                        href="#1"
                        onClick={() => bindNextPage('1')}
                    />
                </PaginationItem>


                <PaginationItem >
                    {props.previousPage !== 0 ?
                        <PaginationLink
                            previous href={"#" + (props.previousPage)}
                            onClick={() => bindNextPage(props.previousPage)}
                        >
                        </PaginationLink>
                        : null}
                </PaginationItem>

                <PaginationItem>
                    {props.previousPage !== 0 ?
                        <PaginationLink
                            href={"#" + props.previousPage}
                            onClick={() => bindNextPage(props.previousPage)}
                        >
                            {props.previousPage}
                        </PaginationLink>
                        : null}
                </PaginationItem>

                <PaginationItem active={active}>
                    <PaginationLink
                        href={"#" + props.currentPage}
                        onClick={() => bindNextPage(props.currentPage)}
                    >
                        {props.currentPage}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem >
                    {!(props.nextPage > props.pages) ?
                        <PaginationLink
                            href={"#" + props.nextPage}
                            onClick={() => {
                                bindNextPage(props.nextPage);
                                bindActive('next')
                            }
                            }
                        >
                            {props.nextPage}
                        </PaginationLink>
                        : null}

                </PaginationItem>

                {!(props.nextPage > props.pages) ?
                    <PaginationItem >
                        <PaginationLink
                            next
                            href={"#" + (props.currentPage + 1)}
                            onClick={() => bindNextPage(props.nextPage)}
                        />
                    </PaginationItem>
                    : null}

                <PaginationItem >
                    <PaginationLink
                        last
                        href={"#" + props.pages}
                        onClick={() => { bindNextPage(props.pages) }}
                    />
                </PaginationItem>
            </Pagination>
        </div>
    )
}

export default Paginator;
