import React from 'react';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Table from 'react-bootstrap/Table';
import '../scss/custom.scss';


const ResultsTable = () => {
    return (
        <Table striped bordered hover>
            <thead class="thead-dark">
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