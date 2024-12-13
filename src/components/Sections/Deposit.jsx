import Container from "../Layout/Container";
import DepositImage from "../../assets/images/home-1.svg";

const Deposit = () => {
  return (
    <Container>
      {/*
      <h1 className="bg-gradient-five bg-cover bg-clip-text pb-1 text-center text-4xl font-bold text-transparent lg:text-5xl">
        Open Development
      </h1>
      */}
      <div className="flex w-full flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="bg-gradient-five bg-cover bg-clip-text pb-1 text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-5xl">
          Future Goals
          </h1>
          <p className="max-w-xl text-center md:text-left">
          Nullion is on a mission to become a leader in sustainable blockchain technology. In the coming years, the project plans to:<br /><br />
          1. Expand Ecosystem Development: Introduce tools, APIs, and SDKs to empower developers to build innovative applications on the Nullion blockchain.<br /><br />
          2. Enhance Scalability: Integrate Layer 2 solutions such as the Lightning Network to handle higher transaction volumes and improve accessibility.<br /><br />
          3. Strengthen Community Governance: Implement decentralized governance mechanisms that allow the community to propose and vote on key upgrades and initiatives.<br /><br />
          4. Promote Global Adoption: Partner with businesses and organizations to drive the real-world use of Nullion for payments, remittances, and more.
          </p>
        </div>
        <div className="max-w-lg">
          <img src={DepositImage} alt="image of a crypto coin chart" />
        </div>
      </div>
    </Container>
  );
};

export default Deposit;
