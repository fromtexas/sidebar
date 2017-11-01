export const get = () => {
  const url = 'http://homework.connectia.com/api/product/list?limit=100';
  return (
    fetch(url)
    .then((res) => res.json())
);
};

export const search = (searchVal) => {
  const url = `http://homework.connectia.com/api/product/list?filter=${searchVal}&limit=100`;
  return (
    fetch(url)
    .then((res) => res.json())
  );
};
