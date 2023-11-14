// const a = [0, 2, 0, 4, 2, 5, 0, 2, 0, 7, 0, 35, 7, 9, 3, 4, 6]

const moveZeroToEnd = (list) => {
  const zero = []
  const nonZero = []

  for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) {
      zero.push(list[i])
      continue
    }
    nonZero.push(list[i])
  }

  return [...nonZero, ...zero]
}

// console.log(moveZeroToEnd(a))
