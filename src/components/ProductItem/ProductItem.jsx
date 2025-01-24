import './ProductItem.css'
import Button from "../Button/Button.jsx";
import {Card} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProductItem = ({product, className, onAdd}) => {
  console.log(typeof(onAdd))
  const onAddHandler = () => {
    onAdd(product);
  }
  return (
    <Card className={'product ' + className}>
      <div className='p-2'>
        <Card.Img className='img-fluid my-auto' src={import.meta.env.VITE_REACT_APP_API_URL + '/' + product.img}/>
      </div>
      <Card.Body className='card-body'>
        <Card.Title className='title'>{product.name}</Card.Title>
        <div className={' price'}>
          <h5 className='w-75 text-center ps-1 py-1 rounded bg-warning'>{product.price} р</h5>
        </div>
        <Button className={'add-btn'} onClick={onAddHandler}>
          Добавить в корзину
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;