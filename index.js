// // Question 1

// let employees = [
//      { firstName: 'John', 
//      lastName: 'Doe',
//      age: 27, 
//      joinedDate: 'December 15, 2017' },
//  { firstName: 'Ana', 
//  lastName: 'Rosy', 
//  age: 25,
//   joinedDate: 'January 15, 2019' },
//  { firstName: 'Zion',
//   lastName: 'Albert', 
//   age: 30, 
//   joinedDate: 'February 15, 2011' } 
// ];

// let ee= employees.sort((a,b)=>a.age-b.age);
// console.log(ee);


// Question 2

// function getLastElements(arr, n) {
//     if (n === undefined) {
//       return arr[arr.length - 1];
//     } else {
//       return arr.slice(-n);
//     }
//   }
  

//   let array = [1, 2, 3, 4, 5];
  
//   console.log(getLastElements(array,1));
  

// Question 3

// const a = [[1, 2, 1, 24],
//  [8, 11, 9, 4], 
//  [7, 0, 7, 27], 
//  [7, 4, 28, 14],
//  [3, 10, 26, 7]];

//  for (let i = 0; i < a.length; i++) {
//     console.log("'row' " + i);
//     for (let j = 0; j < a[i].length; j++) {
//       console.log(" " + a[i][j]);
//     }
//   }

  
  
//   //Question 4


function difference(arr1, arr2) {
    const uniqueElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        uniqueElements.push(arr1[i]);
      }
    }
  
    for (let i = 0; i < arr2.length; i++) {
      if (!arr1.includes(arr2[i])) {
        uniqueElements.push(arr2[i]);
      }
    }
  
    return uniqueElements;
 
  }
  
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Question 5

// const elements =[58, '', 'abcd', true, null, false, 0];
//   const filterd = elements.filter(value => value !== false && value !== null && value !== 0 && value !== '');
//   console.log(filterd);

