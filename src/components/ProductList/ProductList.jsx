import'./ProductList.css'
import ProductItem from "../ProductItem/ProductItem.jsx";
import {useContext, useEffect} from "react";
import {Context} from "../../main.jsx";
import {fetchDevices} from "../../http/productsAPI.js";
import {useTelegram} from "../../hooks/useTelegram.js";
import {observer} from "mobx-react-lite";
import {Container} from "react-bootstrap";


const ProductList = observer(() => {
  const { product } = useContext((Context))
  const { tg } = useTelegram()
  console.log(JSON.stringify(product))

  useEffect(() => {
    fetchDevices().then(data => product.setProducts(data))
  }, [])

  //функция добавления товара в корзину
  const onAdd = (currentProduct) => {
    const alreadyAdded = product.basket.find(item => item.id === currentProduct.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = product.basket.filter(item => item.id !== currentProduct.id)
    } else {
      newItems = [...product.basket, currentProduct]
    }
    product.setBasket(newItems)
    if(product.basket.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }

  return (
    <Container className='mt-3 d-flex flex-row'>
        {product?.products?.rows?.map(item =>
          <ProductItem
            key={item.id}
            product={item}
            onAdd={onAdd}
            className={'item'}
          />
        )}
    </Container>
  );
});

export default ProductList;