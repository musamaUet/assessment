/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from 'react';
import { ROUTES } from '@/constants/routes';

import { LogoutIcon, ProfileIcon } from '@/components/svgs';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
 const DropdownUser = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);

  const [name, setName ] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    navigate(ROUTES.LOGIN);
  };
  const Data = [
    {
      title: "Log Out",
      icon: <LogoutIcon />,
    },
  ];

   return (
    <Menu as="div" className="relative">
    <Menu.Button className="flex items-center gap-2 sm:gap-4">
      <span className='font-semibold'>{user?.firstName}</span>
      <ProfileIcon />
    </Menu.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-[11.375rem] rounded-lg bg-blackRussian2 p-4 shadow-xl">
        <div className="space-y-4">
          {Data.map((item, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <button 
                  onClick={handleLogout}
                  className="flex gap-2 text-sm text-white items-center"
                >
                  {item.icon}
                  {item.title}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
   );
 }
 
export default DropdownUser;