export type Suite = "&spades;" | "&hearts;" | "&clubs;" | "&diams;";
export type CardColor = "red" | "black";
export type Card = {
  suite: Suite;
  color: CardColor;
  display: string;
  value: number;
};
