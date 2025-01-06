import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Machine Coding Interview Tasks</h1>

      {/* Accordian component */}
      <Accordian />

      {/* RandomColor component */}
      <RandomColor />

      {/* StarRating component */}
      <StarRating />

      {/* ImageSlider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* LoadMoreData component */}
      <LoadMoreData />

      {/* Tree view component/menu UI component / recursive navigation menu */}
      <TreeView menus={menus}/>

      {/* QR code generator */}
      <QRCodeGenerator/>

      {/* Light Dark Mode Theme Switch */}
      <LightDarkMode />

      {/* Scroll indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
