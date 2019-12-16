<template>
<div>
  <div class="dialog-modal"> 
    <div class="dialog-wrapper" @click="onClose" v-show="show"></div> 
    <transition name="drop">
        <div class="dialog-container" v-show="show">
            <h3 class="dialog-title">请选择你的星座</h3>
            <slot>
                <ul>
                    <li v-for="item in cate" @click="sendMsg(item)">
                        <div class="dialog-pic">
                            <icon v-bind:name="item.pic" scale="4"></icon>
                        </div>
                        <div v-if="item.pic == constellation" class="dialog-tag">
                            <icon name="tag" scale="2"></icon>
                        </div>
                        <p>{{item.name}}</p>
                        <p class="date">{{item.date}}</p>
                    </li>
                </ul>
            </slot>
        </div>
    </transition>
  </div>
</div> 
</template>

<script>
export default {
    props: ["show",
            "constellation"
            ],
    data(){
        return {
            cate:[
                {
                    name:'白羊座',
                    date:'03.21-04.19',
                    pic:'aries'
                },
                {
                    name:'金牛座',
                    date:'04.20-05.20',
                    pic:'taurus'
                },
                {
                    name:'双子座',
                    date:'05.21-06.21',
                    pic:'gemini'
                },
                {
                    name:'巨蟹座',
                    date:'06.22-07.22',
                    pic:'cancer'
                },
                {
                    name:'狮子座',
                    date:'07.23-08.22',
                    pic:'leo'
                },
                {
                    name:'处女座',
                    date:'08.23-09.22',
                    pic:'virgo'
                },
                {
                    name:'天秤座',
                    date:'09.23-10.23',
                    pic:'libra'
                },
                {
                    name:'天蝎座',
                    date:'10.24-11.22',
                    pic:'scorpio'
                },
                {
                    name:'射手座',
                    date:'11.23-12.21',
                    pic:'sagittarius'
                },
                {
                    name:'摩羯座',
                    date:'12.22-01.19',
                    pic:'capricorn'
                },
                {
                    name:'水瓶座',
                    date:'01.20-02.18',
                    pic:'aquarius'
                },
                {
                    name:'双鱼座',
                    date:'02.19-03.20',
                    pic:'pisces'
                }
            ]
        }
    },
    methods: {
        onClose(){
            this.$emit('on-close');
        },
        sendMsg(val){
            this.$emit('changeConstellation',val);
            console.log(val);
        }
    }
}
</script>
<style scoped>
.drop-enter-active {
  transition: all .5s;
}
.drop-leave-active {
  transition: all .3s;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}   

.dialog-modal{
    position: absolute;
    z-index: 5;
}
.dialog-wrapper
{
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

}
.dialog-wrapper{
    background-color: #fff;
    opacity: .6;
}
.dialog-container{
    position: fixed;
    z-index:80;
    top: 10%;
    left: 5%;
    width: 90%;
    /* margin: 0 auto; */
    background-color: #90caf9;
    border-radius: 3px;
    box-shadow: 0 5px 15px rgba(0,0,0,.4);
}
span.close-btn{
    padding: 0 5px;
    float: right;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}
.dialog-title {
    padding: 10px 0;
    color: #1976d2;
    border-bottom: 1px solid #6699CC;
}
li {
    width: 30%;
    display: inline-block;
    padding: 0 5px;
    position: relative;
}
.dialog-pic {
        width: 50px;
        height: 50px;
        background: #2196f3;
        border-radius: 30px;
        text-align: center;
        line-height: 75px;
        display:inline-block;
        vertical-align:middle;
        margin-top: 10px;
}
.dialog-tag {
    width: 18px;
    height: 18px;
    background-color: #99CCFF;
    border-radius: 9px;
    position: absolute;
    top:45px;
    left:62px;
}
.date {
     font-size: 10px;
    color: #999;
}
</style>