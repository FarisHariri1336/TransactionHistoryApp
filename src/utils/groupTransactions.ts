import { Transaction } from "../types/transaction";

export interface TransactionDateGroup {
  dateLabel: string;
  transactions: Transaction[];
}

export interface TransactionMonthSection {
  title: string; // e.g. "JANUARY 2025"
  data: TransactionDateGroup[];
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const groupTransactionsByMonthAndDate = (txs: Transaction[]): TransactionMonthSection[] => {
  const sorted = [...txs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const grouped: Record<string, Record<string, Transaction[]>> = {};

  for (const tx of sorted) {
    const dateObj = new Date(tx.date);
    const year = dateObj.getFullYear();
    const month = MONTHS[dateObj.getMonth()];
    const day = dateObj.getDate();

    const monthKey = `${month.toUpperCase()}`; // e.g. "JANUARY 2025"
    const dateLabel = `${day} ${month} ${year}`; // e.g. "13 January 2025"

    grouped[monthKey] ??= {};
    grouped[monthKey][dateLabel] ??= [];
    grouped[monthKey][dateLabel].push(tx);
  }

  return Object.entries(grouped).map(([title, dateMap]) => ({
    title,
    data: Object.entries(dateMap).map(([dateLabel, transactions]) => ({
      dateLabel,
      transactions,
    })),
  }));
};
