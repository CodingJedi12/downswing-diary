import Image from "next/image";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-6">
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"> {/* Adjust these values as needed */}
            <Image
              src="card-joker.svg"
              alt="Joker Card"
              layout='responsive'
              width={100}
              height={100}
              objectFit='contain'
            />
          </div>
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            DownSwing Diary
          </h1>
          <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"> {/* Adjust these values as needed */}
            <Image
              src="card-joker.svg"
              alt="Joker Card"
              layout='responsive'
              width={100}
              height={100}
              objectFit='contain'
            />
          </div>
        </div>
      </div>
    </>
  );
}
