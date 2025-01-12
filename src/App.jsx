import screenIcon from "./assets/screen-icon.svg";
import { useState } from "react";
import { PriceContext } from "./component/Context/PriceContext";
import RowSeat from "./component/RowSeat";
import { SeatPriceContext } from "./component/Context/SeatPriceContext";

function App() {
  const [totalPrice, setTotalPrice] = useState([]);
  const totalAmount = totalPrice.reduce((sum, seat) => {
    return sum + seat.price;
  }, 0);
  return (
    <section className="md:w-full md:h-full md:bg-gray-50 grid grid-rows-2">
      <section className="w-full">
        <PriceContext.Provider value={{ totalPrice, setTotalPrice }}>
          <section className="w-full m-auto p-4">
            <h1 className="text-center"> Platinum : ₹200 </h1>
            <SeatPriceContext.Provider value={{ price: 200, type: "platinum" }}>
              <RowSeat name="A" price={200} />
            </SeatPriceContext.Provider>
          </section>
          <section className="w-full m-auto p-4">
            <h1 className="text-center"> GOLD : ₹150 </h1>
            <SeatPriceContext.Provider value={{ price: 150, type: "gold" }}>
              <RowSeat name="B" price={150} />
              <RowSeat name="C" price={150} />
            </SeatPriceContext.Provider>
          </section>
          <section className="w-full m-auto p-4">
            <h1 className="text-center"> Silver : ₹100 </h1>
            <SeatPriceContext.Provider value={{ price: 100, type: "silver" }}>
              <RowSeat name="D" price={100} />
              <RowSeat name="E" price={100} />
              <RowSeat name="F" price={100} />
            </SeatPriceContext.Provider>
          </section>
        </PriceContext.Provider>
      </section>
      <section className="flex justify-center w-full m-3">
        <img src={screenIcon} alt="screen" className="h-[40px] " />
      </section>
      <footer className="text-center font-bold text-xl mt-4 fixed w-full bottom-0 bg-gray-800 h-35 p-4">
        <button
          type="buttton"
          className="bg-blue-500 text-white font-semibold h-15 w-40 p-1 m-auto rounded"
        >
          Book Now: ₹{totalAmount}
        </button>
      </footer>
    </section>
  );
}

export default App;
