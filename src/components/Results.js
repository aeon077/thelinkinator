import moment from 'moment';
import React from 'react';
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../scss/custom.scss'

// import axios from 'axios';


const Results = ({ linksList }) => {
    const headerSortingStyle = { backgroundColor: '#c8e6c9' };

    const columns = [{
        dataField: 'url',
        text: 'URL',
        sort: true,
        headerSortingStyle,
        filter: textFilter({ placeholder: 'Search URL...' })
    }, {
        dataField: 'clicks',
        text: 'Clicks',
        sort: true,
        headerSortingStyle
    }, {
        dataField: 'date',
        text: 'Date Created',
        type: 'date',
        sort: true,
        headerSortingStyle
    }, {
        dataField: 'comment',
        text: 'Comments',
        sort: true,
        headerSortingStyle,
        filter: textFilter({ placeholder: 'Search Comments...' })
    }, {
        dataField: '[tags]',
        text: 'Tags',
        // formatter: (cell) => {
        //     return { cell.map(label => <li>{label}</li>) }
        // },
        sort: true,
        headerSortingStyle,
        filter: textFilter({ placeholder: 'Search Tags...' })
    }];

    return (
        <>
            <BootstrapTable
                keyField="id"
                data={linksList}
                columns={columns}
                filter={filterFactory()}
                filterPosition="top"
                cellEdit={cellEditFactory({ mode: 'click' })}
                pagination={paginationFactory({ sizePerPage: 15 })}
            />
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
                    {linksList.map(({ id, url, clicks, date, comment, tags }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>
                                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                            </td>
                            <td>{clicks == null
                                ? 0
                                : clicks}
                            </td>
                            <td>{moment(date).format("dddd, MMMM Do YYYY")}</td>
                            <td>{comment}</td>
                            <td>{tags.map(({ id, name }) => (
                                <p key={id}>{name}</p>
                            ))}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )
}

export default Results;