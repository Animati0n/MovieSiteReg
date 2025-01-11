import Seat from "./Seat";

export default function RowSeat({ name, price }) {
  return (
    <div className="text-gray-800  flex justify-center m-2">
      <Seat label="1" value={`${name}-1`} />
      <Seat label="2" value={`${name}-2`} />
      <Seat label="3" value={`${name}-3`} />
      <Seat label="4" value={`${name}-4`} />
      <Seat label="5" value={`${name}-5`} />
      <Seat label="6" value={`${name}-6`} />
      <Seat label="7" value={`${name}-7`} />
      <Seat label="8" value={`${name}-8`} />
      <Seat label="9" value={`${name}-9`} />
      <Seat label="10" value={`${name}-10`} />
    </div>
  );
}
