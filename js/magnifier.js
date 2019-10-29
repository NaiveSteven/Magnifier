let smallBox = document.querySelector(".smallBox"),
    bigBox = document.querySelector(".bigBox"),
    bigImg = bigBox.querySelector("img"),
    mark = null;
smallBox.onmouseenter = function (ev) {
    mark = document.createElement("div");
    mark.className = "mark";
    this.appendChild(mark);
    bigBox.style.display = "block";
};
smallBox.onmousemove = function (ev) {
    let minL = 0,
        minT = 0,
        maxL = smallBox.offsetWidth - mark.offsetWidth,
        maxT = smallBox.offsetHeight - mark.offsetHeight,
        curL = ev.pageX - smallBox.offsetLeft - mark.offsetWidth / 2,
        curT = ev.pageY - smallBox.offsetTop - mark.offsetHeight / 2;
    curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
    curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
    mark.style.left = curL + 'px';
    mark.style.top = curT + 'px';
    bigImg.style.left = -curL * 3.5 + 'px';
    bigImg.style.top = -curT * 3.5 + 'px';
}
smallBox.onmouseleave = function () {
    this.removeChild(mark);
    mark = null;
    bigBox.style.display = "none";
}