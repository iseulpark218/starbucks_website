import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.header_nav}>
          <a
            href="http://localhost:3000/#"
            // href="../../index.html"
          >
            <img
              className={styles.logo}
              src="https://www.starbucks.co.kr/common/img/common/logo.png"
              alt="logo image"
            />
          </a>
          <div className={styles.menus}>
            <ul className={styles.menus_sub_menu}>
              <li>Sign In</li>
              <li>My Starbucks</li>

              <li>Customer Service &amp; Ideas</li>
              <li>Find a Store</li>
              <button>
                <i className={styles.fas_fa_search}>
                  <img src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" />
                </i>
              </button>
            </ul>
            <ul className={styles.menus_main_menu}>
              <li>
                <a
                  // href="./pages/drink/drink.html"
                  href="https://www.starbucks.co.kr/coffee/index.do"
                  className={styles.drink}
                >
                  {/* drink-> */}
                  coffee
                </a>
              </li>
              <li>
                <a
                  href="https://www.starbucks.co.kr/menu/index.do"
                  // href="./pages/food/food.html"
                  className={styles.food}
                >
                  {/* food-> */}
                  menu
                </a>
              </li>
              <li>
                <a
                  href="https://www.starbucks.co.kr/store/index.do"
                  className={styles.store}
                  // href="./pages/gift/gift.html"
                >
                  {/* gift-> */}
                  store
                </a>
              </li>
              <li>
                <a
                  href="https://www.starbucks.co.kr/responsibility/index.do"
                  className={styles.responsibility}

                  // href="./pages/card/card.html"
                >
                  {/* card-> */}
                  responsibility
                </a>
              </li>
              <li>
                <a
                  href="https://www.starbucks.co.kr/msr/index.do"
                  className={styles.rewards}
                  // href="#"
                >
                  starbucks rewards
                </a>
              </li>
              <li>
                <a
                  href="https://www.starbucks.co.kr/whats_new/index.do"
                  className={styles.new}

                  // href="#"
                >
                  what's new
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
