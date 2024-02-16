import ContentLearning from "../components/ContentLearning";
import Gif from "../components/Gif";
import HeroLearning from "../components/HeroLearning";
import TextLearning from "../components/TextLearning";

const Learning = () => {
  return (
    <>
      <HeroLearning />
      <ContentLearning />
      <Gif src="img/gif3.gif" />
      <TextLearning />
      <Gif src="img/gif4.gif" />
    </>
  );
};

export default Learning;
