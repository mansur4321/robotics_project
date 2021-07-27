let canvasHeight;
let canvasWidth;
let span;

if (document.documentElement.clientWidth > 750) {
    canvasHeight = 500;
    canvasWidth = 500;
    span = 25;
} else {
    canvasHeight = 250;
    canvasWidth = 250;
    span = 12.5;
}

const canvas = document.querySelector('#game__canvas');
const ctx = canvas.getContext('2d');

const buttonUp = document.querySelector('.buttonUp');
const buttonDown = document.querySelector('.buttonDown');
const buttonLeft = document.querySelector('.buttonLeft');
const buttonRight = document.querySelector('.buttonRight');
const buttonClear = document.querySelector('.clear');

let currentX;
let currentY;

if (document.documentElement.clientWidth > 750) {
    currentX = rand(0.5, 450, 25);
    currentY = rand(0.5, 450, 25);
} else {
    currentX = rand(0.5, 225, 12.5);
    currentY = rand(0.5, 225, 12.5);
}

console.log(currentY);
let movementHistory = [];
let coordsObstacles = [];

renderGrid(ctx, canvasWidth, canvasHeight, span);
fillObstacles(50);
renderObstacles(ctx, coordsObstacles);
renderRobot(ctx, span);

console.log();

buttonUp.addEventListener('click', () => {
    if (currentY > 0.5) {
        currentY -= span;
        renderRobot(ctx, span);
    }
});

buttonDown.addEventListener('click', () => {
    if (currentY < canvasHeight-span*2) {
        currentY += span;
        renderRobot(ctx, span);
    } 
});

buttonLeft.addEventListener('click', () => {
    if (currentX > 0.5) {
        currentX -= span;
        renderRobot(ctx, span);
    }
});

buttonRight.addEventListener('click', () => {
    if (currentX < canvasWidth-span*2) {
        currentX += span;
        renderRobot(ctx, span);
    }
});

buttonClear.addEventListener('click', () => {
    clearCanvas(ctx);
});

function fillObstacles(n) {
    coordsObstacles = [];
    for (let i = 0; i <= n; i++) {

        if (document.documentElement.clientWidth > 750) {
            oneRand = rand(0.5, 450, 25);
            twoRand = rand(0.5, 450, 25);
        } else {
            oneRand = rand(0.5, 225, 12.5);
            twoRand = rand(0.5, 225, 12.5);
        }

        if (oneRand === currentX && twoRand === currentY) {
            if (document.documentElement.clientWidth > 750) {
                oneRand = rand(0.5, 450, 25);
                twoRand = rand(0.5, 450, 25);
            } else {
                oneRand = rand(0.5, 225, 12.5);
                twoRand = rand(0.5, 225, 12.5);
            }
        }

        coordsObstacles.push([oneRand, twoRand]);
    }
}

function renderObstacles(ctx, obstacles) {
    ctx.fillStyle = "#65C4FB";
    obstacles.forEach(array => {
        ctx.fillRect(array[0], array[1], span, span);
    });
}

function renderRobot(ctx, span) {
    let flag = false;
    ctx.fillStyle = "#A55AE5";

    movementHistory.forEach(item => {
        if ((item[0] === currentX) && (item[1] === currentY)) {
            flag = true;
        }
    });

    coordsObstacles.forEach(item => {
        if ((item[0] === currentX) && (item[1] === currentY)) {
            flag = true;
        }
    });

    if (flag) {
        currentY = movementHistory[movementHistory.length-1][1];
        currentX = movementHistory[movementHistory.length-1][0];
    } else {
        movementHistory.push([currentX, currentY]);
        ctx.fillRect(currentX, currentY, span, span);
    }
}

function renderGrid(ctx, width, height, span) {
    for (let x = 0.5; x < width; x += span) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, width-span);
    }

    for (let y = 0.5; y < height; y += span) {
        ctx.moveTo(0, y);
        ctx.lineTo(height-span, y);
    }

    ctx.strokeStyle = "#888";
    ctx.stroke();
}

function rand(min,max,num){
    return ( Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num ) + 0.5;
}

function clearCanvas(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (document.documentElement.clientWidth > 750) {
        currentX = rand(0.5, 450, 25);
        currentY = rand(0.5, 450, 25);
    } else {
        currentX = rand(0.5, 225, 12.5);
        currentY = rand(0.5, 225, 12.5);
    }


    renderGrid(ctx, canvasWidth, canvasHeight, span);
    fillObstacles(50);
    renderObstacles(ctx, coordsObstacles);
    renderRobot(ctx, span);
}