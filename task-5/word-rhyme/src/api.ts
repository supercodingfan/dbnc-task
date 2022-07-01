import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.datamuse.com/",
});

export const api = {
  getRhymeWords: (word: string) => axiosInstance.get(`/words?rel_rhy=${word}`),
};
