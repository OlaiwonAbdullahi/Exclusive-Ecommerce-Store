import OurStoryImg from "../assets/OurStoryImg.svg";
const OurStory = () => {
  return (
    <div className=" flex justify-around flex-col md:flex-row">
      <div className=" w-full  justify-center flex flex-col gap-3 mx-auto items-center">
        <h2 className=" text-3xl font-semibold md:self-start self-center ml-36">
          Our Story
        </h2>
        <div className=" flex flex-col gap-2 text-sm w-2/3 pr-10 text-center md:text-left">
          <p>
            Launced in 2015, Exclusive is South Asia&apos;s premier online
            shopping makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and service
            solutions, Exclusive has 10,500 sallers and 300 brands and serves 3
            millioons customers across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
      <div className=" flex md:justify-end justify-center">
        <img src={OurStoryImg} alt="" className=" w-3/4" />
      </div>
    </div>
  );
};

export default OurStory;
