import React from 'react';

import Layout from '../src/component/Layout/Layout';
import { RecipeProvider } from './context/RecipeContext';

const App = () => {
  return (
    <RecipeProvider>
      <Layout />
    </RecipeProvider>
  );
};

export default App;
