import React from "react";
import "../App.css";
import MoreDetailsButton1 from "../assets/images/MoreDetailsButton1.svg";
import PlayVideoTourButton from "../assets/images/PlayVideoTourButton.svg";
//import PlayVideoTourButton from "../assets/images/PlayVideoTourButton.png";

const MainSlider = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div
          className="flex lg:flex-row flex-col max-w-[995px] xl:w-full lg:mt-[204px] mt-[140px] xl:ml-[150px] mx-auto xl:justify-between
         items-center"
        >
          {/* Left side text and button */}
          <div className="flex-col lg:w-full w-auto h-auto items-center lg:text-left text-center">
            <div
              className="max-w-[502px] w-full lg:h-[133px] h-auto font-poppins font-semibold lg:text-[48px] text-[30px]
             lg:leading-[60px] leading-[48px] text-[#FFFFFF]"
            >
              <p className="m-0">Your beauty center place</p>
            </div>
            <div
              className="max-w-[501px] w-full lg:h-[78px] lg:mt-0 mt-9 h-auto font-poppins font-medium lg:text-[16px] text-[12px]
            lg:leading-[24px] leading-[20px] tracking-[0.1em] text-[#D8DCFF]"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br />
                elit. Commodo, massa pellentesque arcu fusce et <br />
                magna consequat neque vitae lobortis.
              </p>
            </div>
            <button className="max-w-[179px] w-full h-auto cursor-pointer mt-[34px]">
              <img src={MoreDetailsButton1} alt="" />
            </button>
          </div>
          {/* Right side button */}
          <button className="relative max-w-[278px] w-full h-auto lg:mt-[-8px] mt-9 lg:mr-[12px] mr-0 cursor-pointer">
            <img src={PlayVideoTourButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainSlider;
