export interface ISubscription {
  id: number;
  periodMonth: number;
  description: string;
  price: number;
  totalPrice: number;
}
export interface IShare {
  icon: string;
  path: string;
}
export interface IArticle {
  _id?: string;
  id?: number;
  avatar: string;
  name: string;
  item: string[];
  include: string[];
  like: number;
  show: number;
  camera: number;
  kind: string;
  content: string;
  share: IShare[];
}
