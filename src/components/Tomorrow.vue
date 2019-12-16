<template>



<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;综合指数:{{Tomorrow.all}}%</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;财运指数:{{Tomorrow.money}}%</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;健康指数:{{Tomorrow.health}}%</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;爱情指数:{{Tomorrow.love}}%</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;幸运色:{{Tomorrow.color}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;幸运数字:{{Tomorrow.number}}</span>
      </div>
     </div>
  </el-col>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;速配星座:{{Tomorrow.QFriend}}</span>
      </div>
     </div>
  </el-col>
  <el-col :span="24">
    <div class="grid-content bg-purple" >
      <div class="block">
        <span class="demonstration">&nbsp;&nbsp;工作指数:{{Tomorrow.work}}%</span>
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
        <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;{{Tomorrow.summary}}</span>
      </div>
     </div>
  </el-col>
    


  


</el-row>





</template>

<script>


	export default {
		name:'Tomorrow',
    props: ["Tomorrow"],
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