//変数にランダムな整数をいれる
let num = Math.floor(Math.random() * 100);

//変数の値を出力する
console.log(num);

//3と5の倍数の場合
if(num % 15 === 0 ){
    console.log('３と５の倍数です');
}

//5の倍数の場合
else if (num % 5 === 0 ){
    console.log('５の倍数です');
}

//3の倍数の場合
else if (num % 3 === 0    ) {
    console.log('３の倍数です');
}

//それ以外の場合
else {
    console.log(num);
}
