import React from "react"
import updateQuoteData from "../redux/action"

async function updateQuote(dispatch) {
  try {
    const response = await fetch('https://api.quotable.io/random')
    if (!response.ok) {
      throw new Error(`Error fetching quote. Status code: ${response.status}`)
    }
    const data = await response.json()
    dispatch(
      console.log('wenas'),
      updateQuoteData({
        quote: data.content,
        author: data.author,
      }),
    )
  } catch (error) {
    console.error('An error occurred during the quote update:', error)
  }
}

export default updateQuote
