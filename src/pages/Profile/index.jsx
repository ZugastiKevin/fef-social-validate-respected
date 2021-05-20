import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Url from 'components/Url';
import fetchGetBearer from 'fetch/FetchGetBearer';
import fetchPutBearer from 'fetch/FetchPutBearer';
import Cookies from 'js-cookie';

const Profile = () => {
  const cookie = Cookies.get("token");
  const dispatch = useDispatch();
  const switchingProfile = true;
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const currentUser= useSelector((state) => state.getCurrent);
  const infoUser = useSelector((state) => state.info);

  const allsData = {
    username: userName,
    description: userDescription,
  };

  const findProfile = () => {
    let finalUrl = Url() + '/users/me';
    dispatch(fetchGetBearer(finalUrl, switchingProfile, cookie));
  };

  useEffect(() => {
    findProfile();
  }, [currentUser]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let finalUrl = Url() + '/users/me';
    dispatch(fetchPutBearer(finalUrl, allsData, cookie));
  };
  return (
    <div>
      {infoUser && infoUser}
      <h2>Update your Profile</h2>
      <form onSubmit={handleUpdate}>
        <label>
          name :
          <input type="text" name="name" value={userName} onChange={(event) => setUserName(event.target.value)} />
        </label>
        <label>
          description :
          <input type="text" name="description" value={userDescription} onChange={(event) => setUserDescription(event.target.value)} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Profile;