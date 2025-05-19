////  for 
for(let i=1 ; i <= 10 ;i++ ){
    console.log(i);
}

for (let i = 1 ; i <=10 ; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1 ; j <= 10 ; j++) {
        // console.log(`Inner loop value : ${j}  and  ${i}`);
        console.log(i + " * " + j + " = " + i*j);
    }
}

let myarray = ['hero' , 'saktiman' , 'spiderman' , 'antman']

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}


for (let i = 1 ; i <=20 ; i++) {
    if(i==5) {
        console.log('5 dected');
        break
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1 ; i <=20 ; i++) {
    if(i==5) {
        console.log('5 dected');
        continue
    }
    console.log(`value of i is ${i}`);
}

