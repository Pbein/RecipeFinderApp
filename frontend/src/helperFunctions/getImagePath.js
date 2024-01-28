const images = import.meta.globEager('../assets/FoodImages/*.png');

export function getImagePath(imageName) {
  const imagePath = images[`../assets/FoodImages/${imageName}`];
  return imagePath ? imagePath.default : null;
}