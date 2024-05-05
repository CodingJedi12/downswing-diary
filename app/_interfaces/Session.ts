// interfaces/Session.ts or wherever you manage your interfaces

export interface Session {
    id: number;
    userId: number;
    buyIn: number;
    cashOut: number;
    gameType: string;
    sessionLength: number // In minutes
    date: Date
  }
  