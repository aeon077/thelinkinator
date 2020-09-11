import moment from 'moment';
import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from 'react-bootstrap/Table';
import '../scss/custom.scss'

// import BootstrapTable from 'react-bootstrap-table-next';
// import axios from 'axios';


const Results = ({ linksList }) => {
    console.log(linksList);
    return (
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
                            <a href={url}>{url}</a>
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
    )
}

export default Results;