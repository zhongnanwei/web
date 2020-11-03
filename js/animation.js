/**
 * 实现元素的移动动画：元素全部变化
 * @param {element} box，要移动的元素
 * @param {number} target，变化的数值
 * @param {string} attr ,变化要属性
 * */
function animateMove(box, target, attr) {
    // 清理自己的定时器：box
    clearInterval(box.timeId);

    // 将定时器存到自己的属性中：box
    box.timeId = setInterval(function () {
        // 1. 获取当前位置
        let style = getComputedStyle(box);
        let current = parseInt(style[attr]);
        // 2. 计算步长
        let step = (target - current) / 10;

        // 取整方式：target - current的大小判定
        if (step >= 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }

        // 3. 计算下一个位置：当前位置 + 步长
        let next = current + step;

        // 4. 元素移动
        box.style[attr] = next + 'px';

        // 5. 结束定时器
        if (next == target) {
            clearInterval(box.timeId);
        }
    }, 50);
}