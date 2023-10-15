import { Link, useLoaderData } from "react-router-dom";
import CoffeCard from "../Card/CoffeCard";
import Features from "../Features/Features";
import InstaPost from "../Features/InstaPost";
import Hero from "../Header/Hero";
import { SiBuymeacoffee } from "react-icons/si";
import { useState } from "react";

const Home = () => {
  const loadedCoffe = useLoaderData();
  const [coffes, setCoffes] = useState(loadedCoffe);
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <div className="gap-5 mx-auto max-w-screen-xl mt-14">
        <h1 className="md:text-4xl text-3xl font-bold text-center mb-7">
          Our Popular Coffe
        </h1>
        <Link to={"/AddCoffe"} className="">
          {" "}
          <button className="btn flex items-center md:w-[12%] mx-auto normal-case text-[#331A15] bg-[#E3B577] hover:bg-[#E3B577]">
            Add Coffe <SiBuymeacoffee className="text-2xl " />{" "}
          </button>
        </Link>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2">
          {coffes?.map((coffe) => (
            <CoffeCard key={coffe._id} coffe={coffe} setCoffes={setCoffes} coffes={coffes}></CoffeCard>
          ))}
        </div>
      </div>
      <InstaPost></InstaPost>
    </div>
  );
};

export default Home;
