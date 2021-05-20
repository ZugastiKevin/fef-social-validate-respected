import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNewsFailure } from 'reduxx/Action';
import Url from 'components/Url';
import Cookies from 'js-cookie';

const User = () => {
  const dispatch = useDispatch();
  const cookie = Cookies.get('token');
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState();
  const [userPost, setUserPost] = useState();

  const fetchUserProfile = () => {
    fetch(Url() + `/users/${id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${cookie}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchNewsFailure(response.message));
        } else {
          setUserProfile(response);
        }
      });
  };

  const fetchUserPost = () => {
    fetch(Url() + `/posts?user.id=${id}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${cookie}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchNewsFailure(response.message));
        } else {
          setUserPost(response);
        }
      });
  };

  useEffect(() => {
    fetchUserProfile();
    fetchUserPost();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
        {userProfile && <p>{userProfile.username}</p>}
        {userProfile && <p>{userProfile.email}</p>}
        {userProfile && <p>{userProfile.description}</p>}
      <h2>User Posts</h2>
      <ul>
        {userPost && userPost.map((post) => {
          return ( 
          <li key={post.id}>
            <p>{post.text}</p>
          </li>
          )
        })}
      </ul>
    </div>

  );
};

export default User;