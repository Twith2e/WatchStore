import { East, KeyboardBackspace } from "@mui/icons-material";

function Testimony({ Info, onPrevious, onNext }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[30px] text-black leading-[40px] font-bold w-[50%]">
        {Info.header}
      </h2>
      <p className="text-lg text-[#707070] leading-[36px] w-[80%] m-0">
        "{Info.text}"
      </p>
      <div className="flex items-center justify-between w-[75%]">
        <div className="flex items-center justify-center gap-4">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={Info.image}
            alt={Info.alt}
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold text-black leading-9">
              {Info.name}
            </h3>
            <p className="text-base leading-8 text-[#707070]">
              {Info.position}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPrevious}
            className="p-2 hover:bg-black hover:text-white rounded-full"
          >
            <KeyboardBackspace />
          </button>
          <button
            onClick={onNext}
            className="p-2 hover:bg-black hover:text-white rounded-full"
          >
            <East />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
