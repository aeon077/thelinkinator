import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Table from 'react-bootstrap/Table';
import BootstrapTable from 'react-bootstrap-table-next';
import '../scss/custom.scss';
import axios from 'axios';


const ResultsTable = () => {

    return (
        <Table striped bordered hover>
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Clicks</th>
                    <th>Tags</th>
                </tr>
            </thead>


        </Table>
    )
}

export default ResultsTable;