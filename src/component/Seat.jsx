import { useContext, useEffect, useState } from "react";
import { PriceContext } from "./Context/PriceContext";
import { SeatPriceContext } from "./Context/SeatPriceContext";

export default function Seat({ label, value }) {
  const { totalPrice, setTotalPrice } = useContext(PriceContext);
  const { price, type } = useContext(SeatPriceContext);
  const [active, setActive] = useState("bg-gray-600");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (0 === totalPrice.length) {
      setActive("bg-gray-600");
      setChecked(false);
    }
  }, [totalPrice]);
  const selectedType = totalPrice.every((seatType) => type == seatType.type);
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
          if (totalPrice.length < 8 && e.target.checked && selectedType) {
            setActive("bg-green-600");
            setTotalPrice((prev) => [...prev, { price, type, value }]);
            setChecked(true);
          }
          if (
            totalPrice.length <= 8 &&
            e.target.checked &&
            !selectedType &&
            confirm(`Do you want to change seat to ${type}?`)
          ) {
            setTotalPrice([]);
          }
          if (totalPrice.length >= 8 && e.target.checked && selectedType) {
            setChecked(false);
            alert("You can only select up to 8 seats!!!");
          }
          if (totalPrice.length <= 8 && !e.target.checked && selectedType) {
            setActive("bg-gray-600");
            setTotalPrice((prev) => [
              ...prev.filter((obj) => obj.value !== value),
            ]);
            setChecked(false);
          }
        }}
        checked={checked}
      />
    </>
  );
}
