import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "../Layout/Container";
import AppMockup from "../../assets/images/home-2.svg";
import GradientButton from "../ui/GradientButton";
import Modal from "../Modal/Modal";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <Container>
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <img src={AppMockup} alt="app mockup" width="50%" height="50%"/>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
          <h1 className="bg-gradient-five bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-5xl">
          Additional Information
          </h1>
          <p className="max-w-xl text-center md:text-left">
          - Launch Timeline: Mining will officially begin on January 1, 2025, with a starting block reward of 6.25 NULL.<br /><br />
          - Premine Allocation: A small portion of 500,000 NULL is reserved to fund community initiatives, operational costs, future development ,while 50% (250,000) is reserved for the founder.<br /><br />
          - Join the Movement: Stay updated and be part of the conversation by joining our Telegram community: [https://t.me/NullionChain].
          </p>
          {/*}
          <GradientButton className="max-w-44" onClick={() => window.location.href = "/about"}>
            Get Started
          </GradientButton>
          */}
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            onClick={handleModal}
            handleClose={handleModal}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Portfolio;
