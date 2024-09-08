//変数num に1以上の正の数を代入する
let num = Math.floor(Math.random() * 100)　+1 ;
// let num=30;

//　確認用
console.log(num);

// 変数num の値が3の倍数の場合、「3の倍数です」と出力
if (num %3 === 0 && num %5 ===0){
    console.log('3と5の倍数です');
}

else if (num%3 === 0) {
    console.log('3の倍数です');
}

else if (num %5=== 0) {
    console.log('5の倍数です');
}

else {
    console.log(num);
}