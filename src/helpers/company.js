module.exports.getEuropeProductDetail = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ highest: 4785, lowest: 1829});
    }, 5000)
  })
}

module.exports.getAsiaProductDetail = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ highest: 456, lowest: 234});
    }, 8000)
  })
}

