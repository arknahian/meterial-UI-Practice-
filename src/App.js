import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './Components/News/News';


function App() {
    const [articles, setArticles] = useState([]);
    useEffect (() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=dd096b29ee064feb870869011ca1e5cd')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
    },[])
  return (
    <div>
      <h2>total length: {articles.length} </h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
    
  );
}

export default App;
