"use client";

import { Dialog, DialogContent, Alert, Button } from "@mui/material";
import { FormAlertDialogProps } from "./types";

export default function FormAlertDialog({
    open,
    message,
    type,
    onClose,
}: FormAlertDialogProps) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent className="flex flex-col items-center gap-4 p-6">

                <Alert severity={type} sx={{ fontSize: 18, p: 2 }}>
                    {message}
                </Alert>

                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{
                        backgroundColor: "#144BC8",
                        borderRadius: 2,
                        textTransform: "none",
                    }}
                >
                    Fechar
                </Button>

            </DialogContent>
        </Dialog>
    );
}
