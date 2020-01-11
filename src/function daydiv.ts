import { sample } from "./class school";
// import { y } from "./sampleData";

//divide classRoom day
export let y: any[] = [];

export function daydiv(t: any) {
    for (let i = 0; i < sample.workingDays; i++) {
      var rowfound = t.filter((teachers: any) => teachers.day == i + 1);
        for(let j=0;j<8;j++){
          t.shift();
        }
      t.push(rowfound);
    }
     y.push(t);
  } 
  