import Hero from "../components/Sections/Hero";
import Deposit from "../components/Sections/Deposit";
import Portfolio from "../components/Sections/Portfolio";
import ChooseUs from "../components/Sections/ChooseUs";
import DownloadApp from "../components/Sections/DownloadApp";
import Roadmap from "../components/Sections/Roadmap";
import Faq from "../components/Sections/Faq";

const Home = () => {
  return (
    <main>
      <Hero />
      <Deposit />
      <Portfolio />
      <ChooseUs />
      <DownloadApp />
      <Roadmap />
      <Faq />
    </main>
  );
};

export default Home;
