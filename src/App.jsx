import GiveawayHero from "./components/GiveawayHero/GiveawayHero";
import GiveawayStats from "./components/GiveawayStats/GiveawayStats";
import FeaturedGiveaways from "./components/FeaturedGiveaways/FeaturedGiveaways";
import "./App.css";

function App() {
  return (
    <main>
      <GiveawayHero />
      <GiveawayStats />
      <FeaturedGiveaways />
    </main>
  );
}

export default App;
