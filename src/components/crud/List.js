import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import DeleteItem from './Delete';
import checkAuth from '../auth/checkAuth';
import { NavLink } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useRef(null);

  useEffect(() => {
    navigate.current = (path) => {
      window.location.href = path;
    };
  }, []);

  return navigate.current;
};

function Lists() {
  const user = useSelector(store => store.auth.user);
  const navigate = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiUrl = keyword ? `https://medicalstore.mashupstack.com/api/medicine/search?keyword=${keyword}` : 'https://medicalstore.mashupstack.com/api/medicine';
        const response = await axios.get(apiUrl, {
          headers: { "Authorization": "Bearer " + user?.token },
        });
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.token, keyword]);

  // const handleSearch = () => {
  //   navigate(`/?keyword=${keyword}`);
  // };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='background-image'></div>
        <div className='man'>
          <div className="row">
            <div className="col-8 offset-2">
            <h1 className='text-center'>{keyword ? `Search Results for: ${keyword}` : 'MEDICINES'}</h1>
              <div style={{display:"flex"}}>
                <NavLink to="/crud/posts/create" className='btn btn-success  float-left mr-5' style={{ width:'25%', height:'40px'}}>Add Medicine</NavLink>
              <div className="input-group mb-3 ml-auto" style={{ width:'50%'}}>
                <input
                  type="text" 
                  className="form-control "
                  placeholder="Search..."
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                />
                {/* <div className="input-group-append">
                  <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
                </div> */}
              </div></div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className='mt-5'>
                  {posts.map(post => (
                    <DeleteItem key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(Lists);
