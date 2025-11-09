import { Button, Card } from "react-bootstrap";
import "./App.css";
import BarreNav from "./components/BarreNav";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Footer from "./components/Footer";

import lotParfum from "./images/lot_parfums.webp";

function App() {
  const firstName = "WALID"; //falsy: null, "", false, 0, undefind , NaN
  return (
    <div className="App">
      <BarreNav />
      <Card style={{ width: "18rem", margin: "5% auto " }}>
        <Image />
        <Card.Body>
          <Name />
          <Description />
          <Price />
          <Button variant="secondary">Ajouter au panier</Button>
        </Card.Body>
      </Card>
      {/* condition */}
      {/* {firstName ? <h1>Bonjour {firstName}</h1> : <h2>Hello there!!!</h2>}
      {firstName && <img src={parfum} alt="parfums" />} */}
      {firstName ? (
        <div style={{ textAlign: "center" }}>
          <h1>Bonjour {firstName}</h1>
          <img src={lotParfum} alt="parfums" style={{ marginTop: "25px", marginBottom: "25px" }} />
        </div>
      ) : (
        <h2>Hello there!!!</h2>
      )}
      <Footer />
    </div>
  );
}

export default App;
