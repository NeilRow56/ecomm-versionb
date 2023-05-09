"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useState } from "react";
import useProductModal from "@/app/hooks/useProductModal";

const NewProduct = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const productModal = useProductModal();
  const [isOpen, setIsOpen] = useState(false);

  const newProduct = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    // Open New Product Modal
    productModal.onOpen();
  }, [currentUser, loginModal, productModal]);

  return (
    <div>
      <div
        onClick={newProduct}
        className="hidden md:block  cursor-pointer font-semibold py-3 
      px-4 rounded-full w-[150px] text-center bg-yellow-500 hover:bg-yellow-300"
      >
        New Product
      </div>
    </div>
  );
};

export default NewProduct;
