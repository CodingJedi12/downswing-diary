import Table from "@/app/_components/Table";
import React from "react";

const mockPages = [
  {
    id: 1,
    userId: 1,
    buyIn: 25.0,
    cashOut: 100.0,
    gameType: "cash",
    startTime: new Date(),
    endTime: new Date(),
  },
  {
    id: 2,
    userId: 1,
    buyIn: 25.0,
    cashOut: 0.0,
    gameType: "cash",
    startTime: new Date(),
    endTime: new Date(),
  },
];
const Diary = () => {
  return <Table />;
};

export default Diary;
