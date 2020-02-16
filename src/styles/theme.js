import tinycolor from 'tinycolor2';

export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();

export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {
  mainColor: '#0457A0',
  contentColor: '#555',
};

export default theme;
