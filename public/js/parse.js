var numit = [];
var indx = [];
var count = 1;
// ['208', '11', '33', '192', '191', '174', '199', '5', '54', '5', '195', '195', '195', '3', '3', '3', '195', '5', '3', '6', '195', '140', '140', '3', '45', '3', '6', '3', '6', '195', '5', '3', '3', '140', '140', '3', '3', '3', '6', '195', '3', '3', '140', '140', '195', '3', '140', '140', '6', '195', '195', '3', '3', '3', '3', '3', '3', '3', '45', '3', '195', '195', '3', '140', '140', '6', '195', '195', '195', '140', '140', '140', '140', '140', '140', '140', '140', '195', '195', '195', '3', '195', '3', '3', '6']
['208', '11', '33', '192', '191', '174', '199', '5', '54', '5', '195', '195', '195', '3', '3', '3', '195', '5', '3', '6', '195', '140', '140', '3', '45', '3', '6', '195', '195', '195', '3', '195', '45', '3', '3', '6', '195', '5', '195', '3', '140', '140', '3', '3', '3']
.forEach(item => {
    numit.push(parseInt(item));
    indx.push(count++)
})

console.log(numit)