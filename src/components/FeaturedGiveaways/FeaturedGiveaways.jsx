import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiGift,
  FiLock,
  FiStar,
  FiUsers,
} from "react-icons/fi";

import styles from "./FeaturedGiveaways.module.css";

import iphoneImage from "../../assets/iphone.png";
import appleWatchImage from "../../assets/apple-watch.png";
import airpodsImage from "../../assets/airpods.png";
import amazonVoucherImage from "../../assets/amazon-voucher.png";
import amazonVoucher500Image from "../../assets/amazon-voucher-500.png";
import voucher20Image from "../../assets/voucher-20.png";

const giveaways = [
  {
    id: "iphone-15-pro",
    rank: "1st Prize",
    status: "LIVE NOW",
    title: "iPhone 15 Pro",
    description: "Premium smartphone with an unforgettable experience.",
    participants: "2.3K+",
    time: "12d : 06h : 30m",
    entry: "250 VEs",
    accent: "purple",
    image: iphoneImage,
    featured: true,
  },
  {
    id: "apple-watch-series-9",
    rank: "2nd Prize",
    status: "LIVE NOW",
    title: "Apple Watch Series 9",
    description: "Smart fitness, health and everyday connectivity.",
    participants: "1.8K+",
    time: "9d : 06h : 30m",
    entry: "200 VEs",
    accent: "blue",
    image: appleWatchImage,
    featured: true,
  },
  {
    id: "airpods-pro-2",
    rank: "3rd Prize",
    status: "LIVE NOW",
    title: "AirPods Pro 2",
    description: "Immersive sound with active noise cancellation.",
    participants: "3.1K+",
    time: "7d : 08h : 20m",
    entry: "500 SVEs",
    accent: "green",
    image: airpodsImage,
    featured: true,
  },
  {
    id: "amazon-2000",
    rank: "LUCKY REWARD",
    status: "LIVE NOW",
    title: "₹2,000 Amazon Voucher",
    description: "A flexible shopping reward for your next purchase.",
    participants: "1.3K+",
    time: "5d : 02h : 15m",
    entry: "500 VEs",
    accent: "orange",
    image: amazonVoucherImage,
    featured: true,
  },
  {
    id: "amazon-500",
    rank: "SPECIAL REWARD",
    status: "LIVE NOW",
    title: "₹500 Amazon Voucher",
    description: "A simple reward with plenty of ways to spend it.",
    participants: "980+",
    time: "6d : 04h : 40m",
    entry: "300 VEs",
    accent: "pink",
    image: amazonVoucher500Image,
    featured: false,
  },
  {
    id: "amazon-20",
    rank: "TOKEN REWARD",
    status: "COMING SOON",
    title: "₹20 Voucher",
    description: "A quick digital reward powered by your Tokens.",
    participants: "Coming Soon",
    time: "Starts Soon",
    entry: "2,000 Tokens",
    accent: "cyan",
    image: voucher20Image,
    featured: false,
  },
];

const steps = [
  {
    number: "01",
    icon: FiUsers,
    title: "Sign up or login",
    text: "Access your VELOOP Rewards account.",
  },
  {
    number: "02",
    icon: FiStar,
    title: "Earn entries",
    text: "Complete eligible activities and collect entries.",
  },
  {
    number: "03",
    icon: FiGift,
    title: "Choose a reward",
    text: "Select the giveaway that interests you.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Win & claim",
    text: "Winners are announced after the giveaway ends.",
  },
];

