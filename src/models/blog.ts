export interface IBlog {
  id?: number;
  img: string;
  title: string;
  inner: string;
  meta: {
    design: string;
    data: string;
    duration?: string;
  };

  text: string;
  click: string;
}
