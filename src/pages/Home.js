import React, { Component } from "react";
import Avatar from "../components/Avatar/Avatar";
import Banner from "../components/Banner/Banner";
import ButtonBanner from "../components/Banner/ButtonBanner";
import FullscreenBanner from "../components/Banner/FullscreenBanner";
import ImageFullscreen from "../components/Banner/FullscreenBanner";
import ImageMozaic from "../components/Image/ImageMozaic";
import ImageOne from "../components/Image/ImageOne";
import ImageText from "../components/Image/ImageText";
import ProductList from "../components/Product/ProductList";
import SkillTab from "../components/SkillList/SkillTab";

class Home extends Component {
    render() {
        return (
            <div>
                <FullscreenBanner
                    url={"/images/casey-horner-75_s8iWHKLs-unsplash.jpg"}
                    height={"350px"}
                    heading={"Love will tear us apart again"}
                    headingSize={"2.5rem"}
                    preHeading={
                        "the world without photography will be meaningless to us if there is no light"
                    }
                    preHeadingSize={"1rem"}
                    buttonText={"Book a meeting"}
                />
                <Avatar
                    url={"/images/white_bikini.jpg"}
                    height={"350px"}
                    heading={"Photography Website"}
                    headingSize={"7em"}
                    preHeading={"about me"}
                    preHeadingSize={"2em"}
                    description={
                        "The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion. My photos are inspired by light, color, creative perspective, techniques & personalities."
                    }
                    data={{
                        tab1: {
                            number: "123",
                            title: "Skills"
                        },
                        tab2: {
                            number: "456",
                            title: "Clients"
                        },
                        tab3: {
                            number: "789",
                            title: "Photos"
                        }
                    }}
                    buttonText="read more"
                    link="/contact"
                />
                <Banner
                    url={"/images/white_bikini.jpg"}
                    height={"350px"}
                    heading={"Photography Website"}
                    headingSize={"7em"}
                    preHeading={"for the best of them all"}
                    preHeadingSize={"2em"}
                />
                <SkillTab
                    heading={"Why choose me?"}
                    skills={[
                        {
                            icon: "/images/avatar-icon.png",
                            title: "Professionalism",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus erat. "
                        },
                        {
                            icon: "/images/eye-icon.png",
                            title: "Attention to details",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus erat. "
                        },
                        {
                            icon: "/images/flower-icon.png",
                            title: "Background picking",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus erat. "
                        },
                        {
                            icon: "/images/landscape-icon.png",
                            title: "Quality image",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus erat. "
                        },
                        {
                            icon: "/images/photo-light-icon.png",
                            title: "Professional lighting",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus erat. "
                        },
                        {
                            icon: "/images/satisfied-icon.png",
                            title: "Satisfaction Garanty",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus erat. "
                        }
                    ]}
                />
                <ProductList
                    product1={{
                        title: "Wedding",
                        description: "",
                        link: "",
                        image: "/images/chuttersnap-2qlurUeoi3A-unsplash.jpg"
                    }}
                    product2={{
                        title: "Portrait",
                        description: "",
                        link: "",
                        image: "/images/pexels-dreamlens-production-2913125.jpg"
                    }}
                    product3={{
                        title: "Drone View",
                        description: "",
                        link: "",
                        image:
                            "/images/guillaume-briard-AC-zGXaCTEk-unsplash.jpg"
                    }}
                />
                <ImageMozaic
                    title1={"Latest"}
                    title2={"Works"}
                    images={[
                        { url: "/images/white_bikini.jpg", text: "Plage" },
                        {
                            url:
                                "/images/annie-spratt-pDGNBK9A0sk-unsplash.jpg",
                            text: "Plante"
                        },
                        {
                            url:
                                "/images/casey-horner-75_s8iWHKLs-unsplash.jpg",
                            text: "Montagne"
                        },
                        {
                            url: "/images/chuttersnap-2qlurUeoi3A-unsplash.jpg",
                            text: "Mariage"
                        },
                        {
                            url:
                                "/images/fons-heijnsbroek-wm9Kp0BPrMo-unsplash.jpg",
                            text: "Plante"
                        },
                        {
                            url: "/images/erik-mclean-2Wv9VnwzeeI-unsplash.jpg",
                            text: "Portrait"
                        },
                        {
                            url:
                                "/images/fons-heijnsbroek-wm9Kp0BPrMo-unsplash.jpg",
                            text: "Paysage"
                        },
                        {
                            url:
                                "/images/giulio-magnifico-Iv20ib9rs-k-unsplash.jpg",
                            text: "Portrait"
                        },
                        {
                            url:
                                "/images/patrick-tomasso-h7XieVwFCOU-unsplash.jpg",
                            text: "Paysage"
                        },
                        {
                            url:
                                "/images/pexels-dreamlens-production-2913125.jpg",
                            text: "Montagne"
                        },
                        {
                            url: "/images/zoe-A-OGHtfm0Vo-unsplash.jpg",
                            text: "Portrait"
                        },
                        { url: "/images/white_bikini.jpg", text: "Plage" },
                        {
                            url:
                                "/images/annie-spratt-pDGNBK9A0sk-unsplash.jpg",
                            text: "Plante"
                        },
                        {
                            url:
                                "/images/casey-horner-75_s8iWHKLs-unsplash.jpg",
                            text: "Montagne"
                        },
                        {
                            url: "/images/chuttersnap-2qlurUeoi3A-unsplash.jpg",
                            text: "Mariage"
                        },
                        {
                            url:
                                "/images/fons-heijnsbroek-wm9Kp0BPrMo-unsplash.jpg",
                            text: "Plante"
                        },
                        {
                            url: "/images/erik-mclean-2Wv9VnwzeeI-unsplash.jpg",
                            text: "Portrait"
                        },
                        {
                            url:
                                "/images/fons-heijnsbroek-wm9Kp0BPrMo-unsplash.jpg",
                            text: "Paysage"
                        },
                        {
                            url:
                                "/images/guillaume-briard-AC-zGXaCTEk-unsplash.jpg",
                            text: "Portrait"
                        },
                        {
                            url:
                                "/images/patrick-tomasso-h7XieVwFCOU-unsplash.jpg",
                            text: "Paysage"
                        },
                        {
                            url:
                                "/images/pexels-dreamlens-production-2913125.jpg",
                            text: "Montagne"
                        }
                    ]}
                />

                {/* <ImageOne
          url={"/images/white_bikini.jpg"}
          borderSize={40}
          fullScreen={true}
        /> */}
            </div>
        );
    }
}

export default Home;
