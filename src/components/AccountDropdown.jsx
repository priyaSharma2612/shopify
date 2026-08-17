import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { FaUserCircle, FaHeart, FaSignOutAlt } from "react-icons/fa";


const AccountDropdown = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <div>
        <button className=" relative flex items-center gap-2" onClick={()=>setOpen(!open)}>
            <FaUserCircle size={18}/>
            <span className='font-bold text-lg'>Account</span>
        </button>
              {open && (
        <div className=" absolute right-20 top-15 mt-4 w-40 bg-white rounded-md shadow-lg border border-gray-200">

          {/* Account */}
          <button 
            className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            <FaUserCircle />
            <span>Account</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={() => navigate("/wishlist")}
            className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            <FaHeart />
            <span>Wishlist</span>
          </button>

          {/* Logout */}
          <button
            // onClick={() => {
            //   console.log("Logout");
            // }}
            className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>

        </div>
      )}

      
    </div>
  )
}

export default AccountDropdown
