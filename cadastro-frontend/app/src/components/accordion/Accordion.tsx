"use client";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { InfoAccordion } from "./types";

export default function AccordionInfo({ title, content }: InfoAccordion) {
    return (
        <Accordion
            sx={{
                borderRadius: 2,
                mb: 1,
                boxShadow: "none",
                border: "1px solid #E0E0E0",
                "&:before": { display: "none" },
            }}
        >
            <AccordionSummary expandIcon={<AddIcon />}>
                <Typography
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        color: "#121212",
                    }}
                >
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        color: "#3D3D3D",
                        lineHeight: 1.6,
                    }}
                >
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}
