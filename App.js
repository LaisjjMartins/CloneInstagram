import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Routes from "./src/routes/index";


/* SafeAreaView - Não deixa ficar grudado em cima */

export default function App() {
  return (

  <NavigationContainer>
    <Routes/>
  </NavigationContainer>
  
  );
};

