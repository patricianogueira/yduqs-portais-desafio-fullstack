"use client";

import { Card, Box, Button, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CourseOptionProps } from "./types";

export function CourseOptionCard({
  type,
  label,
  address,
  typeCard,
  price,
  info,
  onSelect,
}: CourseOptionProps) {
  const hasPrice = Boolean(price);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 333,
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        height: hasPrice ? 398 : 377,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            p: 1,
            px: 3,
            bgcolor: "#001F66",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          <span>{type}</span>
          <span>|</span>
          <span>{label}</span>
        </Box>

        <Box sx={{ p: 3, bgcolor: "#144BC8", height: hasPrice ? 209 : 198 }}>
          {hasPrice ? (
            <>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                De{" "}
                <Typography
                  component="span"
                  sx={{
                    textDecoration: "line-through",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  R$ 4.752,00
                </Typography>{" "}
                por até
              </Typography>

              <Box sx={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: 16,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {price?.qtd}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    marginTop: 0.5,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {price?.value}
                </Typography>
              </Box>

              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                à vista R$ 2.613,60
              </Typography>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              <InfoOutlinedIcon fontSize="medium" />
              <Typography
                variant="body2"
                sx={{ fontFamily: "Inter, sans-serif" }}
              >
                {info}
              </Typography>
            </Box>
          )}
        </Box>

        <Button
          variant="contained"
          onClick={() => onSelect?.(typeCard)}
          sx={{
            bgcolor: "#EE325D",
            "&:hover": { bgcolor: "#e8435e" },
            color: "white",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            borderRadius: 2,
            textTransform: "none",
            position: "absolute",
            maxWidth: 333,
            left: 24,
            right: 24,
            bottom: 24,
          }}
        >
          Avançar
        </Button>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 500,
            color: "#121212",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {address.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "#3D3D3D",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {address.description}
        </Typography>
      </Box>
    </Card>
  );
}
