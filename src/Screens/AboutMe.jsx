import React from "react";
import Certificate from "../components/Certificate";
import DevIcon from "../components/DevIcon";
import DevIconSection from "../components/DevIconSection";

let programmingLanguages = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    value: 90,
    years: 1,
    name: "Javascript",
  }, // JS
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    value: 90,
    years: 1,
    name: "Java",
  }, // Java
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    value: 80,
    years: 1,
    name: "Python",
  }, // Python
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    value: 80,
    years: 1,
    name: "C++",
  }, // C++
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    value: 70,
    years: 1,
    name: "PHP",
  }, // php
];
let frameworks = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    value: 90,
    years: 1,
    name: "React.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
    value: 90,
    years: 1,
    name: "Laravel",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    value: 90,
    years: 1,
    name: "Express.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    value: 90,
    years: 1,
    name: "Next.js",
  },
];
let databases = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    value: 90,
    years: 1,
    name: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    value: 90,
    years: 1,
    name: "Postgres",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    value: 90,
    years: 1,
    name: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    value: 90,
    years: 1,
    name: "Sqlite",
  },
];
let versionControl = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    value: 90,
    years: 1,
    name: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    value: 90,
    years: 1,
    name: "Docker",
  },
];

function AboutMe() {
  return (
    <div
      id="AboutMe"
      className="w-full min-h-screen h-fit flex flex-col lg:flex-row"
    >
      {/* Info */}
      <div className="w-full lg:w-1/2 min-h-screen h-fit flex justify-center  ">
        <div className="w-full max-w-[80ch] bg-white/5 min-h-screen h-full flex flex-col gap-4 mx-4 p-5 ">
          <div>
            <div className="flex gap-4 items-center justify-start flex-wrap">
              <h1 className="text-4xl text-white  font-extrabold shrink-0">
                Kamil Jarrouj
              </h1>
              <div className="rounded-md bg-primary/50 text-highlighted font-bold px-2 py-1 hover:bg-primary/80 hover:text-important cursor-pointer shrink-0">
                My Resume
              </div>
            </div>
            <h2 className="pl-1 text-xl text-white italic mt-4">
              Software Developer
            </h2>
            <p className="text-less-important text-justify pl-2 py-1">
              Information Technology Engineer with a strong background in
              Technical Support and Networking. Skilled in building and
              maintaining large and complicated networks, while utilizing
              Cyber-security techniques to protect and secure networks.
              Proficient in a variety of programming languages and frameworks,
              including JavaScript, Python, and Java. Strong problem-solving
              skills and ability to work well in a team environment.
            </p>
          </div>
          {/* certificates */}
          <div>
            <h2 className="text-highlighted text-xl pt-2 pl-1">Certificates</h2>
            <div className="text-less-important  pl-2 py-1 flex flex-col gap-3">
              <Certificate
                logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1JfiMKZC_cl3pUTSRHcTIOM0jU-kA3ATyRqaMXZTdg&s"
                text="AL-Hawash Private University - Bachelor's of Informatics Engineering."
              ></Certificate>
              <Certificate
                logoUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                url="https://www.coursera.org/account/accomplishments/certificate/CVLQRWJCF9HF"
                text="IBM - Introduction to Networking and Storage."
              ></Certificate>
              <Certificate
                logoUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                url="https://www.coursera.org/account/accomplishments/certificate/NMUMC6JQM4PU"
                text="DeepLearning.AI - Sequence Models."
              ></Certificate>
              <Certificate
                logoUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                url="https://www.coursera.org/account/accomplishments/certificate/U5GYNTGANRBD"
                text="DeepLearning.AI - Convolutional Neural Networks."
              ></Certificate>
              <Certificate
                logoUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                url="https://www.coursera.org/account/accomplishments/certificate/WP4RA66HSN92"
                text="DeepLearning.AI - Improving Deep Neural Networks."
              ></Certificate>
              <Certificate
                logoUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                url="https://www.coursera.org/account/accomplishments/certificate/MV63R2EUZS7K"
                text="DeepLearning.AI - Neural Networks and Deep Learning."
              ></Certificate>
              <Certificate
                logoUrl="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1"
                url="https://www.coursera.org/account/accomplishments/certificate/5J8B5HSJ6S78"
                text="DeepLearning.AI - Structuring Machine Learning Projects."
              ></Certificate>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-4 grow w-full  lg:w-1/2 px-4 pt-1 lg:pt-0 ">
        <DevIconSection title={"Programming Languages"}>
          {programmingLanguages.map((icon, index) => (
            <DevIcon
              key={index}
              years={icon.years}
              src={icon.src}
              value={icon.value}
              name={icon.name}
            />
          ))}
        </DevIconSection>
        <DevIconSection title={"Frameworks"}>
          {frameworks.map((icon, index) => (
            <DevIcon
              years={icon.years}
              key={index}
              src={icon.src}
              value={icon.value}
              name={icon.name}
            />
          ))}
        </DevIconSection>
        <DevIconSection title={"Databases"}>
          {databases.map((icon, index) => (
            <DevIcon
              years={icon.years}
              key={index}
              src={icon.src}
              value={icon.value}
              name={icon.name}
            />
          ))}
        </DevIconSection>
        <DevIconSection title={""}>
          {versionControl.map((icon, index) => (
            <DevIcon
              years={icon.years}
              key={index}
              src={icon.src}
              value={icon.value}
              name={icon.name}
            />
          ))}
        </DevIconSection>
      </div>
    </div>
  );
}

export default AboutMe;
