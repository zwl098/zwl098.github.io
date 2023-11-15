(function(window,document) {
    let hearts = [];
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback){
            setTimeout(callback, 1000 / 60);
        }
    })();
    init();
    setInterval(createHeart, 800);
    function init() {
        css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        attachEvent();
        gameloop();
    }
    function gameloop() {
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].alpha <= 0) {
                document.body.removeChild(hearts[i].el);
                hearts.splice(i, 1);
                continue;
            }
            hearts[i].y--;
            hearts[i].scale += 0.005;
            hearts[i].alpha -= 0.005;
            hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
        }
        requestAnimationFrame(gameloop);
    }
    function attachEvent() {
        var old = typeof window.οnclick === "function" && window.onclick;
        window.onclick = function(event) {
            old && old();
            createHeart(event);
        }
    }
    function createHeart(event) {
        if (document.getElementsByClassName('heart').length < 10) {
            var d = document.createElement("div");
            d.className = "heart";
            var x, y;
            if (event) {
                x = event.clientX - 5;
                y = event.clientY - 5;
            } else {
                var maxX = window.screen.availWidth,
                    maxY = window.screen.availHeight;

                x = Math.floor(Math.random() * (maxX + 1));
                y = Math.floor(Math.random() * (maxY + 1));
            }

            hearts.push({
                el : d,
                x : x,
                y : y,
                scale : 1,
                alpha : 1,
                color : randomColor()
            });
            document.body.appendChild(d);

        }
        
    }
    function css(css) {
        var style = document.createElement("style");
        style.type="text/css";
        try {
            style.appendChild(document.createTextNode(css));
        } catch(ex) {
            style.styleSheet.cssText = css;
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    function randomColor() {
        return "rgb(" + (~~(Math.random()*255)) + "," + (~~(Math.random()*255)) + "," + (~~(Math.random()*255)) + ")";
    }
})(window,document);    