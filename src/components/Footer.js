import { useEffect } from 'react';

export default function Footer({ scripts }) {
  useEffect(() => {
    const scriptElements = [];

    scripts.forEach((url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      scriptElements.push(script);
    });

    return () => {
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, [scripts]);

  return null;
}