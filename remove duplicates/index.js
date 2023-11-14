const a = [2, 4, 2, 5, 7, 4, 9]

// using Set function
const removeDuplicates = (list) => {
  return [...new Set(list)]
}

// using object
const removeDuplicates = (list) => {
  const obj = {}
  const res = []

  for (let i = 0; i < list.length; i++) {
    if (obj[list[i]] !== undefined) {
      continue
    }
    obj[list[i]] = true
    res.push(list[i])
  }
  return res
}


console.log(removeDuplicates(a))
