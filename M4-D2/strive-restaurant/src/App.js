import "./App.css";
import LatestRelease from "./LatestRelease";
import MyFooter from "./MyFooter";
import MyNav from "./MyNav";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="conatiner">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>
  );
}

export default App;
