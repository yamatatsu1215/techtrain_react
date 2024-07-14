import { Box, Input, Button } from "@yamada-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateThread = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleThread = async (event) => {
    event.preventDefault();

    const requestData = {
        title: title
    };

    const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(requestData)
    });
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert('Thread created!');
      navigate("/threadlist");
    }
  };

  return (
    <Box>
      <h1>スレッド作成</h1>
      <form onSubmit={handleThread}>
        <Input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit">新規登録</Button>
      </form>
    </Box>
  );
}

export default CreateThread;
