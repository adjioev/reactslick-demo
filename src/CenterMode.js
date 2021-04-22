import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.state = {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "50px",
    };
  }
  componentDidMount() {
    const list = this.sliderRef.current.innerSlider.list;
    list.style.padding = "0px";
  }

  render() {
    const settings = {
      className: "center-slick",
      // centerMode: false,
      infinite: false,
      //centerPadding: "250px",
      // slidesToShow: 1.5, //1.2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 500,
      dots: true,
      beforeChange: (oldIdx, newIdx) => {
        // Number of slides
        const slideCount = this.sliderRef.current.innerSlider.state.slideCount;
        /// Ref to slider list
        const list = this.sliderRef.current.innerSlider.list;
        // how to get next slide
        // const newSlideElement = this.sliderRef.current.innerSlider.list.querySelector(
        //   `[data-index="${newIdx}"]`
        // );

        const responsive = this.sliderRef.current.props.responsive;
        const bp = this.sliderRef.current.state.breakpoint;
        const settings = responsive.find((x) => x.breakpoint === bp).settings;
        setTimeout(() => {
          if (newIdx === 0) {
            list.style.padding = "0px";
          } else if (newIdx > slideCount - 2) {
            list.style.padding = `0px calc(${settings.centerPadding} * 2)`;
          } else {
            list.style.padding = `10px ${settings.centerPadding}`;
          }
        });

        //
        //         console.log("NewIdx", newIdx);
        //
        // const prevSlideElement = this.sliderRef.current.innerSlider.list.querySelector(
        //   `[data-index="${oldIdx}"]`
        // );
        // setTimeout(() => {
        //   if (newIdx === 0) {
        //     this.setState({ slidesToShow: 1.3, centerMode: false });
        //   } else {
        //     this.setState({
        //       slidesToShow: 1,
        //       centerMode: true,
        //       centerPadding: "80px",
        //     });
        //   }
        // });
        // console.log("Slde element", this.state);
        // settings.centerMode = true;
        // const slideTrack = this.sliderRef.current.innerSlider.querySelector(
        //   ".slick-list"
        // );
        // console.log("slideTrack: ", slideTrack);
        // prevSlideElement.classList.remove("next-slide-anim");
        // nextSlideElement.classList.add("next-slide-anim");
      },
      responsive: [
        {
          breakpoint: 375,
          settings: {
            centerPadding: "25px",
            slidesToShow: 1.3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            centerPadding: "15px",
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: "54px",
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: "198px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            centerPadding: "240px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1440,
          settings: {
            centerPadding: "288px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1920,
          settings: {
            centerPadding: "384px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 2048,
          settings: {
            centerPadding: "384px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 3840,
          settings: {
            centerPadding: "384px",
            slidesToShow: 1,
          },
        },
      ],
      // variableWidth: false,
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 2,
      //       centerPadding: "60px",
      //     },
      //   }
      // ],
    };

    return (
      <div>
        <h2>Center Mode {this.state.centerMode.toString()}</h2>
        <h2>Slides to show {this.state.slidesToShow}</h2>
        <Slider {...settings} {...this.state} ref={this.sliderRef}>
          <div>
            <h3>a1</h3>
          </div>
          <div>
            <h3>b2</h3>
          </div>
          <div>
            <h3>c3</h3>
          </div>
          <div>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              repellat porro sint possimus dolor assumenda doloremque quasi
              doloribus incidunt ex veniam eligendi voluptas ratione sed velit
              impedit, libero ullam inventore?
            </h3>
          </div>
          <div>
            <h3>e5</h3>
          </div>
          <div>
            <h3>f6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
