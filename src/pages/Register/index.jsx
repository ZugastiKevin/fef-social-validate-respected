import React, { useState, useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { useDispatch } from 'react-redux';
import fetchPost from 'fetch/FetchPost';
import Url from 'components/Url';
import 'sass/centVh.scss';

const Register = () => {
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);
  const [data, setData] = useState({
    username: '', email: '', password: '',
  });

  
  const fetchRegister = (e) => {
    let finalUrl = Url() + '/auth/local/register';
    e.preventDefault()
    dispatch(fetchPost(finalUrl, data));
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  };

  return (
    <div className={theme ? 'centVh light' : 'centVh dark'}>
      <form onSubmit={fetchRegister}>
        <label htmlFor='name'>
          Nom :
          <input type='text' name='username' onChange={handleChange} />
        </label>
        <label htmlFor='email'>
          email :
          <input type='email' name='email' onChange={handleChange} />
        </label>
        <label htmlFor='password'>
          password :
          <input type='password' name='password' onChange={handleChange} />
        </label>
        <input type='submit' value='Envoyer' />
      </form>
    </div>
  );
};

export default Register;