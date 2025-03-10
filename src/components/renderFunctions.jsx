export default function firstLetter(str){
    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    const newStr = arr.join("");   
    return newStr    
};

