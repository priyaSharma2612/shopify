import React from "react";
import collection from "../collections/PoliciesCollection";

const Policies = () => {
  return (
    <div className="gap-5 justify-center p-5 lg:mx-12 md:mx-8 mx-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
      {collection.map((policy) => (
        <div
          key={policy.id}
          className="
  bg-gray-100
    border border-gray-200
    w-full
    min-h-[90px]
    flex gap-4
    items-center
    px-5 py-4
    rounded-2xl
    shadow-sm
    hover:shadow-md
    transition-shadow
  "
        >
          <div className="h-14 w-14 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
            <img className="h-9 w-9 object-contain" src={policy.img} alt="" />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-900">{policy.title}</p>

            <p className="text-sm text-gray-600">{policy.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policies;
