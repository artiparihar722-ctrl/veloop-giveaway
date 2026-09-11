import { FiArrowRight, FiClock, FiUsers, FiGift } from "react-icons/fi";
import styles from "./GiveawayCard.module.css";

function GiveawayCard({ giveaway = {} }) {
  const {
    title = "iPhone 15 Pro",
    description = "Latest premium reward",
    participants = "2.3K+",
    timeLeft = "12d : 06h : 45m",
    entry = "250 VEs",
    prize = "1st Prize",
    image,
    theme = "purple",
  } = giveaway;

  return (
    <article className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.cardTop}>
        <span className={styles.prizeBadge}>{prize}</span>

        <span className={styles.liveBadge}>
          <span></span>
          Active
        </span>
      </div>

      <div className={styles.imageArea}>
        {image ? (
          <img src={image} alt={title} className={styles.prizeImage} />
        ) : (
          <div className={styles.rewardPlaceholder}>
            <div className={styles.rewardGlow}></div>

            <div className={styles.giftIcon}>
              <FiGift />
            </div>

            <span>Premium Reward</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <FiUsers />
            <div>
              <strong>{participants}</strong>
              <span>Participants</span>
            </div>
          </div>

          <div className={styles.metaItem}>
            <FiClock />
            <div>
              <strong>{timeLeft}</strong>
              <span>Time Left</span>
            </div>
          </div>
        </div>

        <div className={styles.entryRow}>
          <span>Entry</span>
          <strong>{entry}</strong>
        </div>

        <button className={styles.joinButton}>
          Join Now
          <FiArrowRight />
        </button>
      </div>
    </article>
  );
}

export default GiveawayCard;
