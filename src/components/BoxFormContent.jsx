import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import product from "../data/productData";
import classNames from "../utils/classNames";
import { FaPlus, FaMinus } from "react-icons/fa";
import DetailsBox from "./DetailsBox";
import { LiaRulerHorizontalSolid } from "react-icons/lia";

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
          <div className="flex flex-col gap-1 border-b border-brown3">
            <h1 className="text-2xl font-bold text-brown3">{imageData.name}</h1>
            <p className="text-base pt-2 font-semibold text-brown3 pb-4">
              <span className="px-1">{imageData.price}</span> Tomans
            </p>
          </div>
          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-2"
          >
            <h2 className="text-lg pb-2 font-bold text-brown3 mt-3">
              Color : white
            </h2>
            <div className="sr-only">Choose a color</div>
            <div className="flex items-center space-x-3">
              {product.colors.map((color) => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      active && checked ? "" : "",
                      !active && checked ? "" : "",
                      "relative -m-0.5 flex cursor-pointer items-center justify-center p-0.5 focus:outline-none"
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <RadioGroup.Label as="span" className="sr-only">
                        {color.name}
                      </RadioGroup.Label>
                      <img
                        src={color.bgColor}
                        alt={color.name}
                        aria-hidden="true"
                        className={classNames(
                          "h-10 w-10 p-1 border border-black border-opacity-10",
                          active && checked ? "" : "",
                          !active && checked ? "ring-1 ring-brown5" : ""
                        )}
                      />
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Size picker */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-brown3">Size :</h2>
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
                      ? "cursor-pointer border border-brown5"
                      : "cursor-not-allowed opacity-25 border border-brown5",

                    "flex items-center justify-center border py-2 w-[112px] text-xs font-medium uppercase relative"
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
            <div className="flex items-center mt-1 gap-1">
              <LiaRulerHorizontalSolid />
              <span className="text-sm text-brown3 border-b border-brown3">
                Measuring Guide
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-bold text-brown3">Lining :</h3>
              <div className="flex mt-2 items-center gap-2">
                <button className=" flex items-center justify-center border w-[132px] py-1 text-sm px-4 border-brown5 text-brown3">
                  Standard Lining
                </button>
                <button className="w-[132px] flex items-center justify-center border py-1 text-sm px-4 border-brown5 text-brown3">
                  Unlined
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-bold text-brown3 mt-3 py-3">QTY : </h5>
          <span className="flex w-[120px] justify-between items-center gap-2 border border-brown5 text-brown3 p-1 rounded-sm">
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
          className="mt-8 flex w-full items-center justify-center  border border-transparent bg-brown5 px-8 py-3 text-base font-medium text-white"
          onClick={handleAddToBag}
        >
          ADD TO BAG
        </button>
        <button
          type="button"
          className="mt-3  flex  w-full items-center justify-center  border border-brown5 opacity-75  px-8 py-3 text-base text-brown5 font-semibold"
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
