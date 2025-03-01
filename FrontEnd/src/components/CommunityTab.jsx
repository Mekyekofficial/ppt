import React, {useState, useEffect} from 'react';
import CommunityTabStyles from './css/CommunityTab.module.css';
import CommunityBanner from './Community/CommunityBanner';
import DiscoverGroups from './Community/DiscoverGroups';
import CommunitySuggestions from './Community/CommunitySuggestions';
import CommunityYour from './Community/CommunityYour';
import ComunitySearchBar from './Community/ComunitySearchBar';
import API from '../api';

const CommunityTab = () => {
  const [communities, setCommunities] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [yourCommunities, setYourCommunities] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    setUserInfo(userInfo);

    const fetchYourCommunities = async () => {
      const response = await API.get(`/comunity/getWithUserId?_id=${userInfo._id}`);
      setYourCommunities(response.data);
    }
    fetchYourCommunities();
  }, []);

  return (
    <div className={CommunityTabStyles["community-section"]}>
      <div className={CommunityTabStyles["left-sidebar"]}>

      </div>
      <div className={CommunityTabStyles["main-content"]}>
        <ComunitySearchBar />
        <CommunityYour communityList={yourCommunities}/>
      </div>
      <div className={CommunityTabStyles["right-sidebar"]}>

      </div>
    </div>
  );
};

export default CommunityTab;
