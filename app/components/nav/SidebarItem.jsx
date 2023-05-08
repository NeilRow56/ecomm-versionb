"use client";

const SidebarItem = ({ label, icon: Icon, onClick }) => {
  //Created an alias for icon so that it could be used as a component

  return (
    <div onClick={onClick} className="flex flex-row items-center pt-24">
      <div
        className="
        relative
        hidden
        cursor-pointer
        items-center
        gap-4
        rounded-full
        py-4
        hover:bg-slate-300
        hover:bg-opacity-10
        lg:flex
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden pl-1 text-rose-200 lg:block">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