function FeaturedGiveaways() {
  const handleJoin = (giveawayId) => {
    window.location.href = `/giveaway/${giveawayId}`;
  };

  return (
    <section className={styles.section} id="giveaways">
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <div className={styles.headingArea}>
            <div className={styles.eyebrow}>
              <FiGift />
              <span>REWARD COLLECTION</span>
            </div>

            <h2>
              Choose your next
              <span> reward.</span>
            </h2>

            <p>
              Explore exclusive giveaways, use your earned entries and get a
              chance to take home something special.
            </p>
          </div>

          <button className={styles.viewButton}>
            <span>View All Rewards</span>
            <FiArrowRight />
          </button>
        </div>

        {/* FEATURED STRIP */}
        <div className={styles.featuredStrip}>
          <div className={styles.stripIcon}>
            <FiStar />
          </div>

          <div className={styles.stripText}>
            <strong>Handpicked rewards for you</strong>
            <span>
              New giveaways are added regularly. Pick a reward and start earning
              entries.
            </span>
          </div>

          <div className={styles.liveIndicator}>
            <span></span>
            Giveaways Live
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.contentGrid}>
          {/* GIVEAWAY CARDS */}
          <div className={styles.cardsGrid}>
            {giveaways.map((giveaway) => (
              <article
                className={`${styles.card} ${styles[giveaway.accent]}`}
                key={giveaway.id}
              >
                {/* CARD TOP */}
                <div className={styles.cardTop}>
                  <span className={styles.rank}>
                    <FiStar />
                    {giveaway.rank}
                  </span>

                  <span
                    className={`${styles.status} ${
                      giveaway.status === "COMING SOON" ? styles.upcoming : ""
                    }`}
                  >
                    <span></span>
                    {giveaway.status}
                  </span>
                </div>

                {/* IMAGE */}
                <div className={styles.imageArea}>
                  <div className={styles.imageGlow}></div>

                  <div className={styles.imageFrame}>
                    <img
                      src={giveaway.image}
                      alt={giveaway.title}
                      className={styles.prizeImage}
                    />
                  </div>

                  <div className={styles.rewardTag}>
                    <FiGift />
                    Premium Reward
                  </div>
                </div>

                {/* CONTENT */}
                <div className={styles.cardContent}>
                  <h3>{giveaway.title}</h3>

                  <p>{giveaway.description}</p>

                  {/* META */}
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaIcon}>
                        <FiUsers />
                      </span>

                      <div>
                        <small>Participants</small>
                        <strong>{giveaway.participants}</strong>
                      </div>
                    </div>

                    <div className={styles.metaItem}>
                      <span className={styles.metaIcon}>
                        <FiClock />
                      </span>

                      <div>
                        <small>Ends in</small>
                        <strong>{giveaway.time}</strong>
                      </div>
                    </div>
                  </div>

                  {/* ENTRY */}
                  <div className={styles.entryBox}>
                    <div>
                      <small>Entry cost</small>
                      <span>Use your reward balance</span>
                    </div>

                    <strong>{giveaway.entry}</strong>
                  </div>

                  {/* CTA */}
                  <button
                    className={styles.joinButton}
                    onClick={() => handleJoin(giveaway.id)}
                  >
                    <span>
                      {giveaway.status === "COMING SOON"
                        ? "Explore Reward"
                        : "View Giveaway"}
                    </span>

                    <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* HOW TO PARTICIPATE */}
          <aside className={styles.howTo}>
            <div className={styles.howTop}>
              <div className={styles.howIcon}>
                <FiGift />
              </div>

              <span className={styles.howLabel}>HOW IT WORKS</span>

              <h3>
                Your path to
                <span> rewards.</span>
              </h3>

              <p>
                Getting started is simple. Earn entries, choose your reward and
                participate.
              </p>
            </div>

            <div className={styles.steps}>
              {steps.map((step) => {
                const StepIcon = step.icon;

                return (
                  <div className={styles.step} key={step.number}>
                    <div className={styles.stepNumber}>{step.number}</div>

                    <div className={styles.stepIcon}>
                      <StepIcon />
                    </div>

                    <div className={styles.stepContent}>
                      <h4>{step.title}</h4>
                      <p>{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.howTrust}>
              <FiLock />

              <div>
                <strong>Fair & transparent</strong>
                <span>
                  Participation details and reward costs are shown clearly.
                </span>
              </div>
            </div>

            <button className={styles.rulesButton}>
              <span>View Rules & Guidelines</span>
              <FiArrowRight />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGiveaways;
