export const createShortDescription = text => {
  return text.split(' ').slice(0, 8).join(' ').concat(' ...');
};

export const createShorterTitle = title => {
  return title.split(' ').slice(0, 4).join(' ');
};

export const createPrice = price => {
  return price.toString().concat('.00');
};

export const checkDetailsInfo = (key, value) => {
  if (key === 'transmission' || key === 'engine') {
    return `${value}`;
  } else if (
    key === 'airConditioner' ||
    key === 'kitchen' ||
    key === 'CD' ||
    key === 'freezer'
  ) {
    return `${key}`;
  } else {
    return `${value} ${key}`;
  }
};
