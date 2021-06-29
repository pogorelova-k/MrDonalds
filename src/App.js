import React from "react";
import firebase from "firebase/app"; 
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from  './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from "./Components/Hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyB9IN0o_ZQ05iQBds4awW59heFgq5XB06U",
  authDomain: "mrdonalds-a8d3d.firebaseapp.com",
  projectId: "mrdonalds-a8d3d",
  storageBucket: "mrdonalds-a8d3d.appspot.com",
  messagingSenderId: "214785623935",
  appId: "1:214785623935:web:806bbbea399330f0a17c4a"
};

firebase.initializeApp(firebaseConfig);

function App() {

  // Модальное окно
  // openItem - данные о товаре, которые будем открывать в мо
  // setOpenItem - функция будет назначать товар, на который кликаем и будет запускать перендер контент
  const openItem = useOpenItem();

  // заказы
  const orders = useOrders();
  
  // authentication
  const auth = useAuth(firebase.auth);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...orders} {...openItem}/>
      <Menu {...openItem}/>
      { openItem.openItem  && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
