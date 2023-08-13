import { Routes as Router, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
    </Router>
  );
};

export default Routes;
