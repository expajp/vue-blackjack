import getScore from '../score.js'

// RoyalStraightFlashクラス
export default class {
    constructor(hand){
        super(hand)
        this.suit = hand[0].suit
    }

    // 役のランクを返す
    getYakuRank(){
        return 9
    }
    // 役の名前を返す
    getYakuName(){
        return 'RoyalStraightFlash'
    }
    // 勝敗判定に使う数字を返す
    getScore(){
        return getScore(1)
    }
    // 勝敗判定に使うスートを返す
    getSuit(){
        return this.suit
    }
}