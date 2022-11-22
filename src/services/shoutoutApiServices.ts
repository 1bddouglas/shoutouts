import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

export const getAllShoutouts = (): Promise<Shoutout[]> => {
  return axios.get(`${baseUrl}/shoutouts`).then((res) => res.data);
};

export const addAShoutout = (newSO: Shoutout): Promise<void> => {
  return axios.post(`${baseUrl}/shoutouts`, newSO).then((res) => res.data);
};

export const upVoteShoutout = (
  id: string,
  shoutout: Shoutout
): Promise<Shoutout> => {
  return axios
    .put(`${baseUrl}/shoutouts/${id}`, shoutout)
    .then((res) => res.data);
};

export const deleteAShoutout = (id: string): Promise<Shoutout> => {
  return axios.delete(`${baseUrl}/shoutouts/${id}`).then((res) => res.data);
};
