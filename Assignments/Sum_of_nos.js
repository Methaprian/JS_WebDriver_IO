let num=''
let arr='Asde45%678^5T4IOJ54g$'
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>=0 && arr[i]<=9) {
        num=num+arr[i]
    } else {
        num=num+' '
    }
}
let arr_num=num.split(' ')
let numbers=0
let total=0
for (let i = 0; i < arr_num.length; i++) {
    if(arr_num[i]==''){
    }else{
        numbers=Number(arr_num[i])
        total=total+numbers
    }    
}
console.log(`The Sum of all Nos are : ${total}` );