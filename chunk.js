const chunkArray = (arr, len) => {
  const chunkedArr = [];

  for (const e of arr) {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || (last.length === len)) chunkedArr.push([e]);
    else last.push(e);
  }

  return chunkedArr;
};

module.exports = chunkArray;