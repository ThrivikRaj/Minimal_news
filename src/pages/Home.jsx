import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        'https://gnews.io/api/v4/top-headlines?token=YOUR_API_KEY&lang=en'
      );
      const data = await response.json();
      setNews(data.articles || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    
    // Refresh news every 15 minutes (900,000 milliseconds)
    const interval = setInterval(fetchNews, 900000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      padding: '40px 24px',
      backgroundColor: '#f7f7f7',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        margin: '0 0 48px',
        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
        fontSize: '40px',
        fontWeight: '600',
        letterSpacing: '-0.5px',
        color: '#1d1d1f'
      }}>
        Minimal News
      </h1>

      {loading ? (
        <p style={{ 
          textAlign: 'center',
          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '18px',
          color: '#86868b'
        }}>Loading...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;