import { useState } from "react";
import product from "../data/productData";
import classNames from "../utils/classNames";

export default function BoxImgContent({ onImageSelect }) {
  const [selectedImageId, setSelectedImageId] = useState(
    product.images.find((image) => image.primary).id
  );
  const [activeImageId, setActiveImageId] = useState(
    product.images.find((image) => image.primary).id 
  );

  const handleImageClick = (id) => {
    setSelectedImageId(id);
    onImageSelect(id);
    setActiveImageId(id);
  };

  const selectedImageSrc = product.images.find(
    (image) => image.id === selectedImageId
  ).imageSrc;

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full gap-3">
      {/* Product Info */}
      <div className="w-full  lg:w-2/12">
        <div className=" flex lg:hidden pb-3 items-center justify-center w-full gap-3">
          {product.images.map((image) => (
                <span
                key={image.id}
                alt={image.imageAlt}
                className={`cursor-pointer rounded-full border p-1 w-[15px] h-[15px] ${
                  image.id === activeImageId ? 'activeSpan' : 'bg-gray-300 border-gray-600'
                }`}
                onClick={() => handleImageClick(image.id)}
              />
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center flex-wrap gap-2 sm:gap-4 md:gap-6 lg:flex-col lg:gap-4">
          {product.images.map((image) => (
            <img
              key={image.id}
              src={image.imageSrc}
              alt={image.imageAlt}
              className={classNames(
                "cursor-pointer  p-1",
                "w-[50px] h-[50px]",
                "sm:w-[100px] sm:h-[100px]",
                "lg:w-auto lg:h-auto"
              )}
              onClick={() => handleImageClick(image.id)}
            />
          ))}
        </div>
      </div>
      {/* Image gallery */}
      <div className="mt-8 lg:w-10/12 lg:mt-0 flex flex-col gap-8">
        <h2 className="sr-only">Images</h2>
        <div className="flex flex-col gap-8">
          <img
            src={selectedImageSrc}
            className="w-full h-auto"
            alt="Selected"
          />
        </div>
      </div>
    </div>
  );
}
