import { useState } from "react";
import HeaderComponet from "./HeaderComponet";
import BoxImgContent from "./BoxImgContent";
import BoxFormContent from "./BoxFormContent";
import product from "../data/productData";
import MobileMenu from "./MobileMenu";

const Home = () => {
  const [selectedImageId, setSelectedImageId] = useState(
    product.images.find((image) => image.primary).id
  );

  const handleImageSelect = (id) => {
    setSelectedImageId(id);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <MobileMenu />
      <HeaderComponet />
      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
          <BoxImgContent onImageSelect={handleImageSelect} />
          {/* Product Form */}
          <div className="mt-8 lg:w-4/12">
            <BoxFormContent selectedImageId={selectedImageId} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
