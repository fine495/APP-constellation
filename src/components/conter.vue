<template>



<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple" v-for = "(item,key,index) in message" >
      <span class="block" v-for = "(val,key_n) in json">
        <span class="demonstration" v-if="key==key_n">&nbsp;&nbsp;&nbsp;&nbsp;{{val}}:{{item}}</span>
        
      </span>
     </div>
</el-col>
</el-row>





</template>

<script>
 let json={"name":"星座名称","all":"综合运势","color":"幸运色","health":"健康指数","love":"爱情指数","money":"财运指数","number":"幸运数字","QFriend":"速配星座","summary":"今日概述","work" :"工作指数","date":"时间","year":"年份","datetime":"日期","career":"事业运","mima":"年度密码","finance":"财运","month":"月份"};


// let json1=[
//  {"date":"id"},
//  {"name":"名字"},
//  {"all":"综合运势"},
//  {"color":"幸运色"},
//  {"health":"健康运势"},
//  {"love":"爱情运势"},
//  {"money":"财运指数"},
//  {"number":"幸运数字"},
//  {"QFriend":"速配星座"},

// ]


	export default {
		name:'conter',
    props: ["message"],
    data() {
      return {
        json:json
      }
    },
     
    methods:{
       div(){
        // console.log($('.block').height())
         if($('.block').height()==0){
            $('div').css("display","none")
         }
       }
    },
    created(){
      this.div();
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