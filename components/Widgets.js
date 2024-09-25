const contacts = [

  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://links.papareact.com/6gg", name: "The Queen" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];

import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-2">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-10 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
          <SearchIcon className="h-10 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
          <DotsHorizontalIcon className="h-10 hover:bg-gray-200 p-2 rounded-full cursor-pointer" />
        </div>
      </div>

      {contacts.map(contact => (
        <Contact key={contact.src} src={contact.src} name={contact.name}/>
      ))}
    </div>
  );
}

export default Widgets;
