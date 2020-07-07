<template>
  <div class="naver">
    <div class="nav">
      <ul>
        <li>
          <router-link to="project">
            <img src="@/img/tb304.png" />
            <span>发动态</span>
          </router-link>
        </li>
        <li>
          <router-link to="project">
            <img src="@/img/tb305.png" />
            <span>发短视频</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="dong" v-for="(item) in list" :key="item.id">
      <div class="box">
        <img :src="item.user.avatarUrl" />
      </div>
      <p>
        {{item.user.nickname}}
        <span>发布了：</span>
      </p>
      <h6>{{item.showTime | dateFormat}}</h6>
      <h5>{{JSON.parse(item.json).msg}}</h5>
      <div class="box1">
        <img :src="item.pics[0].rectangleUrl" />
      </div>
      <ul>
        <li>
          <img @click="item.info.likedCount++" src="@/img/tb306.png" />
          {{item.info.likedCount}}
        </li>
        <li>
          <img src="@/img/tb307.png" />
          {{item.info.commentCount}}
        </li>
        <li>
          <img src="@/img/tb308.png" />
          <router-link to="project">转发</router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="bofang">

	<div class="naver">
		<div class="nav">
			<ul>
				<li><router-link to='project'><img src="@/img/tb304.png"><span>发动态</span></router-link></li>
				<li><router-link to='project'><img src="@/img/tb305.png"><span>发短视频</span></router-link></li>
			</ul>
		</div>
		<div class="dong" v-for="(item,id) in list" :key="item.id">
			<div class="box">
				<img :src="item.user.avatarUrl">
			</div>
			<p>{{item.user.nickname}}<span>发布了：</span></p>
			<h6>{{item.showTime | dateFormat}}</h6>
			<h5>{{JSON.parse(item.json).msg}}</h5>
			<div class="box1">
				<img :src="item.pics[0].rectangleUrl">
			</div>
			<div class="audio">
				<img :src="JSON.parse(item.json).song.album.picUrl">
				<p>{{JSON.parse(item.json).song.name}}</p>
				<span>{{JSON.parse(item.json).song.artists[0].name}}</span>
			</div>
			<ul>
				<li><img @click="item.info.likedCount++" src="@/img/tb306.png">{{item.info.likedCount}}</li>
				<li><img src="@/img/tb307.png">{{item.info.commentCount}}</li>
				<li><img src="@/img/tb308.png"><router-link to='project'>转发</router-link></li>
			</ul>
		</div>
		<div class="bofang">
			<div class="datu">
				<img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4284518401,1515248953&fm=26&gp=0.jpg">
				<p>#为喜欢的人做过的那些改变<br><span>xxx人参与</span></p>
			</div>
    </div>-->
    <div class="dong1">
      <div class="box">
        <img src="http://img3.imgtn.bdimg.com/it/u=4263012681,2831933206&fm=26&gp=0.jpg" />
      </div>
      <p>
        网易云音乐
        <span>转发：</span>
      </p>
      <h6>13.23</h6>
      <span class="guanzhu">关注+</span>
      <h5>#歌单推荐#仿佛看完了好几场演唱会</h5>
      <div class="box1">
        <h4>@云音乐歌单之友 分享歌单：您的假期余额仅剩半天，想嗨请从速！</h4>
        <img src="../../img/tb303.png" />
        <div class="box2">
          <img src="../../img/tb303.png" />
          <h3>
            那些惊艳嗨翻天的华语现场...
            <br />
            <span>by 雾与晨</span>
          </h3>
        </div>
      </div>
      <ul>
        <li>
          <img src="@/img/tb306.png" />26
        </li>
        <li>
          <img src="@/img/tb307.png" />26
        </li>
        <li>
          <img src="@/img/tb308.png" />转发
        </li>
      </ul>
    </div>
    <div class="hots">
      <h2>热门话题&nbsp;&gt;</h2>
      <ul>
        <li>
          <img src="@/img/tb309.png" />
        </li>
        <li>
          <img src="@/img/tb310.png" />
        </li>
        <li>
          <img src="@/img/tb311.png" />
        </li>
      </ul>
    </div>
    <div class="dong2">
      <div class="box">
        <img src="http://img0.imgtn.bdimg.com/it/u=1339525308,2468653122&fm=11&gp=0.jpg" />
      </div>
      <p>
        网易云音乐
        <span>转发：</span>
      </p>
      <h6>13.23</h6>
      <span class="guanzhu">关注+</span>
      <h5>自然界中一些“隐形”的生物，这种有点透明的样子很神奇也很萌呀，可能这也是一种透明的保护色吧。</h5>
      <div class="box1">
        <ul>
          <li>
            <img src="@/img/tb312.png" />
          </li>
          <li>
            <img src="@/img/tb312.png" />
          </li>
          <li>
            <img src="@/img/tb312.png" />
          </li>
          <li>
            <img src="@/img/tb312.png" />
          </li>
        </ul>
        <div class="box2">
          <img src="../../img/tb303.png" />
          <h3>
            那些惊艳嗨翻天的华语现场...
            <br />
            <span>by 雾与晨</span>
          </h3>
        </div>
      </div>
      <ul>
        <li>
          <img src="@/img/tb306.png" />26
        </li>
        <li>
          <img src="@/img/tb307.png" />26
        </li>
        <li>
          <img src="@/img/tb308.png" />转发
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.axios
      .get('/info/user/event?uid=' + this.$cookies.get('id'))
      .then(res => {
        console.log(res)
        this.list = res.data.events
      })
  }
}
</script>

