export const castArrayToString = (array = []) => {
  return array?.reduce((prev, item) => {
    if (item?.length === 1) return prev + item[0];
    if (item?.length === 0) return prev + "_";
    if (item?.length > 1) return prev + "?";
  }, "");
};
