
const btn = document.getElementById('btn1');
const omikujiText = document.getElementById('omikujiText');
const omikujiTextImage = document.getElementById('omikujiTextImage');
let soundEndflag = "0"; // sound control


btn.addEventListener('click', function () {
    if (soundEndflag === "1") {
        soundControl("end", "");
    }
    //おみくじのテキスト画像対応。。。おみくじの種類を６→５種類にした。　（おみくじの画像が５種類しかないから
    let resultText = ["img1/daikichi.png", "img1/chukichi.png", "img1/syokichi.png", "img1/suekichi.png", "img1/daikyo.png"];
    let resultMaxSpeed = [10, 10, 8, 5, 5];
    let resultMaxSize = [30, 30, 30, 30, 30];
    let resultImage = ["img/star.png", "img/sakura_hanabira.png", "img/sakura_hanabira.png", "img/leaf.png", "img/snowflakes.png"];
    let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3", "sound/omikuji_sound4.mp3",];

    let n = Math.floor(Math.random() * resultText.length);

    omikujiTextImage.src = resultText[n];
    omikujiTextImage.classList.add("omikujiPaper");
    //アニメーション完了時にCLASSを削除
    omikujiTextImage.addEventListener("animationend",
        function () {
            omikujiTextImage.classList.remove("omikujiPaper");
        }, false
    );
    
    //SOUND CONTROL
    w_sound = resultSound[n];
    soundControl("start", w_sound);
    soundEndflag = "1";

   
    // snowfall stop
    $(document).snowfall("clear");
    // jQueryのsnowfall
    setTimeout(() => {
        $(document).ready(function () {
            $(document).snowfall({
                maxSpeed: resultMaxSpeed[n], // 最大速度 
                minSpeed: 1, // 最小速度
                maxSize: resultMaxSize[n], // 最大サイズ
                minSize: 1, // 最小サイズ
                image: resultImage[n]
            });
        });
    },
        200
    );
}, false
);
//sound control
let w_sound
let music
function soundControl(status, w_sound) {
    if (status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if (status === "end") {
        music.pause();
        music.currentTime = 0;
    }
}




// ============0608====================
window.addEventListener("DOMContentLoaded",
    function () {
        $(".mainP").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
            initialDelay: 2000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            in: { // フェードインのエフェクトの詳細設定
                effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
                delayScale: 1.5, // 遅延時間の指数
                delay: 50, // 文字ごとの遅延時間
                sync: false, // trueはアニメーションをすべての文字に同時に適用
                shuffle: true // trueは文字を順番にではなく、ランダムに
            }
        });
        $(function () {
            ScrollReveal().reveal("#btn1", { duration: 1000 });
        });
        setTimeout(() => {
            let popmsg = "WELCOME";
            window.alert(popmsg);
        }, "5000");
    }, false
);