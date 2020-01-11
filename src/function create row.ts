import { createColumn } from "./function createcolumn";

export const createRow = (data: any) => {
    let rowContent = '';
    for (const i of data) {
      rowContent += createColumn(i)
    }
    return `<tr>${rowContent}</tr>`;
  }
  