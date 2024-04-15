export const createShortDescription = text => {
  return text.split(' ').slice(0, 10).join(' ').concat(' ...');
};

export const createPrice = price => {
  return price.toString().concat('.00');
};
