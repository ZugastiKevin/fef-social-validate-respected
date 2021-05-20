import React, { useState, useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchPost from 'fetch/FetchPost';
import Url from 'components/Url';
import 'sass/centVh.scss';

const Login = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push('/');
  };

  return (
    <div className={theme ? 'centVh light' : 'centVh dark'}>
      <form onSubmit={fetchLogin}>
        <label>
          email :
          <input type="email" name="email" onChange={(event) => setUserEmail(event.target.value)} />
        </label>
        <label>
          password :
          <input type="password" name="password" onChange={(event) => setUserPassword(event.target.value)} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Login;