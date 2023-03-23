//The puprose of this webpage is to generate a secret combination code for the user.

//1. String message assigned to secretMessage "const" variable will be part of the dialog box.

const secretMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//2. First code will be provided by creating a an arithmethic operation using the multiplication operator and assigning such  operation to a "const" varible called "productOp";

const productOp = 2 * 3;

//3. Second code will be provided by creating an arithmethic operation using the % modulus operator and assgining the operation to a const variable called modOp

const modOp = 35 % 2;

//4.Third code will be provided by creating an arithmethic operation using the + plus operator and assgining the operation to a const variable called sumOp 

const sumOp = 4 + 4;

//5. A template literal has been crated by combining all four variables  inside an alert method  in order to display a op-up message and let the user know of their secret combination code.

alert(`${secretMessage} ${productOp}-${modOp}-${sumOp}`);