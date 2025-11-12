"use client";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        bgcolor: "#001F66",
        py: 2,
        mt: "auto",
        fontSize: 14,
      }}
    >
      <Box
        component="img"
        src="/logo-estacio-footer.svg"
        alt="Estácio"
        sx={{
          height: 20,
          mx: "auto",
          mb: 1,
          display: "block",
        }}
      />
    </Box>
  );
}
