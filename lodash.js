// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// const compact = (data) => {
//     let array = [];
//     data.forEach( item => {
//         if (item && typeof item === 'number') {
//             array.push(item)
//         }
//     })
//     return array;
// }
// console.log(
//     compact([0, 1, false, 2, '', 3])
// );



// var other = _.concat(array, 2, [3], [[4]]);
// => [1, 2, 3, [4]]
// const concat = (...data) => {
//     let array = [];
//     data.forEach(item => {
//         if (typeof item === 'number'){
//             array.push(item)
//         } else{
//             array.push(...item)
//         }
//     })
//     return array;
// };
// console.log(
//     concat([1], 2, [3], [[4]])
// ) // => [1, 2, 3, [4]]




// const customForEach = (array, cb) => {
//     for (let index = 0; array.length > index ; index++ ) {
//         cb(array[index], index, array)
//     }
// }
// customForEach([1,2,3,4], (item, index, array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
//     console.log('---')
// })

// const input1 = 'leetcode'; // 0
// const input2 = 'loveleetcode'; // 2
// const input3 = 'aabb'; // -1
//
// const firstUniqChar = (data) =>
// {
//     const dataArray = data.split('');
//
//     if (!dataArray.length) return null;
//     if (dataArray.length === 1) return 0;
//
//     const obj = dataArray.reduce( (acc, item) => {
//         acc[item] ? acc[item] += 1 : acc[item] = 1;
//         return acc;
//     }, {} );
//
//     for (let itemObj in obj ){
//         if (obj[itemObj] === 1){
//             return dataArray.indexOf(itemObj);
//         }
//     }
//     return -1;
// }
// console.log(firstUniqChar(input1))
// console.log(firstUniqChar(input2))
// console.log(firstUniqChar(input3))



const input1 = [ 1, 2, 2, 1];
const input2 = [ 2, 2];
// [ 2, 2 ]
const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];
// [ 4, 9 ]
const intersect = (arr1, arr2) =>
{
    return arr1.filter(item => arr2.includes(item))
}
console.log(intersect(input1, input2))
console.log(intersect(input3, input4))























