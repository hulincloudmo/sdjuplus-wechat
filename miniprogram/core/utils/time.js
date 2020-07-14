function nowMonth () {
  return new Date().getMonth() + 1;
}

function nowDay () {
  return new Date().getDay();
}

export {
  nowDay,
  nowMonth
};
