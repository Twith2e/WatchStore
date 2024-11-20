function Newsletter() {
  return (
    <div className="w-[18%] flex flex-col items-start">
      <h1 className="text-xl leading-5 font-bold mb-[40px]">Stay in Touch</h1>
      <input
        className="bg-white placeholder:text-[#00000080] placeholder:text-sm py-[11px] px-[25px] rounded-full outline-none focus:border-[#0088ff] border-[1px] border-[#f1f2f6]"
        type="email"
        placeholder="Email address..."
      />
      <button className="bg-[#000] py-3 px-[30px] rounded-full mt-3">
        <span className="text-white text-sm font-bold">Subscribe</span>
      </button>
    </div>
  );
}

export default Newsletter;
