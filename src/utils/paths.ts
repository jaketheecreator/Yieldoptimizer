/**
 * Helper function to ensure consistent image paths between development and production
 */
export function imagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Encode spaces and special characters in the path
  const encodedPath = encodeURIComponent(cleanPath);
  
  // In Next.js, we can access environment variables directly without process.env
  // This avoids TypeScript errors
  const baseUrl = '';
  
  // Return complete path
  return `${baseUrl}/${encodedPath}`;
} 