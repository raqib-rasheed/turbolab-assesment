const map = (input) => {
  return input.reduce((acc, currentEntry) => {
    const rootKey =
      currentEntry && currentEntry.name ? currentEntry.name : "misc";
    const innerKey =
      currentEntry && currentEntry.type ? currentEntry.type : "all";
    const values = currentEntry && currentEntry.value ? currentEntry.value : [];
    if (acc.hasOwnProperty(rootKey)) {
      if (acc[rootKey].hasOwnProperty(innerKey)) {
        acc[rootKey][innerKey] = [...acc[rootKey][innerKey], ...values];
      } else {
        acc[rootKey][innerKey] = values;
      }
    } else {
      acc[rootKey] = {
        [innerKey]: values,
      };
    }
    return acc;
  }, {});
};

module.exports = map;
