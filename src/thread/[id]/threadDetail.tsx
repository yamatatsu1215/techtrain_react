import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/thread.css';

const ThreadDetail = () => {
  const { threadId } = useParams();
  const [thread, setThread] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {

    const fetchThread = async () => {
      try {
        // Assuming you have another endpoint to fetch the thread detail
        const threadResponse = await fetch(`https://railway.bulletinboard.techtrain.dev/threads`);
        if (!threadResponse.ok) {
          throw new Error('Failed to fetch thread');
        }
        const threadData = await threadResponse.json();
        const threadDetail = threadData.find(thread => thread.id === threadId);
        setThread(threadDetail);

        const postResponse = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts?offset=0`);
        if (!postResponse.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postData = await postResponse.json();
        setPosts(postData.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchThread();
  }, [threadId]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: newPost }),
      });
      if (!response.ok) {
        throw new Error('Failed new error');
      }
      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, data]); 
      setNewPost("");
    } catch (error) {
      setError(error.message);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='thread'>
      <h1>スレッド内投稿一覧</h1>
      <h2>{thread.title}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className='post'>{post.post}</li>
        ))}
      </ul>
      <form onSubmit={handlePostSubmit} className='form'>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button type='submit'>投稿</button>
      </form>
    </div>
  );
};

export default ThreadDetail;
