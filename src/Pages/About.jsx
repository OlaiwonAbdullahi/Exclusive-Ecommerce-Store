import OurStory from "../Components/OurStory";
import Path from "../Components/Path";
import Stats from "../Components/Stats";
import Team from "../Components/Team";
import Feature from "../Components/Feature";

const About = () => {
  return (
    <div>
      <Path>About</Path>
      <OurStory />
      <div className=" flex justify-center">
        <Stats />
      </div>
      <div className=" flex justify-center items-center mx-auto">
        <Team />
      </div>

      <Feature />
    </div>
  );
};

export default About;
