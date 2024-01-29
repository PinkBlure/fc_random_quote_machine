import React from 'react'
import '../styles/styles.css'
import $ from 'jquery'
import getRandomColor from '../styles/const/getRandomColor';

$(document).ready(function () {
  $('#new-quote').click(function () {
    console.log('hola')
    getRandomColor();
    // setTimeout(function() {
    //   updateQuote(store.dispatch);
    // }, 400);
  });
});

function Quote(props) {
  return (
    <div id="quote-box" className="card p-4" style={{ width: '30rem' }}>
      <div className="card-body">
        <blockquote className="text-end">
          <p id="text" className="card-text text-center fs-2">
            <i id="quote_icon" className="fas fa-quote-left" /> Hola soy una
            quote
          </p>
          <cite id="author">- Este es el autor de la cita</cite>
        </blockquote>
        <div className="d-flex flex-row justify-content-between align-items-end">
          <div className="d-flex justify-content-between mt-3 align-items-center">
            <a
              id="tweet-quote"
              className="col-md-4 d-flex justify-content-center align-items-center"
              target="_blank"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent('quote' + '" - ' + 'author')}`}
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
          <button id="new-quote" className="col-md-4">
            New quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quote
