import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainComponent = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[7];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[40%] bg-black md:p-0">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainComponent;
