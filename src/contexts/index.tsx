import { ReactNode } from "react";

import { LoadingProvider } from "./hooks/Loanding";
import { NewNameProvider } from "./hooks/NewName";
import { DashboardProvider } from "./hooks/Dashboard";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <LoadingProvider>
      <NewNameProvider>
        <DashboardProvider>{children}</DashboardProvider>
      </NewNameProvider>
    </LoadingProvider>
  );
};

export default AppProvider;
