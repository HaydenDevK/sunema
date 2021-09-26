<template>
  <div id="wrap">
      <header>
        <h1 class="logo">
          <router-link to="">SUNEMA</router-link>
        </h1>
        <nav>
          <router-link to="">영화</router-link>
          <router-link to="">TV프로그램</router-link>
          <router-link to="">카테고리</router-link>
        </nav>
      </header>
      <div id="container">
        <ul class="visual">
          <li>
            <router-link to="">
              <img src="../assets/main/img_main_poster.png" alt="" />
              <div class="banner-text">
                <strong>바르트코비아크</strong>
                <p>Bartkowiak</p>
                <router-link to="" class="btn-more">자세히 보기</router-link>
              </div>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="">
              <img src="../assets/main/img_main_poster.png" alt="" />
              <div class="banner-text">
                <strong>바르트코비아크</strong>
                <p>Bartkowiak</p>
                <router-link to="" class="btn-more">자세히 보기</router-link>
              </div>
          </a>
          </li> -->
        </ul>
        <div class="contents">
          <section class="popular">
            <div class="title-box">
              <h2>인기 콘텐츠</h2>
              <div class="streaming">
                <p>스트리밍 ON</p>
                <input type="checkbox" id="str" checked />
                <label for="str"><p>선택</p></label>
              </div>
            </div>
            <ul>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular01.png" alt="" />
                  <p class="number">1</p>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular02.png" alt="" />
                  <p class="number">2</p>
                </router-link>
              </li>
              <!-- <li>
                <router-link to="">
                  <img src="../assets/main/img_popular03.png" alt="" />
                  <p class="number">3</p>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular04.png" alt="" />
                  <p class="number">4</p>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular05.png" alt="" />
                  <p class="number">5</p>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular06.png" alt="" />
                  <p class="number">6</p>
                </router-link>
              </li> -->
            </ul>
            <router-link to="">전체보기</router-link>
          </section>
          <section class="now-playing">
            <h2>현재 상영중</h2>
            <ul>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_nowPlaying01.png" alt="" />
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_nowPlaying02.png" alt="" />
                </router-link>
              </li>
              <!-- <li>
                <router-link to="">
                  <img src="../assets/main/img_nowPlaying03.png" alt="" />
                </router-link>
                </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_nowPlaying04.png" alt="" />
                </router-link>
                </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_nowPlaying05.png" alt="" />
                </router-link>
                </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_nowPlaying06.png" alt="" />
                </router-link>
                </li> -->
            </ul>
            <router-link to="">전체보기</router-link>
          </section>
          <section class="upcoming">
            <h2>개봉 예정</h2>
            <ul>
              <li>
                <router-link to="">
                  <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/gQJ0RQ9e01s" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  ></iframe>
                </router-link>
              </li>
            </ul>
            <router-link to="">전체보기</router-link>
          </section>
          <section class="free-contents">
            <div class="title-box">
              <h2>무료 콘텐츠</h2>
              <ul class="tab-btn">
                <li class="active">영화</li>
                <li>TV</li>
              </ul>
            </div>
            <div class="tab-contents">
              <!-- 영화 -->
              <ul class="active">
                <li>
                  <router-link to="">
                    <figure>
                      <img
                        src="../assets/main/img_free_tv01.png"
                        alt=""
                      />
                      <figcaption>
                        <p>스니치 : 마약과의 전쟁(2012)</p>
                        <router-link to="">자세히보기</router-link>
                      </figcaption>
                    </figure>
                  </router-link>
                </li>
                <!-- <li>
                  <router-link to="">
                    <figure>
                      <img
                        src="../assets/main/img_free_tv02.png"
                        alt=""
                      />
                      <figcaption>
                        <p>스니치 : 마약과의 전쟁(2012)</p>
                        <router-link to="">자세히보기</router-link>
                      </figcaption>
                    </figure>
                  </router-link>
                </li> -->
              </ul>
              <!-- // 영화 -->
              <!-- TV -->
              <ul>
                <li>
                  <router-link to="">
                    <figure>
                      <img
                        src="../assets/main/img_free_tv01.png"
                        alt=""
                      />
                      <figcaption>
                        <p>스니치 : 마약과의 전쟁(2012)</p>
                        <router-link to="">자세히보기</router-link>
                      </figcaption>
                    </figure>
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    <figure>
                      <img
                        src="../assets/main/img_free_tv02.png"
                        alt=""
                      />
                      <figcaption>
                        <p>스니치 : 마약과의 전쟁(2012)</p>
                        <router-link to="">자세히보기</router-link>
                      </figcaption>
                    </figure>
                  </router-link>
                </li>
              </ul>
              <!-- // TV -->
            </div>
            <router-link to="">전체보기</router-link>
          </section>
          <section class="trending">
            <div class="title-box">
              <h2>지금 뜨는 콘텐츠</h2>
              <ul class="tab-btn">
                <li class="active">오늘</li>
                <li>이번주</li>
              </ul>
            </div>
            <div class="tab-contents">
              <!-- 오늘 -->
              <ul class="active">
                <li>
                  <router-link to="">
                    <img
                      src="../assets/main/img_nowPlaying01.png"
                      alt=""
                    />
                  </router-link>
                </li>
                <!-- <li>
                  <router-link to="">
                    <img
                      src="../assets/main/img_nowPlaying02.png"
                      alt=""
                    />
                  </router-link>
                </li> -->
              </ul>
              <!-- // 오늘 -->
              <!-- 이번주 -->
              <ul>
                <li>
                  <router-link to="">
                    <img
                      src="../assets/main/img_nowPlaying03.png"
                      alt=""
                    />
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    <img
                      src="../assets/main/img_nowPlaying04.png"
                      alt=""
                    />
                  </router-link>
                </li>
              </ul>
              <!-- // 이번주 -->
            </div>
            <router-link to="">전체보기</router-link>
          </section>
          <section class="today-tv">
            <h2>오늘 방영할 TV프로그램</h2>
            <ul>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular01.png" alt="" />
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <img src="../assets/main/img_popular02.png" alt="" />
                </router-link>
              </li>
              <!-- <li>
                <img src="../assets/main/img_popular03.png" alt="" />
              </li>
              <li>
                <img src="../assets/main/img_popular04.png" alt="" />
              </li>
              <li>
                <img src="../assets/main/img_popular05.png" alt="" />
              </li>
              <li>
                <img src="../assets/main/img_popular06.png" alt="" />
              </li> -->
            </ul>
            <router-link to="">전체보기</router-link>
          </section>
          <section class="popular-actor">
            <h2>인기 배우</h2>
            <ul class="actor-list">
              <li>
                <figure>
                  <img
                    src="../assets/main/img_actor01.png"
                    alt=""
                  />
                  <figcaption>
                    <strong>Margot Robbie</strong>
                    <p>더 울프 오브 월 스트리트, 수어사이드스쿼드, 어찌구저찌구</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="../assets/main/img_actor02.png"
                    alt=""
                  />
                  <figcaption>
                    <strong>Katherine LaNasa</strong>
                    <p>그레이 아나토미, 하우스, 발렌타인 데이, 어찌구저찌구</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="../assets/main/img_actor03.png"
                    alt=""
                  />
                  <figcaption>
                    <strong>Hande Erçel</strong>
                    <p>Sen Çal Kapımı, Güneşin Kızlarırtsasf, 어찌구저찌구</p>
                  </figcaption>
                </figure>
              </li>
              <!-- <li>
                <figure>
                  <img
                    src="../assets/main/img_actor01.png"
                    alt=""
                  />
                  <figcaption>
                    <strong>Margot Robbie</strong>
                    <p>더 울프 오브 월 스트리트, 수어사이드스쿼드, 어찌구저찌구</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="../assets/main/img_actor02.png"
                    alt=""
                  />
                  <figcaption>
                    <strong>Katherine LaNasa</strong>
                    <p>그레이 아나토미, 하우스, 발렌타인 데이, 어찌구저찌구</p>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    src="../assets/main/img_actor03.png"
                    alt=""
                  />
                  <figcaption>
                    <strong>Hande Erçel</strong>
                    <p>Sen Çal Kapımı, Güneşin Kızlarırtsasf, 어찌구저찌구</p>
                  </figcaption>
                </figure>
              </li> -->
            </ul>
            <router-link to="">전체보기</router-link>
          </section>
        </div>
      </div>
      <footer></footer>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('../assets/css/reset.css');
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
* {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
}

