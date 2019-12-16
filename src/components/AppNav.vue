<template>
	<div class="footer">
		<ul>
			<li>
				<icon name="ball" scale="3"></icon>
				<p>运势</p>
			</li>
			<li>
				<icon name="ball" scale="3"></icon>
				<p>起源</p>
			</li>
			<li>
				<icon name="ball" scale="3"></icon>
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'AppNav',
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #bbdefb;
		height: 35px;
		text-align: center;
		color: #708090;
		border-top: 1px solid #ccc;
		padding-bottom: 50px;
	}
	.footer ul {
	}
	.footer li {
		float: left;
		width: 33%;
	}

</style>