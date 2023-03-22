const fs= require('fs');
//non-blocking io model
// fs.writeFile("file.txt","data is added to file",()=>{
//     console.log("data is sucessfully added");
// })

const b =fs.writeFileSync("file2.txt","data entered");
console.log(b);
console.log("simply js subscribe");

// fs.readFile("file.txt",(err,data)=>{
//     console.log(data);
// })
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// })
// fs.appendFile("file.txt","data is not found",(err,data)=>{
//     console.log(err);
//     console.log(data);
// })


// fs.rename("file.txt","prem.txt",(err,data)=>{
//     console.log(err);
//     console.log(data);
// })

fs.unlinkSync("file2.txt")