#wrap {
  width: 100%;
  min-width: 320px;
  background: #181727;
}

/* 로고,네비 */
header {
  width: 100%;
  min-width: 320px;
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
}
header .logo {
  padding: 16px 0 0 31px;
}
#wrap header .logo a {
  font-size: 4.35vw;
  letter-spacing: -.02em;
  color: #43ff8e;
  line-height: 6.28vw;
  font-weight: 900;
}
#wrap header nav {
  padding-top: 15.5px;
  width: calc(100% - 84px);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
#wrap header nav a {
  font-size: 4.35vw;
  line-height: 5.56vw;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/****************** 본문 ******************/
#continaer {
  width: 100%;
}

/* 비주얼 */
#container .visual {
  width: 100%;
  height: 133.46vw;
  position: relative;
  overflow:hidden;
}
#container .visual::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 127px;
  background: linear-gradient(180deg, #181727 0%, rgba(25, 25, 64, 0) 100%);
}
#container .visual::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 301.5px;
  background: linear-gradient(
    359.75deg,
    rgba(24, 23, 39, 0.98) 42.71%,
    rgba(25, 25, 64, 0) 99.82%
  );
}
#container .visual li {
  width:100%;
  height:100%;
  font-size:0;
}
#container .visual li a {
  display:block;
  height:100%;
}
#container .visual li img {
  width: 100%;
}
#container .visual li .banner-text {
  width: 65.3%;
  position: absolute;
  left: 50%;
  bottom: 56.5px;
  z-index: 10;
  transform: translateX(-50%);
}
#container .visual li .banner-text strong {
  display: block;
  color: #fff;
  font-size: 9.66vw;
  line-height: 11.59vw;
  letter-spacing: 0.25px;
  text-align: center;
}
#container .visual li .banner-text p {
  color: #fff;
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  text-align: center;
}
#container .visual li .banner-text .btn-more {
  display: block;
  width:36.23vw;
  margin: 18px auto 0;
  padding: 1.93vw 3.86vw;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2.42vw;
  font-size: 4.35vw;
  line-height: 5.56vw;
  color: #fff;
  letter-spacing: -0.02em;
}
#container .visual li .banner-text .btn-more::before {
  content:"";
  display:block;
  float:left;
  width:3.38vw;
  height:5.56vw;
  background:url("../assets/main/icon_plus.png") no-repeat center center;
  background-size:3.38vw;
  margin-right:2.42vw;
}
#container .visual li .banner-text .btn-more::after {
  content:"";
  display:block;
  clear:both;
}

