import { Typography } from '@mui/material';
import React from 'react';
import imagem from '../assets/img/404.png';

const Page404 = () => {

    return (
        <main>
            <img src={imagem} alt="nao encontrada"/>
            <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Página não encontrada
          </Typography>
        </main>
        );

}
export default Page404;