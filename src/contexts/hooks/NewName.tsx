import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useApi from "../../services/api";
import { UInameList } from "../../types";
import { useLoading } from "./Loanding";

type Props = {
  children?: ReactNode;
};

interface NewNameContextData {
  nameData?: UInameList[];
}

const NewNameContext = createContext<NewNameContextData>(
  {} as NewNameContextData
);

export const NewNameProvider = ({ children }: Props) => {
  const [nameData, setNameData] = useState<UInameList[]>();

  const { setLoadingFetch } = useLoading();

  const api = useApi();

  useEffect(() => {
    loadNameData();
  }, []);

  async function loadNameData() {
    try {
      setLoadingFetch(true);
      const { data } = await api.get("/nameinv/dash");

      setNameData(data);
      setLoadingFetch(false);
    } catch (error) {}
  }

  return (
    <NewNameContext.Provider
      value={{
        nameData,
      }}
    >
      {children}
    </NewNameContext.Provider>
  );
};

export function useName(): NewNameContextData {
  const context = useContext(NewNameContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
