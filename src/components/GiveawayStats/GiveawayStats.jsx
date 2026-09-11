import { useEffect, useState } from "react";
import { FiClock, FiGift, FiStar, FiUsers } from "react-icons/fi";
import styles from "./GiveawayStats.module.css";

const initialStats = [
  {
    label: "Total Giveaways",
    value: "24",
    suffix: "Active",
    icon: FiGift,
  },
  {
    label: "Total Participants",
    value: "10K+",
    suffix: "Users",
    icon: FiUsers,
  },
  {
    label: "Prizes Won",
    value: "1,250+",
    suffix: "Rewards",
    icon: FiStar,
  },
];

function GiveawayStats() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        let { days, hours, minutes, seconds } = previous;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            } else if (days > 0) {
              hours = 23;
              days -= 1;
            }
          }
        }

        return {
          days,
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        {initialStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article className={styles.statCard} key={stat.label}>
              <div className={styles.iconBox}>
                <Icon />
              </div>

              <div className={styles.statContent}>
                <strong className={styles.statValue}>
                  {stat.value}
                  <span className={styles.statSuffix}>{stat.suffix}</span>
                </strong>

                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </article>
          );
        })}

        <article className={styles.statCard}>
          <div className={styles.iconBox}>
            <FiClock />
          </div>

          <div className={styles.countdownContent}>
            <span className={styles.countdownLabel}>Ends In</span>

            <strong>
              {String(timeLeft.days).padStart(2, "0")}:
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </strong>

            <span className={styles.remainingLabel}>Remaining</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default GiveawayStats;
