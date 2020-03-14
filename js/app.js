'use strict'
var totalClicks = 0;
var games = [
    'abra.png',
    'bellsprout.png',
    'bulbasaur.png',
    'caterpie.png',
    'charmander.png',
    'clefairy.png',
    'geodude.png',
    'growlithe.png',
    'jigglypuff.png',
    'jynx.png',
    'machop.png',
    'mankey.png',
    'meowth.png',
    'oddish.png',
    'pidgey.png',
    'pika.png',
    'poliwag.png',
    'psyduck.png',
    'snorlax.png',
    'squirtile.png',
    'vulpix.png'
]

function globalRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


Game.all = [];

function Game(name, imgPath) {
    this.name = name;
    this.imgPath = imgPath;
    this.clicks = 0;
    Game.all.push(this);
}

for (var i = 0; i < games.length; i++) {
    var newGame = new Game(games[i].split('.', 1), `./img/${games[i]}`);
}

var selectedImagesArray = [];

function sendLocal() {
    var gamesString = JSON.stringify(selectedImagesArray);
    localStorage.setItem('game', gamesString);
}

function getLocal() {
    var gamesString = localStorage.getItem('game', selectedImagesArray);

    if (gamesString) {
        selectedImagesArray = JSON.parse(gamesString);
        console.log(selectedImagesArray);
    }
    renderImages();
}


var firstImageCont = document.getElementById('firstImg');
var firstImage = document.createElement('img');
firstImageCont.appendChild(firstImage);

var secondImageCont = document.getElementById('secondImg');
var secondImage = document.createElement('img');
secondImageCont.appendChild(secondImage);

var thirdImageCont = document.getElementById('thirdImg');
var thirdImage = document.createElement('img');
thirdImageCont.appendChild(thirdImage);


var firstGame = [];
var secondGame = [];
var thirdGame = [];

function renderImages() {

    firstGame = Game.all[globalRandomNumber(0, games.length - 1)];
    secondGame = Game.all[globalRandomNumber(0, games.length - 1)];
    thirdGame = Game.all[globalRandomNumber(0, games.length - 1)];

    while (firstGame === secondGame || secondGame === thirdGame || firstGame === thirdGame) {
        firstGame = Game.all[globalRandomNumber(0, games.length)];
        secondGame = Game.all[globalRandomNumber(0, games.length)];
        thirdGame = Game.all[globalRandomNumber(0, games.length)];
    }


    firstImage.setAttribute('src', firstGame.imgPath);
    firstImage.setAttribute('title', firstGame.name);
    firstImage.setAttribute('alt', firstGame.name);
    firstImage.setAttribute('id', 'first');


    secondImage.setAttribute('src', secondGame.imgPath);
    secondImage.setAttribute('title', secondGame.name);
    secondImage.setAttribute('alt', secondGame.name);
    secondImage.setAttribute('id', 'second');


    thirdImage.setAttribute('src', thirdGame.imgPath);
    thirdImage.setAttribute('title', thirdGame.name);
    thirdImage.setAttribute('alt', thirdGame.name);
    thirdImage.setAttribute('id', 'third');


}

renderImages();


var imagesSection = document.getElementById('chooseImgSection');
imagesSection.addEventListener('click', gameClick);

function gameClick(event) {


    totalClicks++;

    if (totalClicks < 6) {

        var selectedImages = document.getElementById('selectedImgSection');
        var imageSelected1 = document.createElement('img');
        selectedImages.appendChild(imageSelected1);

        if (event.target.id === 'first') {

            firstGame.clicks++;

            renderSelected(firstGame);

        } else if (event.target.id === 'second') {

            secondGame.clicks++;

            renderSelected(secondGame);


        } else if (event.target.id === 'third') {

            thirdGame.clicks++;

            renderSelected(thirdGame);

        }
        sendLocal();

    } else {
        imagesSection.removeEventListener('click', gameClick);

    }
    if (totalClicks < 5) {
        renderImages();
    }

}

getLocal();






function renderSelected(gameD){

    imageSelected1.setAttribute('src', gameD.imgPath);
    imageSelected1.setAttribute('title', gameD.name);
    imageSelected1.setAttribute('alt', gameD.name);
    selectedImagesArray.push(gameD);
    return gameD;

}





