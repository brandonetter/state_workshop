"use server";

const cardData = {
  0: "Card One Lorem Ipsum, This data is from the server! Nulla ac purus nec nunc lacinia tincidunt",
  1: "Card Two Lorem Ipsum,  This data is from the server! Nulla ac purus nec nunc lacinia tincidunt",
  2: "Card Three Lorem Ipsum, This data is from the server!  Nulla ac purus nec nunc lacinia tincidunt",
};
export async function getCardData(cardId: number) {
  return cardData[cardId as 0 | 1 | 2];
}
