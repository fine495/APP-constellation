<template>



<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;综合指数:{{message.key}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;财运指数:{{message.money}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;健康指数:{{message.health}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;爱情指数:{{message.love}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;幸运色:{{message.color}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;幸运数字:{{message.number}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;速配星座:{{message.QFriend}}</span>
      </div>
     </div>
  </el-col>
  <el-col :span="24">
    <div class="grid-content bg-purple" >
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;工作指数:{{message.work}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;今日概述:</span>
      </div>
     </div>
  </el-col>
     <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="content">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;{{message.summary}}</span>
      </div>
     </div>
  </el-col>
    


  


</el-row>





</template>

<script>


	export default {
		name:'conter',
    props: ["message"],

    let json={all:"综合运势",color:"幸运色",​health:"健康运势",love:"爱情运势",money:"财运指数",number:"幸运数字",QFriend:"速配星座",summary:"今日概述",work :"工作指数",datetime:"日期",career:"事业运",job:"工作",mima:"年度密码",finance:"财运",month:"月份"}
    data() {
      return {
      
      }
    },
     
    methods:{
      PassValue(){
        
      }
    },
    created(){
     
    }
};
	
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


.demonstration{
  display:inline
}
.el-rate{
  display:inline
}
.block{
  padding-top:6px
}
.content{
  margin-left:20px;
  margin-right:20px;
  
}
</style>