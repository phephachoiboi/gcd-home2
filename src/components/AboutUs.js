import React from "react";
import "../App.css";
import Illustration1 from "../assets/images/Illustration1.svg";
import Vector from "../assets/images/Vector.jpg";

const AboutUs = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div
          className="flex lg:flex-row flex-col max-w-[1140px] w-full h-auto mt-[469px] mx-auto lg:justify-between
        lg:items-start items-center"
        >
          {/* Left side Illustration 1 image  */}
          <div className="max-w-[490px] w-full h-auto mt-[-1px]">
            <img src={Illustration1} alt="" />
          </div>
          {/* Right side text and button */}
          <div className="flex flex-col max-w-[483px] w-full h-auto lg:mt-0 mt-8 lg:px-0 md:px-6 px-4 lg:items-start items-center lg:text-left text-center">
            <div className="max-w-[73px] w-full h-[20px] font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE]">
              <p className="m-0">About Us</p>
            </div>
            <div
              className="max-w-[460px] w-full h-[91px] font-poppins font-semibold lg:text-[36px] text-[28px] mt-[10px]
             lg:leading-[45px] leading-[38px] text-[#091156] "
            >
              <p className="m-0"> We are the best beauty clinic</p>
            </div>
            <div className="max-w-[483px] w-full h-[133px] font-poppins font-normal text-[16px] leading-[24px] text-[#8B8B8B] tracking-[0.1em] mt-[10px]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Elit, quam suscipit purus donec
                <br />
                amet. Egestas volutpat facilisi eu libero. Nunc,
                <br />
                ipsum ornare mauris sit quam quis enim. Varius
                <br />
                tellus in suspendisse placerat.
              </p>
            </div>
            <button
              className="inline-block relative max-w-[200px] lg:w-full h-auto lg:mt-[35px] mt-[90px]
          items-center justify-center text-center bg-none border-none
          lg:p-0 px-3 cursor-pointer rounded-tl-[50px]"
              type="button"
            >
              <img
                className="w-full h-full object-contain"
                src={Vector}
                alt=""
              />
              <p
                className="absolute w-[200px] top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2 pointer-events-none
            font-poppins text-[16px] font-semibold leading-[24px]
            tracking-[0.1em] text-center text-[#FFFFFF]"
              >
                Learn More
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
