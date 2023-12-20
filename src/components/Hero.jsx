import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() =>
            window.open("https://github.com/hthab1/ai-summarizer.git")
          }
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPR-4</span>
      </h1>
      <h2 className="desc">
        Simplify your teading with Summize, an open-source article lengthy
        articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
