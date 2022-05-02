import React,{useState, useEffect} from 'react';
import './App.scss';

let quotesLink= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState("What is dead may never die");
  const [author, setAuthor] = useState("Iron Born");
  const [quotesArray, setQuotesArray] = useState([]);

  const fetchQuotes = async (link) =>{
    const response = await fetch(link);
    const parsed = await response.json();
    setQuotesArray(parsed.quotes)
  } 

  useEffect(()=>{
    fetchQuotes(quotesLink);
  });
  
  function getNewQuote(){
    let quoteIndex = Math.floor(Math.random() * quotesArray.length);
    setAuthor(quotesArray[quoteIndex].author);
    setQuote(quotesArray[quoteIndex].quote);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id= "quote-box">
        <div id="text">"{quote}"</div>
        <div id="author">- {author}</div>
        <button id="new-quote" onClick={()=> getNewQuote()}>New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
