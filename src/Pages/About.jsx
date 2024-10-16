import OurStory from "../Components/OurStory";
import Path from "../Components/Path";
import Stats from "../Components/Stats";

const About = () => {
  return (
    <div>
      <Path>About</Path>
      <OurStory />
      <div className=" flex justify-center">
        <Stats />
      </div>
    </div>
  );
};

export default About;
