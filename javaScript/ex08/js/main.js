const str = "hoghoge";

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

const splitedString = "HTML,Java,PHP".split(",");
console.log(splitedString);
console.log(splitedString.join("$"));

const strlen = "hogehoge";
console.log(strlen.length);

console.log("hoge" == "hoge");
console.log("hoge" === "hoge");
console.log("hoge" === "fuga");

const strSlice = "hogehoge";
console.log(strSlice.slice(1,3));
console.log(strSlice.slice(4));

const strSubstr = "hogehoge";
console.log(strSubstr.substring(1,3));
console.log(strSubstr.substring(4));

const strIndex = "hogefugapiyohogera";
console.log(strIndex.indexOf("piyo"));

const strIncludes = "hogefugapiyohogera";
console.log(strIncludes.includes("piyo"));
console.log(strIncludes.includes("foo"));
