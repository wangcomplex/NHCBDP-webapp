
export class DataSourcesDto {

  categoryId: number;
  tableTitle: string;

  constructor(json: any) {
    this.categoryId = json.categoryId;
    this.tableTitle = json.tableTitle;
  }


}
