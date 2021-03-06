import JudgingObjectFactory from "@/utils/JudgingObjectFactory";
import {
  FourCard,
  None,
  RoyalStraightFlash,
  StraightFlash,
  TwoPair,
  Flash,
  FullHouse,
  OnePair,
  Straight,
  ThreeCard
} from "@/yaku";

describe("ロイヤルストレートフラッシュが正しく判別される", () => {
  const hand = [
    { number: 10, suit: "spade" },
    { number: 11, suit: "spade" },
    { number: 12, suit: "spade" },
    { number: 13, suit: "spade" },
    { number: 1, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がRoyalStraightFlash", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(RoyalStraightFlash);
  });
});

describe("ストレートフラッシュが正しく判別される", () => {
  const hand = [
    { number: 9, suit: "spade" },
    { number: 10, suit: "spade" },
    { number: 11, suit: "spade" },
    { number: 12, suit: "spade" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がStraightFlash", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(StraightFlash);
  });
});

describe("フォーカードが正しく判別される", () => {
  const hand = [
    { number: 1, suit: "spade" },
    { number: 13, suit: "club" },
    { number: 13, suit: "diamond" },
    { number: 13, suit: "heart" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がFourCard", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(FourCard);
  });
});

describe("フルハウスが正しく判別される", () => {
  const hand = [
    { number: 1, suit: "spade" },
    { number: 1, suit: "club" },
    { number: 13, suit: "diamond" },
    { number: 13, suit: "heart" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がFullHouse", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(FullHouse);
  });
});

describe("フラッシュが正しく判別される", () => {
  const hand = [
    { number: 2, suit: "spade" },
    { number: 4, suit: "spade" },
    { number: 6, suit: "spade" },
    { number: 8, suit: "spade" },
    { number: 10, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がFlash", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(Flash);
  });
});

describe("ストレートが正しく判別される", () => {
  const hand = [
    { number: 2, suit: "spade" },
    { number: 3, suit: "spade" },
    { number: 4, suit: "club" },
    { number: 5, suit: "spade" },
    { number: 6, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がStraight", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(Straight);
  });
});

describe("スリーカードが正しく判別される", () => {
  const hand = [
    { number: 1, suit: "spade" },
    { number: 2, suit: "club" },
    { number: 13, suit: "diamond" },
    { number: 13, suit: "heart" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がThreeCard", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(ThreeCard);
  });
});

describe("ツーペアが正しく判別される", () => {
  const hand = [
    { number: 1, suit: "spade" },
    { number: 2, suit: "club" },
    { number: 2, suit: "diamond" },
    { number: 13, suit: "heart" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がTwoPair", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(TwoPair);
  });
});

describe("ワンペアが正しく判別される", () => {
  const hand = [
    { number: 1, suit: "spade" },
    { number: 2, suit: "club" },
    { number: 3, suit: "diamond" },
    { number: 13, suit: "heart" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がOnePair", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(OnePair);
  });
});

describe("ブタが正しく判別される", () => {
  const hand = [
    { number: 1, suit: "spade" },
    { number: 2, suit: "club" },
    { number: 3, suit: "diamond" },
    { number: 12, suit: "heart" },
    { number: 13, suit: "spade" }
  ];

  it("戻り値の生成元クラス名がNone", () => {
    expect(JudgingObjectFactory(hand)).toBeInstanceOf(None);
  });
});
