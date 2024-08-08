import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../constants/bannerData";

const StatsBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full items-center p-5 justify-evenly my-6 rounded-xl">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col gap-2 items-center text-center">
          <div ref={ref} className="text-4xl lg:text-6xl">
            {inView && (
              <CountUp
                start={0}
                end={stat.value}
                duration={4}
                separator=","
                decimal="."
                suffix={stat.suffix}
              />
            )}
          </div>
          <p className="text-base lg:text-lg">{stat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsBanner;
