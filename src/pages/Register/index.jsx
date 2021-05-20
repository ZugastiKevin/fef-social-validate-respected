import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPost from 'fetch/FetchPost';
import Url from 'components/Url';

const Register = () => {
  const dispatch = useDispatch();
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
  );
};

export default Register;