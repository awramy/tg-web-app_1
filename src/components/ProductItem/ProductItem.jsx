import './ProductItem.css'
import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
const ProductItem = ({product, className, onAdd}) => {
  const onAddHandler = () => {
    onAdd(product);
  }
  return (
    <div className={'product ' + className}>
      <div className={'img'} />
      <div className={'title'}>{product.name}</div>
      <div className={'description'}>{product.description}</div>
      <div className={'price'}>
        <span>Стоимость: <b>{product.price}</b></span>
      </div>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;