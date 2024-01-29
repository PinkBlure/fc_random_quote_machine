async function updateQuote(dispatch) {
  try {
    const response = await fetch('https://api.quotable.io/random')
    if (!response.ok) {
      throw new Error(`Error fetching quote. Status code: ${response.status}`)
    }
    const data = await response.json()
    dispatch(
    //   updateQuoteData({
    //     color: '#f4f4f4',
    //     quote: data.content,
    //     author: data.author,
    //   }),
    )
  } catch (error) {
    console.error('An error occurred during the quote update:', error)
  }
}
