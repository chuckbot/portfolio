import React from "react";
import { Link } from "gatsby";
import { navLinks } from "../config/index";

const Hero = ({ content }) => {
    const { button } = navLinks

    return (
        <div className="flex items-center bg-pattern shadow-inner min-h-screen">
            <div className="bg-white w-full py-6 shadow-lg">
                <section class="mx-auto container w-3/5">
                    <h1 className="uppercase font-bold text-lg text-red-500">
                        Hi, my name is
                    </h1>
                    <h2 className="font-bold text-6xl">Carlos Garcia</h2>
                    <p className=" text-2xl w-3/5">
                        I’m a Software Engineer who specializes in Frontend and Serverless development.
                    </p>
                    <Link to={button.url}>
                        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-6">
                            {button.name}
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Hero;