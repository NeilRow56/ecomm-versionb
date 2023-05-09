"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import Avatar from "./Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useProductModal from "@/app/hooks/useProductModal";

import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu = ({ currentUser }) => {
  const productModal = useProductModal();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className=" flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm text-white font-semibold py-3
     px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
        >
          Admin
        </div>
        <div
          onClick={toggleOpen}
          className="
       p-4
       md:py-1
       md:px-2
       border-[1px]
       border-neutral-200
       flex
       flex-row
       items-center
       gap-3
       text-white
       rounded-full
       cursor-pointer
       hover:shadow-md
       transition
       "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
         absolute
         rounded-xl
         shadow-md
         w-[40vw]
         md:w-3/4
         bg-white
         overflow-hidden
         right-0
         top-12
         text-sm
       "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <hr />
                <MenuItem
                  label="Create new Product"
                  onClick={productModal.onOpen}
                />
                <MenuItem label="Admin2" onClick={() => {}} />
                <MenuItem label="Admin3" onClick={() => {}} />

                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
