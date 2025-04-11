//the type makes it so that i dont have to type it in individually to make it messy//

type Props = {
  name: string;
  price: number;
  quantity: number;
};

//here we are taking care of the individual cart item

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
