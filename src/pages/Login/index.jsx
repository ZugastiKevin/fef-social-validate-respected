import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPost from 'fetch/FetchPost';
import Url from 'components/Url';

const Login = () => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const data = {
    identifier: userEmail,
    password: userPassword,
  }

  
  const fetchLogin = (e) => {
    e.preventDefault()
    let finalUrl = Url() + '/auth/local';
    dispatch(fetchPost(finalUrl, data));
  };

  return (
    <form onSubmit={fetchLogin}>
      <label>
        email :
        <input type="email" name="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} />
      </label>
      <label>
        password :
        <input type="password" name="password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default Login;