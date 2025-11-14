export interface PriceDetails {
  value?: string;
  qtd: string;
}

export interface Address {
  title: string;
  description: string;
}

export interface CourseOptionProps {
  type: string;
  label: string;
  address: Address;
  typeCard: "preco" | "info";
  price?: PriceDetails;
  info?: string;
  onSelect?: (type: string) => void;
}