import moment from 'moment';
import React from 'react';
import Table from 'react-bootstrap/Table';
// import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../scss/custom.scss'

// import axios from 'axios';

const Results = ({ linksList, addClicks, clicks }) => {


    return (

        <Table striped bordered hover>
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Clicks</th>
                    <th>URL</th>
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
                            <span>{clicks}</span>
                        </td>
                        <td>
                            <a
                                onClick={addClicks}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                id={id}>
                                {url}
                            </a>
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
    )
}
export default Results;