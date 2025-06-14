
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Product from "./utils/Products";
import SortPrice from "./component/SortPrice";
import { useState } from "react";

function App() {
  let [A,setA] = useState(Product);
  
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="price-sort-btn">
        <SortPrice A= {A} setA={setA}/>
      </div>

      <div  className="main-section" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* <Card/> */}

        {A.map((value, idx) => (
          <Card
            key={idx}
            cloth={value.cloth}
            offer={value.offer}
            image={value.image}
            price = {value.price}
          />
        ))}
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
