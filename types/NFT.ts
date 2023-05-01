export interface NFT {
  id: number;
  name: string;
  description: string;
  url: string;
  price: number;
  minted?: boolean;
  attributeNameOne: string;
  valueNameOne: string
  attributeNameTwo: string;
  valueNameTwo: string;
}
