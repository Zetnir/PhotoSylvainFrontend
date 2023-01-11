import React, { Component } from "react";
import Banner from "../components/Banner/Banner";
import ButtonBanner from "../components/Banner/ButtonBanner";
import FullscreenBanner from "../components/Banner/FullscreenBanner";
import ImageFullscreen from "../components/Banner/FullscreenBanner";
import ImageOne from "../components/Image/ImageOne";
import ImageText from "../components/Image/ImageText";

class Home extends Component {
  render() {
    return (
      <div>
        <FullscreenBanner
          url={"/images/white_bikini.jpg"}
          height={"350px"}
          heading={"Photography Website"}
          headingSize={"7em"}
          preHeading={"for the best of them all"}
          preHeadingSize={"2em"}
          buttonText={"Book a meeting"}
        />
        <ImageText
          url={"/images/white_bikini.jpg"}
          heading={"Photography Website"}
          preHeading={"for the best of them all"}
          description={
            "Blahblahblahblahblhah Blahblahblahblahblhah Blahblahblahblahblhah Blahblahblahblahblhah BlahblahblahblahblhahBlahblahblahblahblhahBlahblahblahblahblhah"
          }
        />
        <Banner
          url={"/images/white_bikini.jpg"}
          height={"350px"}
          heading={"Photography Website"}
          headingSize={"7em"}
          preHeading={"for the best of them all"}
          preHeadingSize={"2em"}
        />
        <ImageText
          url={"/images/white_bikini.jpg"}
          heading={"Photography Website"}
          preHeading={"for the best of them all"}
          description={
            "Blahblahblahblahblhah Blahblahblahblahblhah Blahblahblahblahblhah Blahblahblahblahblhah BlahblahblahblahblhahBlahblahblahblahblhahBlahblahblahblahblhah"
          }
          left={true}
        />
        <ButtonBanner
          url={"/images/white_bikini.jpg"}
          height={"350px"}
          heading={"Photography Website"}
          headingSize={"5em"}
          preHeading={"for the best of them all"}
          preHeadingSize={"2em"}
          buttonText={"Book a meeting"}
        />
        <ImageOne
          url={"/images/white_bikini.jpg"}
          borderSize={40}
          fullScreen={true}
        />
      </div>
    );
  }
}

export default Home;
