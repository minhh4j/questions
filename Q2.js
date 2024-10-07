
function singleOne(arr){
  let a =arr.filter((x) => arr.indexOf(x) === arr.lastIndexOf(x))
  console.log(a)

}

singleOne([2,2,1])
singleOne([4,1,2,1,2])
singleOne([1])

