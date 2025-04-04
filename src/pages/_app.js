import React from 'react';
import '../app/globals.css';

function ErrorFallback() {
  return (
    <div role="alert" style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #f5c6cb',
      borderRadius: '5px',
      color: '#721c24',
      backgroundColor: '#f8d7da',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '10px' }}>Something went wrong</h2>
      <a href="/" style={{
        display: 'inline-block',
        padding: '8px 16px',
        marginTop: '10px',
        backgroundColor: '#31C1BF',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        Return to Home
      </a>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp; 