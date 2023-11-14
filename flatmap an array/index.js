// const a = [2, [4, 6], 5, 6, [1, 2, 3], [4, 76, 23, 1], [1]]

const flatmapArray = (list) => {
  let res = []
  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      res = [...res, ...list[i]]
      continue
    }
    res.push(list[i])
  }
  return res
}

// console.log(flatmapArray(a))
