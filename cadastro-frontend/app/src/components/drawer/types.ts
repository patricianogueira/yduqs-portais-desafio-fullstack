import { InfoAccordion } from "../accordion/types";

export interface InstallmentOption {
    label: string;
    total: string;
    value: string;
}

export interface ParcelDrawerProps {
    content: InstallmentOption[];
    infoAccordions?: InfoAccordion[];
    infoMessage?: string;
    open: boolean;
    onClose: () => void;
}