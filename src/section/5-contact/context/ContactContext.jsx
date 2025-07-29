import { createContext, useState, useContext } from 'react';

export const ContactContext = createContext();

// Custom hook to use the contact context
export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

export const initialContactState = {
  message: { color: "", text: "" },
  input1: { current: null },
  input2: { current: null }
};

export const ContactProvider = ({ children }) => {
  const [state, setState] = useState(initialContactState);

  const setMessage = (message) => {
    setState(prev => ({
      ...prev,
      message: { ...message }
    }));
  };

  return (
    <ContactContext.Provider 
      value={{
        ...state,
        setMessage,
        input1: state.input1,
        input2: state.input2
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
