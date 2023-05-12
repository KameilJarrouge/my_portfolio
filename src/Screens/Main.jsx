import React from "react";
import Card from "../components/Card";
import CardParagraph from "../components/CardParagraph";
import CardTitle from "../components/CardTitle";
import Hero from "../components/Hero";

function Main() {
  const handleNavigation = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="top"
      className="w-full h-fit min-h-screen flex flex-row justify-center   items-center "
    >
      <div className="w-full lg:w-1/2 h-fit min-h-screen flex flex-col items-center justify-around  ">
        <div className="w-full h-fit  flex flex-col items-center justify-center gap-4 my-4">
          <Hero />
        </div>
        <div className="w-full h-fit grid  grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          <Card onClick={() => handleNavigation("AboutMe")}>
            <CardTitle>About Me</CardTitle>
            <CardParagraph>
              Learn more about My Educational background (College Degree and
              Online Certificates)
            </CardParagraph>
          </Card>
          <Card>
            <CardTitle>Attendance & Tracking System</CardTitle>
            <CardParagraph>
              A system for Educational Institutions to keep track of students
              and personnel on campus.
            </CardParagraph>
          </Card>
          <Card>
            <CardTitle>Dental Management System</CardTitle>
            <CardParagraph>
              A web based Dental Management System to save and log patient data
              for Dentists.
            </CardParagraph>
          </Card>
          <Card>
            <CardTitle>Contact Me</CardTitle>
            <CardParagraph>
              Ways to reach me, and My Github profile
            </CardParagraph>
          </Card>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 lg:h-screen grow ">
        <div className="hidden lg:inline w-[0.5rem] min-h-full bg-gradient-to-r from-dark to-[#BCBCBC]"></div>
        <img src="/main.jpg" className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default Main;
