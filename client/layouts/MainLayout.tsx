import React, {FC} from 'react';
import {Navbar} from "../components/navbar/Navbar";
import Container from "@mui/material/Container";

export const MainLayout: FC = ({children}) => {
  return (
    <>
      <Navbar/>
      <Container sx={{marginTop: '60px'}}>
        {children}
      </Container>
    </>
  );
};