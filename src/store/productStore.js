import {makeAutoObservable} from "mobx";

export default class ProductStore {
  constructor() {
    this._products = []
    this._basket = []
    makeAutoObservable(this)
  }
  setProducts(products) {
    this._products = products
  }
  setBasket(basket) {
    this._basket = basket
  }

  get products() {
    return this._products
  }
  get basket() {
    return this._basket
  }
}