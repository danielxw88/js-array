array1=[1,2,7,"Daniel","email adress",true];
console.log(array1);
console.log("First element: " +array1[0]);
console.log("Last element: " +array1.at(-1));
console.log("Middle element: " +array1.at(3));
console.log("Length: " +array1.length);

array1.push("Hello!");
console.log("array.push(): " +array1);
array1.pop();
console.log("array.pop(): " +array1);
array1.shift();
console.log("array.shift(): " +array1);

console.log("Iteration by for loop: ")
for (let i=0; i<array1.length;i++){
    console.log(array1[i]);
}
console.log("Iteration by forEach: ")
array1.forEach(array=>console.log(array));

[first,second,...rest]=array1;
console.log("First element: "+first);
console.log("Second element: "+second);
console.log("Rest element: "+rest);