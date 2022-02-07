import React from "react";
import Header from "../../components/header";
import Character from "../../components/character";

const Index = () => {
  return (
    <div>
      <Header nameButton='Favorites' link='/library' />
      <Character/>
    </div>
  );
};

export default Index;