import WatchDisplay from "./WatchDisplay";

function WatchDisplayBanner() {
  const watchInfo = [
    {
      name: "Chrome Watch",
      rating: 5.0,
      price: 399.99,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-1.png",
    },
    {
      name: "Classic Watch",
      rating: 4.0,
      price: 399.99,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-1.png",
    },
    {
      name: "Gold Watch",
      rating: 5.0,
      price: 699.99,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-1.png",
    },
    {
      name: "Black Watch",
      rating: 5.0,
      price: 599.99,
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-1.png",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 bg-[#efefef] align-middle justify-center">
      {watchInfo.map((watch) => (
        <div key={watch.name}>
          <WatchDisplay watch={watch} />
        </div>
      ))}
    </div>
  );
}

export default WatchDisplayBanner;
