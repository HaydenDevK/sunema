<template>
  <div id="detail-container" class="detail-container">
    <!-- <button @click="printState">클릭</button> -->
      <!-- s: top-area -->
      <section class="top-area">
        <!-- video -->
        <div class="preview-box">
          <!-- ifram으로 교체예정 -->
          <img src="@/assets/images/detail/thum_video_top.png" alt="">
          <!-- // ifram으로 교체예정 -->
        </div>
        <!-- // video -->

        <!-- poster -->
        <!-- <div class="poster-box">
          <div class="bg-box">
            <img src="@/assets/detail/thum_poster.png" alt="배경 이미지">
          </div>
          <div class="img-box">
            <img src="@/assets/detail/thum_poster.png" alt="포스터 이미지">
          </div>
        </div> -->
        <!-- // poster -->
      </section>
      <!-- e: top-area -->

      <!-- s: info-area -->
      <section class="info-area inner-box">
        <h2 class="movie-tit">종이의 집(2017)</h2>
        <div class="info-tablet-ui clear">
          <div class="info_basic">
          <span class="grade"><b>19</b>+</span>
          <span class="genre">범죄</span>
          <span class="genre">드라마</span>
          <span class="genre">장르</span>
          <span class="time"><b class="hour">1</b>h<b class="minute">10</b>m</span>
          </div>
          <div class="info_other">
          <span class="date">2017.05.02</span>
          <!-- star -->
          <div class="star-box">
            <!-- class="star-on"의 width값에 따라 별점 노출 -->
            <div class="star-on" style="width: 80%;">
              <img src="@/assets/images/detail/icon_star_on.png" alt="별점">
            </div>
          </div>
          <!-- // star -->
          </div>
        </div>
        <h2 class="movie-tit-lang">The perfect robbery.</h2>
        <p class="info-txt">
          1명의 천재, 8명의 공범, 철저히 준비한 세기의 강도. 스페인 조폐국에서 인질극까지 벌인 이들은 과연 포위 경찰을 따돌리고 거액의 돈과 함께 달아날 수 있을까?
        </p>
        <div class="info-series">
          <div class="now-series">
            <div class="img-box">
              <img src="@/assets/images/detail/thum_series.png" alt="시리즈 이미지" class="mo">
              <img src="@/assets/images/detail/thum_series_tb.png" alt="시리즈 이미지" class="tb">
            </div>
            <div class="txt-box">
              <div class="series-num">시즌3 10화</div>
              <div class="year">2021</div>
            </div>
          </div>
          <div class="view-series">
            <div class="before"><span>이전회차</span><a href="#!">시즌3 9화</a></div>
            <div class="sel">
              <a href="#!">모든회차</a>
            </div>
          </div>
          <div class="streaming-box mo-ui">
            <div class="btn-wrap mo-ui">
              <a href="#!" class="btn-streaming">스트리밍 서비스로 보기</a>
            </div>
            <div class="toast-pop">

            </div>
          </div>
          <div class="streaming-box tablet-ui">
            <span class="txt-wrap">
              스크리밍 서비스로 보기
            </span>
          </div>
          <div class="tag-box">
            <ul>
              <li><a href="#!">#<span>tagtagtagtagtagtag</span></a></li>
              <li><a href="#!">#<span>tag</span></a></li>
              <li><a href="#!">#<span>tagtagtag</span></a></li>
              <li><a href="#!">#<span>tag tag</span></a></li>
              <li><a href="#!">#<span>tagtagtagtagtagtag</span></a></li>
              <li><a href="#!">#<span>tag</span></a></li>
              <li><a href="#!">#<span>tagtagtag</span></a></li>
              <li><a href="#!">#<span>tag tag</span></a></li>
            </ul>
          </div>
        </div>
        
      </section>
      <!-- e: info-area -->

      <!-- s: man-area -->
      <section class="man-area">
        <dl>
          <dt>
            <div class="section-tit">출연</div>
          </dt>
          <dd class="box-x-wrap">
            <ul class="box-x man-list">
              <li class="box-x-item">
                <a href="#!">
                  <div class="man-img">
                    <img src="@/assets/images/detail/thum_man_01.png" alt="출연인물 이미지">
                  </div>
                  <p class="name">mapokim</p>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="man-img">
                    <img src="@/assets/images/detail/thum_man_02.png" alt="출연인물 이미지">
                  </div>
                  <p class="name">mapoLee</p>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="man-img">
                    <img src="@/assets/images/detail/thum_man_01.png" alt="출연인물 이미지">
                  </div>
                  <p class="name">mapokimmapokimmapokim</p>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="man-img">
                    <img src="@/assets/images/detail/thum_man_02.png" alt="출연인물 이미지">
                  </div>
                  <p class="name">mapoLeemapoLeemapoLeemapoLee</p>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <!-- e: man-area -->

      <!-- s: video-area -->
      <section class="video-area">
        <dl>
          <dt>
            <div class="section-tit">동영상</div>
          </dt>
          <dd class="box-x-wrap">
            <ul class="video-list box-x">
              <li class="box-x-item">
                <a href="#!">
                  <div class="video-box">
                    <img src="@/assets/images/detail/thum_video_01.png" alt="동영상 이미지">
                  </div>
                  <div class="icon_play"></div>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="video-box">
                    <img src="@/assets/images/detail/thum_video_02.png" alt="동영상 이미지">
                  </div>
                  <div class="icon_play"></div>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="video-box">
                    <img src="@/assets/images/detail/thum_video_01.png" alt="동영상 이미지">
                  </div>
                  <div class="icon_play"></div>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="video-box">
                    <img src="@/assets/images/detail/thum_video_02.png" alt="동영상 이미지">
                  </div>
                  <div class="icon_play"></div>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <!-- e: video-area -->

      <!-- s: still-cut-area -->
      <section class="still-cut-area">
        <dl>
          <dt>
            <div class="section-tit">스틸컷</div>
          </dt>
          <dd class="box-x-wrap">
            <ul class="video-list box-x">
              <li class="box-x-item">
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_still_01.png" alt="스틸컷 이미지">
                  </div>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_still_02.png" alt="스틸컷 이미지">
                  </div>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_still_01.png" alt="스틸컷 이미지">
                  </div>
                </a>
              </li>
              <li class="box-x-item">
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_still_02.png" alt="스틸컷 이미지">
                  </div>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <!-- e: still-cut-area -->

      <!-- s: poster-area -->
      <!-- slider -->
      <section class="poster-area">
        <dl>
          <dt>
            <div class="section-tit">포스터</div>
          </dt>
          <dd>
            <ul class="video-list clear">
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_poster_01.png" alt="포스터 이미지">
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_poster_02.png" alt="포스터 이미지">
                  </div>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <!-- // slider -->
      <!-- e: poster-area -->

      <!-- s: sns-area -->
      <section class="sns-area inner-box">
        <dl>
          <dt>
              <div class="section-tit">바로가기</div>
          </dt>
          <dd class="sns-box">
            <ul>
              <li class="facebook">
                <a href="#!"><span class="blind">facebook</span></a>
              </li>
              <li class="twitter">
                <a href="#!"><span class="blind">twitter</span></a>
              </li>
              <li class="instagram">
                <a href="#!"><span class="blind">instagram</span></a>
              </li>
              <li class="justwatch">
                <a href="#!"><span class="blind">justwatch</span></a>
              </li>
              <li class="homepage">
                <a href="#!"><span class="blind">homepage</span></a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <!-- e: sns-area -->

      <!-- s: recomandation-area -->
      <section class="recomandation-area inner-box">
        <dl>
          <dt>
            <div class="section-tit clear">추천<a href="#!" class="btn-more">더보기</a></div>
          </dt>
          <dd>
            <ul class="clear">
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_reco_01.png" alt="추천영화 이미지">
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_reco_02.png" alt="추천영화 이미지">
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_reco_03.png" alt="추천영화 이미지">
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_reco_04.png" alt="추천영화 이미지">
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_reco_05.png" alt="추천영화 이미지">
                  </div>
                </a>
              </li>
              <li>
                <a href="#!">
                  <div class="img-box">
                    <img src="@/assets/images/detail/thum_reco_06.png" alt="추천영화 이미지">
                  </div>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </section>
      <!-- e: recomandation-area -->
    </div>