<style scoped>
.nav {
  background-color: red;
  border-bottom: #eeeff0 0.25rem solid;
}

.nav > ul {
  display: flex;
  justify-content: space-around;
}

.nav > ul > li > span {
  color: white;
  line-height: 1.5rem;
}

.nav > ul > li > a > img {
  width: 1.5rem;
  height: 1.5rem;
  display: inline;
}

.dong {
  float: left;
  background: white;
  width: 100%;
  min-height: 20rem;
  position: relative;
}

.dong .box img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: pink;
  margin: 0.625rem 0 0 0.625rem;
}

.dong p {
  font-size: 0.875rem;
  margin: -2.25rem 0 0 3.75rem;
}

.dong p > span {
  margin-left: 1.25rem;
}

.dong h6 {
  margin-left: 3.75rem;
  margin-top: 0.125rem;
}

/* .dong .guanzhu {
=======
>>>>>>> lzm
.nav {
  background-color: red;
  border-bottom: #eeeff0 0.25rem solid;
}

.nav > ul {
  display: flex;
  justify-content: space-around;
}

.nav > ul > li > span {
  color: white;
  line-height: 1.5rem;
}

.nav > ul > li > a > img {
  width: 24px;
  height: 24px;
  display: inline;
}

.dong {
  float: left;
  background: white;
  width: 100%;
  min-height: 20rem;
  position: relative;
}

.dong .box img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: pink;
  margin: 0.625rem 0 0 0.625rem;
}

.dong p {
  font-size: 0.875rem;
  margin: -2.25rem 0 0 3.75rem;
}

.dong p > span {
  margin-left: 1.25rem;
}

.dong h6 {
  margin-left: 3.75rem;
  margin-top: 0.125rem;
}

/* .dong .guanzhu {
<<<<<<< HEAD
=======
=======
>>>>>>> lzm
	.nav {
		background-color: red;
		border-bottom: #eeeff0 0.25rem solid;
	}

	.nav>ul {
		display: flex;
		justify-content: space-around;
	}

	.nav>ul>li>a>span {
		color: white;
		line-height: 1.5rem;
	}

	.nav>ul>li>a>img {
		width: 24px;
		height: 24px;
		display: inline;

	}

	.dong {
		float: left;
		background: white;
		width: 100%;
		min-height: 20rem;
		position: relative;
	}

	.dong .box img {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: pink;
		margin: 0.625rem 0 0 0.625rem;
	}

	.dong p {
		font-size: 0.875rem;
		margin: -2.25rem 0 0 3.75rem;
	}

	.dong p>span {
		margin-left: 1.25rem;
	}

	.dong h6 {
		margin-left: 3.75rem;
		margin-top: 0.125rem;
	}

	/* .dong .guanzhu {
<<<<<<< HEAD
>>>>>>> f1d4f96c35fafa9d4cfce38bd3c9b1bfa191d8c5
=======
>>>>>>> lzm
		background: red;
		border-radius: 0.875rem;
		margin-left: 18.875rem;
		padding: 0.3125rem;
		color: white;
		position: absolute;
		top: 0.875rem;
	}
 */

.dong h5 {
  margin-left: 3.75rem;
}

.dong .box1 img {
  width: 15.625rem;
  height: 9.375rem;
  background: rgba(217, 217, 217, 1);
  margin-left: 3.75rem;
}

.dong ul > li > img {
  width: 0.875rem;
  height: 0.875rem;
  display: inline;
}

.dong ul {
  /* margin-top: 0.625rem; */
  padding: 1.25rem;
  display: flex;
  justify-content: space-around;
}

/* .bofang {
<<<<<<< HEAD
=======
=======
>>>>>>> lzm
	.dong h5 {
		margin-left: 3.75rem;
	}

	.dong .box1 img {
		width: 15.625rem;
		height: 9.375rem;
		background: rgba(217, 217, 217, 1);
		margin-left: 3.75rem;
	}

	.dong ul>li>img {
		width: 0.875rem;
		height: 0.875rem;
		display: inline;
	}
	.dong .audio{
		width: 60.5%;
		height: 2.5rem;
		background: #f1f3f2;
		margin-left: 14.5%;
		cursor:pointer;}
	.dong .audio img{width: 2.5rem;height: 2.5rem;display: inline;}
	.dong .audio p{font-size: 0.75rem;margin-top: -2.55rem;}
	.dong .audio span{font-size: 0.625rem;margin-left:4rem ;}
	.dong ul {
		/* margin-top: 0.625rem; */
/* padding: 1.25rem;
		display: flex;
		justify-content: space-around;
	} */

