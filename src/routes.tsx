import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface RouteModel {
  name: string;
  path: string;
  component: React.FC;
}

let mappedRoutes: RouteModel[] = [];

const routes = require.context(
  // O caminho relativo da pasta
  './modules',
  // Se deve ou não olhar subpastas
  true,
  // Expressão regular para localizar nomes
  /.route./,
);

export function setRoutes(
  requireComponent: __WebpackModuleApi.RequireContext,
): void {
  requireComponent.keys().forEach((fileName) => {
    const routeImport = requireComponent(fileName).default;
    mappedRoutes = [...mappedRoutes, ...routeImport];
  });
}

const Routes: React.FC = () => {
  setRoutes(routes);

  return (
    <Switch>
      {mappedRoutes.map((route) => (
        <Route
          path={route.path}
          key={uuidv4()}
          exact
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
