import moment from 'moment';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { updateLink } from '../api';
// import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../scss/custom.scss'

// import axios from 'axios';


const Results = ({ linksList }) => {
    const [clickCount, setClickCount] = useState(0);
    const [selectedId, setSelectedId] = useState(0);

    async function handleClickCount(event) {
        console.log(event);
        // setClickCount();
        // await updateLink();
    }
    // const headerSortingStyle = { backgroundColor: '#c8e6c9' };

    // const columns = [{
    //     dataField: 'url',
    //     text: 'URL',
    //     sort: true,
    //     headerSortingStyle,
    //     filter: textFilter({ placeholder: 'Search URL...' })
    // }, {
    //     dataField: 'clicks',
    //     text: 'Clicks',
    //     sort: true,
    //     headerSortingStyle
    // }, {
    //     dataField: 'date',
    //     text: 'Date Created',
    //     type: 'date',
    //     sort: true,
    //     headerSortingStyle
    // }, {
    //     dataField: 'comment',
    //     text: 'Comments',
    //     sort: true,
    //     headerSortingStyle,
    //     filter: textFilter({ placeholder: 'Search Comments...' })
    // }, {
    //     dataField: '[tags]',
    //     text: 'Tags',
    //     // formatter: (cell) => {
    //     //     return { cell.map(label => <li>{label}</li>) }
    //     // },
    //     sort: true,
    //     headerSortingStyle,
    //     filter: textFilter({ placeholder: 'Search Tags...' })
    // }];

    return (
        // <>
        //     <BootstrapTable
        //         keyField="id"
        //         data={linksList}
        //         columns={columns}
        //         filter={filterFactory()}
        //         filterPosition="top"
        //         cellEdit={cellEditFactory({ mode: 'click' })}
        //         pagination={paginationFactory({ sizePerPage: 15 })}
        //     />
        <Table striped bordered hover>
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>URL</th>
                    <th>Clicks</th>
                    <th>Date Created</th>
                    <th>Comments</th>
                    <th>Tags</th>
                </tr>
            </thead>
            <tbody>
                {linksList.map(({ id, url, count, date, comment, tags }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                id={id}
                                count={count}
                                onClick={handleClickCount}>
                                {url}
                            </a>
                        </td>
                        <td value={clickCount}>
                            {count}
                        </td>
                        <td>{moment(date).format("dddd, MMMM Do YYYY")}</td>
                        <td>{comment}</td>
                        <td>{tags.map(({ id, name }) => (
                            <p key={id} data={id}>{name}</p>
                        ))}
                        </td>
                    </tr>
                ))}
            </tbody>

        </Table>
        // </>
    )
}
export default Results;