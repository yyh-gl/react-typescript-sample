import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import './App.css';

const App: React.FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <div className="App">
        { route && renderRoutes(route.routes) }
    </div>
  );
};

export default App;
