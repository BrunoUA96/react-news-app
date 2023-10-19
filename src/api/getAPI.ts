import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

type newsDTO = {
  news: newsInterface[];
};

export interface newsInterface {
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
  published: string;
}

interface ParamsInterface {
  category: string;
  country: string;
  page_number: number;
  page_size: number;
}

type CategoriesDTO = {
  categories: string[];
};

type RegionsDTO = {
  regions: { [key: string]: string };
};

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    getNews: builder.query<newsDTO, string>({
      query: params => {
        const { category, country, page_number, page_size }: ParamsInterface =
          JSON.parse(params);

        return {
          url: 'search',
          params: { apiKey, category, country, page_number, page_size },
          method: 'GET',
        };
      },
    }),
    getCategories: builder.query<CategoriesDTO, string>({
      query: name => ({
        url: name,
        method: 'GET',
      }),
    }),
    getRegions: builder.query<RegionsDTO, string>({
      query: name => ({
        url: name,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetNewsQuery, useGetCategoriesQuery, useGetRegionsQuery } =
  newsApi;
