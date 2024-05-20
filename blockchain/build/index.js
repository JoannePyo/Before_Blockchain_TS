"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//9 import crypto 해주기. tsconfig.json가서 "module": "CommonJS" 써주기.
//10 crypto패키지 안의 함수를 타입스크립트한테 설명해줄 파일을 만들어서 연결시켜줘야하지만. 다른방법도 있음.
//11. npm i -D @types/node 설치. 그럼 node.js를 위한 타입을 다 설치해준다.
const crypto_1 = __importDefault(require("crypto"));
//2 create Block
class Block {
    //3. constructor를 사용해서 위에 값들을 받기. 
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        //5. 여기서 해쉬값 계산해주기. 왜냐? 블륵의 hash값은 prevHash, height, data값을 이용해서 계산되니깐.
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    //6. static 써주기. 
    static calculateHash(prevHash, height, data) {
        //7 preveHash, heigh, data를 이용해서 해쉬값을 계산하기.
        //8 Node.JS패키지 중 하나인 crypto를 이용하기.
        const toHash = `${prevHash}${height}${data}`;
        //12 crypto사용하기.
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
// 13 create Blockchain
class Blockchain {
    //15 constructor만들기
    constructor() {
        this.blocks = [];
    }
    //18 이전 해쉬값을 불러올수 잇는 getPrevHash함수 만들기
    getPrevHash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    //16 새로운 블럭을 추가할때는, 블록에 저장하고 싶은 데이터를 보내줘야해
    addBlock(data) {
        //17 새로운 블락 만들기. preHash값이 필요하니깐. 18에서 코드 작성. 
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    getBlocks() {
        return this.blocks;
    }
}
const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
console.log(blockchain.getBlocks());
