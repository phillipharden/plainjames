import "./styles/App.css";
import "./styles/ShoeStrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return <>
  <Header />
  <main>
    <HomeScreen />
  </main>
  <Footer />
  </>;
};

export default App;
