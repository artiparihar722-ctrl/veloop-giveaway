import { FaGift, FaArrowRight, FaStar } from "react-icons/fa";
import styles from "./GiveawayHero.module.css";

function GiveawayHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <FaStar />
            <span>EXCLUSIVE GIVEAWAYS</span>
          </div>

          <h1>
            Giveaway
            <span> Rewards</span>
          </h1>

          <p className={styles.subtitle}>
            Complete tasks. Earn entries. Get a chance to win rewards you
            actually want.
          </p>

          <p className={styles.description}>
            Discover premium giveaways, participate with your earned rewards and
            make every entry count.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryButton}>
              Join Now
              <FaArrowRight />
            </button>

            <button className={styles.secondaryButton}>Explore Rewards</button>
          </div>

          <div className={styles.trustLine}>
            <FaGift />
            <span>
              Fair participation • Reward transparency • Secure experience
            </span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.orbit} ${styles.orbitOne}`}></div>
          <div className={`${styles.orbit} ${styles.orbitTwo}`}></div>

          <div className={styles.giftCard}>
            <div className={styles.giftIcon}>
              <FaGift />
            </div>

            <span className={styles.giftLabel}>YOUR NEXT</span>
            <strong>REWARD</strong>

            <div className={`${styles.sparkle} ${styles.sparkleOne}`}>✦</div>
            <div className={`${styles.sparkle} ${styles.sparkleTwo}`}>✦</div>
            <div className={`${styles.sparkle} ${styles.sparkleThree}`}>✦</div>
          </div>

          <div className={styles.floatingBadge}>
            <FaStar />
            <span>Premium Rewards</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GiveawayHero;
