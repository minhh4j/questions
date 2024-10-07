
function oddOne(str){
  let a =str.split(" ").filter((x) => str.indexOf(x) == str.lastIndexOf(x))
  console.log(a)

}
oddOne("this apple is sweet" +  " this apple is sour")
oddOne(" apple apple " + " banana ")