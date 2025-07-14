import JoinTheMetaverse from "../components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "../components/background-image/background-image";
import ImageSlider from "../components/image-slider/image-slider";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundImage imageName="desert-back" />
      
      {/* Content Layout */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Main grid for layout */}
        <div className="flex flex-row w-full h-full">
          {/* Left Side: Login Form (35%) */}
          <div className="w-full md:w-[35%] flex items-center justify-end">
            <JoinTheMetaverse />
          </div>

          {/* Right Side: Image Slider (65%) */}
          <div className="hidden md:flex w-[65%] items-center justify-center">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;