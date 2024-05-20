//9 import crypto 해주기. tsconfig.json가서 "module": "CommonJS" 써주기.
//10 crypto패키지 안의 함수를 타입스크립트한테 설명해줄 파일을 만들어서 연결시켜줘야하지만. 다른방법도 있음.
//11. npm i -D @types/node 설치. 그럼 node.js를 위한 타입을 다 설치해준다.
import crypto from "crypto"

//1 create interface
interface BlockShape {
    //Blolck에 어떤 값들이 필요해? 정의해주자.
    hash : string;
    prevHash: string;
    //1,2,3,4,5같이 블록의 위치를 표시해주는 숫자. 
    height : number;
    data : string;
}

//2 create Block
class Block implements BlockShape{
    //4. hash는 그 블록의 고유 서명(signature)과 같다. 그러므로 여기다가 일단 hash변수 만들어주기. 
    public hash: string;
    //3. constructor를 사용해서 위에 값들을 받기. 
    constructor(
        public prevHash: string,
        public height : number,
        public data: string
    ) { 
        //5. 여기서 해쉬값 계산해주기. 왜냐? 블륵의 hash값은 prevHash, height, data값을 이용해서 계산되니깐.
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    //6. static 써주기. 
    static calculateHash(prevHash:string, height:number, data:string){
        //7 preveHash, heigh, data를 이용해서 해쉬값을 계산하기.
        //8 Node.JS패키지 중 하나인 crypto를 이용하기.
        const toHash = `${prevHash}${height}${data}`;
        //12 crypto사용하기.
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

// 13 create Blockchain
class Blockchain {
    //14 blocks라는 배열계열 private속성 만들기.
    private blocks: Block[]
    //15 constructor만들기
    constructor (){
        this.blocks = [];
    }
    //18 이전 해쉬값을 불러올수 잇는 getPrevHash함수 만들기
    private getPrevHash() {
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash;
    }
    //16 새로운 블럭을 추가할때는, 블록에 저장하고 싶은 데이터를 보내줘야해
    public addBlock(data:string){
        //17 새로운 블락 만들기. preHash값이 필요하니깐. 18에서 코드 작성. 
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    //18 block에 접근할 수 있는 함수
    public getBlocks(){
        //22 해킹 없는 블록들이 다 있게 return 해 주기. 
        return [...this.blocks];
    }
}

//19 new blockchain들을 만들어 보자.
const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

//21 해킹당한 데이타
blockchain.getBlocks().push(new Block("xxxxx",11111,"HACKEDDDD"))

console.log(blockchain.getBlocks());
//20. npm run dev하면 어떻게 나오는지 알 수 있다. 