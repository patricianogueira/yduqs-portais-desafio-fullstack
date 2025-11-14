export interface FormAlertDialogProps {
  open: boolean;
  message: string;
  type: "success" | "error";
  onClose: () => void;
}