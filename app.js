var showtime = function() {
    var nowtime = new Date(),
        endtime = new Date("2021/2/28");
    var lefttime = endtime.getTime() - nowtime.getTime();
    if (lefttime < 0) {
        throw new Error()
    }
    var leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24));
    var lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24);
    var leftm = Math.floor(lefttime / (1000 * 60) % 60);
    var lefts = Math.floor(lefttime / 1000 % 60);
    var text = "距离钱哥离开还有:"
    return text+leftd + "天" + lefth + "时" + leftm + "分" + lefts + "秒";
}
var render = function() {
    let interval = null
    try {
        document.querySelector('.content').innerHTML = showtime()
        interval = window.setInterval(function() {
            document.querySelector('.content').innerHTML = showtime()
        }, 1000)
    } catch (e) {
        clearInterval(interval)
        document.querySelector('#app').innerHTML = `时间到，钱哥走了，呜呜呜~~~~`
    }

}
render()