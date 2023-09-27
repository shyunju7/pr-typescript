export interface Chapter {
  id: number;
  name: string;
  parentId: number;
  subChapter: Chapter[];
}
