import { Session } from "@/app/_interfaces/Session"; // Adjust path as necessary

const mockPages: Session[] = [
  {
    id: 1,
    userId: 1,
    buyIn: 25.0,
    cashOut: 100.0,
    gameType: "Cash",
    sessionLength: 50,
    date: new Date(),
  },
  {
    id: 2,
    userId: 1,
    buyIn: 25.0,
    cashOut: 0.0,
    gameType: "Cash",
    sessionLength: 145,
    date: new Date(),
  },
];

export default mockPages;
