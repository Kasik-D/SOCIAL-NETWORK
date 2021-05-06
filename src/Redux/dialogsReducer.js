const addChatMassage = "addChatMassage";
const changeChatInput = "changeChatInput";
var _ = require("lodash");

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case addChatMassage: {
      newState.massagesData.push({
        id: "5",
        massage: newState.ChatInput,
      });
      newState.ChatInput = "";
      break;
    }
    case changeChatInput: {
      newState.ChatInput = action.text;
      break;
    }
  }
  return newState;
};

export const addChatActionCreator = () => {
  return { type: addChatMassage };
};

export const OnChangeChatInputActionCreator = (text) => {
  return {
    type: changeChatInput,
    text: text,
  };
};

export default dialogsReducer;
