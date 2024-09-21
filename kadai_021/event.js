// btnというidを持つHTML要素を取得し、定数に代入する
const outBtn=document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
outBtn.addEventListener('click',() => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const textElement=document.getElementById('text');

    // テキストを書き換える
    setTimeout(() => {
        textElement.textContent='ボタンがクリックされました';

},2000);
});