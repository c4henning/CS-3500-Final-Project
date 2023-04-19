DROP DATABASE IF EXISTS `NationalLacrosseLeague`;
CREATE DATABASE IF NOT EXISTS `NationalLacrosseLeague`;
USE `NationalLacrosseLeague`;

# Create the Schedule table

DROP TABLE IF EXISTS `Schedule`;

CREATE TABLE `Schedule` (
                            `GameId` TINYINT UNSIGNED NOT NULL,
                            `Week` TINYINT UNSIGNED NOT NULL,
                            `DayOfWeek` CHAR(9) NOT NULL,
                            `TimeAndDate` DATETIME NOT NULL,
                            `AwayTeam` CHAR(3) NOT NULL,
                            `HomeTeam` CHAR(3) NOT NULL,
                            PRIMARY KEY (`GameId`),
                            FOREIGN KEY (`AwayTeam`) REFERENCES Team(`TeamId`)
                            FOREIGN KEY (`HomeTeam`) REFERENCES Team(`TeamId`)
                            CHECK (`GameId` BETWEEN 1 AND 135),
                            CHECK (`Week` BETWEEN 1 AND 22),
                            CHECK (`DayOfWeek` IN ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')),
                            CHECK (`AwayTeam` != `HomeTeam`)
    ) ENGINE = InnoDB DEFAULT CHARSET=utf8;

SET autocommit=1;

INSERT INTO Schedule (GameId, Week, DayOfWeek, TimeAndDate, AwayTeam, HomeTeam)
VALUES  (1,1,'Friday','2022-12-02 18:00:00-05:00','PHI','HFX'),
# 135 records

# Create the Schedule table

DROP TABLE IF EXISTS `Team`;

CREATE TABLE `Team` (
                        `TeamId` CHAR(3) NOT NULL,
                        `FullName` VARCHAR(50) NOT NULL,
                        `City` VARCHAR(50) NOT NULL,
                        `State` CHAR(2) NOT NULL,
                        `Country` CHAR(2) NOT NULL,
                        `Arena` VARCHAR(50) NULL,
                        `HeadCoach` VARCHAR(50) NULL,
                        `GeneralManager` VARCHAR(50) NULL,
                        PRIMARY KEY (`TeamId`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

SET autocommit=1;

-- Add data to the team table
INSERT INTO `Team` (`Abbreviation`, `FullName`, `City`, `State`, `Country`, `Arena`, `HeadCoach`, `GeneralManager`)
VALUES  ('ALB', 'Albany FireWolves', 'Albany', 'NY', 'US', 'Times Union Center', 'Glenn Clark', 'Rich Lisk'),
# 15 records

-- Modify the game table to add foreign key constraints
ALTER TABLE `Schedule`
    ADD CONSTRAINT `fk_away_team`
        FOREIGN KEY (`AwayTeam`)
            REFERENCES `team` (`Abbreviation`)
            ON DELETE RESTRICT
            ON UPDATE CASCADE,
    ADD CONSTRAINT `fk_home_team`
        FOREIGN KEY (`HomeTeam`)
            REFERENCES `team` (`Abbreviation`)
            ON DELETE RESTRICT
            ON UPDATE CASCADE;

