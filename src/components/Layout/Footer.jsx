import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { SocialLinks, ServiceLinks, CompanyLinks } from "../../data/data";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto grid w-[90%] max-w-7xl justify-items-center gap-10 border-y-2 border-app-300 px-4 py-16 md:grid-cols-3 md:justify-items-center md:px-8 md:py-20 lg:gap-12">
        <div className="flex flex-col items-center gap-3.5 md:items-start">
          <Link to="/">
            <h2 className="text-2xl font-bold text-app-800">Nullion</h2>
          </Link>

          <div className="flex flex-col gap-3">
            <p className="max-w-md text-center md:text-left">
            A Fast, Secure, Scalable and Decentralized Blockchain for All
            </p>
            <ul className="flex items-center justify-center gap-2 md:justify-start">
              {SocialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className="text-2xl font-bold text-app-50">Menu</h2>
          <ul className="flex flex-col gap-2">
            {CompanyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="transition-colors duration-200 hover:text-app-50"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3.5">
          <h2 className="text-2xl font-bold text-app-50">Links</h2>
          <ul className="flex flex-col gap-2">
            {ServiceLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="transition-colors duration-200 hover:text-app-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="py-6">
        <p className="flex items-center justify-center gap-1 text-center text-sm font-medium">
          <Copyright className="size-[18px]" /> {new Date().getFullYear()} <span className="text-app-800">Nullion</span> |
          {" "}
          <a
            target="_blank"
            href="#"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-app-50/80"
          >
            
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
