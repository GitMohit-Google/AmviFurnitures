import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../constants/bannerData";

const StatsBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.5, // The percentage of the element that must be visible to trigger the observer
  });
  return (
    <div className="flex flex-row gap-10 w-full items-center p-5 justify-evenly my-6 rounded-xl ">
      {stats.map((stat, index) => {
        return (
          <div className="flex flex-col gap-2 items-center">
            <div ref={ref} className="text-6xl">
              {inView && (
                <CountUp
                key={index}
                  start={0}
                  end={stat.value}
                  duration={4}
                  separator=","
                  decimal="."
                  suffix={stat.suffix}
                />
              )}
            </div>
            <p>{stat.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsBanner;
