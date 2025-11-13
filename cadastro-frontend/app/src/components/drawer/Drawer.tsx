"use client";
import React, { useState } from "react";
import {
    Drawer,
    Box,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider,
    Button,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { InstallmentOption, ParcelDrawerProps } from "./types";
import AccordionInfo from "../accordion/Accordion";

export default function ParcelDrawer({
    open,
    onClose,
    content,
    infoMessage,
    infoAccordions
}: ParcelDrawerProps) {
    const [selected, setSelected] = useState("18x R$ 169,95");

    const hasContent = content && content.length > 0;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                p: 3,
                pb: 10,
                "& .MuiDrawer-paper": {
                    maxWidth: 600,
                    p: 3,
                    borderRadius: "12px 0 0 12px",
                },
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
                    borderBottom: "1px solid #E0E0E0",
                    paddingBottom: 3,
                    marginBottom: 3
                }}>
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{
                            fontFamily: "Montserrat",
                            fontSize: 32,
                            fontWeight: 500,
                            color: "#121212",
                        }}
                    >
                        Mais detalhes
                    </Typography>
                    <IconButton onClick={onClose} aria-label="Fechar">
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ flexGrow: 1, overflowY: "auto", pr: 1 }}>
                    {hasContent ? (
                        <>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mb={2}
                                fontSize={16}
                                sx={{ fontFamily: "Inter, sans-serif" }}
                            >
                                Qual dessas opções de parcelas você prefere?
                            </Typography>
                            <Box display={"flex"} justifyContent={"space-between"} bgcolor={"#144BC8"} p={"8px 16px"} sx={{
                                border: "1px solid #E0E0E0",
                                borderRadius: "8px 8px 0 0 "
                            }}>
                                <Typography sx={{ fontFamily: "Inter, sans-serif", color: "white", fontWeight: 500 }}>Parcelas</Typography>
                                <Typography sx={{ fontFamily: "Inter, sans-serif", color: "white", fontWeight: 500 }}>Total</Typography>
                            </Box>
                            <Box
                                sx={{
                                    border: "1px solid #E0E0E0",
                                    borderRadius: "0 0 8px 8px",

                                    overflow: "hidden",
                                }}
                            >
                                <RadioGroup
                                    value={selected}
                                    onChange={(e) => setSelected(e.target.value)}
                                >
                                    {content.map((opt: InstallmentOption) => (
                                        <React.Fragment key={opt.value}>
                                            <Box
                                                display="flex"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                px={2}
                                                py={1.5}
                                            >
                                                <FormControlLabel
                                                    value={opt.label}
                                                    control={<Radio />}
                                                    label={opt.label}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    fontWeight={500}
                                                    sx={{ fontFamily: "Inter, sans-serif" }}
                                                >
                                                    {opt.total}
                                                </Typography>
                                            </Box>
                                            <Divider />
                                        </React.Fragment>
                                    ))}
                                </RadioGroup>
                            </Box>
                        </>
                    ) : (
                        <Box
                            sx={{
                                bgcolor: "#144BC8",
                                color: "white",
                                borderRadius: 2,
                                px: 3,
                                paddingTop: "25px",
                                paddingBottom: "40px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 1,

                            }}
                        >
                            <InfoOutlinedIcon />
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                }}
                            >
                                {infoMessage}
                            </Typography>
                        </Box>
                    )}

                    <Box mt={4}>
                        {infoAccordions?.map((item, index) => (
                            <AccordionInfo key={index} title={item.title} content={item.content} />
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        borderTop: "1px solid #eee",
                        pt: 2,
                        mt: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: "#FF2D55",
                            borderRadius: 2,
                            py: 1.5,
                            fontWeight: 600,
                            fontSize: "1rem",
                            fontFamily: "Inter, sans-serif",
                            textTransform: "none",
                            ":hover": { backgroundColor: "#ff4670" },
                        }}
                    >
                        Avançar
                    </Button>
                </Box>
            </Box>
        </Drawer >
    );
}
