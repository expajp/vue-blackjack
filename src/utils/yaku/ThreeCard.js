import AbstractYaku from './AbstractYaku.js'
import deepcopyArray from '../deepcopyArray.js'
import getScore from '../getScore.js'
import getDifferenceArrays from '../getDifferenceArrays.js'

// ThreeCardクラス
export class ThreeCard extends AbstractYaku {
    constructor(hand){
        super(hand)

        const numbersArray = deepcopyArray(hand).map(card => card.number)
        const numbersSet = [...new Set(deepcopyArray(numbersArray))]
        this.tripledNumber = getDifferenceArrays(numbersArray, numbersSet)[0]
    }

    // 役のランクを返す
    getYakuRank(){
        return 3
    }
    // 役の名前を返す
    getYakuName(){
        return 'ThreeCard'
    }
    // 勝敗判定に使う数字を返す
    getScore(){
        return getScore(this.tripledNumber)
    }
}