/* .bofang {
>>>>>>> f1d4f96c35fafa9d4cfce38bd3c9b1bfa191d8c5
=======
/* .bofang {
>>>>>>> lzm
		width: 100%;
		height: 11.25rem;
		margin-top: 20rem;
		background: #eeeff0;
		position: relative;
	}

	.bofang .datu img {
		width: 18.75rem;
		height: 10.3125rem;
		position: absolute;
		top: 0.5rem;
		left: 2.5rem;
	}

	.bofang .datu p {
		position: absolute;
		text-align: center;
		margin-top: 3.75rem;
		margin-left: 6rem;
	} */

.dong1 {
  float: left;
  background: white;
  width: 100%;
  min-height: 20rem;
  position: relative;
  border-bottom: 0.3125rem rgba(217, 217, 217, 1) solid;
}

.dong1 .box img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: pink;
  margin: 0.625rem 0 0 0.625rem;
}

.dong1 p {
  font-size: 0.875rem;
  margin: -2.25rem 0 0 3.75rem;
}

.dong1 p > span {
  margin-left: 1.25rem;
}

.dong1 h6 {
  margin-left: 3.75rem;
  margin-top: 0.125rem;
}

.dong1 .guanzhu {
  background: red;
  border-radius: 0.875rem;
  margin-left: 18.875rem;
  padding: 0.3125rem;
  color: white;
  position: absolute;
  top: 0.875rem;
}

.dong1 h5 {
  margin-left: 3.75rem;
}

.dong1 .box1 {
  width: 16.25rem;
  height: 15rem;
  background: rgba(217, 217, 217, 1);
  margin-left: 3.75rem;
}

.dong1 ul > li > img {
  width: 0.875rem;
  height: 0.875rem;
  display: inline;
}

.dong1 .box1 h4 {
  font-size: 0.75rem;
}

.dong1 .box1 img {
  height: 8.75rem;
  width: 8.75rem;
}

.dong1 .box1 .box2 {
  width: 15rem;
  height: 3.75rem;
  background-color: white;
  margin-left: 0.625rem;
}

.dong1 .box1 .box2 img {
  width: 2.75rem;
  height: 2.75rem;
  /* margin-top: 0.375rem; */
  padding-top: 0.5rem;
  margin-left: 0.25rem;
}

.dong1 .box1 .box2 h3 {
  font-size: 0.75rem;
  margin-left: 3.375rem;
  margin-top: -2.5rem;
}

.dong1 .box1 .box2 span {
  font-size: 0.625rem;
}

.dong1 ul {
  /* margin-top: 0.625rem; */
  padding: 1.25rem;
  display: flex;
  justify-content: space-around;
}

.hots {
  border-bottom: 0.3125rem rgba(217, 217, 217, 1) solid;
  width: 100%;
  height: 6.875rem;
  background-color: white;
  margin-top: 23.5rem;
}

.hots h2 {
  font-size: 0.875rem;
  padding: 0.625rem 0 0 0.625rem;
}

.hots ul {
  display: flex;
  justify-content: space-between;
  padding: 0.625rem;
}

.dong2 {
  float: left;
  background: white;
  width: 100%;
  min-height: 20rem;
  position: relative;
  border-bottom: white solid 3.125rem;
}

.dong2 .box img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: pink;
  margin: 0.625rem 0 0 0.625rem;
}

.dong2 p {
  font-size: 0.875rem;
  margin: -2.25rem 0 0 3.75rem;
}

.dong2 p > span {
  margin-left: 1.25rem;
}

.dong2 h6 {
  margin-left: 3.75rem;
  margin-top: 0.125rem;
}

.dong2 .guanzhu {
  background: red;
  border-radius: 0.875rem;
  margin-left: 18.875rem;
  padding: 0.3125rem;
  color: white;
  position: absolute;
  top: 0.875rem;
}

.dong2 h5 {
  margin-left: 3.75rem;
}

.dong2 .box1 {
  width: 16.25rem;
  min-height: 15rem;
  /* background: rgba(217, 217, 217, 1); */
  margin-left: 3.75rem;
}

.dong2 .box1 ul {
  display: flex;
  flex-wrap: wrap;
}

.dong2 .box1 ul > li > img {
  width: 5rem;
  height: 5rem;
}

.dong2 ul > li > img {
  width: 0.875rem;
  height: 0.875rem;
  display: inline;
}

.dong2 .box1 .box2 {
  width: 15rem;
  height: 3.75rem;
  background-color: white;
  margin-left: 0.625rem;
}

.dong2 .box1 .box2 img {
  width: 2.75rem;
  height: 2.75rem;
  /* margin-top: 0.375rem; */
  padding-top: 0.5rem;
  margin-left: 0.25rem;
}

.dong2 .box1 .box2 h3 {
  font-size: 0.75rem;
  margin-left: 3.375rem;
  margin-top: -2.5rem;
}

.dong2 .box1 .box2 span {
  font-size: 0.625rem;
}

.dong2 ul {
  /* margin-top: 0.625rem; */
  padding: 1.25rem;
  display: flex;
  justify-content: space-around;
}
</style>
