<template>
	<div class="main">
		<header class="header">
			<van-search class="ipt" placeholder="搜索歌手" v-model="value" @keydown.13="Serve" />
			<router-link to='tjgz'>取消</router-link>
		</header>
		<div class="xinxi">
			<ul v-if="value" class="xinxi2" ref="aalist">
				<router-link 
				v-for="item in musicList"
				:key="item.id"
				:to="{name:'Geshou',query: { geshouId: item.artist.id}}"
				>
					<li>
						 {{ item.artist.name }}
					</li>
				</router-link>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import axios from 'axios'
	import Footer from '@/components/footer/index.vue'
	export default {
		data() {
			return {
				value: '',
				musicList: []
			}
		},
		components: {
			Footer
		},
		methods: {
			Serve() {
				if (this.value) {
					axios
						.get(`http://localhost:3000/search?type=10&keywords=` + this.value)
						.then(res => {
							console.log(res.data.result.albums);
							this.musicList = res.data.result.albums;

							this.$refs.aalist.style.display = 'block'

						});
				} else {
					this.musicList = []
				}
			}
		}
	}
</script>

<style scoped>
	.main .header {
		height: 3.56rem;
		width: 100%;
		background: white;
		display: flex;
	}

	.main .header a {
		width: 3.5rem;
		text-align: center;
		align-self: center;
		color: red;
		border: red solid 0.0625rem;
		border-radius: 1rem;
	}

	.main .header .ipt {
		color: #493e3d;
		background-color: #de635c;
	}

	.main .header .van-search {
		background: white !important;
		flex: 1
	}

	.main .xinxi {
		flex: 1;
		overflow-y: auto;
	}

	.main .xinxi .xinxi2 {
		width: 100%;
		overflow-y: auto;
		background: powderblue;
		box-sizing: border-box;
		padding: 1rem 1.5rem 3rem;
		display: none
	}

	.main .xinxi .xinxi2 li {
		cursor: pointer;
		line-height: 2.5rem;
		border-bottom: 1px solid white;
		font-size: 1rem;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
