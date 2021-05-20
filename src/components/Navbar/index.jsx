import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsSuccess } from 'reduxx/Action';
import Cookies from 'js-cookie';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLog = useSelector((state) => state.ready);
  const handleLogOut = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    dispatch(fetchNewsSuccess(false));
    history.push('/');
  };

  return(
    <div >
      <nav >
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log in</Link>
        <Link to="/profile">My profil</Link>
        {isLog && <button onClick={handleLogOut}>Log Out</button>}
      </nav>
    </div>
  )
};

export default Navbar;