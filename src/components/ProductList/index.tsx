"use client";
import React from "react";
import Image from "next/image";
import GradientButton from "../Buttons/GradientButton";
// import { useRouter } from "next/navigation";
const data = [
  {
    id: 1,
    title: "Sample Item 1",
    imageUrl:
      "https://images.pexels.com/photos/3647693/pexels-photo-3647693.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Sample Item 2",
    imageUrl:
      "https://images.pexels.com/photos/14914172/pexels-photo-14914172.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Sample Item 3",
    imageUrl:
      "https://images.pexels.com/photos/240524/pexels-photo-240524.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Sample Item 4",
    imageUrl:
      "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Sample Item 5",
    imageUrl:
      "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProductList = () => {
  // const router= useRouter()
  const handelClick=(id:number)=>{
    console.log(id,"id")
  }
  return (
    <>
      <div>
        <div className="grid grid-cols-3 border gap-9 p-8">
          {data.map((product) => {
            return (
              <div key={product.id} className="my-4">
                <Image
                  width={400}
                  height={100}
                  src={product.imageUrl}
                  className="w-[100%] h-[100%] cover"
                  alt="image"
                />
                {/* <button className="w-[120px] h-[40px] rounded-md mt-1 transition-all duration-700 ease-in-out bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
                  Click here
                </button> */}
                <GradientButton onClick={handelClick}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductList;
