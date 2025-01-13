
let maeImg = 1;
let atoImg = 1;

// mainの画像2枚を交互に表示
let intervalId = null
function mainImg() {
    if  (maeImg === 1 && atoImg === 1) {
        let mainImg = 1;
        hidari.src = `./asset/main${mainImg}.png`;
        migi.src = "";
        intervalId = setInterval(function() {
            mainImg = mainImg === 1 ? 2 : 1;
            hidari.src = `./asset/main${mainImg}.png`;
        }, 1000);
    }
}
mainImg();


click1.addEventListener('click', () => {
    clickMove( maeImg === 2 ? 1 : 2 , 1 );
});

click2.addEventListener('click', () => {
    clickMove( maeImg === 3 ? 1 : 3 , 1 );
});

click3.addEventListener('click', () => {
    clickMove( 1, atoImg === 2 ? 1 : 2);
});

click4.addEventListener('click', () => {
    clickMove( 1, atoImg === 3 ? 1 : 3);
});



function clickMove(maeNum,atoNum) {
    clearInterval(intervalId);
    intervalId = null;
    maeImg = maeNum;
    atoImg = atoNum;
    hidari.src = `./asset/mae${maeImg}.png`;
    migi.src = `./asset/ato${atoImg}.png`;

    mainImg();
}


