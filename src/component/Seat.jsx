import { useContext, useEffect, useState } from "react";
import { PriceContext } from "./Context/PriceContext";
import { SeatPriceContext } from "./Context/SeatPriceContext";

export default function Seat({ label, value }) {
  const { totalPrice, setTotalPrice } = useContext(PriceContext);
  const { price, type } = useContext(SeatPriceContext);
  const [active, setActive] = useState("bg-gray-600");
  useEffect(() => {
    if (0 === totalPrice.length) {
      setActive("bg-gray-600");
    }
  }, [totalPrice]);
  // console.log(price, totalPrice.length, type);

  return (
    <>
      <label
        htmlFor={`seat-${value}`}
        className={`mx-4 box-border hover:cursor-pointer h-10 w-10 p-2 border-1 border-gray-500  rounded text-center text-white hover:bg-green-600 hover:outline-1 hover:outline-green-600  ${active}`}
      >
        {label}
      </label>
      <input
        id={`seat-${value}`}
        type="checkbox"
        className="hidden"
        value={value}
        onChange={(e) => {
          if (e.target.checked) {
            if (totalPrice.every((seatType) => type == seatType.type)) {
              setActive("bg-green-600");
              setTotalPrice((prev) => [...prev, { price, type }]);
            } else {
              if (confirm("Do you want to change Tire?")) {
                setTotalPrice([]);
              }
            }
          }
          console.log(
            "new tire select",
            e.target.checked,
            totalPrice.every((seatType) => type == seatType.type),
            e,
            e.target,
          );
        }}
        // checked={totalPrice.every((seatType) => type !== seatType.type)}
      />
    </>
  );
}
