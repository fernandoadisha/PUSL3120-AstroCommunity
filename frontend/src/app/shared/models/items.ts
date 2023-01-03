// we use "!" to mention it's required and we use "?" mention it is optional
export class Item {
  id!:string;
  name!:string;
  price!:number;
  tag!:string[];
  imageUrl!: string;
  stars!: number;
}
