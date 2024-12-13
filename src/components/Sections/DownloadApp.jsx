import { mergeClasses } from "../../lib/utils";

import Container from "../Layout/Container";
import Button from "../ui/Button";
import Logo from "../../assets/images/home-3.svg";

const DownloadApp = () => {
  return (
    <Container>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative flex justify-center md:order-last">
          <img src={Logo} className="xl:max-w-xl" alt="download app" />
        </div>

        <div className="flex flex-col gap-4 md:gap-6 lg:pl-6">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
            <h1 className="bg-gradient-five bg-cover bg-clip-text text-center text-3xl font-bold text-transparent md:text-left md:text-4xl lg:text-4xl">
            Download NULL Wallets
            </h1>
            <p className="max-w-lg text-center md:text-left xl:max-w-xl">
            We provide desktop wallets for Windows, Linux, and MacOS. The wallet apps are the safest and most secure way to send, receive, and store your Nullion coins.<br /><br />
            Make your selection below to download your wallet and get started with Nullion!
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
            <Button href="/" className="min-w-[120px]">
              {/*<img src={Logo} width={24} height={24} alt="" />{" "}*/}
              <p>Windows</p>
            </Button>
            <Button href="/" className="min-w-[120px]">
              {/*<img src={Logo} width={24} height={24} alt="" />{" "}*/}
              <p>MacOS</p>
            </Button>
            <Button href="/" className="min-w-[120px]">
              {/*<img src={Logo} width={24} height={24} alt="" />{" "}*/}
              <p>Linux</p>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DownloadApp;
