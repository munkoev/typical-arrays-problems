
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length>0 ) {
      let sorted = array.sort((a,b) => {
          return a-b;
      })
      return sorted[0]
  } else {
      return 0;
  }
}

exports.max = function max (array) {
    if (typeof array !== 'undefined' && array.length>0) {
        let sorted = array.sort((a,b) => {
            return a-b;
        })
        return sorted[sorted.length-1]
    } else {
        return +0;
    }
}

exports.avg = function avg (array) {
    if (typeof array !== 'undefined' && array.length>0) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer,0) / array.length;
    } else {
        return 0;
    }
}
