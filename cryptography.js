let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "@", "#", "$", "*", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let arr2 = ['g', 'h', 'i', 'j', 'k', 'l', 'a', 'b', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'c', 'd', 'e', 'f', 'x', 'y', 'z', 't', 'u', 'v', 'w', "$", "@", "#", "&", "*", "0", "6", "7", "1", "4", "8", "9", "2", "3", "5"];
let arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr4 = ['C', 'D', 'E', 'F', 'X', 'Y', 'Z','G','M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'H', 'I', 'J', 'K', 'L', 'A', 'B' ];
let word = "hellodear@#"; //Enter the word you want to encrypt
let cipher = "fgribmxg067"; //Enter the cipher you want to decrypt
let encrypt = [];
let decrypt = [];
User_Choice = 1; //Enter 1 for encryption and 2 for decryption
switch (User_Choice) {
    case 1:
        for (let i = 0; i < word.length; i++) {
            if (word[i] >= 'A' && word[i] <= 'Z') {
                let p = arr3.indexOf(word[i]);
                let q = arr4[p];
                encrypt.push(q);
            }
            else {
                let p = arr.indexOf(word[i]);
                let q = arr2[p];
                encrypt.push(q);
            }
        }
        console.log(encrypt);
        break;
    case 2:
        for (let i = 0; i < cipher.length; i++) {
            if (cipher[i] >= 'A' && cipher[i] <= 'Z') {
                let p = arr4.indexOf(cipher[i]);
                let q = arr3[p];
                decrypt.push(q);
            }
            else {
                r = arr2.indexOf(cipher[i]);
                s = arr[r];
                decrypt.push(s);
            }
        }
        console.log(decrypt);
        break;

    default:
        console.log("Insert a valid choice");
        break;
}
