DROP DATABASE IF EXISTS `NationalLacrosseLeague`;
CREATE DATABASE IF NOT EXISTS `NationalLacrosseLeague`;
USE `NationalLacrosseLeague`;

#
# create table for users
# columns are camelCase to match source HTML
#

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
                         `Id`  INT UNSIGNED AUTO_INCREMENT NOT NULL,
                         `name` VARCHAR(50) DEFAULT NULL,
                         `PIN` SMALLINT(4) UNSIGNED DEFAULT NULL,
                         PRIMARY KEY (`Id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

SET autocommit=1;

#
# create table for saved brackets
# columns are camelCase to match source HTML
#

DROP TABLE IF EXISTS `UserBrackets`;

CREATE TABLE `UserBrackets` (
                                `name` varchar(255) NOT NULL,
                                `eastSeed1` varchar(50) DEFAULT NULL,
                                `eastSeed4` varchar(50) DEFAULT NULL,
                                `eastSeed2` varchar(50) DEFAULT NULL,
                                `eastSeed3` varchar(50) DEFAULT NULL,
                                `westSeed1` varchar(50) DEFAULT NULL,
                                `wildCard` varchar(50) DEFAULT NULL,
                                `westSeed2` varchar(50) DEFAULT NULL,
                                `westSeed3` varchar(50) DEFAULT NULL,
                                `eastSemifinal1` varchar(50) DEFAULT NULL,
                                `eastSemifinal2` varchar(50) DEFAULT NULL,
                                `westSemifinal1` varchar(50) DEFAULT NULL,
                                `westSemifinal2` varchar(50) DEFAULT NULL,
                                `eastFinal` varchar(50) DEFAULT NULL,
                                `westFinal` varchar(50) DEFAULT NULL,
                                `champion` varchar(50) DEFAULT NULL,
                                PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET autocommit=1;
