import { createStore, combineReducers } from 'redux';

let mappedReducers = {};

const reducers = require.context(
  // O caminho relativo da pasta
  './modules',
  // Se deve ou não olhar subpastas
  true,
  // Expressão regular para localizar nomes
  /.reducer./,
);

export function setReducers(
  requireComponent: __WebpackModuleApi.RequireContext,
): void {
  requireComponent.keys().forEach((fileName) => {
    const routeImport = requireComponent(fileName).default;
    mappedReducers = { ...mappedReducers, ...routeImport.component };
  });
}

setReducers(reducers);
const store = createStore(combineReducers(mappedReducers));

export default store;
