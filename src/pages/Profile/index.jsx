import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Url from 'components/Url';
import fetchGetBearer from 'fetch/FetchGetBearer';
import fetchPutBearer from 'fetch/FetchPutBearer';
import Cookies from 'js-cookie';

const Profile = () => {
  const history = useHistory();
  const cookie = Cookies.get("token");
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch();
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
    dispatch(fetchGetBearer(finalUrl, cookie));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let finalUrl = Url() + '/users/me';
    dispatch(fetchPutBearer(finalUrl, allsData, cookie));
    reload();
  };

  const reload = () => {
    setInterval(function(){
      document.location.reload();
    }, 100);
  };

  useEffect(() => {
    findProfile();
  }, [currentUser]);

  return (
    <div className={theme ? 'centVh light' : 'centVh dark'}>
      <h1>Your Profile</h1>
      {infoUser && <p>{infoUser.username}</p>}
      {infoUser && <p>{infoUser.email}</p>}
      {infoUser && <p>{infoUser.description}</p>}
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