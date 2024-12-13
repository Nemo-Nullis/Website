import { useEffect } from "react";

import Container from "../components/Layout/Container";
import AboutImage from "../assets/images/nullion_words.png";
import MissionImage from "../assets/images/mission.jpg";
import { Missions } from "../data/data";

const About = () => {
  useEffect(() => {
    document.title = "About | Nullion";
  });

  return (
    <main>
      <Container>
        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="bg-gradient-five bg-cover bg-clip-text bg-center pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
              About Us
            </h1>
            <p className="text-center">
              Welcome to Nullion
            </p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center md:order-last">
              <img src={AboutImage} alt="about us" className="rounded-xl" height="250" width="250"/>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="bg-gradient-five bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-5xl">
                Nullion
              </h1>
              <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="max-w-lg text-center md:max-w-2xl md:text-left">
                Nullion (NULL) is a decentralized, community-driven blockchain designed to provide a fast, secure, and sustainable digital currency ecosystem. Built as a fork of the Bitcoin Blockchain, Nullion improves on its predecessor by incorporating a 5-minute block time, 2 MB block size, and a carefully structured annual halving mechanism. These innovations enhance transaction speed, scalability, and long-term value for all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-2">
            <h1 className="bg-gradient-five bg-cover bg-clip-text bg-center pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
              Our Mission
            </h1>
            <p className="text-center">
            At its core, Nullion aims to create a blockchain network that is simple yet powerful, accessible to everyone, and optimized for real-world use cases. The platform emphasizes decentralization and community empowerment, ensuring that all stakeholders—miners, developers, and users—have a voice in its evolution.
            </p>
          </div>
        </div>
      </Container>
      <br /><br /><br /><br />
    </main>
  );
};

export default About;
