export type Incident = {
  id: number;
  title: string;
  description?: string;
  reportDate?: number;
  incidentDate?: number;
  address?: string;
  imageUrl?: string;
  imageUrlThumb?: string;
};

export type Incidents =
  | {
      [id: number]: Incident;
    }
  | {};
