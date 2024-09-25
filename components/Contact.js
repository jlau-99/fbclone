import Image from "next/image"

function Contact({src, name}) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 p-2 cursor-pointer rounded-xl overflow-y-auto no-scrollbar">
        <div className="h-10 w-10 relative">
        <Image
        className="rounded-full"
        src={src}
        objectFit="cover"
        layout="fill"
        /></div>
        <p className="text-sm">{name}</p>
        <div className="absolute bottom-2 left-7 bg-green-400 h-2 w-2 rounded-full"></div>
    </div>
  )
}

export default Contact