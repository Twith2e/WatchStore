import { Search, Shuffle, FavoriteBorder } from "@mui/icons-material";

function Options() {
  return (
    <div className="flex bg-white rounded-3xl p-1 gap-2">
      <div className="relative group">
        <button className="py-1 px-[6px] rounded-full hover:bg-[#0088ff]">
          <FavoriteBorder
            className="group-hover:text-[#fff]"
            sx={{ fontSize: "1.2rem" }}
          />
        </button>
        <div className="absolute hidden group-hover:block bottom-[43px] left-[-60px] text-[12px] text-white bg-[#0088ff] w-[fit-content] whitespace-nowrap px-3 py-1 rounded-2xl font-medium">
          Add to Wishlist
        </div>
      </div>
      <div className="relative group rounded-full">
        <button className="py-1 px-[6px] rounded-full hover:bg-[#0088ff] transition-all">
          <Shuffle
            className="group-hover:text-[#fff]"
            sx={{ fontSize: "1.2rem" }}
          />
        </button>
        <div className="absolute hidden group-hover:block bottom-[43px] left-[-50px] text-[12px] text-white bg-[#0088ff] w-[fit-content] whitespace-nowrap px-3 py-1 rounded-2xl font-medium">
          Add to compare
        </div>
      </div>
      <div className="relative group">
        <button className="py-1 px-[6px] rounded-full hover:bg-[#0088ff]">
          <Search
            className="group-hover:text-[#fff]"
            sx={{ fontSize: "1.3rem" }}
          />
        </button>
        <div className="absolute hidden group-hover:block bottom-[43px] text-[12px] text-white bg-[#0088ff] w-[fit-content] whitespace-nowrap px-3 py-1 rounded-2xl font-medium">
          Quick view
        </div>
      </div>
    </div>
  );
}

export default Options;
