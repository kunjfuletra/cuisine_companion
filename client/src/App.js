import Search from "./components/search/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Search />
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
