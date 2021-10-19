<template>
	<div id="search" class="bg-navy">
		<!-- Header -->
		<header>
			<div class="window">
				<img src="../assets/images/search/magnifier.png" alt="" />
				<input
					id="name"
					@keyup.enter="find(inputText)"
					v-model="inputText"
					type="text"
					placeholder="영화, TV프로그램, 배우 검색"
					onfocus="this.placeholder=''"
					onblur="this.placeholder='영화, TV프로그램, 배우 검색'"
					style="width: 186px;"
				/>
			</div>
			<div class="cancel">
				<button>취소</button>
			</div>
		</header>
		<!-- 검색 순위 -->
		<section class="ranking">
			<p>최다 검색</p>
			<div class="rank-padding">
				<div
					class="rank"
					v-for="(item, index) in $store.state.keyword.searchKeyword"
					:key="item.text"
				>
					<router-link to="">
						<span class="num-mint">{{ index + 1 }}</span> {{ item.text }}
					</router-link>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Search',
	data() {
		return { inputText: '' };
	},
	methods: {
		find(txt) {
			this.$store.dispatch('keyword/find', txt);
		},
		sort(a, b) {
			// 검색어 순위 정렬
			if (a.counter >= b.counter) {
				return 1;
			}
			return -1;
		}
	}
};
</script>

<style scoped>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

:root {
	--navy-color: #181727;
	--dark-navy-color: #13131b;
	--white-color: #ffffff;
	--mint-color: #42ff8f;
	--grey-color: #2e323e;
	--padding: 24px;
}
* {
	font-family: 'Spoqa Han Sans Neo', 'sans-serif';
	letter-spacing: 0.25px;
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
.bg-navy {
	width: 100%;
	min-height: 100%;
	background-color: #181727;
}
header {
	height: 80px;
	width: 100vw;
	padding: 23px 16px 17px;
	display: flex;
	color: #ffffff;
	justify-content: space-between;
	align-items: center;
}
header .window {
	font-size: 16px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px 16px;
	width: 100%;
	height: 40px;
	border-radius: 5px;
	background-color: #2e323e;
}
header input::placeholder {
	color: #ffffff;
}
header img {
	height: 13.56px;
	margin-left: 66.96px;
	margin-top: 13.22px;
	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 10px;
}
header input {
	margin-left: 10px;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 23px;
	margin-top: 8.5px;
	text-align: center;
	color: #ffffff;
	flex: none;
	order: 1;
	flex-grow: 0;
	margin: 0px 10px;
	font-style: normal;
	font-weight: normal;
}
header .cancel {
	line-height: 40px;
	flex-basis: 39px;
}
header .cancel button {
	width: 39px;
	display: inline-block;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 23px;
	text-align: right;
}
.ranking {
	color: #ffffff;
	font-size: 18px;
	line-height: 20px;
	letter-spacing: -0.02em;
	font-style: normal;
	font-weight: normal;
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: scroll;
	width: 100vw;
	height: calc(100vh - 139px);
}
.ranking p {
	margin-left: 13px;
	margin-top: 17px;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 23px;
	text-align: center;
	letter-spacing: -0.02em;
	width: 92px;
}
p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.rank-padding {
	width: 100%;
	height: 395.11px;
	padding: 0 26px;
	margin-top: 12.89px;
}
.ranking div a {
	display: inline-block;
	height: 40px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 18px;
}
.num-mint {
	display: inline-block;
	color: #42ff8f;
	padding-left: 10px;
	width: 40px;
}

.font-mint {
	color: #42ff8f;
}
</style>
