const generateColor = (r: number, g: number, b: number) => {
  return (opacity: number = 1) => {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
};

export default {
  green100: generateColor(73, 212, 132),
  blue100: generateColor(113, 154, 255),
  orange100: generateColor(255, 175, 56),
  purple100: generateColor(204, 105, 210),
  red100: generateColor(175, 7, 12),
  jennifer100: generateColor(145, 69, 218),

  gray0: generateColor(0, 0, 0),
  gray10: generateColor(28, 28, 28),
  gray20: generateColor(97, 97, 97),
  gray30: generateColor(218, 218, 218),
  gray40: generateColor(232, 232, 232),
};
