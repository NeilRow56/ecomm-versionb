"use client";

import useProductModal from "@/app/hooks/useProductModal";
import Modal from "./Modal";
import { useCallback, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import Heading from "../Heading";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import CategoryInput from "../inputs/CategoryInput";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

// javascript alternative to typescript enums

const STEPS = Object.freeze({
  CATEGORY: 0,
  NAME: 1,
  DESCRIPTION: 2,
  IMAGES: 3,
  PRICE: 4,
});

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const ProductModal = () => {
  const productModal = useProductModal();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes the product?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={() => {}}
              selected={false}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={productModal.isOpen}
      onClose={productModal.onClose}
      onSubmit={productModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="New Product Details"
      body={bodyContent}
    />
  );
};

export default ProductModal;
