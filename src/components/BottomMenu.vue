<template>
	<div>
		<!-- 하단 메뉴 -->
		<section class="menu">
			<div>
				<router-link to="/">
					<button>
						<img src="../assets/images/search/home.png" alt="" />
						<p>홈</p>
					</button>
				</router-link>
			</div>
			<div>
				<router-link to="/movienow" @click.native="changeRouter('movienow')">
					<button>
						<img src="../assets/images/search/released.png" alt="" />
						<p>상영중</p>
					</button>
				</router-link>
			</div>
			<div>
				<router-link to="/upcoming" @click.native="changeRouter('upcoming')">
					<button>
						<img src="../assets/images/search/upcoming.png" alt="" />
						<p>개봉예정</p>
					</button>
				</router-link>
			</div>
			<div>
				<router-link to="/search" @click.native="changeRouter('search')">
					<button>
						<!-- tab 변수가 search 면 mint_...파일 불러오기 -->
						<img
							v-if="tab === 'search'"
							src="../assets/images/round/icon-search-on.png"
							alt=""
						/>
						<p v-if="tab === 'search'" class="mint">검색</p>
						<!-- tab 변수가 다른거면 흰색 이미지 불러오기 -->
						<img v-else src="../assets/images/round/icon-search.png" alt="" />
						<p>검색</p>
					</button>
				</router-link>
			</div>
			<div>
				<router-link to="/popular" @click.native="changeRouter('popular')">
					<button>
						<img src="../assets/images/search/popular.png" alt="" />
						<p>인기콘텐츠</p>
					</button>
				</router-link>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tab: ''
		};
	},
	methods: {
		changeRouter(type) {
			this.tab = type;
			console.log(this.tab);
		}
	}
};
</script>

<style scoped>
.menu {
	display: flex;
	background-color: #13131b;
	padding: 0px;
	position: fixed;
	bottom: 0;
	height: 54px;
	width: 100%;
	position: fixed;
	left: 0;
	z-index: 1;
	bottom: 0;
}
.menu div {
	width: 25%;
	list-style: none;
}
.menu div p {
	text-align: center;
}
.menu button {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 11px;
	color: #ffffff;
}
.menu p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.mint {
	color: #42ff8f;
}
button,
input,
button:focus {
	border: none;
	cursor: pointer;
	outline: none;
	background-color: unset;
	color: #ffffff;
}
.menu button img {
	margin: 0 auto;
	margin-top: 10px;
	margin-bottom: -5px;
	width: 16px;
	height: 18px;
}
</style>
