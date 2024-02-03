import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import getRandomColor from '../styles/const/getRandomColor'
import useFetchData from '../api/fetchData'
import $ from 'jquery'

function Quote(props) {

  const [fetchTrigger, setFetchTrigger] = useState(false)
  const {data, isLoading, error, fetchData } = useFetchData(fetchTrigger)

  const handleNewQuote = () => {
    $('p, cite').fadeOut(600, function() {
      fetchData();
      getRandomColor();
      setTimeout(() => {
        $(this).fadeIn(600);
      }, 200);
    });
  }

  if (error) return <div>Error: {error.message}</div>

  return (
    <div id="quote-box" className="card p-4" style={{ width: '30rem' }}>
      <div id="card-body" className="card-body">
        <blockquote className="text-end">
          <p id="text" className="card-text text-center fs-2">
            <i id="quote_icon" className="fas fa-quote-left" />
            {' '}{data.content}
          </p>
          <cite id="author">- {data.author}</cite>
        </blockquote>
        <div className="d-flex flex-row justify-content-between align-items-end">
          <div className="d-flex justify-content-between mt-3 align-items-center">
            <a
              id="tweet-quote"
              className="col-md-4 d-flex justify-content-center align-items-center"
              target="_blank"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(data.content + '" - ' + data.author)}`}
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              id="github"
              className="col-md-4 d-flex justify-content-center align-items-center"
              href="https://github.com/PinkBlure?tab=overview&from=2024-01-01&to=2024-01-26"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
          </div>
          <button id="new-quote" className="col-md-4" onClick={handleNewQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quote
