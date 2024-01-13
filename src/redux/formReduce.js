import { setLocalStorage,getLocalStorage } from "./local";
const initialone = {
  form1: getLocalStorage('form1') || {},
};

export const formone = (state = initialone, action) => {
  switch (action.type) {
    case 'SUBMIT_ONE':
      const newaction = action.payload
      setLocalStorage('form1', { ...state, newaction })
      return {
        ...state,
        form1: action.payload,
      };
    default:
      return state;
  }
};

const initialtwo = {
  form2: getLocalStorage('form2') || {},
};

export const formTwoReducer = (state = initialtwo, action) => {
  switch (action.type) {
    case 'SUBMIT_TWO':
      const newaction = action.payload
      setLocalStorage('form2', { ...state, newaction })
      return {
        ...state,
        form2: action.payload,
      };
    default:
      return state;
  }
};

const initialthree = {
  form3: {},
};

export const formThreeReducer = (state = initialthree, action) => {
  switch (action.type) {
    case 'SUBMIT_THREE':
      const newaction = action.payload
      setLocalStorage('form3', { ...state, newaction })
      return {
        ...state,
        form3: action.payload,
      };
    default:
      return state;
  }
};

const initialfour ={
  form4: {},
}
export const formFourReducer =(state=initialfour, action) =>{
    switch(action.type){
      case'SUBMIT_FOUR':
      const newaction = action.payload
      setLocalStorage('form4', { ...state, newaction })
      return{
        ...state,
        form4: action.payload,
      }
      default:
        return state;
    }
}