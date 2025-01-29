import React, { ReactNode } from "react";

import "@/globals.css"
export const metadata={
    title:"Next app",
    discription:"Pata ni "
}
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;