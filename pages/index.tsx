import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";
import Header from "../component/header";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        {/*     
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="./css/index.css" />
          <link
            rel="shortcut icon"
            href="https://image.istarbucks.co.kr/common/img/common/favicon.ico?v=200828"
            type="image/ico"
          />
          <script src="./js/home/rollingText.js" defer></script>
          <script src="./js/home/home.js" defer></script>
          <script src="https://kit.fontawesome.com/7a4cfa35a1.js" crossorigin="anonymous"></script>
          <title>Starbucks Coffee Korea</title>
        */}
        <title>Starbucks Coffee Korea</title>
        <meta name="description" content="스타벅스" />
        {/* <link
          rel="logo"
          href="https://www.starbucks.co.kr/common/img/common/logo.png"
        /> */}
      </Head>{" "}
      {/* Header */}
      <Header />
      {/* Main Page */}
      {/* card_banner-1 */}
      <div className={styles.banner}>
        <div className={styles.card_banner}>
          {/* slogan 1/4 */}
          <div className={styles.slogan}>
            <div className={styles.slogan_title}>
              <img
                src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_slogan.png"
                alt="COUNT ON LUCK"
              />

              <button className={styles.slogan_btn}>
                <a
                  href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=1929"
                  className={styles.slogan_btn_content}
                >
                  자세히 보기
                </a>
              </button>
            </div>
          </div>
          <div>
            {/* recommend_01 2/4 */}
            <div className={styles.recommend_01}>
              {" "}
              <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_new_year_citrus_tea.png" />
            </div>
            {/* recommend_02  3/4 */}
            <div className={styles.recommend_02}>
              {" "}
              <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_lavender_beige_oat_latte.png" />
            </div>
            {/* recommend_03  4/4 */}
            <div className={styles.recommend_03}>
              {" "}
              <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_dolce_black_milk_tea.png" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="main-visual_wrap">
    <div class="main-visual_inner">
        <div class="main-visual_slogan" style="opacity: 1;">
            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_slogan.png" alt="FOUND HAPPY PLACE" class="pc-slogan">
            <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_m_NewYear_main_slogan.png" alt="FOUND HAPPY PLACE" class="m-slogan">
        </div>

        <div class="main-visual_set">
            <div class="set_common set_01" style="opacity: 1;">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_new_year_citrus_tea.png" alt="뉴이어 시트러스 티" class="pc-drink">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_m_NewYear_main_new_year_citrus_tea.png" alt="뉴이어 시트러스 티" class="m-drink">
            </div>                                                    
            <div class="set_common set_02" style="opacity: 1;">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_lavender_beige_oat_latte.png" alt="라벤더 베이지 오트 라떼" class="pc-drink">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_m_NewYear_main_lavender_beige_oat_latte.png" alt="라벤더 베이지 오트 라떼" class="m-drink">
            </div>
            <div class="set_common set_03" style="opacity: 1;">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_main_dolce_black_milk_tea.png" alt="돌체 블랙 밀크 티" class="pc-drink">
                <img src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_m_NewYear_main_dolce_black_milk_tea.png" alt="돌체 블랙 밀크 티" class="m-drink">
            </div>  
        </div>
        
        <div class="btn_slogan" style="opacity: 1;">
            <a href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=1929">자세히 보기</a>
        </div>
    </div>
</div> */}
      {/* notice */}
      <div className={styles.notice}>
        <div className={styles.notice_left}>
          <div>
            <p className={styles.notice_left_text}>공지사항</p>
            {/* <i className="bi bi-plus-circle"></i> */}
          </div>
          <div className={styles.div_icon_plus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.icon_plus}
              // className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </div>
        <div className={styles.notice_right}>
          <div>
            <p className={styles.notice_right_text}>스타벅스 프로모션</p>
          </div>
          <div className={styles.div_icon_check}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.icon_check}
              // className="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
        </div>
      </div>
      {/* reward */}
      <div className={styles.reward}>
        <div className={styles.reward_div}>
          <div className={styles.reward_logo_div}>
            <img
              className={styles.reward_logo}
              src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
            />
          </div>
          <div className={styles.reward_content}>
            <div className={styles.reward_top}>
              <p>
                <h3>
                  스타벅스만의 특별한 혜택, <strong>스타벅스 리워드</strong>
                </h3>
                <h6 style={{ margin: "15px 0 0 0" }}>
                  <strong>스타벅스 회원이세요? </strong>로그인을 통해 나만의
                  리워드를 확인해보세요.
                  <br />
                  <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해 리워드
                  혜택을 즐기세요.
                </h6>
              </p>
              <div className={styles.reward_top_btn_div}>
                <button className={styles.reward_top_btn_1}>
                  <a
                  // href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=1929"
                  >
                    회원가입
                  </a>
                </button>
                <button className={styles.reward_top_btn_2}>
                  <a
                  // href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=1929"
                  >
                    로그인
                  </a>
                </button>
              </div>
            </div>
            <div className={styles.reward_bottom}>
              <p>
                회원 가입 후, 스타벅스 e-Gift Card를{" "}
                <strong>
                  "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
                </strong>
                <br />
                카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
                무료 음료쿠폰을 드립니다!
              </p>
              <button className={styles.reward_bottom_btn}>
                <a
                // href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=1929"
                >
                  e-Gift Card 선물하기
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card_banner-2 */}
    </div>
  );
};

export default Home;
