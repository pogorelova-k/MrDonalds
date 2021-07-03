import React from "react";
import firebase from "firebase/app"; 
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from  './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from "./Components/Hooks/useAuth";
import { useTitle } from "./Components/Hooks/useTitle";
import { useDB } from "./Components/Hooks/useDB";

const firebaseConfig = {
  apiKey: "AIzaSyAuAoYsTw4OKDWi6q4_hEtDtrfe0iGXt1Y",
  authDomain: "mrdonalds-38ca5.firebaseapp.com",
  databaseURL: "https://mrdonalds-38ca5-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-38ca5",
  storageBucket: "mrdonalds-38ca5.appspot.com",
  messagingSenderId: "787276047702",
  appId: "1:787276047702:web:ea0be57f1b0d0e193f62f7"
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

  // измение title при открытие товара из меню
  useTitle(openItem.openItem);

  // получение БД
  const database = firebase.database();

  const dbMenu = useDB(database);
  

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
        {...orders} 
        {...openItem} 
        {...auth}
        database={database}/>
      <Menu {...openItem} dbMenu={dbMenu}/>
      { openItem.openItem  && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
