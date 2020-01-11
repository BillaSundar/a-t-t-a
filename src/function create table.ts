import { createRow } from "./function create row";

// create table <table>

export function createTable(data: any){
    let tableContent = '';
    for (const i of data) {
      tableContent += createRow(i);
    }
    return `<table border="2">${tableContent}</table>`;
  }
  