import React from 'react';

const Table1: React.FC = () => {
    return (
        <div>
            <hr />
            <table className="table">
                <caption>WPI Academic Record</caption>
                <thead>
                <tr>
                    <th>Courses</th>
                    <th>Grade</th>
                    <th>Credits Earned</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Calculus IV</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Software Engineering</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Cell Biology</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Modern Physics</td>
                    <td>A</td>
                    <td>3</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;
