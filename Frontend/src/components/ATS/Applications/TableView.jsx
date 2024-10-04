import React from 'react';
import './css/TableView.css';

const TableView = () => {
  return (
    <div className="table-view">
      <table>
        <thead>
          <tr>
            <th>
              <span className='th-name'>Title</span>
              <span className="sorting-arrows">
                <span className="arrow-up">▲</span>
                <span className="arrow-down">▼</span>
              </span>
            </th>
            <th>
              Applicants
              <span className="sorting-arrows">
                <span className="arrow-up">▲</span>
                <span className="arrow-down">▼</span>
              </span>
            </th>
            <th>
              Posted On
              <span className="sorting-arrows">
                <span className="arrow-up">▲</span>
                <span className="arrow-down">▼</span>
              </span>
            </th>
            <th>
              Posted By
              <span className="sorting-arrows">
                <span className="arrow-up">▲</span>
                <span className="arrow-down">▼</span>
              </span>
            </th>
            <th>
              Action
              <span className="sorting-arrows">
                <span className="arrow-up">▲</span>
                <span className="arrow-down">▼</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Job 1</td>
            <td>5</td>
            <td>01/10/2024</td>
            <td>John Doe</td>
            <td>Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
