const importImage = (imageName) => {
    const images = require.context('./../../images/', false, /\.(png|jpe?g|svg)$/);
    return images(`./${imageName}`).default;
  };
  
  export default importImage;