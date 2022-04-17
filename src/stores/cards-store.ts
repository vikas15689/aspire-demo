import { defineStore } from "pinia";

type Card = {
  firstname: string;
  lastname: string;
  number: string;
  thru: string;
  cvv: string;
  addedOn: number;
  id: number;
};

type CardsState = {
  cards: Card[];
};

export const useCardsStore = defineStore("cards", {
  state: () =>
    ({
      cards: [
        {
          firstname: "Mark",
          lastname: "Henry",
          number: "1234567898765432",
          thru: "12/22",
          cvv: "123",
          addedOn: 1650215115111,
          id: 1
        },
        {
          firstname: "Vikas",
          lastname: "Awaghade",
          number: "1234567898765432",
          thru: "12/24",
          cvv: "123",
          addedOn: 1650215627868,
          id: 1
        }
      ]
    } as CardsState),
  getters: {
    cardsByaddedOn(state) {
      state.cards.sort((a, b) => (a.addedOn < b.addedOn ? 1 : -1));
      return state.cards;
    }
  }
});
