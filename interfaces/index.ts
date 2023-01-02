export type News = {
  source: {
    id: number | string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};

type ActivityLink = {
  src: string;
  subject: string;
};

export type Activity = {
  id: number;
  title: string;
  description: string;
  begin: string;
  end: string;
  posted: string;
  modified: string;
  url: string;
  links: ActivityLink[];
};

export type AttractionCategories = {
  id: number;
  name: string;
}[];

export type Attraction = {
  id: number;
  name: string;
  open_status: number;
  introduction: string;
  open_time: string;
  distric: string;
  address: string;
  tel: string;
  email: string;
  nlat: 25.04207;
  elong: 121.50693;
  official_site: string;
  facebook: string;
  ticket: string;
  remind: string;
  staytime: "";
  modified: string;
  url: string;
  category: {
    id: number;
    name: string;
  }[];
  target: {
    id: number;
    name: string;
  }[];
  service: {
    id: number;
    name: string;
  }[];
  friendly: [];
  images: {
    src: string;
    subject: string;
    ext: string;
  }[];
  files: [];
  links: [];
};
