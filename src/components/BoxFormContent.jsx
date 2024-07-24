import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import product from "../data/productData";
import classNames from "../utils/classNames";
import { FaPlus, FaMinus } from "react-icons/fa";
import DetailsBox from "./DetailsBox";

export default function BoxFormContent({ selectedImageId }) {
  const [imageData, setImageData] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[3]);
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () =>
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));

  useEffect(() => {
    const selectedImage = product.images.find(
      (image) => image.id === selectedImageId
    );
    setImageData(selectedImage);
  }, [selectedImageId]);

  const handleAddToBag = () => {
    toast.success("The product has been successfully added to the cart");
  };

  const handleSave = () => {
    toast.success("Product saved successfully");
  };

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form>
        {/* Color picker */}
        <div>
          <div className="flex flex-col gap-1 border-b ">
            <h1 className="text-2xl font-bold text-gray-900">
              {imageData.name}
            </h1>
            <p className="text-lg font-medium text-gray-900 pb-3">
              <span className="px-1 text-green-500">{imageData.price}</span>{" "}
              Tomans
            </p>
          </div>
          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-2"
          >
            <h2 className="text-lg py-3  font-bold text-gray-900 mt-3">
              Color{" "}
            </h2>
            <div className="sr-only">Choose a color</div>
            <div className="flex items-center space-x-3">
              {product.colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      color.selectedColor,
                      active && checked ? "ring ring-offset-1" : "",
                      !active && checked ? "ring-2" : "",
                      "relative -m-0.5 flex cursor-pointer items-center justify-center  p-0.5 focus:outline-none"
                    )
                  }
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {color.name}
                  </RadioGroup.Label>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.bgColor,
                      "h-10 w-10 p-3 border border-black border-opacity-10"
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Size picker */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Size :</h2>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <div
                  key={size.name}
                  onClick={() => {
                    if (size.inStock) {
                      setSelectedSize(size);
                    }
                  }}
                  className={classNames(
                    size.inStock
                      ? "cursor-pointer focus:outline-none"
                      : "cursor-not-allowed opacity-25",
                    size === selectedSize
                      ? "ring-2 ring-indigo-500 ring-offset-2"
                      : "",
                    size === selectedSize
                      ? "border-gray-400 bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border-gray-400 bg-white text-gray-900 hover:bg-gray-50",
                    "flex items-center justify-center border py-2 w-[122px] text-sm font-medium uppercase relative"
                  )}
                  role="radio"
                  aria-checked={size === selectedSize}
                  tabIndex={0}
                  aria-disabled={!size.inStock}
                >
                  <span>{size.name}</span>
                  {!size.inStock && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="block w-full h-[1px] bg-gray-500 transform -translate-y-1/2 rotate-[12deg]"></span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h5 className="mt-6 text-lg font-bold py-3">QTY : </h5>
          <span className="flex w-[120px] justify-between items-center gap-2 border border-gray-600 p-1 rounded-sm">
            <button type="button" onClick={decrement} className="px-2">
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={increment} className="px-2">
              <FaPlus />
            </button>
          </span>
        </div>
        <button
          type="button"
          className="mt-8 flex w-full items-center justify-center  border border-transparent bg-gray-500 px-8 py-3 text-base font-medium text-white hover:bg-gray-600"
          onClick={handleAddToBag}
        >
          ADD TO BAG
        </button>
        <button
          type="button"
          className="mt-8  flex  w-full items-center justify-center  border border-gray-300  px-8 py-3 text-base font-medium text-gray-600 hover:text-white hover:bg-gray-300"
          onClick={handleSave}
        >
          SAVE TO WISHLHST
        </button>
      </form>
      <DetailsBox />
      <ToastContainer />
    </div>
  );
}
