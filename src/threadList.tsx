import React, { useEffect, useState } from "react";

const ThreadList = () => {
    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads');
                const data = await response.json();
                setThreads(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        };

        fetchThreads();
    }, []);
    if(loading) {
        return<p>Loading...</p>;
    }

    return (
        <div>
            <h1>新着スレッド</h1>
            <ul>
                {threads.map((thread) => (
                    <li key={thread.id}>
                        <h2>{thread.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThreadList;