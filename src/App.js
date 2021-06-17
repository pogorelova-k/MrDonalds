import React from "react";
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from  './Components/ModalItem';


function App() {

  // Модальное окно
  // openItem - данные о товаре, которые будем открывать в мо
  // setOpenItem - функция будет назначать товар, на который кликаем и будет запускать перендер контент
  const [openItem, setOpenItem] = React.useState(null);
  

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>

    </>
  );
}

export default App;
