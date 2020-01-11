import { daydiv } from "./function daydiv";
import { a } from "./sampleData";


export function clsdiv(data: any) {

    for (var i = 0; i < a.length; i++) {
      var clsfound = data.filter((teachers1: any) => teachers1.name == a[i].name);
      daydiv(clsfound);
    }
  }
    
  
  