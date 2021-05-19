import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "6f715ccd-d0a7-45f8-b7ed-45565fe37252",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const UserAPI = {
  getUser(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },
  followToUser(UserId) {
    return instance.post(`follow/${UserId}`).then((response) => {
      return response.data;
    });
  },
  unFollowToUser(UserId) {
    return instance.delete(`follow/${UserId}`).then((response) => {
      return response.data;
    });
  },
};
