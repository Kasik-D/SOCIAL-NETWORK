import axios from "axios";

const instanceUser = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "6f715ccd-d0a7-45f8-b7ed-45565fe37252",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

const instanceProfile = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "6f715ccd-d0a7-45f8-b7ed-45565fe37252",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile/",
});

const instanceAuth = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "6f715ccd-d0a7-45f8-b7ed-45565fe37252",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/auth/me",
});

export const UserAPI = {
  getUser(pageSize, currentPage) {
    return instanceUser
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },
  followToUser(UserId) {
    return instanceUser.post(`follow/${UserId}`).then((response) => {
      return response.data;
    });
  },
  unFollowToUser(UserId) {
    return instanceUser.delete(`follow/${UserId}`).then((response) => {
      return response.data;
    });
  },
};

export const ProfileAPI = {
  Profile(userId) {
    if (!userId) {
      return instanceProfile.get(`2`).then((response) => {
        return response.data;
      });
    } else {
      return instanceProfile
        .get(userId.replace(/[^\d]/g, ""))
        .then((response) => {
          return response.data;
        });
    }
  },
};

export const AuthAPI = {
  AuthMe() {
    return instanceAuth.get().then((response) => {
      return response.data;
    });
  },
};
