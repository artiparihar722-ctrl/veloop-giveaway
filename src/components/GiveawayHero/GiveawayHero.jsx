import {
  FiArrowRight,
  FiBell,
  FiCheck,
  FiChevronDown,
  FiPlay,
  FiShield,
  FiUsers,
  FiZap,
} from "react-icons/fi";

import styles from "./GiveawayHero.module.css";

import giftImage from "../../assets/gift-box.png";
import iphoneImage from "../../assets/iphone.png";
import watchImage from "../../assets/apple-watch.png";
import airpodsImage from "../../assets/airpods.png";
import amazonImage from "../../assets/amazon-voucher.png";

function GiveawayHero() {
  const goToGiveaways = () => {
    const section = document.getElementById("giveaways");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToHowItWorks = () => {
    const section = document.getElementById("how-it-works");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGlowTwo}></div>
      <div className={styles.backgroundGrid}></div>

      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <span>V</span>
          </div>

          <div className={styles.logoText}>
            <strong>VELOOP</strong>
            <small>REWARDS</small>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <a href="#home">Home</a>

          <a className={styles.activeLink} href="#giveaways">
            Giveaways
          </a>

          <a href="#winners">Winners</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#rules">Rules</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className={styles.navRight}>
          <div className={styles.balance}>
            <span className={styles.coin}>●</span>
            <strong>1,250</strong>
            <span>+</span>
          </div>

          <button className={styles.notification} type="button">
            <FiBell />
            <span className={styles.notificationDot}></span>
          </button>

          <button className={styles.profile} type="button">
            <span className={styles.avatar}>A</span>
            <span>Arti</span>
            <FiChevronDown />
          </button>
        </div>
      </header>

      {/* HERO */}
      <div className={styles.heroContainer}>
        {/* LEFT */}
        <div className={styles.heroText}>
          <div className={styles.eyebrow}>
            PLAY <span>•</span> EARN <span>•</span> BE REWARDED
          </div>

          <h1>
            Giveaway Rewards
            <br />
            <span className={styles.whiteText}>Turn Your Activities Into</span>
            <br />
            <span className={styles.gradientText}>Amazing Prizes!</span>
          </h1>

          <p className={styles.description}>
            Complete eligible activities, collect entries and get a chance to
            win exciting rewards.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.joinButton}
              type="button"
              onClick={goToGiveaways}
            >
              Join Now
              <FiArrowRight />
            </button>

            <button
              className={styles.videoButton}
              type="button"
              onClick={goToHowItWorks}
            >
              <span className={styles.playIcon}>
                <FiPlay />
              </span>
              Watch Video
            </button>
          </div>

          <div className={styles.trustPoints}>
            <div>
              <FiShield />
              <span>100% Genuine</span>
            </div>

            <div>
              <FiZap />
              <span>Easy to Participate</span>
            </div>

            <div>
              <FiUsers />
              <span>Real Winners</span>
            </div>

            <div>
              <FiCheck />
              <span>Trusted Platform</span>
            </div>
          </div>
        </div>

        {/* RIGHT REWARD COMPOSITION */}
        <div className={styles.rewardScene}>
          <div className={styles.sceneGlow}></div>
          <div className={styles.rewardFloor}></div>

          {/* BACK OBJECTS */}

          <div className={`${styles.rewardItem} ${styles.phone}`}>
            <img src={iphoneImage} alt="Phone reward" />
          </div>

          <div className={`${styles.rewardItem} ${styles.watch}`}>
            <img src={watchImage} alt="Smartwatch reward" />
          </div>

          <div className={`${styles.rewardItem} ${styles.airpods}`}>
            <img src={airpodsImage} alt="AirPods reward" />
          </div>

          {/* VELOOP BAG */}
          <div className={`${styles.rewardItem} ${styles.veloopBag}`}>
            <div className={styles.bagHandle}></div>
            <div className={styles.bagLogo}>V</div>
            <strong>VELOOP</strong>
          </div>

          {/* LARGE DOLLAR COINS */}
          <div className={`${styles.dollarCoin} ${styles.coinOne}`}>$</div>
          <div className={`${styles.dollarCoin} ${styles.coinTwo}`}>$</div>
          <div className={`${styles.dollarCoin} ${styles.coinThree}`}>$</div>
          <div className={`${styles.dollarCoin} ${styles.coinFour}`}>$</div>

          {/* BIGGEST MAIN GIFT */}
          <div className={styles.mainGift}>
            <div className={styles.giftGlow}></div>

            <img src={giftImage} alt="VELOOP gift box" />

            <div className={styles.giftShadow}></div>
          </div>

          {/* VELOOP CARD */}
          <div className={styles.veloopCard}>
            <span className={styles.cardV}>V</span>
            <span className={styles.cardText}>VELOOP</span>
          </div>

          {/* ONE AMAZON VOUCHER */}
          <div className={styles.amazonVoucher}>
            <img src={amazonImage} alt="Amazon gift voucher" />
          </div>

          {/* YOUR ENTRIES - SEPARATE FROM AIRPODS */}
          <div className={styles.entryCard}>
            <span>Your Entries</span>

            <div className={styles.entryValue}>
              <span className={styles.entryCoin}>$</span>
              <strong>12</strong>
              <FiArrowRight />
            </div>
          </div>

          {/* DECORATION */}
          <span className={`${styles.spark} ${styles.sparkOne}`}>✦</span>
          <span className={`${styles.spark} ${styles.sparkTwo}`}>✦</span>
          <span className={`${styles.spark} ${styles.sparkThree}`}>✧</span>
          <span className={`${styles.spark} ${styles.sparkFour}`}>✦</span>

          <span className={`${styles.confetti} ${styles.confettiOne}`}></span>
          <span className={`${styles.confetti} ${styles.confettiTwo}`}></span>
          <span className={`${styles.confetti} ${styles.confettiThree}`}></span>
          <span className={`${styles.confetti} ${styles.confettiFour}`}></span>
          <span className={`${styles.confetti} ${styles.confettiFive}`}></span>
        </div>
      </div>
    </section>
  );
}

export default GiveawayHero;
