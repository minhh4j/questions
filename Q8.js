var averageValue = function(nums) {
    let newarr =[];
    for(let i =0 ; i<nums.length ; i++){
    if(nums[i]%2===0 && nums[i]%3===0){
     newarr.push(nums[i])
    }

    
    
}
if(newarr.length===0){
    return 0;
}
else{
   var result= newarr.reduce((acc,val) => acc+ val ,0) / newarr.length
}
return result;
}

console.log(averageValue([1,3,6,18]))