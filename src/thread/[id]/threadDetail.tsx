import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ThreadDetail = () => {
  const { threadId } = useParams();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/pots`);
        if (!response.ok) {
          throw new Error('Failed to fetch thread');
        }
        const data = await response.json();
        setThread(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchThread();
  }, [threadId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{thread.title}</h1>
      <p></p> {/* Assuming 'content' is a field in the thread data */}
    </div>
  );
};

export default ThreadDetail;