/* 콘텐츠 */
#container .contents {
  width:100%;
  padding:0 24px 61px;
}
#container .contents section {
  position:relative;
  width: 100%;
  margin-top:25.5px;
}
#container .contents section:first-child {
  margin-top:0;
}
#container .contents section h2 {
  display:block;
  font-size: 5.07vw;
  font-weight: 700;
  line-height: 6.28vw;
  color: #fff;
}
#container .contents section .title-box {
  display:flex;
  justify-content:left;
  align-items: center;
}
#container .contents section .title-box .streaming,
#container .contents section .title-box .tab-btn {
  display:flex;
  justify-content:left;
  align-items: center;
  margin-left:11px;
}

#container .contents section .title-box .streaming p {
  padding:5.5px 0;
  font-size: 2.9vw;
  line-height: 3.62vw;
  letter-spacing: 0.25px;
  color: #fff;
}
#container .contents section .title-box .streaming input[type=checkbox] {
  display:none;
}
#container .contents section .title-box .streaming label {
  position:relative;
  display:block;
  width:8.95vw;
  height:3.38vw;
  border-radius:1.69vw;
  background:#8187AD;
  margin-left:10px;
  transition: .1s;
}
#container .contents section .title-box .streaming label p {
  text-indent:-9999px;
}
#container .contents section .title-box .streaming label::after {
  content:"";
  display:block;
  width:5.26vw;
  height:4.83vw;
  background:#fff;
  border-radius:4.83vw;
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
  transition: .1s;
}
#container .contents section .title-box .streaming input[type=checkbox]:checked + label {
  background:#43FF8E;
}
#container .contents section .title-box .streaming input[type=checkbox]:checked + label::after {
  left:3.86vw;
}

#container .contents section > ul {
  margin-top:16.5px;
  display:flex;
  justify-content: left;
}
#container .contents section > ul li {
  position:relative;
  width:40.4%;
  margin-left:16px;
  font-size:0;
}
#container .contetns section > ul li > a {
  display:block;
}
#container .contents section > ul li:first-child {
  margin-left:0;
}
#container .contents section > ul li img {
  width:100%;
  border-radius:5px;
}
#container .contents section > ul li .number {
  position:absolute;
  left:5px;
  top:0;
  font-size:8.7vw;
  line-height:10.39vw;
  color:#fff;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
