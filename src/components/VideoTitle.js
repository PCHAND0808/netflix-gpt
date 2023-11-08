const VideoTitle = (props) => {
  return (
    <div className="w-screen aspect-video fixed py-36 mx-10  text-white">
      <h1 className="font-bold text-lg mx-4 py-2">{props.title}</h1>
      <p className="px-4 w-1/2">{props.overview}</p>
      <div className="m-2 p-2">
        <button className="text-lg rounded-md px-6 py-2 text-white bg-red-600 ">
          Play
        </button>

        <button className="m-3 text-lg rounded-md px-6 py-2 text-white bg-red-600 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
