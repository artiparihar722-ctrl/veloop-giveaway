import { FiArrowRight, FiClock, FiGift, FiUsers } from "react-icons/fi";
import styles from "./FeaturedGiveaways.module.css";
import iphoneImage from "../../assets/iphone.png";
import appleWatchImage from "../../assets/apple-watch.png";
import airpodsImage from "../../assets/airpods.png";
import amazonVoucherImage from "../../assets/amazon-voucher.png";
const giveaways = [
  {
    rank: "1st Prize",
    title: "iPhone 15 Pro",
    description: "Latest iPhone 15 Pro 128GB",
    participants: "2.3K+",
    time: "12d : 06h : 30m",
    entry: "250 VEs",
    accent: "purple",
    image: iphoneImage,
  },
  {
    rank: "2nd Prize",
    title: "Apple Watch Series 9",
    description: "Latest Apple Watch Series 9",
    participants: "1.8K+",
    time: "9d : 06h : 30m",
    entry: "200 VEs",
    accent: "blue",
    image: appleWatchImage,
  },
  {
    rank: "3rd Prize",
    title: "AirPods Pro 2",
    description: "Active Noise Cancellation",
    participants: "3.1K+",
    time: "7d : 08h : 20m",
    entry: "500 SVEs",
    accent: "green",
    image: airpodsImage,
  },
  {
    rank: "Lucky Draw",
    title: "Amazon Gift Card",
    description: "₹2,000 Amazon Gift Card",
    participants: "1.3K+",
    time: "5d : 02h : 15m",
    entry: "500 VEs",
    accent: "orange",
    image: amazonVoucherImage,
  },
];

function FeaturedGiveaways() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>
              <FiGift />
              FEATURED REWARDS
            </span>

            <h2>Featured Giveaways</h2>

            <p>
              Participate in our handpicked giveaways and win exciting rewards.
            </p>
          </div>

          <button className={styles.viewButton}>
            View All Giveaways
            <FiArrowRight />
          </button>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.cardsGrid}>
            {giveaways.map((giveaway) => (
              <article
                className={`${styles.card} ${styles[giveaway.accent]}`}
                key={giveaway.title}
              >
                <div className={styles.rank}>{giveaway.rank}</div>

                <div className={styles.imageArea}>
                  <img
                    src={giveaway.image}
                    alt={giveaway.title}
                    className={styles.prizeImage}
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3>{giveaway.title}</h3>

                  <p>{giveaway.description}</p>

                  <div className={styles.meta}>
                    <div>
                      <FiUsers />
                      <span>
                        <strong>{giveaway.participants}</strong>
                        Participants
                      </span>
                    </div>

                    <div>
                      <FiClock />
                      <span>
                        <strong>{giveaway.time}</strong>
                        left
                      </span>
                    </div>
                  </div>

                  <div className={styles.entryRow}>
                    <span>Entry Cost</span>
                    <strong>{giveaway.entry}</strong>
                  </div>

                  <button className={styles.joinButton}>
                    Join Now
                    <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.howTo}>
            <div className={styles.howHeader}>
              <span className={styles.howIcon}>
                <FiGift />
              </span>

              <div>
                <h3>How to Participate?</h3>
                <p>Follow these simple steps to join and win.</p>
              </div>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span>1</span>
                <div>
                  <h4>Sign Up / Login</h4>
                  <p>Create your account or login to get started.</p>
                </div>
              </div>

              <div className={styles.step}>
                <span>2</span>
                <div>
                  <h4>Complete Tasks</h4>
                  <p>Complete simple tasks and earn more entries.</p>
                </div>
              </div>

              <div className={styles.step}>
                <span>3</span>
                <div>
                  <h4>Get Entries</h4>
                  <p>Each task gives you entries for the giveaway.</p>
                </div>
              </div>

              <div className={styles.step}>
                <span>4</span>
                <div>
                  <h4>Win Rewards</h4>
                  <p>Winners are selected randomly after the giveaway ends.</p>
                </div>
              </div>
            </div>

            <button className={styles.rulesButton}>
              View Rules & Guidelines
              <FiArrowRight />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGiveaways;
