function NewsCard({ article }) {
    return (
      <div
        style={{
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        }}
      >
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: '100%',
              height: '160px',
              objectFit: 'cover'
            }}
          />
        )}
        <div style={{ 
          padding: '20px', 
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '12px',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
            lineHeight: '1.3',
            color: '#1d1d1f'
          }}>
            {article.title?.length > 80 
              ? article.title.slice(0, 80) + '...'
              : article.title}
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#86868b',
            margin: '0 0 12px',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
            lineHeight: '1.4',
            flexGrow: 1
          }}>
            {article.description
              ? article.description.length > 120
                ? article.description.slice(0, 120) + '...'
                : article.description
              : 'No description available.'}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px',
              textDecoration: 'none',
              color: '#0066CC',
              fontWeight: '500',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            Read more
            <span style={{ marginLeft: '4px' }}>→</span>
          </a>
        </div>
      </div>
    );
  }
  
  export default NewsCard;