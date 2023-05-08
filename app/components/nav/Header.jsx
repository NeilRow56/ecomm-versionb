"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import UserMenu from "./UserMenu";

const Header = ({ showBackArrow, label, currentUser }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  //useCallback is a React Hook that lets you cache a function definition between re-renders.

  //const cachedFn = useCallback(fn, dependencies)
  //In example above dependency is router ;

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center justify-between gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="
              cursor-pointer
              transition
              hover:opacity-70
          "
          />
        )}
        <h1 className="text-xl font-semibold text-white">{label}</h1>
        <UserMenu currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Header;
