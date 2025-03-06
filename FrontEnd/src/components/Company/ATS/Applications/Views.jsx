import React, {useState} from 'react';
import { IoOptionsOutline } from "react-icons/io5";
import ViewsStyles from './css/Views.module.css';

const allColumns = [
  "Applicant",
  "Apply For",
  "Job location",
  "Status",
  "Applied On",
  "Email",
  "Applicant Location",
];

const Views = ({ setView, selectedColumns, setSelectedColumns }) => {
  const [showViews, setShowViews] = useState(false);
  const toggleViews = () => {
    setShowViews(!showViews);
  };
  // Function to remove column (clicked above <br>)
  const removeColumn = (column) => {
    setSelectedColumns(selectedColumns.filter((col) => col !== column));
  };

  // Function to add column (clicked below <br>)
  const addColumn = (column) => {
    if (!selectedColumns.includes(column)) {
      setSelectedColumns([...selectedColumns, column]);
    }
  };
  return (
    <div className={ViewsStyles.views}>
      <button className={ViewsStyles["toggle-button"]} onClick={toggleViews}>
        <IoOptionsOutline className={ViewsStyles['view-icon']}/>
        Views
      </button>
      {showViews && (
        <div className={`${ViewsStyles.popup} ${ViewsStyles["views-popup"]}`}>
          <h3>Views</h3>
          <div className={ViewsStyles["view-options"]}>
            View as:
            <div className={ViewsStyles["view-button"]}>
              <button onClick={() => setView('table')}>Table</button>
              <button onClick={() => setView('card')}>Cards</button>
            </div>
          </div>
          <div className={ViewsStyles["custom-columns"]}>
            <p>Customized columns (Choose any 3):</p>
            {selectedColumns.map((column) => (
              <button key={column} onClick={() => removeColumn(column)}>
                {column}
              </button>
            ))}
            <br />
            {allColumns
              .filter((col) => !selectedColumns.includes(col))
              .map((column) => (
                <button key={column} onClick={() => addColumn(column)}>
                  + {column}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Views;
