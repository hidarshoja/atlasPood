import { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const navigation = {
  pages: [
    { name: "Home", href: "#" },
    { name: "aboutUs", href: "#" },
  ],
};

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                onClick={() => setOpen(!open)} // Toggle open state
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Flyout menus */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
              <div className="flex h-full space-x-8">
                {navigation.pages.map((page) => (
                  <a
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </a>
                ))}
                <button
                onClick={handleLogout}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >logout</button>
              </div>
            </div>

            {/* Logo */}
            <a href="#" className="flex flex-col text-center">
              <span className="border-b text-lg font-semibold">atlas pood</span>
              <span className="text-xs">HOME FURNISHING</span>
            </a>

            <div className="flex flex-1 items-center justify-end">
              {/* Search */}
              <a
                href="#"
                className="ml-6 p-2 text-gray-400 hover:text-gray-500 block"
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>

              {/* Cart */}
              <div className="ml-4">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {(ref) => (
              <div
                ref={ref}
                className="lg:hidden absolute inset-x-0 top-full bg-white border-t border-gray-200 shadow-lg"
              >
                <div className="flex flex-col items-center p-4 space-y-4">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </nav>
    </header>
  );
}
