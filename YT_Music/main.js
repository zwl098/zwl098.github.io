var app = new Vue({
    el:"#player",
    data:{
        // 歌曲搜索
        query:"",
        // 音乐列表
        musicList:[],
        // 音乐地址
        musicUrl:"",
        // 评论
        hotComments:"",
        // 音乐封面
        musicCover:"",
        // 黑胶音乐动画状态
        isPlaying:false,
        // 遮罩层
        isShow:false,
        // MV地址
        mvUrl:"",
        cookie:"",
        phone:"",
        checkCode:""

    },
    methods: {
        visitLogin:function(){
            axios.get("http://localhost:3000/register/anonimous")
            .then(function(response){
                console.log(response)
            },function(err){})

        },
        // 登录函数
        login:function(){
            axios.get("http://localhost:3000/captcha/sent?phone="+this.phone)
            .then(function(response){
                console.log(response)
            },function(err){})
        },
        // 验证验证码
        checkLogin:function(){
            axios.get("http://localhost:3000/captcha/verify?phone="+this.phone+"&captcha="+this.checkCode)
            .then(function(response){
                console.log(response)
            },function(err){})

        },
        // 搜索音乐
        searchMusic:function() {
            var that = this;
            axios.get("https://zhangwenling.asia/search?keywords="+this.query+"&realIP=116.25.146.177")
            .then(function(response){
                // console.log(response);
                that.musicList = response.data.result.songs;
            },function(err){})
        },
        // 播放音乐
        playMusic:function(musicId) {
            // console.log(musicId);
            var that= this;
            // 歌曲链接获取
            axios.get("https://zhangwenling.asia/song/url?id="+musicId)
            .then(function(response){
                // console.log(response);
                that.musicUrl = response.data.data[0].url
            },function(err){})
            // 歌曲评论获取
            axios.get("https://zhangwenling.asia/comment/music?id="+musicId)
            .then(function(response){
                // console.log(response)
                that.hotComments = response.data.comments
            },function(err){})
            // 歌曲详情获取
            axios.get("https://zhangwenling.asia/song/detail?ids="+musicId)
            .then(function(response){
                // console.log(response)
                that.musicCover = response.data.songs[0].al.picUrl;
            },function(err){})
        },
        // 黑胶音乐播放动画
        play:function(){
            // console.log("play")
            this.isPlaying = true;
        },
         // 黑胶音乐暂停动画
        pause:function(){
            // console.log("pause")
            this.isPlaying = false;
        },
        // 播放MV
        playMV:function(mvid){
            // console.log(mvid)
            var that = this;
            axios.get("https://zhangwenling.asia/mv/url?id="+mvid)
            .then(function(response){
                // console.log(response)
                that.isShow = true;
                that.mvUrl = response.data.data.url;
            },function(err){})
        },
        // 退出遮罩层
        hide:function(){
            this.isShow = false;
        }
    }
})



