//todo-> mapped types

const arrayOfNumbers: number[] = [1, 2, 3, 4];
const arrayOfStrings: string[] = ["1", "2", "3", "4"];

//todo-> array mapping
const arr:string[] = arrayOfNumbers.map((item)=>item.toString())
console.log(arr);



//!todo-> mapped types -> ek type thke onno type e conver korte chaile mapped type use korte pari.

type AreaNumber = {
    height: number
    width: number
}
type Height = AreaNumber["height"]
type TAreaString = {
    [key in keyof AreaNumber]:string
}


type TAreaStr<X,Y> = {
    [key in keyof X]:Y
}
type hudai = TAreaStr<AreaNumber, string>

