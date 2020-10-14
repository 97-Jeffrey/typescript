let message;
message='abc';
let endswithC = (<string>message).endsWith('c');
let alternativeEndsC = (message as string).endsWith('c')

console.log(endswithC)