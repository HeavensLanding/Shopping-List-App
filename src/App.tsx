import { items } from "./data";
import Cart from "./cart";
//this is the main app page where it has the formula for it and the css
const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1> My Shopping Cart</h1>
      <Cart items={items} />
    </div>
  );
};

export default App;
