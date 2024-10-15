import React from 'react';
import TableViewStyles from './css/TableView.module.css';

const TableView = () => {
  return (
    <div className={TableViewStyles["table-view"]}>
      <table>
        <thead>
          <tr>
            <th>
              <span className={TableViewStyles['th-name']}>Title</span>
              <span className={TableViewStyles["sorting-arrows"]}>
                <span className={TableViewStyles["arrow-up"]}>▲</span>
                <span className={TableViewStyles["arrow-down"]}>▼</span>
              </span>
            </th>
            <th>
              Applicants
              <span className={TableViewStyles["sorting-arrows"]}>
                <span className={TableViewStyles["arrow-up"]}>▲</span>
                <span className={TableViewStyles["arrow-down"]}>▼</span>
              </span>
            </th>
            <th>
              Posted On
              <span className={TableViewStyles["sorting-arrows"]}>
                <span className={TableViewStyles["arrow-up"]}>▲</span>
                <span className={TableViewStyles["arrow-down"]}>▼</span>
              </span>
            </th>
            <th>
              Posted By
              <span className={TableViewStyles["sorting-arrows"]}>
                <span className={TableViewStyles["arrow-up"]}>▲</span>
                <span className={TableViewStyles["arrow-down"]}>▼</span>
              </span>
            </th>
            <th>
              Action
              <span className={TableViewStyles["sorting-arrows"]}>
                <span className={TableViewStyles["arrow-up"]}>▲</span>
                <span className={TableViewStyles["arrow-down"]}>▼</span>
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
