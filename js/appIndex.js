'use strict'

var leftTextCont = document.getElementById('leftText');
var leftText = document.createElement('p');
leftTextCont.appendChild(leftText);
leftText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio enim dolorem blanditiis accusamus animi id amet nobis tenetur esse. Culpa repellendus numquam dolores ad debitis cum natus aliquid unde.';

var rightImgCont = document.getElementById('rightImg');
var rightImgIndex = document.createElement('img');
rightImgCont.appendChild(rightImgIndex);
rightImgIndex.setAttribute('src', './img/pokemon.jpg');



var downButtonSection = document.getElementById('buttonDownSection');
var  downButton = document.createElement('button');
downButtonSection.appendChild(downButton);
downButton.textContent = 'Down';

downButton.addEventListener('click', scrollDown);

function scrollDown(){
    window.scrollTo(0, 500);
}


var upButtonSection = document.getElementById('buttonUpSection');
var  upButton = document.createElement('button');
upButtonSection.appendChild(upButton);
upButton.textContent = 'Up';


upButton.addEventListener('click', scrollUp);

function scrollUp(){
    window.scrollTo(0, -500);
}
