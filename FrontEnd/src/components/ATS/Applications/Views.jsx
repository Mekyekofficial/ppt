import React, {useState} from 'react';
import { IoOptionsOutline } from "react-icons/io5";
import ViewsStyles from './css/Views.module.css';

const Views = ({ setView }) => {
  const [showViews, setShowViews] = useState(false);
  const toggleViews = () => {
    setShowViews(!showViews);
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
