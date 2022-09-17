// 获取小鸟盒子
const bird = document.querySelector('#bird');
// 获取游戏盒子
const gamebox = document.querySelector('#game-box');
// 帧编号
let f = 0;
// 小鸟精灵图步骤0,1,2,
let step = 0;
// 小鸟距离顶部的值
let birdtop = 200;
// 设置小鸟下落的加速度
let deltatop = 0;
// 小鸟头角度
let birdRotate = 0;
// 管子数组
let pipes = [];
// 全局分数变量
var score = 0;
// 开始按钮
start.onclick = () => {
// 定时器
counter();
land.className = 'start';
start.style.visibility = 'hidden';
}
// 点击跳跃按钮
gamebox.onclick = () => {
    deltatop = -10;
    birdRotate = -45;
    // 加载飞翔声音 
    fly_audio.load(); 
    // 播放飞翔声音 
    fly_audio.play();
}
// 管子类
class pipe {
    // 构造函数
    constructor(){
        pipes.push(this);
        this.pipe1 = document.createElement('div');
        this.pipe2 = document.createElement('div');
        this.pipe1.className = 'pipe1';
        this.pipe2.className = 'pipe2';
        gamebox.appendChild(this.pipe1);
        gamebox.appendChild(this.pipe2);
        this.space = 180;
        this.isScore = 0;
        this.pipe2Height = parseInt(Math.random() *200)+100;
        this.pipe1Height =560 - this.space - this.pipe2Height;
        this.left =480;
        this.pipe1.style['height'] = this.pipe1Height +'px';
        this.pipe2.style['height'] = this.pipe2Height +'px';
        this.pipe1.style['top'] = this.pipe2Height +this.space+'px';
        this.pipe1.style['left'] =this.left+'px';
        this.pipe2.style['left'] =this.left+'px';
    }
    move () {
        this.left -= 5;
        this.pipe1.style['left'] = this.left +'px';
        this.pipe2.style['left'] = this.left +'px';
    }
}
// 实例化管子
new pipe ();
// 定时器函数
function counter () { 
    timer = setInterval(() => {
// 帧计数
    f++;
    // 小鸟加速度，作为一个变量逐渐增加
    deltatop += 0.6;
    // 为小鸟距离顶部的值加上一个变量，下落越来越快
    birdtop +=  deltatop;
    if(birdtop < 0) {
        // 防止小鸟飞出上边界
        birdtop = 0;
    } 
    if(birdtop > 520) {
        // 防止小鸟飞走
        birdtop = 520;
        // 防止小鸟翻跟斗
        birdRotate = 0
    }
    bird.style['top']=birdtop +'px';
    // 每三帧扑腾一次翅膀
    if(f % 3 == 0) {
        // 小鸟头角度变化
        birdRotate +=3;
        if(birdRotate > 90) {
            birdRotate = 0;
        }
        // 为小鸟的css加上变换角度
        bird.style['transform'] = 'rotate('+birdRotate +'deg)';
        step++;
        // 小鸟精灵图动画步骤大于2，重新从0开始
        if(step > 2)step = 0;
        bird.style['background-position'] = -step*100+'% 0'
    }
    // 碰撞检测
    pipes.forEach((item)  => {
        // 管子移动
        item.move();
        // 小鸟的aabb盒
        let birdA1 = 0;
        let birdA2 = 0;
        let birdB1 = 0;
        let birdB2 = 0;
        birdA1 = birdtop + 6;
        birdA2 = birdtop + 28;
        birdB1 = 170 + 6;
        birdB2 = 170 + 45;
        console.log(birdA1, birdA2, birdB1, birdB2);
        // 判断加分，如果管子本身没有被加过分，并且小鸟越过了管子 
        if (!item.isScore && item.left + 88 < birdB1) { 
            // 分数加1 
            score ++; 
            // 得分声音
            score_audio.load();
            score_audio.play();
            // 更改分数显示 
            mainScore.innerText = score; 
            // 将这个管子设置为已经加分 
            item.isScore = true; 
        }
        if (
            // 碰到上管子的情况
            item.left < birdB2 && item.pipe2Height > birdA1 && item.left + 88 > birdB1
            ||
            // 碰到下管子的情况
            item.left < birdB2 && item.pipe2Height + item.space < birdA2 && item.left + 88 > birdB1
            
        ) {
            // 结束游戏
            gameover();
        }
        
    });
    // 生成管子的速度
    if (f % 100 == 0){
        new pipe();
    }
}, 20);

}
// 游戏结束函数 
function gameover() { 
    bomb_audio.load();
    bomb_audio.play();
    // 清除定时器 
    clearInterval(timer);
    // 让大地停止运动 
    land.className = 'stop'; 
    // 让遮罩盒子出现
    cover.style['visibility'] = 'visible'; 
    // 改变透明度
    cover.style['opacity'] = 0.6;
    // 让工具盒子出现
    tool.style['display'] = 'block'; 
    // 获取最高分
    var bestScore = localStorage.getItem('bestScore'); 
    // 如果从来没有过最高分
     if (bestScore == null) { 
        // 那么本次分数就是best
        bestScore = score; 
        // 存进去 
        localStorage.setItem('bestScore', bestScore);
         } else {
            // 用本次得分和历史得分对比进行比较
            // 如果本次得分超过了历史最好得分 
            if (score > Number(bestScore)) { 
                // 那么本次分数就是best
                bestScore = score; 
                // 存进去 
                localStorage.setItem('bestScore', bestScore); 
            } 
        }
        // 显示最好成绩 
        best.innerHTML = bestScore;
}
