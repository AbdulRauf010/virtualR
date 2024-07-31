import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wider ">
        VirtualR build tool
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your craetivity and bring your VR app ideas to life with our
        initiative development tools.Get started today and turn your imagination
        into impressive reality
      </p>
      <div className="flex justify-center items-center my-10">
        <a
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
          href="#"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 border rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          src={video1}
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-700 mx-2 my-4 "
        ></video>
        <video
          src={video2}
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-700 mx-2 my-4 "
        ></video>
      </div>
    </div>
  );
};

export default Hero;
