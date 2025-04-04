import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the app directory's index page
    router.push('/');
  }, []);
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>Loading...</h1>
      <p>Redirecting to main page</p>
    </div>
  );
} 