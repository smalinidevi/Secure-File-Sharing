import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleUser.css'; // Import the CSS file
import Navbar from '../components/Navbar';

const RoleUser = () => {
  const navigate = useNavigate();

  // Prevent Back & Forward Navigation
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      navigate('/home', { replace: true }); // Redirect to home on back press
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleDownloadFile = () => {
    navigate('/filedownload'); // Navigate to download file page
  };

  const handleUploadFile = () => {
    navigate('/fileupload'); // Navigate to upload file page
  };

  const handleShareFile = () => {
    navigate('/fileshare'); // Navigate to share file page
  };

  const handleShowFile = () => {
    navigate('/SharedFile'); // Navigate to shared file page
  };

  return (
    <div><Navbar />
      <h1>User Options</h1>
      <button onClick={handleUploadFile}>Upload File</button>
      <button onClick={handleDownloadFile}>Download File</button>
      <button onClick={handleShareFile}>Share File</button>
      <button onClick={handleShowFile}>Shared File</button>
    </div>
  );
};

export default RoleUser;
