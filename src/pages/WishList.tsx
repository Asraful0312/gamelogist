import SideBar from "@/components/wishlist/SideBar";
import WishListItems from "@/components/wishlist/WishListItems";

const WishList = () => {
  return (
    <section className="-mt-5 mb-36">
      <div className="w-full max-w-2xl gap-5 py-8 mx-auto bg-white/5 h-full flex">
        <SideBar />
        <WishListItems />
      </div>
    </section>
  );
};

export default WishList;
