import Image from "next/image";
import Navbar from "./_components/Navbar";
import Link from "next/link";
import Button from "@/app/_components/Button";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[75vh]">
      <div className="flex flex-col gap-4 text-center px-5">
        <div className="text-4xl font-semibold">
          All your poker sessions in one place.
        </div>
        <div className="text-[12px] font-normal">
          Track net profit, profit/hr and playtime across your cash game and
          tournament sessions
        </div>
        <Button label="Sign Up"></Button>
      </div>
    </main>
  );
}
