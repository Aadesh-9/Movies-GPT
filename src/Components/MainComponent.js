import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainComponent = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
<<<<<<< HEAD
  console.log("error");

  if (!movies) return;
  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;

=======
  if (!movies) return;
  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;
>>>>>>> e2c98fff8850b60d104a9a0c0718fa18d926a6c7
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainComponent;
