import './ProductItem.css'
import Button from "../Button/Button.jsx";
import {Card} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProductItem = ({product, className, onAdd}) => {
  const onAddHandler = () => {
    onAdd(product);
  }
  return (
    <Card className={'product ' + className}>
      <Card.Body>
        <Card.Img className='img img-fluid my-auto' src={import.meta.env.VITE_REACT_APP_API_URL + '/' + product.img}/>
      </Card.Body>

      <Card.Body>
        <Card.Title className='title'>{product.name}</Card.Title>
        <div className={'price'}>
          <span>Стоимость: <b>{product.price}</b></span>
        </div>
      </Card.Body>
      <Button className={'add-btn'} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </Card>
  );
};

export default ProductItem;