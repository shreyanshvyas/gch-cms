export type NavConfigType = {
  name: string;
  label: string;
  route?: string;
  options?: {
    name: string;
    label: string;
    route: string;
  }[];
};
