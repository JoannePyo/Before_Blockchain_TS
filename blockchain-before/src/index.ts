//myPackage가 node의 모듈인것처럼 만들어주기
//"./"를 쓰므로써. 타입스크립트 파일에서 "./myPackage"파일을 불러온다는 뜻.
import {init,exit} from "./myPackage";

//myPackage.js에 코맨트를 적어두면. 나중에 코드를 만들때 init()만 눌러도. 어떤것이 필요한지 알수있다.
init()
