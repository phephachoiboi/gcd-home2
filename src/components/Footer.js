import React from "react";
import "../App.css";
import FooterLogo from "../assets/images/FooterLogo.png";
import FacebookFooter from "../assets/images/FacebookFooter.png";
import TwitterFooter from "../assets/images/TwitterFooter.png";
import LinkedinFooter from "../assets/images/LinkedinFooter.png";
import YoutubeFooter from "../assets/images/YoutubeFooter.png";
import InstagramFooter from "../assets/images/InstagramFooter.png";
import ToTopButton from "../assets/images/ToTopButton.png";
import BGFooter from "../assets/images/BgFooter.png";
import CaretRight from "../assets/images/caret-right.png";

const Footer = () => {
  return (
    <div
      className="relative lg:mt-[121px] mt-[77px] max-w-[1440px] w-full h-auto bg-cover object-cover"
      style={{ backgroundImage: `url(${BGFooter})` }}
    >
      <div className="flex lg:px-0 md:px-6 px-4 z-[1]">
        <div className="flex max-w-[1440px] mx-auto w-full h-auto lg:ml-0 md:ml-9 ml-6 lg:px-0 md:px-4 px-6">
          <div className="flex flex-col max-w-[1140px] w-full mx-auto lg:px-0 md:px-4 px-6 z-[1]">
            {/* Upper part for Sidebars */}
            <div className="flex lg:flex-row flex-col max-w-[1140px] w-full lg:mt-[224.34px] lg:mx-0 mx-auto lg:px-0 md:px-4 px-6">
              {/* Sidebar 1 */}
              <div className="flex flex-col max-w-[492px] w-full h-[191px] lg:mt-[16px] mt-10 z-[1] mx-0  text-left ">
                <div className="flex w-[258px] h-[63px] mx-0">
                  <img src={FooterLogo} alt="" />
                </div>
                <div className="flex lg:flex-row flex-col max-w-[461px] w-full h-[21px] mt-[33px] lg:ml-[31px] mx-0">
                  <div
                    className="font-poppins text-[16px] font-bold
            leading-[24px] tracking-[0.1em] text-left text-[#D7DBFF]"
                  >
                    <p className="m-0">Beautice</p>
                  </div>
                  <div
                    className="lg:ml-[5px] font-poppins text-[16px] font-normal
            leading-[24px] tracking-[0.1em] text-left text-[#D7DBFF]"
                  >
                    <p className="m-0">is a Beauty Clinic WordPress Theme.</p>
                  </div>
                </div>
                <div
                  className="max-w-[297px] w-full h-[24px] lg:mt-[26px] mt-[62px] lg:ml-[32px] mx-0 font-poppins
          text-[14px] italic font-medium leading-[21px] tracking-[0.1em]
          text-left text-[#D7DBFF]"
                >
                  <p className="m-0">Baker Steet 101, NY, United States.</p>
                </div>
                <div
                  className="flex sm:flex-row flex-col max-w-[358px] w-full h-[23px]
          sm:mt-[1px] mt-7 lg:ml-[31px] mx-0 text-center"
                >
                  <div
                    className="max-w-[140px] w-full h-[23px] font-poppins text-[14px] italic
            font-medium leading-[21px] tracking-[0.1em] text-left text-[#D7DBFF]"
                  >
                    <p className="m-0">+521 569 8966.</p>
                  </div>
                  <div
                    className="max-w-[190px] w-full h-[23px] sm:ml-[28px] mx-0 font-poppins
            text-[14px] italic font-medium leading-[21px] tracking-[0.1em]
            text-left text-[#D7DBFF]"
                  >
                    <p className="m-0">mail@company.com.</p>
                  </div>
                </div>
              </div>

              <div className="max-w-[519px] w-full  h-auto lg:ml-[129px] mx-0 flex md:flex-row flex-col justify-between">
                {/* Sidebar 2 */}
                <div className="max-w-[131px] w-full h-[219px] lg:mt-0 md:mt-16 mt-[120px]  z-[1] ">
                  <div
                    className="max-w-[129px] w-full h-[31px] font-poppins text-[18px] 
          font-semibold leading-[27px] tracking-[0.1em] text-left text-white"
                  >
                    <p className="m-0">Pages</p>
                  </div>
                  <div className="flex max-w-[131px] w-full h-[24px] mt-[24px] bg-none justify-start">
                    <button className="flex border-none p-0 cursor-pointer ">
                      <img
                        className="object-contain my-auto"
                        src={CaretRight}
                        alt=""
                      />
                      <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                        <p className="m-0">Home</p>
                      </div>
                    </button>
                  </div>

                  <div className="flex max-w-[131px] w-full h-[24px] mt-[11px] bg-none justify-start">
                    <button className="flex border-none p-0 cursor-pointer ">
                      <img
                        className="object-contain my-auto"
                        src={CaretRight}
                        alt=""
                      />
                      <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                        <p className="m-0">About</p>
                      </div>
                    </button>
                  </div>

                  <div className="flex max-w-[131px] w-full h-[24px] mt-[11px] bg-none justify-start">
                    <button className="flex bg-none border-none p-0 cursor-pointer">
                      <img
                        className="object-contain my-auto"
                        src={CaretRight}
                        alt=""
                      />
                      <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                        <p className="m-0">Services</p>
                      </div>
                    </button>
                  </div>

                  <div className="flex max-w-[131px] w-full h-[24px] mt-[11px] bg-none justify-start">
                    <button className="flex bg-none border-none p-0 cursor-pointer">
                      <img
                        className="object-contain my-auto"
                        src={CaretRight}
                        alt=""
                      />
                      <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                        <p className="m-0">Gallery</p>
                      </div>
                    </button>
                  </div>

                  <div className="flex max-w-[131px] w-full h-[24px] mt-[11px] bg-none justify-start">
                    <button className="flex bg-none border-none p-0 cursor-pointer">
                      <img
                        className="object-contain my-auto"
                        src={CaretRight}
                        alt=""
                      />
                      <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                        <p className="m-0">Team</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Sidebar 3 */}
                <div className="max-w-[215px] w-full h-[184px] lg:mt-0 mt-16 mx-0 z-[1]">
                  <div className="flex flex-col w-full h-full items-start">
                    <div
                      className="max-w-[175px] w-full h-[31px] font-poppins text-[18px] font-semibold text-left
          leading-[27px] tracking-[0.1em] text-white"
                    >
                      <p className="m-0">Informations</p>
                    </div>

                    <div className="flex max-w-[215px] w-full h-[24px] mt-[24px] bg-none justify-start">
                      <button className="flex bg-none border-none p-0 cursor-pointer">
                        <img
                          className="object-contain my-auto"
                          src={CaretRight}
                          alt=""
                        />
                        <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                          <p className="m-0">Terms & conditions</p>
                        </div>
                      </button>
                    </div>

                    <div className="flex max-w-[215px] w-full h-[24px] mt-[11px] bg-none justify-start">
                      <button className="flex bg-none border-none p-0 cursor-pointer">
                        <img
                          className="object-contain my-auto"
                          src={CaretRight}
                          alt=""
                        />
                        <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                          <p className="m-0">Privacy policy</p>
                        </div>
                      </button>
                    </div>

                    <div className="flex max-w-[215px] w-full h-[24px] mt-[11px] bg-none justify-start">
                      <button className="flex bg-none border-none p-0 cursor-pointer">
                        <img
                          className="object-contain my-auto"
                          src={CaretRight}
                          alt=""
                        />
                        <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                          <p className="m-0">Blog</p>
                        </div>
                      </button>
                    </div>

                    <div className="flex max-w-[215px] w-full h-[24px] mt-[11px] bg-none justify-start">
                      <button className="flex bg-none border-none p-0 cursor-pointer">
                        <img
                          className="object-contain my-auto"
                          src={CaretRight}
                          alt=""
                        />
                        <div className="ml-2 font-poppins font-normal text-[16px] leading-6 tracking-widest text-[#D7DBFF]">
                          <p className="m-0">Contact</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower part for social media */}
            <div
              className="flex lg:flex-row flex-col max-w-[1140px] w-full lg:mt-[140.05px] mt-[70px] pb-[89.77px]
         lg:justify-between lg:items-center lg:px-0 md:px-4 px-6"
            >
              <div
                className="flex justify-between max-w-[305px] w-full h-[27.84px]
        mt-[1.95px] z-[1]"
              >
                <div className="facebook-footer">
                  <img src={FacebookFooter} alt="" />
                </div>
                <div className="twitter-footer">
                  <img src={TwitterFooter} alt="" />
                </div>
                <div className="linkedin-footer">
                  <img src={LinkedinFooter} alt="" />
                </div>
                <div className="youtube-footer">
                  <img src={YoutubeFooter} alt="" />
                </div>
                <div className="instagram-footer">
                  <img src={InstagramFooter} alt="" />
                </div>
              </div>

              <div
                className="max-w-[497px] w-full h-[31.18px] lg:ml-[338px] mx-0 lg:mt-0 mt-5
        font-poppins text-[16px] font-normal leading-[24px]
        tracking-[0.1em] lg:text-right text-left text-[#D7DBFF] z-[1]"
              >
                <p className="m-0">
                  © AltDesain Studio 2021 - All right reserved.
                </p>
              </div>
            </div>
          </div>

          {/* To the top button */}
          <button
            className="flex justify-end max-w-[36px] w-full h-[36px] lg:mt-[499px] lg:visible invisible 
      lg:ml-[-101px] lg:mr-[65px] m-0 bg-none border-none p-0 cursor-pointer items-center z-[1]"
          >
            <img
              className="w-full h-full object-contain"
              src={ToTopButton}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
