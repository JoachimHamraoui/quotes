export const getQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    const quoteObj = data[0];
    return { content: quoteObj.content, author: quoteObj.author };
  } catch (error) {
    console.error(error);
    return { content: "Error fetching quote.", author: "Unknown" };
  }
};
