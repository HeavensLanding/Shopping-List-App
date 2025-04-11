import { items } from "./data";
import Cart from "./cart";

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1> My Shopping Cart</h1>
      <Cart items={items} />
    </div>
  );
};

export default App;
