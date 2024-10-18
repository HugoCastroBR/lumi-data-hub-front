export type Bill = {
  id: number;
  month: number;
  year: number;
  filename: string;
  electricity: string;
  electricityCost: string;
  electricityScee: string;
  electricitySceeCost: string;
  electricityCompensated: string;
  electricityCompensatedCost: string;
  electricityPublicCost: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  ucId: number;
};

export type Client = {
  id: number;
  registerN: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type UC = {
  id: number;
  registerN: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  clientId: number;
  client: Client;
  bills: Bill[];
};

export type GetUcResponse = {
  data: UC[];
  page: number;
  order: 'asc' | 'desc';
  orderby: string;
  total: number;
  totalPages: number;
};
