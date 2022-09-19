import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4, name: 'Телевизоры'},
    ]
    this._brands = [
      {id: 1, name: "Samsung"},
      {id: 2, name: "Apple"},
      {id: 3, name: "Lenovo"},
      {id: 4, name: "Asus"},
    ]
    this._devices = [
      {id: 1, name: "Iphone 12 pro", price: 999, rating: 5, img: 'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg'},
      {id: 2, name: "Iphone 13", price: 1099, rating: 5, img: 'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg'},
      {id: 3, name: "Iphone 13 pro", price: 1199, rating: 5, img: 'https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg'}
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type){
    this._selectedType = type
  }
  setSelectedBrand(brand){
    this._selectedBrand = brand
  }
  get types () {
    return this._types
  }
  get brands () {
    return this._brands
  }
  get devices () {
    return this._devices
  }
  get selectedType () {
    return this._selectedType
  }
  get selectedBrand () {
    return this._selectedBrand
  }
}