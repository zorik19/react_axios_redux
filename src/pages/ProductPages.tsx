import {useProducts} from "../hooks/products";
import {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {Error} from "../components/Error";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";
import BasicSpeedDial from "../components/SpeedDeal";


export function ProductPages() {
    const {products, loading, error, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)
  const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
  }

  return (
      <div className="container mx-auto max-w-2xl pt-5">
          { loading && <Loader/>}
          { error && <Error error={error}/>}
          { products.map(product => <Product product={product} key={product.id}/>)}

          {modal && <Modal title="Создать новый продукт" onClose={close}>
              <CreateProduct onCreate={createHandler}/>
          </Modal>}

          <button
              className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-6"
              onClick={open}
          >
              Добавить +</button>
          <BasicSpeedDial/>
      </div>
  )
}