#container .contents section > a {
  display:block;
  position:absolute;
  right:0;
  top:5.5px;
  font-size:2.9vw;
  line-height:3.62vw;
  font-weight:700;
  color: rgba(255, 255, 255, 0.8);
}
#container .contents .upcoming ul li {
  width:69.67%;
}
#container .contents .upcoming ul li a {
  display:block;
  position:relative;
  padding-top:56%;
  width:100%;
  height:0;
}
#container .contents .upcoming ul li iframe {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:5px;
}
#container .contents section .tab-btn::after {
  content:"";
  display:block;
  clear:both;
}
#container .contents section .tab-btn li {
  position:relative;
  float:left;
  display:block;
  font-size:4.35vw;
  font-weight:700;
  line-height:6.28vw;
  letter-spacing:-0.02em;
  color: rgba(255, 255, 255, 0.5);
  padding-left:10px;
  margin-left:10px;
}
#container .contents section .tab-btn li::after {
  content:"";
  display:block;
  width:1px;
  height:4.83vw;
  background:#fff;
  position:absolute;
  left:0;
  top:50%;
  transform:translateY(-50%);
}
#container .contents section .tab-btn li:first-child {
  padding-left:0;
  margin-left:0;
}
#container .contents section .tab-btn li:first-child::after {
  display:none;
}
#container .contents section .tab-btn li.active {
  color:#fff;
}
#container .contents section .tab-contents {
  margin-top:16.5px;
}
#container .contents section .tab-contents ul {
  display:none;
}
#container .contents section .tab-contents ul.active {
  display:block;
}
#container .contents section .tab-contents ul li {
  width:80.8%;
}
#container .contents .free-contents figure {
  width:100%;
  display:flex;
  justify-content:left;
}
#container .contents .free-contents figure img {
  width:50%;
  border-radius:5px 0 0 5px / 5px 0 0 5px;
}
#container .contents .free-contents figure figcaption {
  position:relative;
  width:50%;
  background: #212634;
  border-radius: 0 5px 5px 0 / 0 5px 5px 0;
  padding:7.97vw 5.31vw;
  color:#fff;
}
#container .contents .free-contents figure figcaption p {
  font-size:3.38vw;
  font-weight:700;
  line-height:4.35vw;
  letter-spacing:-0.02em;
}
#container .contents .free-contents figure figcaption a {
  display:block;
  position:absolute;
  left:50%;
  bottom:33px;
  transform:translateX(-50%);
  width:21.74vw;
  line-height:6.28vw;
  border:1px solid #43FF8E;
  border-radius:2.42vw;
  font-size:3.38vw;
  color:#43FF8E;
  text-align:center;
}
#container .contents .trending .tab-contents ul li {
  width:56.5%;
}
#container .contents .trending .tab-contents ul li img {
  width:100%;
  border-radius:5px;
}
#container .contents .popular-actor .actor-list {
  display:block;
  width:100%;
}
#container .contents .popular-actor .actor-list li {
  width:100%;
  margin-left:0;
  margin-top:16px;
}
#container .contents .popular-actor .actor-list li:first-child {
  margin-top:0;
}
#container .contents .popular-actor .actor-list li figure {
  width:100%;
  display:flex;
}
#container .contents .popular-actor .actor-list li figure img {
  width:18.841vw;
  border-radius:5px 0 0 5px / 5px 0 0 5px;
}
#container .contents .popular-actor .actor-list li figure figcaption {
  width: calc(100% - 18.841vw);
  background: #212634;
  border-radius: 0 5px 5px 0 / 0 5px 5px 0;
  color:#fff;
  padding:3.38vw 2.05vw 1.76vw;
}
#container .contents .popular-actor .actor-list li figure figcaption strong {
  font-size:4.35vw;
  font-weight:700;
  line-height:5.56vw;
  letter-spacing:-0.02em;
}
#container .contents .popular-actor .actor-list li figure figcaption p {
  font-size:2.9vw;
  line-height:3.62vw;
  letter-spacing:0.25px;
  padding:8px 0 0 2px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 1024px) {
  /* 로고,네비 */
  header {
    display:flex;
    justify-content: left;
    padding:11px 31px 16px;
    position:static;
  }
  header .logo {
    padding: 0;
  }
  #wrap header .logo a {
    display:block;
    font-size: 2.34vw;
    line-height: 3.42vw;
  }
  #wrap header nav {
    padding-top: 0;
    width: 32.23vw;
    margin: 0 0 0 17px;
  }
  #wrap header nav a {
    font-size: 2.05vw;
    line-height:3.42vw;
  }

  /* 비주얼 */
  #container .visual {
    height: 56.25vw;
  }
  #container .visual::before {
    display: none;
  }
  #container .visual::after {
    display: none;
  }
  #container .visual li .banner-text {
    width: auto;
    bottom: 61px;
  }
  #container .visual li .banner-text strong {
    font-size: 5.27vw;
    line-height: 6.35vw;
  }
  #container .visual li .banner-text p {
    font-size: 2.34vw;
    line-height: 3.42vw;
  }
  #container .visual li .banner-text .btn-more {
    width:20.118vw;
    padding: 0.78vw 3.03vw;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 0.98vw;
    font-size: 2.34vw;
    line-height: 3.42vw;
    letter-spacing: 0.25px;
  }
  #container .visual li .banner-text .btn-more::before {
    width:1.37vw;
    height:3.42vw;
    background-size:1.37vw;
    margin-right:0.98vw;
  }

  /* 콘텐츠 */
  #container .contents section {
    margin-top:29px;
  }
  #container .contents section:first-child {
    margin-top:29px;
  }
  #container .contents section h2 {
    font-size: 2.93vw;
    line-height: 3.71vw;
  }
  #container .contents section .title-box .streaming,
  #container .contents section .title-box .tab-btn {
    margin-left:32px;
  }

  #container .contents section .title-box .streaming p {
    font-size: 2.34vw;
    line-height: 3.71vw;
  }
  #container .contents section .title-box .streaming label {
    width:5.27vw;
    height:2.17vw;
    border-radius:2.44vw;
  }
  #container .contents section .title-box .streaming label::after {
    width:3.1vw;
    height:3.1vw;
    border-radius:3.1vw;
  }
  #container .contents section .title-box .streaming input[type=checkbox]:checked + label::after {
    left:2.2vw;
  }
  #container .contents section > ul {
    margin-top:18px;
  }
  #container .contents section > ul li {
    width:19.06vw;
    margin-left:24px;
  }
  #container .contents section > ul li .number {
    left:5.59px;
    top:-6px;
    font-size:5.08vw;
    line-height:6.05vw;
  }
  #container .contents section > a {
    top:11px;
    font-size:2.05vw;
    line-height:2.54vw;
  }
  #container .contents .upcoming ul li {
    width:41.60vw;
  }
  #container .contents section .tab-btn li {
    font-size:2.34vw;
    font-weight:500;
    line-height:3.42vw;
  }
  #container .contents section .tab-btn li::after {
    height:1.95vw;
  }
  #container .contents section .tab-contents {
    margin-top:18px;
  }
  #container .contents section .tab-contents ul li {
    width:35.35vw;
  }
  #container .contents .free-contents figure figcaption {
    padding:4.2vw 2.09vw 4.39vw;
  }
  #container .contents .free-contents figure figcaption p {
    font-size:2.05vw;
    line-height:2.54vw;
  }
  #container .contents .free-contents figure figcaption a {
    width:11.79vw;
    line-height:3.22vw;
    border-radius:1.95vw;
    font-size:1.76vw;
    bottom:4.39vw;
  }
  #container .contents .trending .tab-contents ul li {
    width:19.06vw;
  }
  #container .contents .popular-actor .actor-list {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #container .contents .popular-actor .actor-list li {
    width:calc(50% - 10px);
    margin-top:24px;
  }
  #container .contents .popular-actor .actor-list li:first-child,
  #container .contents .popular-actor .actor-list li:nth-child(2) {
    margin-top:0;
  }
  #container .contents .popular-actor .actor-list li figure img {
    width:10.65vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption {
    width: calc(100% - 10.65vw);
    padding:19.56px 29.42px 23.12px;
  }
  #container .contents .popular-actor .actor-list li figure figcaption strong {
    font-size:2.05vw;
    line-height:2.54vw;
  }
  #container .contents .popular-actor .actor-list li figure figcaption p {
    font-size:1.76vw;
    line-height:2.25vw;
    font-weight:700;
    padding:17.32px 0 0 2px;
  }

}
</style>
