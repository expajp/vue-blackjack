import AbstractYaku from "./AbstractYaku.js";
import deepcopyArray from "../utils/deepcopyArray.js";
import getScore from "../utils/getScore.js";
import getDifferenceArrays from "../utils/getDifferenceArrays.js";
import compareNumsByScoreAsc from "../utils/compareNumsByScoreAsc.js";
import getUniqueArray from "../utils/getUniqueArray.js";

// TwoPairクラス
export class TwoPair extends AbstractYaku {
  constructor(hand) {
    super(hand);

    const numbersArray = deepcopyArray(this.hand).map(card => card.number);
    const numbersSet = getUniqueArray(numbersArray);

    const doubledNumbers = getDifferenceArrays(numbersArray, numbersSet);
    const twoPairedNumbers = doubledNumbers.sort((a, b) =>
      compareNumsByScoreAsc(a, b)
    );

    this.maxPairedNumber = twoPairedNumbers[1];
    this.secondPairedNumbers = twoPairedNumbers[0];
    this.suit = deepcopyArray(this.hand)
      .filter(card => card.number === twoPairedNumbers[1])
      .sort()[1].suit;
  }

  // 役のランクを返す
  getYakuRank() {
    return 2;
  }
  // 役の名前を返す
  getYakuName() {
    return "TwoPair";
  }
  // 勝敗判定に使う数字を返す
  getScore() {
    return getScore(this.maxPairedNumber);
  }
  // 勝敗判定に使う2つめの数字を返す
  getSecondScore() {
    return getScore(this.secondPairedNumbers);
  }
  // 勝敗判定に使うスートを返す
  getSuit() {
    return this.suit;
  }
}
