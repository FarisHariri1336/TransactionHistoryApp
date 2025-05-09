export interface Transaction {
  id: string;
  name: string;
  date: string;
  time: string;
  amount: string;
  type: "credit" | "debit";
  reference: string;
  transactionId: string;
  status: string;
}
