
import React from 'react';

export default function DownloadCV({ url }) {
  function handleDownloadClick() {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split(/[\\//]/).pop()
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="header-buttons">
      <button onClick={handleDownloadClick}  className="btn btn-primary btn-outline-secondary">Download CV</button>
    </div>
  );
}
