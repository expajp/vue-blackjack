import AbstractYaku from './AbstractYaku.js'
import deepcopyArray from '../deepcopyArray.js'
import getScore from '../getScore.js'
import getDifferenceArrays from '../getDifferenceArrays.js'

// OnePairクラス
export default class extends AbstractYaku {
    constructor(hand){
        super(hand)

        const numbersArray = deepcopyArray(hand).map(card => card.number)
        const numbersSet = [...new Set(deepcopyArray(numbersArray))]
        this.pairedNumber = getDifferenceArrays(numbersArray, numbersSet)
    }

    // 役のランクを返す
    getYakuRank(){
        return 1
    }
    // 役の名前を返す
    getYakuName(){
        return 'OnePair'
    }
    // 勝敗判定に使う数字を返す
    getScore(){
        return getScore(this.pairedNumber)
    }
    // 勝敗判定に使う2つめの数字を返す
    // ツーペア以外では定義しない
    getSecondScore(){
        throw new Error('getSecondNumber()を定義してください')
    }
    // 勝敗判定に使うスートを返す
    getSuit(){
        const pairedSuits = deepcopyArray(this.hand)
            .filter(card => { return card.number === this.pairedNumber })
            .map(card => card.suit)
            .sort()
        return pairedSuits[pairedSuits.length-1]
    }
}