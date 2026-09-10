import { FiGift, FiUsers, FiAward, FiClock } from "react-icons/fi";
import styles from "./GiveawayStats.module.css";

const stats = [
  {
    icon: FiGift,
    value: "24",
    label: "Total Giveaways",
  },
  {
    icon: FiUsers,
    value: "8,500+",
    label: "Participants",
  },
  {
    icon: FiAward,
    value: "1,200+",
    label: "Prizes Won",
  },
  {
    icon: FiClock,
    value: "12 Days",
    label: "Giveaway Ends In",
  },
];

function GiveawayStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div className={styles.statCard} key={index}>
              <div className={styles.iconBox}>
                <Icon />
              </div>

              <div className={styles.statContent}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GiveawayStats;
