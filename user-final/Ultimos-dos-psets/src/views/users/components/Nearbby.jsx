import React, { useState } from "react";
import { Message } from "./message";
import { NearbyyClient } from "@nearbyy/core";

const client = new NearbyyClient({
  API_KEY: import.meta.env.VITE_NEARBYY_API_KEY,
});

function Nearbby() {
  const [isLoading, setIsLoading] = useState(false); // loading state
  const [messages, setMessages] = useState([]); // the array of messages
  const [currentMessage, setCurrentMessage] = useState(""); // the user's input state when typing a message
  const [fileUrl, setFileUrl] = useState(""); // state to hold the file

  function handleSend() {
    // Add the currentMessage to the messages array immediately after the user sends the message
    const updatedMessages = [...messages, currentMessage]; // Prepare the new messages array

    setCurrentMessage("");
    setIsLoading(true);

    fetch(`http://localhost:4000/chat?message=${currentMessage}`)
      .then((res) => res.text())
      .then((answer) => {
        setMessages([...updatedMessages, answer]); // Update the message list including the response
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setIsLoading(false);
      });
  }

  async function uploadFile() {
    setIsLoading(true);
    try {
      const { success, error, data } = await client.uploadFiles({
        fileUrls: [fileUrl] // Uses state for the file URL
      });

      if (success) {
        console.log("File uploaded successfully:", data);
        alert("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", error);
        alert("Error uploading file: " + error);
      }
    } catch (err) {
      console.error("Error in uploading file:", err);
      alert("Exception when uploading file: " + err.message);
    }
    setIsLoading(false);
  }


  return (
    <div>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Need more context?</h1>
      <div>
        {messages.map((message, index) => (
          <Message key={index} type={index % 2 === 0 ? "User" : "OpenAI"}>
            {message}
          </Message>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send message</button>
      <div>
        <input 
          type="text" 
          value={fileUrl} 
          onChange={(e) => setFileUrl(e.target.value)} 
          placeholder="Enter file URL" 
        />
        <button onClick={uploadFile}>Upload File</button>
      </div>
    </div>
  );
}

export default Nearbby;
