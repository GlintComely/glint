!function(e, t) {
    function animateHearts() {
        hearts = hearts.filter(heart => {
            if (heart.alpha <= 0) {
                t.body.removeChild(heart.el);
                return false;
            }
            heart.y--;
            heart.scale += 0.004;
            heart.alpha -= 0.013;
            heart.el.style.cssText = `
                left:${heart.x}px;
                top:${heart.y}px;
                opacity:${heart.alpha};
                transform:scale(${heart.scale}) rotate(45deg);
                background:${heart.color};
                z-index:99999;
            `;
            return true;
        });
        requestAnimationFrame(animateHearts);
    }

    function handleMouseClick(e) {
        const heart = t.createElement("div");
        heart.className = "heart";
        hearts.push({
            el: heart,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: getRandomColor()
        });
        t.body.appendChild(heart);
    }

    function getRandomColor() {
        return `rgb(${~~(255 * Math.random())},${~~(255 * Math.random())},${~~(255 * Math.random())})`;
    }

    let hearts = [];
    e.onclick = function(e) { handleMouseClick(e); };

    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(fn) {
        setTimeout(fn, 1000 / 60);
    };

    animateHearts();
}(window, document);
