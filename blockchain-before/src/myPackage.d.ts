/*
// 타입스크립트에게 타입에 대해서 설명하는 부분. 
interface Config{
    url:string;
}
//타입스크립이 init이 뭔지 exit이 뭔지 알려주는 부분. 
//myPackage.js에 써주고 이 파일에서 boolean, number,string인지 정의해주고 index.ts에서 사용하기.
declare module "myPackage" {
    function init(congfig:Config):boolean
    function exit(code:number):number;
}
*/