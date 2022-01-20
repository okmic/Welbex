import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <div key={post.id}>
          <li className='list-group-item'>
            {post.date}
          </li>
          <li className='list-group-item'>
            {post.title}
          </li>
          <li className='list-group-item'>
            {post.amount}
          </li>
          <li className='list-group-item'>
            {post.distance}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
