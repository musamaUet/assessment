import React, { useEffect } from "react";
import DropdownUser from "./DropDownUser";
import { useDispatch } from "react-redux";
import { getProfile } from "@/redux/slices/user/user.actions";

const Header = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile()).unwrap().then((res) => {
      const token = localStorage.getItem('token');
      const payload = {
        token,
        userId: res.data._id,
        email: res.data.email,
      }
      setTimeout(() => {
        console.log('payload', payload);
        window.postMessage({ type: "USER_DETAILS", user: payload }, "*");
      }, 2000);
    });
  }, [])

  return (
    <header className="header">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            props.setSidebarOpen(!props.sidebarOpen);
          }}
          className="toggle__btn"
        >
          <span className="relative block h-[20px] w-[20px] cursor-pointer invisible">
            <span className="du-block absolute right-0 h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${!props.sidebarOpen && "!w-full delay-300"
                  }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${!props.sidebarOpen && "delay-400 !w-full"
                  }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${!props.sidebarOpen && "!w-full delay-500"
                  }`}
              ></span>
            </span>
            <span className="absolute right-0 h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${!props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
              ></span>
              <span
                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${!props.sidebarOpen && "!h-0 !delay-200"
                  }`}
              ></span>
            </span>
          </span>
        </button>
        <div className="flex items-center gap-3">
          <DropdownUser />
        </div>
    </header>
  );
};

export default Header;