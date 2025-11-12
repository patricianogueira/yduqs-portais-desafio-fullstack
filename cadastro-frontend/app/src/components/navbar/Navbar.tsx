"use client";
import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
  return (
    <AppBar position="static" color="inherit" className="shadow-none border-b">
      <Toolbar className="flex justify-between">
        <Image
          src="/logo-estacio.svg"
          alt="Estácio"
          width={158}
          height={40}
          className="h-10 w-auto"
        />
      </Toolbar>
    </AppBar>
  );
}
