import { useState, createContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <RecipeContext.Provider
      value={{
        name: [selectedOption, setSelectedOption],
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
