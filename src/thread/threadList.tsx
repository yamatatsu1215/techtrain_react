import { Box, Link } from "@yamada-ui/react";
import React, { useEffect, useState } from "react";
import './css/threadlist.css';

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
        <Box w={1000} maxWidth='80%'>
            <Box m='0 auto' w={500} h={"auto"}>
                <h1 className="threadlist">新着スレッド</h1>
                <ul>
                    {threads.map((thread) => (
                        <Link key={thread.id} href={`/threads/${thread.id}`}>
                        <li key={thread.id} className="list">
                            <h2>{thread.title}</h2>
                        </li>
                        </Link>
                    ))}
                </ul>
                <Link href="/threads/new">新規作成へ</Link>
            </Box>
        </Box>
    );
};

export default ThreadList;