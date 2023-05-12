import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
function ContactMe() {
  return (
    <div
      id="ContactMe"
      className="w-full min-h-[50vh] h-fit flex flex-wrap   p-5 gap-[3rem] text-less-important bg-dark/90"
    >
      <div className="flex flex-col  gap-4 ">
        <h1 className="text-xl text-important border-b-2 border-b-primary/50 w-fit">
          {" "}
          Contact Me
        </h1>
        <div className="flex text-sm items-center gap-2 hover:text-important">
          <MdOutlineLocationOn className="w-[1.2rem] h-fit" />
          Masyaf, Hama, Syria
        </div>
        <a
          target={"_blank"}
          href="mailto:kamilJarrougedev@gmail.com"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlineMail className="w-[1.2rem] h-fit" />
          kamilJarrougedev@gmail.com
        </a>
        <a
          target={"_blank"}
          href="tel:+963936005814"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlinePhone className="w-[1.2rem] h-fit" />
          +963-936-005-814
        </a>
      </div>
      <div className="flex flex-col  gap-4 ">
        <h1 className="text-xl text-important border-b-2 border-b-primary/50 w-fit">
          {" "}
          Social Media
        </h1>
        <a
          target={"_blank"}
          href="#"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlineInstagram className="w-[1.2rem] h-fit" />
        </a>
        <a
          target={"_blank"}
          href="https://linkedin.com/in/kamil-jarrouge"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlineLinkedin className="w-[1.2rem] h-fit" />
          linkedin.com/in/kamil-jarrouge
        </a>
        <a
          target={"_blank"}
          href="https://github.com/KameilJarrouge"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlineGithub className="w-[1.2rem] h-fit" />
          github.com/KameilJarrouge
        </a>
        <a
          target={"_blank"}
          href="#"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlineTwitter className="w-[1.2rem] h-fit" />
        </a>
        <a
          target={"_blank"}
          href="#"
          className="flex text-sm items-center gap-2 hover:text-important cursor-pointer"
        >
          <AiOutlineFacebook className="w-[1.2rem] h-fit" />
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
