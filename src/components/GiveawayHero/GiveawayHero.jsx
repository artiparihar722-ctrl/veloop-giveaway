import { FiArrowRight, FiGift, FiShield, FiZap } from "react-icons/fi";
import styles from "./GiveawayHero.module.css";
import giftBoxImage from "../../assets/gift-box.png";

function GiveawayHero() {
  return (
    <section className={styles.hero}>
      <header className={styles.navbar}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>VR</div>

          <div>
            <strong>VELOOP</strong>
            <span>REWARDS</span>
          </div>
        </div>

        <div className={styles.navBadge}>
          <FiGift />
          <span>EXCLUSIVE GIVEAWAYS</span>
        </div>

        <button className={styles.navButton}>Explore Rewards</button>
      </header>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>
            <FiGift />
            EXCLUSIVE GIVEAWAY
          </span>

          <h1>
            Giveaway
            <span> Rewards</span>
          </h1>

          <p>
            Complete eligible activities, collect entries and get a chance to
            win exciting rewards from VELOOP Rewards.
          </p>

          <div className={styles.highlights}>
            <div>
              <FiShield />
              <span>Fair & Secure</span>
            </div>

            <div>
              <FiZap />
              <span>Earn More Entries</span>
            </div>

            <div>
              <FiGift />
              <span>Premium Rewards</span>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              Join Giveaway
              <FiArrowRight />
            </button>

            <button className={styles.secondaryButton}>View Rewards</button>
          </div>

          <div className={styles.trustText}>
            <span className={styles.dot}></span>
            New rewards added regularly
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualGlow}></div>

          <div className={styles.visualCard}>
            <img src={giftBoxImage} alt="VELOOP premium giveaway reward" />
          </div>

          <div className={styles.floatingBadge}>
            <FiGift />
            <div>
              <strong>Exciting Rewards</strong>
              <span>Waiting for you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiveawayHero;
