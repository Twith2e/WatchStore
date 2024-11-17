import { ShoppingCart } from "@mui/icons-material";

function AddtoCart() {
  return (
    <button className="bg-[#0088ff] hover:bg-[#000] text-white px-4 py-2 rounded-[20px] flex items-center gap-2">
      <ShoppingCart />
      <span>Add to cart</span>
    </button>
  );
}

export default AddtoCart;
