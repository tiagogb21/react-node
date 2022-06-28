import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        console.log(response.data);
      })
  },[]);
  return (
    <h1>Home</h1>
  )
}
