import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/MainHeader/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartModal, setCartModal] = useState(false);

  const showCartModal = () => {
    setCartModal(true);
  }

  const hideCartModal = () => {
    setCartModal(false);
  }

  return (
    <Fragment>
      {cartModal && <Cart handler={hideCartModal}/>}
      <Header onClick={showCartModal}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
