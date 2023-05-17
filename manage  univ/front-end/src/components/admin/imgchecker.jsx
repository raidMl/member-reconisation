import React from 'react';

const ImageChecker = ({ imagePath }) => {
  const handleImageError = () => {
    console.log('Image does not exist');
  };

  return (
    <img
      src={imagePath}
      onError={handleImageError}
      alt="Image"
      height="60px"
      width="60px"
    />
  );
};

export default ImageChecker;
