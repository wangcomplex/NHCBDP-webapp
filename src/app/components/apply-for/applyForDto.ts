
export class ApplyForDto {

  id: number;
  title: string;
  categoryId: number;
  summary: string;
  content: string;

  constructor(json: any) {
    this.id = json.id;
    this.title = json.title;
    this.categoryId = json.categoryId;
    this.summary = json.summary;
    this.content = json.content;
  }


}
