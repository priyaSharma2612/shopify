import React from "react";
import collection from "../collections/PoliciesCollection";

const Policies = () => {
  return (
    <div className="gap-5 justify-center p-5 lg:mx-12 md:mx-8 mx-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
      {collection.map((policy) => (
        <div
          key={policy.id}
          className="bg-gray-100 w-full h-[75px] flex gap-4 items-center px-5 and py-3 rounded-md"
        >
          <div className="">
            <img className="h-[40px] w-[40px]" src={policy.img} alt="" />
          </div>
          <div>
            <p className="text-black text-xl">{policy.title}</p>
            <p className="text-gray-600">{policy.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policies;
