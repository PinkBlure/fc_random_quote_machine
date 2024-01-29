import React from "react"
import updateQuoteData from "./action"

const initialState = {
  quote: 'Hit the "New quote" button to get a new quote!',
  author: 'Creator of this random Quote Machine'
}

const updateQuoteReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'UPDATE':
    return {
      ...state,
      quote: action.data.quote,
      author: action.data.author
    }
  default:
    return state
  }
}

export default updateQuoteReducer