import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    apperance: 'primary' | 'ghost';
}