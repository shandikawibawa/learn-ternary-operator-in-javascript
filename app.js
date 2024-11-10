// Operator ternary dalam javascript adalah cara ringkas menulis ekspresi kondisional. ini adalah satu-satunya operator JavaScript yang menggunakan tiga operan: kondisi yang diikuti dengan tanda tanya (?), ekspresi yang dijalankan jika kondisinya benar, diikuti oleh calon (:), dan ekspresi yang dijalankan jika kondisinya salah. 

// condition ? exprIfTrue : exprIfFalse;

let password = 8;

function passwordChecker(ps) {
//    if (ps === 8) {
//        return `Strong Password`
//    } else {
//        return "Password should be 8 characters.";
//    }

    return ps === 8 ? `Strong Password` : "Password should be 8 characters."; 
}

const res = passwordChecker(8);
console.log(res);

//=====================================================//

const age = 10;

const isAdult = age >= 18 ? "Adult" : "Not an Adult";
console.log(isAdult);

//======================================================//

// if the person have money they can "buy product"
// if the person don't have any money "They should bring money"

let personmoney = true;

let isWallet = personmoney === true ? "buy product" : "They should bring money"
console.log(isWallet); 