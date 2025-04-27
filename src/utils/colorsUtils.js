const colours = [
    "bg-pastel-pink",
    "bg-pastel-blue",
    "bg-pastel-green",
    "bg-pastel-purple",
    "bg-pastel-yellow",
    "bg-pastel-mint",
    "bg-pastel-peach",
    "bg-pastel-lavender",
  ];
  
  export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  };
  