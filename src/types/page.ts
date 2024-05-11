import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  params: Record<string, string | string[]>;
};

export type PageProps = {
  params: Record<string, string | string[]> & Params;
  searchParams: Record<string, string | string[]>;
};

export type GenerateMetadataParams = {
  params: Record<string, string | string[]>;
};

export type Params = {
  movieId?: string;
  userId?: string;
  actorId?: string;
};
