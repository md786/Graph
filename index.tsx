import * as React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import LayoutFA2Control, { LayoutCircular } from './App';
//import { createRoot } from 'react-dom/client';
//import { createRoot } from 'react-dom/client';

import App, { LayoutFA2 } from './App';

const rootElement = document.getElementById('root');
//const root = createRoot(rootElement);

//Initial render
ReactDOM.render(<LayoutFA2 />, rootElement);
/*
// During an update, React would access the root of the DOM element
ReactDOM.render(<App name="Saeloun testimonials" />, container);

root.render(
  <div>
    <LayoutFA2 />
  </div>
);*/
