import hexRgb from 'hex-rgb';

// Decimeters to Centimeters converter
export const dm2cmConverter = (decimeterValue) => {
  const centimeterValue = decimeterValue * 10;
  return centimeterValue;
};

// Hectogram to Kilogram converter
export const hg2kgConverter = (hgValue) => {
  const kgValue = hgValue / 10;
  return kgValue;
};

// Hex to RGBA converter
export const hex2rgba = (hex = '#fff') => {
  const { red, blue, green, alpha } = hexRgb(hex, { alpha: 0.75 });
  const rgba = `rgba(${red},${green},${blue},${alpha})`;
  return rgba;
};
