import AddtoCart from "./AddtoCart";
import Options from "./Options";
import { useEffect, useState } from "react";

function WatchDisplay({ watch }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex flex-col gap-2 items-center p-[30px] bg-white rounded-[30px] cursor-pointer"
    >
      <div className="w-[237.83px] h-[237.83px] bg-[#efefef] rounded-full relative">
        <img src={watch.img} alt={watch.name} className="w-full h-full" />
        <div
          className={`absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] ${
            isHover ? "block" : "hidden"
          }`}
        >
          <Options />
        </div>
      </div>
      <div className="flex flex-col my-3 justify-between items-center w-full">
        <div>
          <span
            className={`text-[1.125rem] leading-[25.2px] font-medium ${
              isHover ? "text-[#0088ff]" : ""
            }`}
          >
            {watch.name}
          </span>
        </div>
        <div>{watch.rating}</div>
      </div>
      <div className="text-[1.125rem] leading-[36px] font-medium text-[#262626]">
        ${watch.price}
      </div>
      <div
        onMouseEnter={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(true)}
      >
        <AddtoCart />
      </div>
    </div>
  );
}

export default WatchDisplay;
