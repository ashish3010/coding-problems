const a = [2, 4, 2, 5, 7, 4, 9]

// using Set function
const removeDuplicates = (list) => {
  return [...new Set(list)]
}



console.log(removeDuplicates(a))
