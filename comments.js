//Create web server
const express = require('express');
const app = express();

//Get comments
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { id: 1, author: 'John', body: 'Hello everyone!' },
      { id: 2, author: 'Jane', body: 'How are you?' }
    ]
  });
});

//Start server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
// Path: index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
// Path: App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/comments')
      .then(res => res.json())
      .then(data => setComments(data.comments));
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//Run the server
//To run the server, execute the following command in the terminal:

node comments.js
//Run the client
//To run the client, execute the following command in the terminal:

npm start
//Now the client is running on http://localhost:3000 and fetching data from the server running on http://localhost:3001.

//Summary
//In this tutorial, we have learned how to fetch data from a server in a React application using the fetch API.
//We have created a simple server using Express.js to serve comments data and a React application to fetch and display the comments.
//We used the useEffect hook to fetch data from the server when the component mounts.
//We displayed the comments data using the map() function to render a list of comments.