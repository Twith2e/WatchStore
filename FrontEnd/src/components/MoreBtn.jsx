import { ArrowForward } from "@mui/icons-material";

function MoreBtn() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="text-white px-2 py-1 rounded-full bg-black">
        <ArrowForward sx={{ fontSize: "1rem" }} />
      </div>
      <span className="text-black">Discover more</span>
    </div>
  );
}

export default MoreBtn;
