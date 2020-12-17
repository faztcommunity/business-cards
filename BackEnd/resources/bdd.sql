-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema freedbtech_tarjetero
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema freedbtech_tarjetero
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `freedbtech_tarjetero` DEFAULT CHARACTER SET utf8 ;
USE `freedbtech_tarjetero` ;

-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`estados` (
  `idEstado` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idEstado`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`estilos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`estilos` (
  `idEstilo` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreEstilo` VARCHAR(45) NULL DEFAULT NULL,
  `plantilla` VARCHAR(45) NULL DEFAULT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`idEstilo`),
  INDEX `fk_estilos_estados1_idx` USING BTREE (`idEstado`) ,
  CONSTRAINT `estilos_ibfk_1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `freedbtech_tarjetero`.`estados` (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`usuarios` (
  `idUsuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NULL DEFAULT NULL,
  `apellidos` VARCHAR(45) NULL DEFAULT NULL,
  `usuario` VARCHAR(45) NULL DEFAULT NULL,
  `clave` VARCHAR(100) NULL DEFAULT NULL,
  `correo` VARCHAR(45) NULL DEFAULT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  INDEX `fk_usuario_estados1_idx` USING BTREE (`idEstado`) ,
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `freedbtech_tarjetero`.`estados` (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`infotarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`infotarjeta` (
  `idInfoTarjeta` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreInfo` VARCHAR(45) NULL DEFAULT NULL,
  `cargo` VARCHAR(45) NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `telefono` VARCHAR(45) NULL DEFAULT NULL,
  `correo` VARCHAR(45) NULL DEFAULT NULL,
  `web` VARCHAR(45) NULL DEFAULT NULL,
  `direccion` VARCHAR(45) NULL DEFAULT NULL,
  `imageEmpresa` VARCHAR(45) NULL DEFAULT NULL,
  `idUsuario` INT(11) NOT NULL,
  PRIMARY KEY (`idInfoTarjeta`),
  INDEX `fk_infoTarjeta_usuarios1_idx` USING BTREE (`idUsuario`) ,
  CONSTRAINT `infotarjeta_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `freedbtech_tarjetero`.`usuarios` (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`redes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`redes` (
  `idRed` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `imageLogo` VARCHAR(45) NULL DEFAULT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`idRed`),
  INDEX `fk_redes_estados1_idx` USING BTREE (`idEstado`) ,
  CONSTRAINT `redes_ibfk_1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `freedbtech_tarjetero`.`estados` (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`tarjetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`tarjetas` (
  `idTarjeta` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreTarjeta` VARCHAR(45) NULL DEFAULT NULL,
  `codigoQR` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  `idUsuario` INT(11) NOT NULL,
  `idEstilo` INT(11) NOT NULL,
  `idInfoTarjeta` INT(11) NOT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`idTarjeta`),
  INDEX `fk_tarjetas_usuario_idx` USING BTREE (`idUsuario`) ,
  INDEX `fk_tarjetas_estilos1_idx` USING BTREE (`idEstilo`) ,
  INDEX `fk_tarjetas_infoTarjeta1_idx` USING BTREE (`idInfoTarjeta`) ,
  INDEX `fk_tarjetas_estados1_idx` USING BTREE (`idEstado`) ,
  CONSTRAINT `tarjetas_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `freedbtech_tarjetero`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `tarjetas_ibfk_2`
    FOREIGN KEY (`idEstilo`)
    REFERENCES `freedbtech_tarjetero`.`estilos` (`idEstilo`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `tarjetas_ibfk_3`
    FOREIGN KEY (`idInfoTarjeta`)
    REFERENCES `freedbtech_tarjetero`.`infotarjeta` (`idInfoTarjeta`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `tarjetas_ibfk_4`
    FOREIGN KEY (`idEstado`)
    REFERENCES `freedbtech_tarjetero`.`estados` (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`redestarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`redestarjeta` (
  `idRedesTarjeta` INT(11) NOT NULL AUTO_INCREMENT,
  `idRed` INT(11) NOT NULL,
  `idTarjeta` INT(11) NOT NULL,
  `nombreUsuarioRed` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idRedesTarjeta`),
  INDEX `fk_redesTarjeta_redes1_idx` USING BTREE (`idRed`) ,
  INDEX `fk_redesTarjeta_tarjetas1_idx` USING BTREE (`idTarjeta`) ,
  CONSTRAINT `redestarjeta_ibfk_1`
    FOREIGN KEY (`idRed`)
    REFERENCES `freedbtech_tarjetero`.`redes` (`idRed`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `redestarjeta_ibfk_2`
    FOREIGN KEY (`idTarjeta`)
    REFERENCES `freedbtech_tarjetero`.`tarjetas` (`idTarjeta`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`roles` (
  `idRol` INT(11) NOT NULL AUTO_INCREMENT,
  `nombreRol` VARCHAR(45) NULL DEFAULT NULL,
  `idEstado` INT(11) NOT NULL,
  PRIMARY KEY (`idRol`),
  INDEX `fk_roles_estados1_idx` USING BTREE (`idEstado`) ,
  CONSTRAINT `roles_ibfk_1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `freedbtech_tarjetero`.`estados` (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `freedbtech_tarjetero`.`rolesusuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `freedbtech_tarjetero`.`rolesusuario` (
  `idRolesUsuario` INT(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` INT(11) NOT NULL,
  `idRol` INT(11) NOT NULL,
  PRIMARY KEY (`idRolesUsuario`),
  UNIQUE INDEX `rolesusuario_idUsuario_idRol_unique` (`idUsuario` ASC, `idRol` ASC) ,
  INDEX `fk_rolesUsuario_usuario1_idx` USING BTREE (`idUsuario`) ,
  INDEX `fk_rolesUsuario_roles1_idx` USING BTREE (`idRol`) ,
  CONSTRAINT `rolesusuario_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `freedbtech_tarjetero`.`usuarios` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `rolesusuario_ibfk_2`
    FOREIGN KEY (`idRol`)
    REFERENCES `freedbtech_tarjetero`.`roles` (`idRol`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
