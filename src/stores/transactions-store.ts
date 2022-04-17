import { defineStore } from "pinia";

type Transaction = {
  name: string;
  date: string;
  icon: string;
  colors: string[];
  type: "credit" | "debit";
  amount: string;
  id: string;
};

type TransactionsState = {
  transactions: Transaction[];
};
export const useTransactionStore = defineStore("transactions", {
  state: () =>
    ({
      transactions: [
        {
          name: "Hamleys",
          date: "20 May 2020",
          type: "credit",
          amount: "S$ 150",
          icon: "file-storage",
          colors: ["#009DFF1A", "#23CEFD"],
          id: "1a"
        },
        {
          name: "Hamleys",
          date: "20 May 2020",
          type: "debit",
          amount: "S$ 150",
          icon: "flights",
          colors: ["#00D6B51A", "var(--app-primary)"],
          id: "2a"
        },
        {
          name: "Hamleys",
          date: "20 May 2020",
          type: "debit",
          amount: "S$ 150",
          icon: "megaphone",
          colors: ["#F251951A", "#f25195"],
          id: "3a"
        },
        {
          name: "Hamleys",
          date: "20 May 2020",
          type: "debit",
          amount: "S$ 150",
          icon: "file-storage",
          colors: ["#009DFF1A", "#23CEFD"],
          id: "4a"
        }
      ]
    } as TransactionsState)
});