</template>

<script>
export default {
  name: 'Detail',
  components:{},
  mounted(){
    console.log('컨포넌트 준비됨');
    this.initMovieDetail();
  },
  methods: {
    initMovieDetail(){
      console.log('init movie가 잘 호출됨');
      this.$store.dispatch('detail/getMovieDetail');
    },
    // printState(){
    //   console.log(this.$store.state.detail.detailMovie);
    // }
  }
};
</script>

<style scoped>
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  /* 모바일 해상도 360 - 767px 기준 */
  /* Link Style */
  :link       {text-decoration:none; color:inherit;}
  :visited    {text-decoration:none; color:inherit;}
  :active {text-decoration:none; color:inherit;}
  :hover      {text-decoration:none;}

  /* tag all font-size set */
  p,div,ul,li,dl,dt,dd,ol,a,em,strong,fieldset,textarea,input,select,span,table,th,td,address,cite,
  h1,h2,h3,h4,h5,h6 {color:inherit; /*font-family:"Noto Sans KR", sans-serif;*/ font-size:inherit; line-height:inherit;}

  /* html */
  html{font-size: 16px;font-family: 'Spoqa Han Sans Neo', 'sans-serif';}

  /* From Style */
  textarea    {border:1px solid #d3d0c9; padding:5px;}
  input       {vertical-align:middle; }
  input, textarea, select, button, label {vertical-align:middle;}
  button,
  select,
  textarea,
  input[type="button"],
  input[type="submit"],
  input[type="text"],
  input[type="password"],
  input[type="search"],
  input[type="email"],
  input[type="url"],
  input[type="number"],
  input[type="tel"],
  input[type="file"] {border-radius:0; margin:0; padding:0; border:0; outline:none; background:none; box-sizing:border-box;}
  button,
  input[type="button"],
  input[type="submit"] {cursor:pointer; overflow:visible;}
  button::-moz-focus-inner {padding:0; border:0;}
  input[type="date"],
  input[type="time"] {-webkit-appearance:none; -moz-appearance:none; border-radius:0;}
  input[type="number"]::-webkit-outer-spin-button,
  input[type="date"]::-webkit-outer-spin-button {-webkit-appearance:none; margin:0;}
  [readonly],
  [disabled] {cursor:default;}
  [disabled] {cursor:default; opacity:1; -webkit-text-fill-color:inherit;}

  select {-webkit-appearance:none; -moz-appearance:none; appearance:none;}
  select::-ms-expand {display:none;}
  hr, caption {display:none;}
  legend      {position:absolute; height:0; font-size:0px; line-height:0; overflow:hidden; text-indent:-20000px; }
  address,cite,em {font-style:normal;}
  fieldset    {border:0; padding:0; }
  label       {cursor:pointer; margin:0;}

  .hide{display:none;}
  .blind{position:absolute;width:1px;height:1px;margin-left:-1px;overflow:hidden;color:transparent !important;border:0 none !important;background:transparent !important;}
  .ellipsis{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;}
  .clear::after{content: "";display: block;clear: both;}
  /* .blur img{-webkit-filter:blur(6px);-moz-filter:blur(6px);filter:blur(6px);} */

  html, body {min-height:100%;letter-spacing: 0.25px;}

  a {color:inherit;}
  img {width:100%;}

  /* detail-container */
  .detail-container{padding: 80px 0  79px;background: #181727;min-height: 100vh;color: #fff;}
  section.inner-box{padding: 0 24px;}

  .detail-container .top-area .poster-box{margin-top: -80px;height: 439px;padding-bottom: 21px;position: relative;}
  .detail-container .top-area .poster-box .bg-box{width: auto;height: 100%;width: auto;}
  .detail-container .top-area .poster-box .bg-box img{filter: blur(20px);height: 100%;}
  .detail-container .top-area .poster-box .img-box{position: absolute;top: 80px;left: 50%;transform: translateX(-50%);width: auto;height: 347px;margin: 0 auto;}
  .detail-container .top-area .poster-box .img-box img{width: auto;height: 347px;}

  .detail-container .info-area{margin-top: 0.625rem;}
  .detail-container .info-area .movie-tit{padding: 1rem 0;font-size: 1.313rem;font-weight: 700;}
  .detail-container .info-area .info_basic span{line-height: 1.563rem;font-size: 0.75rem;}
  .detail-container .info-area .info_basic span.grade{display: inline-block;padding: 0 0.438rem;height: 1.563rem;border: 1px solid rgba(255, 255, 255, .5);border-radius: 4px;line-height: 1.438rem;}
  .detail-container .info-area .info_basic .grade + .genre{margin-left: 0.438rem;}
  .detail-container .info-area .info_basic .genre + .genre{margin-left: 0.25rem;padding-left: 0.688rem;position: relative;word-wrap: normal;white-space: nowrap;}
  .detail-container .info-area .info_basic .genre + .time{margin-left: 0.25rem;padding-left: 0.688rem;position: relative;}
  .detail-container .info-area .info_basic .genre + .genre::before{content: "";position: absolute;top: calc(50% - 1.5px);left:0;width: 3px;height: 3px;border-radius: 50%;background: #fff;}
  .detail-container .info-area .info_basic .genre + .time::before{content: "";position: absolute;top: calc(50% - 1.5px);left:0;width: 3px;height: 3px;border-radius: 50%;background: #fff;}

  .detail-container .info-area .info_other{margin-top: 0.625rem;}
  .detail-container .info-area .info_other .date{font-size: 0.75rem;}
  .detail-container .info-area .info_other .star-box{display: inline-block;margin-left: 0.75rem;font-size: 0;width: 4.938rem;height: 0.938rem;vertical-align: middle;background: url('../assets/images/detail/icon_star.png') 0 0 no-repeat;background-size: contain;}
  .detail-container .info-area .info_other .star-box .star-on{overflow: hidden;}
  .detail-container .info-area .info_other .star-box .star-on img{width: 4.938rem;}

  .detail-container .info-area .movie-tit-lang{margin-top: 1.125rem;font-size: 1.125rem;}

  .detail-container .info-area .info-txt{margin-top: 0.75rem;font-size: 1rem ;line-height: 1.4;}

  .detail-container .info-area .info-series{margin-top: 1.188rem;}
  .detail-container .info-area .info-series .now-series{display: flex;width: 100%;border-radius: 5px;overflow: hidden; background: #212634;}
  .detail-container .info-area .info-series .now-series .img-box{width: 23%;font-size: 0;}
  .detail-container .info-area .info-series .now-series .img-box .tb{display: none;}
  .detail-container .info-area .info-series .now-series .img-box .mo{display: block;}
  .detail-container .info-area .info-series .now-series .txt-box{width: 77%;padding: 14px 18px 14px 23px;}
  .detail-container .info-area .info-series .now-series .txt-box .series-num{font-size: 1.125rem;}
  .detail-container .info-area .info-series .now-series .txt-box .year{font-size: 0.75rem;padding-top: 8px;}

  .detail-container .info-area .info-series .view-series{margin-top: 0.75rem;width: 100%;background: #212634;display: flex;justify-content: space-between;padding: 10px 15px;border-radius: 5px;}
  .detail-container .info-area .info-series .view-series{font-size: 1rem;}
  .detail-container .info-area .info-series .view-series .before span{color: rgba(255, 255, 255, .7);} 
  .detail-container .info-area .info-series .view-series .before a{display: inline-block;padding-left: 20px;}
  .detail-container .info-area .info-series .view-series .sel a{display: inline-block;padding-right: 18px;background: url('../assets/images/detail/icon_arw_gray.png') top 50% right 0 no-repeat;background-size: 7.85px 9.75px;}

  .detail-container .info-area .info-series .streaming-box.tablet-ui{display: none;}
  .detail-container .info-area .info-series .streaming-box.mo-ui{display: block;}
  .detail-container .info-area .info-series .streaming-box.mo-ui .btn-wrap{margin-top: 0.688rem;width: 100%;padding: 12px;display: flex;justify-content: center;background: #43FF8E;border-radius: 10px;}
  .detail-container .info-area .info-series .streaming-box.mo-ui .btn-wrap a{display: inline-block;padding-right: 20px;color: #000;font-size: 0.875rem;font-weight: 700;background: url('../assets/images/detail/icon_are_black.png') top 50% right 0 no-repeat;background-size: 10.15px 12.36px;}

  .detail-container .info-area .info-series .tag-box{margin: 0.813rem -24px 0;width: calc(100% + 48px);overflow-x: scroll;overflow-y: hidden;}
  .detail-container .info-area .info-series .tag-box ul{width: auto;white-space: nowrap;padding: 0 24px;}
  .detail-container .info-area .info-series .tag-box ul li{margin-left: 4px;padding: 8px 16px;display: inline-block;font-size: 0.75px;border: 1px solid #8E8E8E;border-radius: 21px;background: #212634;opacity: .5;}
  .detail-container .info-area .info-series .tag-box ul li:first-child{margin-left: 0;}
  .detail-container .info-area .info-series .tag-box ul li:last-child{margin-right: 24px;}

  /* .detail-container section 공통 */
  .detail-container section .section-tit{padding: 1.125rem 24px;font-size: 1.313rem;font-weight: 700;}
  .detail-container section .box-x-wrap{width: 100%;overflow-x: auto;overflow-y: hidden;}
  .detail-container section .box-x{width: auto;white-space: nowrap;font-size: 0;}
  .detail-container section .box-x .box-x-item{display: inline-block;vertical-align: top;}
  /* // .detail-container section 공통 */

  .detail-container .man-area{margin-top: 0.438rem;}
  .detail-container .man-area li{width: 30.43%;margin-left: 3.86%;}
  .detail-container .man-area li:first-child{margin-left: 24px;}
  .detail-container .man-area li:last-child{margin-right: 24px;}
  .detail-container .man-area li .man-img{border-radius: 10px;border-radius: 10px;overflow: hidden;}
  .detail-container .man-area li .name{display: block;width: 100%;height: auto;font-size: 1rem;font-weight: 500;text-align: center;margin-top: 0.625rem;word-break: break-all;white-space: normal;}

  .detail-container .video-area{margin-top: 13px;}
  .detail-container section.video-area .section-tit{padding: 1.125rem 24px;}
  .detail-container .video-area li{position: relative;width: 62%;margin-left: 3.86%;border-radius: 5px;overflow: hidden;}
  .detail-container .video-area li:first-child{margin-left: 24px;}
  .detail-container .video-area li:last-child{margin-right: 24px;}
  .detail-container .video-area li .icon_play{position: absolute;top:31%;left: 50%;width: 40px;height: 40px;background: url('../assets/images/detail/icon_play.png') 0 0 no-repeat;background-size: contain;transform: translateX(-50%);}

  .detail-container .still-cut-area{margin-top: 10px;}
  .detail-container section.still-cut-area .section-tit{padding: 1.125rem 24px;}
  .detail-container .still-cut-area li{width: 62%;margin-left: 3.86%;border-radius: 5px;overflow: hidden;}
  .detail-container .still-cut-area li:first-child{margin-left: 24px;}
  .detail-container .still-cut-area li:last-child{margin-right: 24px;}

  /* 슬라이더로 교체시 css 수정 */
  .detail-container .poster-area{margin-top: 10px;}
  .detail-container section.poster-area .section-tit{padding: 1.125rem 24px;}
  .detail-container .poster-area ul{overflow: hidden;}
  .detail-container .poster-area li{float: left;width: 36%;margin-left: 3.86%;border-radius: 5px;overflow: hidden;}
  .detail-container .poster-area li:first-child{margin-left: 24px;}
  .detail-container .poster-area li:last-child{margin-right: 24px;}
  /* // 슬라이더로 교체시 css 수정 */

  .detail-container .sns-area{margin-top: 10px;}
  .detail-container section.sns-area .section-tit{padding: 1.125rem 0;}
  .detail-container .sns-area .sns-box ul{display: flex;justify-content: space-between;}
  .detail-container .sns-area .sns-box ul li{position: relative;width: 14.49vw;height: 14.49vw;background: url('../assets/images/detail/bg_sns.png') no-repeat;background-size: contain;}
  .detail-container .sns-area .sns-box ul li.facebook::before{content: "";width: 7.56vw;height: 7.24vw;background: url('../assets/images/detail/icon_facebook.png') no-repeat;background-size: contain;position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
  .detail-container .sns-area .sns-box ul li.twitter::before{content: "";width: 8.29vw;height: 6.28vw;background: url('../assets/images/detail/icon_twiter.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
  .detail-container .sns-area .sns-box ul li.instagram::before{content: "";width: 6.76vw;height: 6.76vw;background: url('../assets/images/detail/icon_insta.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
  .detail-container .sns-area .sns-box ul li.justwatch::before{content: "";width: 6.36vw;height: 6.44vw;background: url('../assets/images/detail/icon_justwatch.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
  .detail-container .sns-area .sns-box ul li.homepage::before{content: "";width: 5.79vw;height: 5.63vw;background: url('../assets/images/detail/icon_homepage.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}

  .detail-container .recomandation-area{margin-top: 10px;}
  .detail-container .recomandation-area .btn-more{float: right;font-size: 0.75rem;font-weight: 400;line-height: 2.2;}
  .detail-container section.recomandation-area .section-tit{padding: 1.125rem 0;}
  .detail-container .recomandation-area ul{display: grid;justify-content: space-between;grid-template-columns: 26.94vw 26.94vw 26.94vw;}
  .detail-container .recomandation-area ul li{font-size: 0;margin-bottom: 1rem;}
  .detail-container .recomandation-area ul li .img-box{border-radius: 5px;overflow: hidden;}

  /* @media */
  @media (min-width:768px){
    .detail-container{padding: 85px 0  95px;}
    section.inner-box{padding: 0 28px;}

    /* header */
    header{height: 85px;padding: 0 28px;}
    header .btn-back{width: 17px;height: 85px;background: url('../assets/images/detail/icon_back.png') bottom 20px right 0 no-repeat;background-size: 14px 24px}

    /* footer */
    footer{height: 60px;}
    footer ul{display: flex;justify-content: center;}
    footer ul li{max-width: 123px;padding: 0 16px;}
    footer ul li.home{background-size: 26px;background-position: top 7.78px center;}
    footer ul li.now{background-size: 26px;background-position: top 7.78px center;}
    footer ul li.soon{background-size: 26px;background-position: top 7.78px center;}
    footer ul li.search{background-size: 26px;background-position: top 7.78px center;}
    footer ul li.popular{background-size: 26px;background-position: top 7.78px center;}

    /* detail-container */
    .detail-container{padding: 80px 0  79px;background: #181727;min-height: 100vh;color: #fff;}
    section.inner-box{padding: 0 24px;}
    
    .detail-container .top-area .preview-box{padding-bottom: 40px;}

    .detail-container .top-area .poster-box{margin-top: -85px;height: 701px;padding-bottom: 31px;}
    .detail-container .top-area .poster-box .bg-box img{filter: blur(23px);height: 100%;}
    .detail-container .top-area .poster-box .img-box{top: 85px;height: 585px;}
    .detail-container .top-area .poster-box .img-box img{height: 585px;}

    .detail-container .info-area{margin-top: 0;}
    .detail-container .info-area .movie-tit{padding: 0.625rem 0;font-size: 2.5rem;font-weight: 700;}

    .detail-container .info-area .info-tablet-ui{}
    .detail-container .info-area .info-tablet-ui .info_basic{float: left;}
    .detail-container .info-area .info-tablet-ui .info_other{float: left;} 

    .detail-container .info-area .info_basic span{line-height: 2.063rem;font-size: 1.125rem;}
    .detail-container .info-area .info_basic span.grade{padding: 0 0.5rem;height: 2.063rem;border: 1px solid rgba(255, 255, 255, .5);border-radius: 4px;line-height: 1.438rem;}
    .detail-container .info-area .info_basic span.grade b{line-height: 1.938;}
    .detail-container .info-area .info_basic .grade + .genre{margin-left: 0.688rem;}
    .detail-container .info-area .info_basic .genre + .genre{margin-left: 0.5rem;padding-left: 0.688rem;}
    .detail-container .info-area .info_basic .genre + .time{margin-left: 0.5rem;padding-left: 0.688rem;position: relative;}

    .detail-container .info-area .info_other{margin-top: 0;margin-left: 0.75rem;}
    .detail-container .info-area .info_other .date{font-size: 1rem;line-height: 2.063rem;}
    .detail-container .info-area .info_other .star-box{display: inline-block;margin-left: 1.375rem;font-size: 0;width: 7.571rem;height: 1.438rem;}
    .detail-container .info-area .info_other .star-box .star-on{overflow: hidden;}
    .detail-container .info-area .info_other .star-box .star-on img{width: 7.571rem;}

    .detail-container .info-area .movie-tit-lang{margin-top: 2.313rem;font-size: 1.125rem;}

    .detail-container .info-area .info-txt{margin-top: 0.75rem;font-size: 1.5rem ;line-height: 1.4;}

    .detail-container .info-area .info-series{margin-top: 1.875rem;}
    .detail-container .info-area .info-series .now-series{border-radius: 10px;}
    .detail-container .info-area .info-series .now-series .img-box{width: 20%;font-size: 0;}
    .detail-container .info-area .info-series .now-series .img-box .tb{display: block;}
    .detail-container .info-area .info-series .now-series .img-box .mo{display: none;}
    .detail-container .info-area .info-series .now-series .txt-box{width: 80%;padding: 19.56px 34.22px;}
    .detail-container .info-area .info-series .now-series .txt-box .series-num{font-size: 1.313rem;}
    .detail-container .info-area .info-series .now-series .txt-box .year{font-size: 1.125rem;padding-top: 17.32px;}

    .detail-container .info-area .info-series .view-series{margin-top: 1.5rem;padding: 16px 20px 18px;border-radius: 10px;}
    .detail-container .info-area .info-series .view-series{font-size: 1.313rem;}
    .detail-container .info-area .info-series .view-series .before span{color: rgba(255, 255, 255, .7);} 
    .detail-container .info-area .info-series .view-series .before a{display: inline-block;padding-left: 20px;}
    .detail-container .info-area .info-series .view-series .sel{font-size: 1rem;}
    .detail-container .info-area .info-series .view-series .sel a{display: inline-block;padding-right: 18px;}
    /* ///////////////////// */

    .detail-container .info-area .info-series .streaming-box.tablet-ui{display: none;}
    .detail-container .info-area .info-series .streaming-box.mo-ui{display: block;}
    .detail-container .info-area .info-series .streaming-box.mo-ui .btn-wrap{margin-top: 0.688rem;width: 100%;padding: 12px;display: flex;justify-content: center;background: #43FF8E;border-radius: 10px;}
    .detail-container .info-area .info-series .streaming-box.mo-ui .btn-wrap a{display: inline-block;padding-right: 20px;color: #000;font-size: 0.875rem;font-weight: 700;background: url('../assets/images/detail/icon_are_black.png') top 50% right 0 no-repeat;background-size: 10.15px 12.36px;}

    .detail-container .info-area .info-series .tag-box{margin: 0.813rem -24px 0;width: calc(100% + 48px);overflow-x: scroll;overflow-y: hidden;}
    .detail-container .info-area .info-series .tag-box ul{width: auto;white-space: nowrap;padding: 0 24px;}
    .detail-container .info-area .info-series .tag-box ul li{margin-left: 4px;padding: 8px 16px;display: inline-block;font-size: 0.75px;border: 1px solid #8E8E8E;border-radius: 21px;background: #212634;}
    .detail-container .info-area .info-series .tag-box ul li:first-child{margin-left: 0;}
    .detail-container .info-area .info-series .tag-box ul li:last-child{margin-right: 24px;}

    /* .detail-container section 공통 */
    .detail-container section .section-tit{padding: 1.125rem 24px;font-size: 1.313rem;font-weight: 700;}
    .detail-container section .box-x-wrap{width: 100%;overflow-x: auto;overflow-y: hidden;}
    .detail-container section .box-x{width: auto;white-space: nowrap;font-size: 0;}
    .detail-container section .box-x .box-x-item{display: inline-block;vertical-align: top;}
    /* // .detail-container section 공통 */

    .detail-container .man-area{margin-top: 0.438rem;}
    .detail-container .man-area li{width: 30.43%;margin-left: 3.86%;}
    .detail-container .man-area li:first-child{margin-left: 24px;}
    .detail-container .man-area li:last-child{margin-right: 24px;}
    .detail-container .man-area li .man-img{border-radius: 10px;border-radius: 10px;overflow: hidden;}
    .detail-container .man-area li .name{display: block;width: 100%;height: auto;font-size: 1rem;font-weight: 500;text-align: center;margin-top: 0.625rem;word-break: break-all;white-space: normal;}

    .detail-container .video-area{margin-top: 13px;}
    .detail-container section.video-area .section-tit{padding: 1.125rem 24px;}
    .detail-container .video-area li{position: relative;width: 62%;margin-left: 3.86%;border-radius: 5px;overflow: hidden;}
    .detail-container .video-area li:first-child{margin-left: 24px;}
    .detail-container .video-area li:last-child{margin-right: 24px;}
    .detail-container .video-area li .icon_play{position: absolute;top:31%;left: 50%;width: 40px;height: 40px;background: url('../assets/images/detail/icon_play.png') 0 0 no-repeat;background-size: contain;transform: translateX(-50%);}

    .detail-container .still-cut-area{margin-top: 10px;}
    .detail-container section.still-cut-area .section-tit{padding: 1.125rem 24px;}
    .detail-container .still-cut-area li{width: 62%;margin-left: 3.86%;border-radius: 5px;overflow: hidden;}
    .detail-container .still-cut-area li:first-child{margin-left: 24px;}
    .detail-container .still-cut-area li:last-child{margin-right: 24px;}

    /* 슬라이더로 교체시 css 수정 */
    .detail-container .poster-area{margin-top: 10px;}
    .detail-container section.poster-area .section-tit{padding: 1.125rem 24px;}
    .detail-container .poster-area ul{overflow: hidden;}
    .detail-container .poster-area li{float: left;width: 36%;margin-left: 3.86%;border-radius: 5px;overflow: hidden;}
    .detail-container .poster-area li:first-child{margin-left: 24px;}
    .detail-container .poster-area li:last-child{margin-right: 24px;}
    /* // 슬라이더로 교체시 css 수정 */

    .detail-container .sns-area{margin-top: 10px;}
    .detail-container section.sns-area .section-tit{padding: 1.125rem 0;}
    .detail-container .sns-area .sns-box ul{display: flex;justify-content: space-between;}
    .detail-container .sns-area .sns-box ul li{position: relative;width: 14.49vw;height: 14.49vw;background: url('../assets/images/detail/bg_sns.png') no-repeat;background-size: contain;}
    .detail-container .sns-area .sns-box ul li.facebook::before{content: "";width: 7.56vw;height: 7.24vw;background: url('../assets/images/detail/icon_facebook.png') no-repeat;background-size: contain;position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
    .detail-container .sns-area .sns-box ul li.twitter::before{content: "";width: 8.29vw;height: 6.28vw;background: url('../assets/images/detail/icon_twiter.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
    .detail-container .sns-area .sns-box ul li.instagram::before{content: "";width: 6.76vw;height: 6.76vw;background: url('../assets/images/detail/icon_insta.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
    .detail-container .sns-area .sns-box ul li.justwatch::before{content: "";width: 6.36vw;height: 6.44vw;background: url('../assets/images/detail/icon_justwatch.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}
    .detail-container .sns-area .sns-box ul li.homepage::before{content: "";width: 5.79vw;height: 5.63vw;background: url('../assets/images/detail/icon_homepage.png') no-repeat;background-size: contain; position: absolute;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);}

    .detail-container .recomandation-area{margin-top: 10px;}
    .detail-container .recomandation-area .btn-more{float: right;font-size: 0.75rem;font-weight: 400;line-height: 2.2;}
    .detail-container section.recomandation-area .section-tit{padding: 1.125rem 0;}
    .detail-container .recomandation-area ul{display: grid;justify-content: space-between;grid-template-columns: 26.94vw 26.94vw 26.94vw;}
    .detail-container .recomandation-area ul li{font-size: 0;margin-bottom: 1rem;}
    .detail-container .recomandation-area ul li .img-box{border-radius: 5px;overflow: hidden;}

    

    .detail-container .info-area .info-series .streaming-box.tablet-ui{display: block;}
    .detail-container .info-area .info-series .streaming-box.mo-ui{display: none;}
  }
  @media (min-width:1024px){

  }
</style>
