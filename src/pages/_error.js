function Error({ statusCode }) {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '1rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
      <a 
        href="/"
        style={{
          backgroundColor: '#31C1BF',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: '500'
        }}
      >
        Return to Home
      </a>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error 