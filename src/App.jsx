import { AiOutlineArrowUp } from "react-icons/ai";
import Main from "./Screens/Main";
import AboutMe from "./Screens/AboutMe";

import DarkScreen from "./components/DarkScreen";
import LightScreen from "./components/LightScreen";
import ContactMe from "./Screens/ContactMe";
import DevideSpace from "./components/DevideSpace";
function App() {
  return (
    <div className="h-fit w-full  bg-dark/70 relative font-open-sans ">
      <div
        onClick={() => {
          document.getElementById("top").scrollIntoView({ behavior: "smooth" });
        }}
        className="rounded-full w-[3rem] h-[3rem] group bg-primary/10 hover:bg-primary fixed right-[3%] bottom-[3%] z-50 cursor-pointer  flex justify-center items-center  "
      >
        <AiOutlineArrowUp className="w-[1.5rem] h-fit fill-white/10 group-hover:fill-white" />
      </div>
      <LightScreen>
        <Main />
      </LightScreen>
      <DevideSpace />
      <LightScreen>
        <AboutMe />
      </LightScreen>
      <DevideSpace />
      <DarkScreen>
        <ContactMe />
      </DarkScreen>
    </div>
  );
}

export default App;
