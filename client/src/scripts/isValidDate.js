const isValidDate = (date) => {
  const matches = /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/.exec(date);
  if (matches == null) return false;
  return true;
};

export default isValidDate;
