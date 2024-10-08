
function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-4 sm:h-14 md:hover:bg-gray-100 rounded-xl  active:border-b-2 active:pt-[2px] active:border-blue-500 group">
      <Icon
        className={`h-7 ${!active && "text-gray-500"} text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && "text-blue-500"}`}
      />
      {/* <Icon className={`h-7 text-gray-500 text-center sm:h-7 mx-auto ${active && "text-blue-500"}`}/> */}
    </div>
  );
}

export default HeaderIcon;
