type Props = {
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({ name, price, quantity }: Props) => {
  return (
    <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
