import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/domino-164_6wVEHfI-unsplash.jpg";
import image2 from "../../assets/maksim-larin-NOpsC3nWTzY-unsplash.jpg";
const SliderComp = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings} className="py-20">
      <div className="!flex items-center px-7 bg-gray-200">
        <div className="">
          <div className="text-4xl font-bold">Yakinda geliyor ...</div>
          <div className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam porro
            laborum debitis incidunt, mollitia quis hic necessitatibus
            aspernatur aut fuga eligendi sapiente tenetur. Neque quidem, aliquam
            molestiae ipsam esse corporis.
          </div>
          <div className="text-2xl font-bold text-red-500 px-5 border cursor-pointer hover:opacity-50 delay-100">
            İncele
          </div>
        </div>
        <img src={image1} alt="" className="w-[500px]" />
      </div>
      <div className="!flex items-center px-7">
        <div className="bg-gray-200">
          <div className="text-4xl font-bold">Yakinda geliyor ...</div>
          <div className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam porro
            laborum debitis incidunt, mollitia quis hic necessitatibus
            aspernatur aut fuga eligendi sapiente tenetur. Neque quidem, aliquam
            molestiae ipsam esse corporis.
          </div>
          <div className="text-2xl font-bold text-red-500 px-5 border cursor-pointer hover:opacity-50 delay-100">
            İncele
          </div>
        </div>
        <img src={image2} alt="" className="w-[500px]" />
      </div>
    </Slider>
  );
};

export default SliderComp;
