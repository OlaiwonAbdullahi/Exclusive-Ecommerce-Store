import { useState, useEffect } from "react";

const FlashSales = () => {
  // Set the countdown target to 30 days from now
  const targetDate = Date.now() + 30 * 24 * 60 * 60 * 1000;

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Countdown Display
  return (
    <div className=" flex p-2 w-1/3 justify-between items-center">
      <div className="">
        <h2 className="text-3xl font-semibold text-text2">Flash Sales</h2>
      </div>
      {timeLeft.days !== undefined ? (
        <div className=" flex ">
          <div className=" flex flex-col">
            <span className=" text-xs font-medium">Days</span>
            <span className=" font-semibold text-text2 text-4xl">
              {timeLeft.days}
            </span>
          </div>

          <span className=" text-secondary2 text-4xl mt-4">:</span>
          <div className=" flex flex-col">
            <span className=" text-xs font-medium">Hours</span>
            <span className=" font-semibold text-text2 text-4xl">
              {timeLeft.hours}{" "}
            </span>
          </div>
          <span className=" text-secondary2 text-4xl mt-4">:</span>
          <div className=" flex flex-col">
            <span className=" text-xs font-medium">Minutes</span>
            <span className=" font-semibold text-text2 text-4xl">
              {timeLeft.minutes}{" "}
            </span>
          </div>
          <span className=" text-secondary2 text-4xl mt-4">:</span>
          <div className=" flex flex-col">
            <span className=" text-xs font-medium">Seconds</span>
            <span className=" font-semibold text-text2 text-4xl">
              {timeLeft.seconds}
            </span>
          </div>
        </div>
      ) : (
        <span>Flash sale ended!</span>
      )}
    </div>
  );
};

export default FlashSales;
