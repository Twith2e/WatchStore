import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./Redux/CounterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.CounterSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <button>-</button>
      <p>{value}</p>
      <button onClick={() => dispatch(Increment(20))}>+</button>
    </div>
  );
};

export default Counter;
