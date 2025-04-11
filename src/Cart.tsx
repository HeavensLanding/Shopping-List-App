import CartItem from "./CartItem";

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  items: Item[];
};

const Cart = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Cart;
