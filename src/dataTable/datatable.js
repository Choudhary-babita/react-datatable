import React from 'react';
import data from '../data/employee.json';

import './datatable.css';

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
        };
    }

    render() {
        const {
            data
        } = this.state.data;
        return (
            <div className="outerBoundary">
            <div className="tableContainer">
                <div className="headerName">
                     Employee List
                </div>
                <table className="tableClass">
                    <thead className="tableHead">
                        <tr className="tableRow">
                            <th className="tableCell-Head tableCell"> NAME </th>
                            <th className="tableCell-Head tableCell"> COMPANY </th>
                            <th className="tableCell-Head tableCell"> CITY </th>
                            <th className="tableCell-Head tableCell"> STATE </th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {data && data.map((item, index) => (
                            <tr key={`data-${index}`}>
                                <td className="tableCell">
                                    {item.name}
                                </td>
                                <td className="tableCell">
                                    {item.company}
                                </td>
                                <td className="tableCell">
                                    {item.city}
                                </td>
                                <td className="tableCell">
                                    {item.state}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

export default DataTable
