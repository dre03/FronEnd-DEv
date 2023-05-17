import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateMovie from "./pages/movie/Cretate";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRetedMovie from "./pages/movie/TopReted";
import Layout from "./Layout";
const App = () =>{
  return(
    <div>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<PopularMovie />}></Route>
          <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
          <Route path="/movie/top" element={<TopRetedMovie />}></Route>
        </Routes>
    </Layout>
      
  </div>
)
}
export default App;
