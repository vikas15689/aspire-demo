/* eslint-disable no-console */
import { defineStore } from "pinia";

let idStart = 2;
type Card = {
  firstname: string;
  lastname: string;
  number: string;
  thru: string;
  cvv: string;
  addedOn: number;
  id: number;
  freeze: boolean;
};

type CardsState = {
  cards: Card[];
  activeCard: number;
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
          id: 1,
          freeze: false
        },
        {
          firstname: "Vikas",
          lastname: "Awaghade",
          number: "1234567898765432",
          thru: "12/24",
          cvv: "123",
          addedOn: 1650215627868,
          id: 2,
          freeze: false
        }
      ],
      activeCard: 1
    } as CardsState),
  getters: {
    cardsByaddedOn(state): Card[] {
      state.cards.sort((a, b) => (a.addedOn < b.addedOn ? 1 : -1));
      return state.cards;
    }
  },
  actions: {
    setActiveCard(cardIndex: number) {
      this.activeCard = cardIndex;
    },
    toggleFreeze(cardid: number, val: boolean) {
      const idx = this.cards.findIndex(c => c.id === cardid);
      const card = this.cards.find(c => c.id === cardid);

      if (card && idx > -1) {
        this.cards.splice(idx, 1, { ...card, freeze: val });
      }
    },
    cancelCard(cardid: number) {
      const idx = this.cards.findIndex(c => c.id === cardid);
      if (idx > -1) {
        this.cards.splice(idx, 1);
      }
    },
    addCard(firstname: string, lastname: string) {
      let number = "";
      for (let i = 0; i < 4; i++) {
        number += Math.floor(1000 + Math.random() * 9000);
      }

      const cvv = Math.floor(100 + Math.random() * 900);
      const month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      const id = idStart + 1;
      idStart += 1;
      const card: Card = {
        firstname,
        number,
        lastname,
        freeze: false,
        cvv: `${cvv}`,
        thru: `${month}/27`,
        addedOn: new Date().getTime(),
        id
      };

      this.cards.push(card);
    }
  }
});
