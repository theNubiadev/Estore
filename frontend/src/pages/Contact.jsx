import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetter";

function Contact() {
  return (
    <div className="text-center text-2xl pt-10 border-t  ">
      <Title text1={"Contact"} text2={"Us"} />

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src="" className="w-full md:max-w-[480px] " alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="  text-gray-500">
            {" "}
            10 Fadare <br /> Iwo road Ibadan
          </p>
          <p className=" text-gray-600">
            Tel: 12344567654 <br /> Email:{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            {" "}
            Careers at 1759
          </p>
          <p className="text-gray-500">More More</p>
          <button className="border border-black px-8 py-4 text-sm  hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
}

export default Contact;
