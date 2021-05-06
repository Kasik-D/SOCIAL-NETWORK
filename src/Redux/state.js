import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


const store = {
  _allData: {
    profilePage: {
      postsData: [
        {
          id: "1",
          massage: "Hello, my name Danil",
        },
        {
          id: "2",
          massage: "Hello everyone",
        },
        {
          id: "3",
          massage: "I learn react",
        },
      ],
      ProfileInput: "",
    },
    massagePage: {
      massagesData: [
        {
          id: "1",
          massage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, magni?",
        },
        {
          id: "2",
          massage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
        },
        {
          id: "3",
          massage: "Lorem ipsum dolor sit amet.",
        },
      ],

      dialogsData: [
        {
          UserID: "/Massages/Andrew",
          User__name: "Andrew",
          UserPhoto:
            "https://i.pinimg.com/originals/0a/38/28/0a38286061e3f434d519d1a866e3354a.png",
        },
        {
          UserID: "/Massages/Dmitry",
          User__name: "Dmitry",
          UserPhoto:
            "https://i.pinimg.com/originals/0a/38/28/0a38286061e3f434d519d1a866e3354a.png",
        },
        {
          UserID: "/Massages/Sasha",
          User__name: "Sasha",
          UserPhoto:
            "https://i.pinimg.com/originals/0a/38/28/0a38286061e3f434d519d1a866e3354a.png",
        },
        {
          UserID: "/Massages/Valera",
          User__name: "Valera",
          UserPhoto:
            "https://i.pinimg.com/originals/0a/38/28/0a38286061e3f434d519d1a866e3354a.png",
        },
        {
          UserID: "/Massages/Viktor",
          User__name: "Viktor",
          UserPhoto:
            "https://i.pinimg.com/originals/0a/38/28/0a38286061e3f434d519d1a866e3354a.png",
        },
        {
          UserID: "/Massages/Gleb",
          User__name: "Gleb",
          UserPhoto:
            "https://i.pinimg.com/originals/0a/38/28/0a38286061e3f434d519d1a866e3354a.png",
        },
      ],

      ChatInput: "",
    },
  },

  get allData() {
    return this._allData;
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._allData.profilePage = profileReducer(
      this._allData.profilePage,
      action
    );
    this._allData.massagePage = dialogsReducer(
      this._allData.massagePage,
      action
    );
    this._callSubscriber(this);
  },
};

window.store = store;

export default store;
