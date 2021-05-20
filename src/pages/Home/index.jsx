import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'context/ThemeContext';
import Cookies from 'js-cookie';
import Url from 'components/Url';
import fetchPostBearer from 'fetch/FetchPostBearer';
import fetchGet from 'fetch/FetchGet';
import fetchDelete from 'fetch/FetchDelete';
import 'sass/centVh.scss';

const Home = () => {
  const {theme} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const isLog = useSelector((state) => state.ready);
  const moveOrRemove = useSelector((state) => state.show);
  const isSubmit = useSelector((state) => state.isPosted);
  const everyPosts = useSelector((state) => state.allPosted);
  const [postContent, setPostContent] = useState();
  const id = Cookies.get('userId');

  const data = {
    user: id,
    text: postContent,
  };

  const sendPost = (event) => {
    let finalUrl = Url() + '/posts';
    dispatch(fetchPostBearer(finalUrl, data, isSubmit));
    event.preventDefault()
  }

  const allPosts = () => {
    let finalUrl = Url() + '/posts?_limit=20&_sort=created_at:desc';
    dispatch(fetchGet(finalUrl));
  };

  const handleDelete = (postId) => {
    let finalUrl = Url() + `/posts/${postId}`;
    dispatch(fetchDelete(finalUrl, isSubmit));
  };

  useEffect(() => {
    allPosts();
  }, [isSubmit]);

  return (
    <div className={theme ? 'centVh light' : 'centVh dark'}>
      <h1>Welcome on My Social Network.</h1>
      <p>This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      {isLog && <form onSubmit={sendPost}>
        <label>
          Your Post :
          <input type="text" name="email" onChange={(event) => setPostContent(event.target.value)} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>}
      <h2>All POST</h2>
      <ul>
        {everyPosts && everyPosts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{isLog && <Link className={moveOrRemove ? (theme ? 'showMoves light' : 'showMoves dark') : (theme ? 'showRemoves light' : 'showRemoves dark')} to={`/user/${post.user.id}`}>{post.user.username}</Link>}</h3>
              <p>Post: {post.text}</p>
              <span>{isLog && <button className={moveOrRemove ? (theme ? 'showMoves light' : 'showMoves dark') : (theme ? 'showRemoves light' : 'showRemoves dark')} onClick={() => handleDelete(post.id)}>DELETE</button>}</span>
            </li>
          )
         })}
      </ul>
    </div>
  );
};

export default Home;