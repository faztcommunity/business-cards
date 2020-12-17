-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tarjetero
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tarjetero
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tarjetero` DEFAULT CHARACTER SET utf8 ;
USE `tarjetero` ;

-- -----------------------------------------------------
-- Table `tarjetero`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NULL,
  `apellidos` VARCHAR(45) NULL,
  `usuario` VARCHAR(45) NULL,
  `clave` VARCHAR(100) NULL,
  `correo` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`estilos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`estilos` (
  `idEstilo` INT NOT NULL AUTO_INCREMENT,
  `nombreEstilo` VARCHAR(45) NULL,
  `plantilla` VARCHAR(45) NULL,
  PRIMARY KEY (`idEstilo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`infoTarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`infoTarjeta` (
  `idInfoTarjeta` INT NOT NULL AUTO_INCREMENT,
  `cargo` VARCHAR(45) NULL,
  `nombre` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NULL,
  `web` VARCHAR(45) NULL,
  `direccion` VARCHAR(45) NULL,
  `imageEmpresa` VARCHAR(45) NULL,
  PRIMARY KEY (`idInfoTarjeta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`tarjetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`tarjetas` (
  `idTarjeta` INT NOT NULL AUTO_INCREMENT,
  `nombreTarjeta` VARCHAR(45) NULL,
  `codigoQR` VARCHAR(45) NULL,
  `descripcion` VARCHAR(200) NULL,
  `idUsuario` INT NOT NULL,
  `idEstilo` INT NOT NULL,
  `idInfoTarjeta` INT NOT NULL,
  PRIMARY KEY (`idTarjeta`),
  INDEX `fk_tarjetas_usuario_idx` (`idUsuario` ASC),
  INDEX `fk_tarjetas_estilos1_idx` (`idEstilo` ASC),
  INDEX `fk_tarjetas_infoTarjeta1_idx` (`idInfoTarjeta` ASC),
  CONSTRAINT `fk_tarjetas_usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `tarjetero`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tarjetas_estilos1`
    FOREIGN KEY (`idEstilo`)
    REFERENCES `tarjetero`.`estilos` (`idEstilo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tarjetas_infoTarjeta1`
    FOREIGN KEY (`idInfoTarjeta`)
    REFERENCES `tarjetero`.`infoTarjeta` (`idInfoTarjeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`redes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`redes` (
  `idRed` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `imageLogo` VARCHAR(45) NULL,
  PRIMARY KEY (`idRed`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`redesTarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`redesTarjeta` (
  `idRedesTarjeta` INT NOT NULL AUTO_INCREMENT,
  `idRed` INT NOT NULL,
  `idTarjeta` INT NOT NULL,
  `nombreUsuarioRed` VARCHAR(45) NULL,
  INDEX `fk_redesTarjeta_redes1_idx` (`idRed` ASC),
  INDEX `fk_redesTarjeta_tarjetas1_idx` (`idTarjeta` ASC),
  PRIMARY KEY (`idRedesTarjeta`),
  CONSTRAINT `fk_redesTarjeta_redes1`
    FOREIGN KEY (`idRed`)
    REFERENCES `tarjetero`.`redes` (`idRed`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_redesTarjeta_tarjetas1`
    FOREIGN KEY (`idTarjeta`)
    REFERENCES `tarjetero`.`tarjetas` (`idTarjeta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`roles` (
  `idRol` INT NOT NULL AUTO_INCREMENT,
  `nombreRol` VARCHAR(45) NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tarjetero`.`rolesUsuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tarjetero`.`rolesUsuario` (
  `idRolesUsuario` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,
  `idRol` INT NOT NULL,
  INDEX `fk_rolesUsuario_usuario1_idx` (`idUsuario` ASC),
  INDEX `fk_rolesUsuario_roles1_idx` (`idRol` ASC),
  PRIMARY KEY (`idRolesUsuario`),
  CONSTRAINT `fk_rolesUsuario_usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `tarjetero`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rolesUsuario_roles1`
    FOREIGN KEY (`idRol`)
    REFERENCES `tarjetero`.`roles` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
