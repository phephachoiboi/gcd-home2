import React from "react";
import "../App.css";
import PhoneButton from "../assets/images/PhoneButton.png";

const RequestCallServices = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div className="flex lg:flex-row flex-col max-w-[1139px] w-full h-auto mt-[168px] lg:px-0 md:px-6 sm:px-4 mx-auto lg:justify-between">
          {/* Left side title */}
          <div className="flex flex-col lg:items-start lg:text-start items-center text-center">
            <div className="max-w-[391px] w-full mx-auto h-[50px] font-poppins font-semibold text-[36px] leading-[45px] text-[#091156]">
              <p className="m-0">Request call services</p>
            </div>
            <div className="max-w-[391px] w-full mx-auto h-[60px] mt-[12px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#8B8B8B]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consect
                <br />
                adipiscing elit{" "}
                <span className="font-poppins font-semibold text-[16px] leading-[24px] tracking-[0.1em] text-[#091156]">
                  Contact Us.
                </span>
              </p>
            </div>
          </div>
          {/* Right side searching bar */}
          <div className="flex flex-col mt-[13px] lg:text-end text-center lg:mx-0 mx-auto">
            <div className="flex md:flex-row flex-col h-auto max-w-[658px] w-full mx-auto items-center">
              <div className="h-auto sm:w-[545px] w-[290px]">
                <form>
                  <input
                    className="md:pl-[37px] lg:mt-[-1px] mt-0 px-4 border-[1px] w-full rounded-[25px] md:rounded-[25px_0px_0px_25px]"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Insert your phone number here ..."
                    required
                  />
                </form>
              </div>
              <button className="max-w-[113px] w-full md:mt-0 mt-[28px] bg-none border-none cursor-pointer ">
                <img src={PhoneButton} alt="" />
              </button>
            </div>
            <div
              className="max-w-[658px] w-full lg:h-[17px] h-auto mt-[8px] lg:ml-[1px] ml-0 font-poppins font-normal italic text-[12px] leading-[18px]
            tracking-[0.1em] text-[#8B8B8B] lg:text-end"
            >
              <p className="m-0">Toll free for our coverage areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestCallServices;
