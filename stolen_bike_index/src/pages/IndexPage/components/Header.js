import React  from 'react';
import { styles } from "../styles/Header.styles";
import logo from '../../../images/berlin-police-department-new-hampshire-squarelogo-1472647622098.png';
import injectSheet from 'react-jss';

export const Header = injectSheet(styles)(({ classes }) => (
  <header className={classes.header}>
    <img className={classes.img_size} src={logo} alt="Police Departament Logo"/>
    <h2 className={classes.title}>Police Departament of Berlin</h2>
  </header>
  )
);

