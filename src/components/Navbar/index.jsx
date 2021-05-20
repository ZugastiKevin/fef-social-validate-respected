import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from 'context/ThemeContext';
import Cookies from 'js-cookie';
import './navbar.scss';
import { fetchNewsSuccess, setMoveOrRemove} from 'reduxx/Action';

const Navbar = () => {
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);
  const isLog = useSelector((state) => state.ready);
  const moveOrRemove = useSelector((state) => state.show);

  const handleLogOut = () => {
    dispatch(setMoveOrRemove(true));
    setInterval(function(){
      Cookies.remove('token');
      Cookies.remove('userId');
      dispatch(fetchNewsSuccess(false));
      document.location.reload();
    }, 1500);
    dispatch(setMoveOrRemove(false));
  };

  return(
    <div className={theme ? 'navbar light' : 'navbar dark'}>
      <nav className={theme ? 'navbar light sidenav' : 'navbar dark sidenav'}>
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log in</Link>
        {isLog && <Link className={moveOrRemove ? (theme ? 'showMove light' : 'showMove dark') : (theme ? 'showRemove light' : 'showRemove dark')} to="/profile">My profil</Link>}
        {isLog && <Link className={moveOrRemove ? (theme ? 'showMove light' : 'showMove dark') : (theme ? 'showRemove light' : 'showRemove dark')} to="" onClick={handleLogOut}>Log Out</Link>}
      </nav>
    </div>
  )
};

export default Navbar;