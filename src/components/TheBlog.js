import React from "react";
import "../App.css";
import TheBlogLeft from "../assets/images/TheBlogLeft.png";
import TheBlogMid from "../assets/images/TheBlogMid.png";
import TheBlogRight from "../assets/images/TheBlogRight.png";
import LearnMoreButtonUs from "../assets/images/LearnMoreButtonUs.svg";

const TheBlog = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div className="flex flex-col max-w-[1139px] w-full h-auto mt-[110.5px] mx-auto">
          {/* Upper side for title text */}
          <div className="flex flex-col mx-auto text-center">
            <div className="w-full font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE] text-center">
              <p className="m-0">The Blog</p>
            </div>
            <div className="w-full h-[50px] mt-[12px] font-poppins font-semibold text-[36px] leading-[45px] text-[#091156]">
              <p className="m-0">Our latest news</p>
            </div>
            <div className="w-full h-[34px] mt-[12px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#8B8B8B]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {/* Lower side for images */}
          <div className="flex flex-wrap gap-[49px] max-w-[1139px] w-full h-auto mt-[79px] mx-auto justify-center z-[1]">
            {/* Left box */}
            <div
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-[347px] w-full h-[543px]
             rounded-[25px] bg-[#FFFFFF] border-[#E2E2E2] shadow-[0px_25px_50px_#F6F7FF]"
            >
              <div className="flex flex-col">
                <div className="w-auto h-auto">
                  <img src={TheBlogLeft} alt="" />
                </div>
              </div>
              <div className="flex flex-col mt-[56px] ml-[38px]">
                <div
                  className="w-[288px] h-[58px] mr-[21px]
               font-poppins font-semibold text-[18px] leading-[22.5px] text-[#091156]"
                >
                  <p className="m-0">
                    How much does a consultation
                    <br />
                    cost at our clinic?
                  </p>
                </div>
                <div className="w-[271px] h-[74px] font-poppins font-normal text-[14px] leading-[21px] tracking-[0.1em]  text-[#8B8B8B]">
                  <p className="m-0">
                    A wonderful serenity has taken
                    <br />
                    possession of my entire soul,
                    <br />
                    like these sweet mornings ...
                  </p>
                </div>
                <div className="w-auto h-auto mt-[15px]">
                  <img src={LearnMoreButtonUs} alt="" />
                </div>
              </div>
            </div>

            {/* Middle box */}
            <div
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-[347px] w-full h-[543px]
             rounded-[25px] bg-[#FFFFFF] border-[#E2E2E2] shadow-[0px_25px_50px_#F6F7FF]"
            >
              <div className="flex flex-col">
                <div className="w-auto h-auto">
                  <img src={TheBlogMid} alt="" />
                </div>
              </div>
              <div className="flex flex-col mt-[56px] ml-[38px]">
                <div
                  className="w-[288px] h-[58px] mr-[21px]
               font-poppins font-semibold text-[18px] leading-[22.5px] text-[#091156]"
                >
                  <p className="m-0">
                    Watch out! don't choose the
                    <br />
                    wrong beauty product
                  </p>
                </div>
                <div className="w-[271px] h-[74px] font-poppins font-normal text-[14px] leading-[21px] tracking-[0.1em]  text-[#8B8B8B]">
                  <p className="m-0">
                    A wonderful serenity has taken
                    <br />
                    possession of my entire soul,
                    <br />
                    like these sweet mornings ...
                  </p>
                </div>
                <div className="w-auto h-auto mt-[15px]">
                  <img src={LearnMoreButtonUs} alt="" />
                </div>
              </div>
            </div>

            {/* Right box */}
            <div
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-[347px] w-full h-[543px]
             rounded-[25px] bg-[#FFFFFF] border-[#E2E2E2] shadow-[0px_25px_50px_#F6F7FF]"
            >
              <div className="flex flex-col">
                <div className="w-auto h-auto">
                  <img src={TheBlogRight} alt="" />
                </div>
              </div>
              <div className="flex flex-col mt-[56px] ml-[38px]">
                <div
                  className="w-[288px] h-[58px] mr-[21px]
               font-poppins font-semibold text-[18px] leading-[22.5px] text-[#091156]"
                >
                  <p className="m-0">
                    About skin care you need to
                    <br />
                    know
                  </p>
                </div>
                <div className="w-[271px] h-[74px] font-poppins font-normal text-[14px] leading-[21px] tracking-[0.1em]  text-[#8B8B8B]">
                  <p className="m-0">
                    A wonderful serenity has taken
                    <br />
                    possession of my entire soul,
                    <br />
                    like these sweet mornings ...
                  </p>
                </div>
                <div className="w-auto h-auto mt-[15px]">
                  <img src={LearnMoreButtonUs} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheBlog;
