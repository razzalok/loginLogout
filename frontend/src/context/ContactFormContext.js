import { createContext, useReducer } from "react";

export const ContactFormContext = createContext();

// reducer
export const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM":
      return {
        contacts: action.payload,
      };

    case "CREATE_FORM":
      return {
        contacts: [action.payload, ...state.contacts],
      };

    default:
      return state;
  }
};

export const ContactFormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactFormReducer, {
    contacts: null,
  });

  return (
    <ContactFormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactFormContext.Provider>
  );
};
