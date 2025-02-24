import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import FoldersStyles from './css/Folders.module.css';

const Folders = () => {
  return (
    <div className={FoldersStyles["folders-container"]}>
      <div className={FoldersStyles.folder}>
        <h3>Default Folder</h3>
        <p>Default folder contains the list of all the candidates from the organization, and cannot be deleted</p>
        <div className={FoldersStyles["folder-footer"]}>
          <span>309 Candidates</span>
        </div>
      </div>
      <div className={FoldersStyles.folder}>
        <h3>Employee Referral</h3>
        <p>Employee Referral contains the list of all the candidates referred through email</p>
        <div className={FoldersStyles["folder-footer"]}>
          <span>309 Candidates</span>
        </div>
      </div>
      <div className={FoldersStyles.folder}>
        <h3>Telecallers</h3>
        <p>Experience and freshers</p>
        <div className={FoldersStyles["folder-footer"]}>
          <span>309 Candidates</span>
        </div>
      </div>
      <div className={FoldersStyles.folder}>
        <h3>Bookmarks</h3>
        <p>Which you bookmarked</p>
        <div className={FoldersStyles["folder-footer"]}>
          <span>309 Candidates</span>
        </div>
      </div>
      <div className={FoldersStyles["add-folder"]}>
        <AddIcon className={FoldersStyles["add-icon"]} />
        <h3>Add Folder</h3>
      </div>
    </div>
  );
};

export default Folders;
