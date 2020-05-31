import express, { text } from "express";

const PORT = 3000;
const app = express();

const str = "안녕하세요. 저는 떡잎유치원 해바라기반에 다니는 짱구에요";

/**
 *
 *
 * 문자열 제어_1
 * [ substring, length , split]
 *
 *   >> String.substring(sartIndex, endIndex);
 *     "안녕하세요"
 *       0 1 2 3 4
 *     const result = "안녕하세요".substring(1,3);
 *     result => "안녕하세";
 *
 *   >> string.length;
 *    현재 문자열의 길이를 반환
 *     "안녕하세요"
 *      012345 를 retun 해준다
 *     const reslut = "안녕하세요".length;
 *     result  => 5
 *
 *   >> String.split(saperator <- 기준);
 *     "오은하 vs 박여원".split("vs");  => [0] : 오은하 // [1] : 박여원
 *
 *
 */

const splitHandler = (text) => {
  console.log("[[PLAY Split]]");

  const reslut1 = text.split(".")[0];
  const reslut2 = text.split(".")[1];

  console.log(`앞에는 ${reslut1}, 뒤에는 ${reslut2} 입니다.`);
};

const lengthHandler = (text) => {
  console.log("[[PLAY Length]]");

  const reslut = text.length;

  console.log(`현재 문자열의 길이는 ${reslut} 입니다.`);
};

const subStringHandler = (text) => {
  console.log("[[PLAY substring]]");

  const result = text.substring(2, 10);

  console.log(`결과는: ${result} 입니다.`);
};

app.listen(PORT, () => {
  console.log(`${PORT} port Server start`);

  subStringHandler(str);
  lengthHandler(str);
  splitHandler(str);
});
