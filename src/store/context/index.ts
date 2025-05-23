import {createContext} from "react";
import {StoreContextType} from "../types";

export const StoreContext = createContext<StoreContextType | null>(null);
