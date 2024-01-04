import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);

  useEffect(() => {
    fetchRandomQuote(); //?
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setCurrentQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
    }
  };

  const handleBookmark = () => {
    if (currentQuote && !bookmarkedQuotes.find(quote => quote._id === currentQuote._id)) {
      setBookmarkedQuotes(prevBookmarked => [...prevBookmarked, currentQuote]);
    }
  };

  return (
    <div>
      <div>
        {currentQuote && (
          <div>
            <h4 className="text-center pt-5">{currentQuote.content}</h4>
            <h4 className="text-center pt-5">- {currentQuote.author}</h4>
          </div>
        )}
      </div>

        <div class="btn-group position-absolute top-50 start-50 translate-middle" 
          role="group" aria-label="Basic outlined example">
          
          <button type="button" class="btn btn-outline-primary" onClick={fetchRandomQuote}>
          Generate Quote
          </button>

          <button type="button" class="btn btn-outline-primary" onClick={handleBookmark}>
          Bookmark
          </button>
        </div>
      

      <div className='position-absolute top-100 start-50 translate-middle'>        
        <h2>Bookmarked Quotes</h2>
        {bookmarkedQuotes.map((quote) => (
          <p key={quote._id}>
            <p>{quote.content}</p>
            <p>- {quote.author}</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default QuoteGenerator;
