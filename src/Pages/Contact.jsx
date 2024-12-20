import { useEffect } from "react";

import Container from "../components/Layout/Container";
import Button from "../components/ui/Button";
import { Map, Phone, Mail } from "lucide-react";
import { SocialLinks} from "../data/data";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Nullion";
  });

  {/* FOR WORKING EMAIL
      https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
      https://www.emailjs.com/docs/examples/reactjs/
    */}

  return (
    <main>
      <Container>
        <br/><br/>
        <div className="flex flex-col gap-4">
          <h1 className="bg-gradient-five bg-cover bg-clip-text text-center text-4xl font-bold text-transparent lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-lg text-center">
            Got questions? Don&apos;t hesitate to reach out! Whether you need
            more information or assistance, feel free to contact us.
          </p>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-2">
              {SocialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.icon}</a>
                </li>
              ))}
            </ul>
        </div>
        <br/><br/>
        {/*
        <div className="grid gap-12 md:grid-cols-2">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="contactName" className="font-medium text-app-100">
                Name <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                id="contactName"
                className="rounded-md border border-app-200 bg-transparent px-2 py-3 text-sm outline-none transition-colors duration-200 focus:border-app-50/60"
                placeholder="Your Name"
                aria-required="true"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contactEmail"
                className="font-medium text-app-100"
              >
                Email <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                id="contactEmail"
                className="rounded-md border border-app-200 bg-transparent px-2 py-3 text-sm outline-none transition-colors duration-200 focus:border-app-50/60"
                placeholder="Your Email"
                aria-required="true"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contactMessage"
                className="font-medium text-app-100"
              >
                Message <b>*</b>
              </label>
              <textarea
                name="message"
                id="contactMessage"
                className="resize-y rounded-md border border-app-200 bg-transparent px-2 py-3 text-sm outline-none transition-colors duration-200 focus:border-app-50/60"
                placeholder="Your Message..."
                aria-required="true"
                required
                spellCheck="false"
              ></textarea>
            </div>
            <Button>Submit</Button>
          </form>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 rounded-md border-2 border-app-300 p-6">
              <h3 className="text-2xl font-semibold text-app-100">
                Nullion Contact
              </h3>
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-3">
                  <span>
                    <Map />
                  </span>{" "}
                  Berlin, Germany
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <Phone />
                  </span>{" "}
                  +123456789
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <Mail />
                  </span>{" "}
                  contact@nullionchain.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-md border-2 border-app-300 p-6">
              <h3 className="text-2xl font-semibold text-app-100">
                Office Hours
              </h3>
              <div className="flex flex-col gap-5">
                <p className="">
                  Monday - Friday: <span>9:00PM - 5:00PM</span>
                </p>
                <p>
                  Saturday: <span>9:30PM - 3:30PM</span>
                </p>
                <p>
                  Sunday: <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        */}
      </Container>
    </main>
  );
};

export default Contact;
