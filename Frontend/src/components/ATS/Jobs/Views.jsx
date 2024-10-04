import React, {useState} from 'react';
import { IoOptionsOutline } from "react-icons/io5";
import './css/Views.css';

const Views = ({ setView }) => {
  const [showViews, setShowViews] = useState(false);
  const toggleViews = () => {
    setShowViews(!showViews);
  };
  return (
    <div className="views">
      <button className="toggle-button" onClick={toggleViews}>
        <IoOptionsOutline className='view-icon'/>
        Views
      </button>
      {showViews && (
        <div className="popup views-popup">
          <h3>Views</h3>
          <div className="view-options">
            View as:
            <div className="view-button">
              <button onClick={() => setView('table')}>Table</button>
              <button onClick={() => setView('card')}>Cards</button>
            </div>
          </div>
          <div className="custom-columns">
            <p>Customized columns (Choose any 3):</p>
            <button>Applicants</button>
            <button>Posted On</button>
            <button>Posted By</button>
            <br/>
            <button>+ Updated</button>
            <button>+ Qualified</button>
            <button>+ Screening</button>
            <button>+ Hired</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Views;
