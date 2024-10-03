import React from "react";

function NewsLetterBox() {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 ">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        ullam nesciunt quidem corrupti quo? Dolorum, sint error. Voluptas ipsum
        nesciunt sit! Ipsam officiis odit ex totam delectus veniam distinctio
        consectetur.
      </p>

      <form
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          name="email"
          className="w-full sm:flex-1 outline-none rounded "
          id=""
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
