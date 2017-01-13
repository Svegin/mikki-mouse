const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; //100px


function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    console.log('width', width,'height',height);
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round(x / width * walk) - (walk /2);
    const yWalk = Math.round(y / height * walk) - (walk /2);

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -.5}px ${yWalk}px 0 rgba(122,0,255,0.7),
        ${yWalk * -.5}px ${xWalk}px 0 rgba(122,122,255,0.7)


        `;
}


hero.addEventListener('mousemove', shadow);
