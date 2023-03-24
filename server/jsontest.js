const obj ={
    name:"prem",
    age:25,
    address:"New Delhi"
}

// console.log(obj);

const jsondata =JSON.stringify(obj);
console.log(jsondata);

// {"name":"prem","age":25,"address":"New Delhi"}

const objdata = JSON.parse(jsondata);
console.log(objdata);

//{ name: 'prem', age: 25, address: 'New Delhi' }