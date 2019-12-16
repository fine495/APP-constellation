<template>
	<div class="main">
		<div class="scrollNav">
			<span v-for="(item,index) in selectDay" @click="changeDay(json[index])" v-bind:class="{active:isActive==index}">
				{{item.name}}
			</span>
		</div>
		<div class="content-head">
			<div @click="changeMsg" class="content-pic">
				<icon v-bind:name="picName" scale="4"></icon>
			</div>
			<span @click="changeMsg">{{titleName}}</span>
    		<app-modal @on-close="changeMsg" @changeConstellation="changeConstellation" :show="msg"  :constellation="constellation"></app-modal>
		</div>
		<ul class="fortune">
			<li v-for="(item,key,index) in data.why" v-if="(item/16)&&!(item%16)">
				<span class="left">{{key}}</span> 
				<span  v-for="n in 5">
				<icon v-if="n <= item/16" name="starfill" scale="2"></icon>
				<icon v-else name="stargray" scale="2"></icon>
				</span>	
			</li>
			<li v-else>

			<!-- 注释，单行或多行 -->

		
			<!-- <div class="left">{{key}}</div>   -->	
			<!-- <div class="right">{{item}}</div> -->
				
			</li>
		</ul>



<!--<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple content-foot" v-for = "(item,key,index) in data">
      <div class="block">
        <span class="demonstration">{{key}}:{{item}}</span>
      </div>
     </div>
</el-col>
</el-row>-->



			
				
					
				
			
			
	

		 <conter :message="data"></conter> 
		  
		 
	</div>

	
</template>


<script>
//import qs from 'qs'

import AppDialog from './AppDialog'
import conter from './conter'

import storage from '../util/storage'



let json={"0":"today","1":"tomorrow","2":"week","3":"month","4":"year",}

 let json1={"name":"名字","all":"综合运势","color":"幸运色","health":"健康运势","love":"爱情运势","money":"财运指数","number":"幸运数字","QFriend":"速配星座","summary":"今日概述","work" :"工作指数","datetime":"日期","career":"事业运","job":"工作","mima":"年度密码","finance":"财运","month":"月份"};



	export default {
		name:'HomeContent',
		components:{
			"app-modal":AppDialog,
            conter,
			

    
			
		},
		data() {
			return {
				data:"",
				msg:false,
				constellation:'',
				titleName:"",
				picName:"",
				day:json[0],
				isActive:"0",
				selectDay:[
					{
						name:"今日"
					},
					{
						name:"明日"
					},
					{
						name:"本周"
					},
					{
						name:"本月"
					},
					{
						name:"今年"
					},
					
				],
				items: storage.fetch(),
				json:json,
				parentMsg:"message"
			}
		},
		methods:{
			changeMsg(event){
				this.msg=!this.msg;
			},
			changeConstellation(data){
				this.constellation = data.pic;
				this.titleName = data.name;
				this.picName = data.pic;
				storage.save(data);	
				// console.log(storage);
				this.changeMsg();
				this.postData();
			},
			changeDay(data) {
				this.day = data;
				this.isActive = data;
				// console.log(this.day);
				this.postData();
					

				
			},
			postData(){
				console.log(this.titleName);
				console.log(this.day)
				this.$http({
					method: 'get',
					url: '/constellation/getAll',
					dataType: 'json',
					params: {
					consName:this.titleName,
					type:this.day,
					//consName:"天秤座",
					//type:"today",
					key:"ca5fa201dd0d91b4da33e03a55bdb404",
					
					}
				}).then((response) => {
					console.log(response.data)
					this.data=response.data;
			
		
				}).catch((e) => {
						console.log(e.response.data.message)
				})

				 
				
			}
		},
		created() {
			if(this.items=="") {
				this.postData();
				this.changeMsg();
			}else{
				this.constellation = this.items.pic;
				this.titleName = this.items.name;
				this.picName = this.items.pic;
				this.postData();
				//console.log(this.items.name)
			}
		}
	}
	
</script>

<style scoped>

	.main {
		width: 100%;
		background: #fff;
		text-align: left;
		line-height: 24px;
		padding-top: 40px;
		padding-bottom: 10px;
		overflow:hidden;
	}
	.content-head {
		text-align: center;
		padding-top: 10px;
	}
	.content-pic {
		width: 50px;
		height: 50px;
		background: #2196f3;
		border-radius: 30px;
		text-align: center;
		line-height: 75px;
		display:inline-block;
		vertical-align:middle;
	}
	.content-head span {
		display:inline-block;
		font-size: 20px;
		font-weight: bold;
		margin-left: 15px;
	}
	.content-foot {
		clear: both;
	}
	li {
		padding-left: 3%;
	}
	.fortune li {
		width: 47%;
		float: left;
		vertical-align: top;
		line-height: 25px;
	}
	.left {
		color: #000;
		float: left;
		padding-right: 3%;
	}
	.right {
		overflow: hidden;
		color: #333;
	}
	.content-foot {
		font-size: 16px;
	}
	.scrollNav {
		display: flex;
	}
	.scrollNav span {
		display: block;
		flex: 1;
		text-decoration: none;
		color: #999;
		text-align: center;
		background-color: #e3f2fd;
		padding: 5px 0;
	}
	.scrollNav .active {
		color: #9cb9b9;
		border-bottom: 2px solid #9cb9b9;
	}
</style>