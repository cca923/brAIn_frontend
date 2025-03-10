export const idFormatter = (arr) => {
  return arr.map((item) => {
    if (item?._id) {
      const { _id, ...rest } = item;
      return { id: _id, ...rest };
    }
    return item;
  });
};
