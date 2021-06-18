import React from "react";
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from  './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';


function App() {

  // Модальное окно
  // openItem - данные о товаре, которые будем открывать в мо
  // setOpenItem - функция будет назначать товар, на который кликаем и будет запускать перендер контент
  const openItem = useOpenItem();

  // заказы
  const orders = useOrders();
  

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders}/>
      <Menu {...openItem}/>
      { openItem.openItem  && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
