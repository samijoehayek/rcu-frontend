import JoinTheMetaverse from "../components/join-the-metaverse/join-the-metaverse";
import BackgroundImage from "../components/background-image/background-image";
import ImageSlider from "../components/image-slider/image-slider";
import ResetPasswordSnackbar from "../components/reset-password-snackbar/reset-password-snackbar";

const Home = () => {
  return (
    <>
      <ResetPasswordSnackbar />
      <div className="relative w-full h-screen overflow-hidden">
        <BackgroundImage imageName="desert-back" />

        {/* Content Layout */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* Main grid for layout */}
          <div className="flex flex-row w-full h-full">
            {/* Left Side: Login Form (35%) */}
            <div className="w-full xl:w-[35%] flex items-center justify-center xl:justify-end">
              <JoinTheMetaverse />
            </div>

            {/* Right Side: Image Slider (65%) */}
            <div className="hidden xl:flex w-[65%] items-center justify-center">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
