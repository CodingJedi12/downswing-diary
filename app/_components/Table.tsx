import React from "react";
import mockPages from "@/app/_data/mockPages";
import prisma from "@/prisma/prisma";

const Table: React.FC = async () => {
  const sessions = await prisma.session.findMany({
    where: { userId: 1 },
  });
  return (
    <div className="overflow-auto">
      <table className="table w-full lg:w-[80%] lg:m-auto text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-gray-800 text-gray-500">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Game Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Blinds
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Buy In
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Cashout
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Session Length
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider"
            >
              Profit
            </th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr className="bg-gray-800" key={session.id}>
              <td className="px-6 py-3 text-left text-gray-400 text-sm">
                {session.date.toDateString()}
              </td>
              <td className="px-6 py-3 text-left text-gray-400 text-sm">
                {session.gameType}
              </td>
              <td className="px-6 py-3 text-left text-gray-400 text-sm">
                {/* If null, should autofill with N/A */}
                {session.blinds}
              </td>
              <td className="px-6 py-3 text-left text-gray-400 text-sm">
                ${session.buyIn.toFixed(2)}
              </td>
              <td className="px-6 py-3 text-left text-gray-400 text-sm">
                ${session.cashOut.toFixed(2)}
              </td>
              {session.sessionLength >= 60 ? (
                <td className="px-6 py-3 text-left text-gray-400 text-sm">
                  {Math.floor(session.sessionLength / 60)}hr{" "}
                  {session.sessionLength % 60}min
                </td>
              ) : (
                <td className="px-6 py-3 text-left text-gray-400 text-sm">
                  {session.sessionLength}min
                </td>
              )}
              {session.cashOut - session.buyIn >= 0 ? (
                <td className="px-6 py-3 text-left text-gray-400 text-sm">
                  <span className="p-1.5 font-medium uppercase tracking-wider text-green-100 bg-green-500 rounded-lg bg-opacity-50">
                    +${session.cashOut - session.buyIn}
                  </span>
                </td>
              ) : (
                <td className="px-6 py-3 text-left text-gray-400 text-sm">
                  <span className="p-1.5 font-medium uppercase tracking-wider text-red-100 bg-red-500 rounded-lg bg-opacity-50">
                    -${session.buyIn - session.cashOut}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // TODO: Make cards for mobile friendly table view
  );
};

export default Table;
