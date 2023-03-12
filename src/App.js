import React from 'react';
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Pages from "./components/Pages";
import data from './data/content.json';

export default function App(props) {
  return (
    <div className="page-content">
      <Header data = {data} />
      <Mobile />
      <Pages data = {data} />
    </div>
  );
}
