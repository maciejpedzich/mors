CREATE TABLE `drivers` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`team_id` smallint,
	`first_name` varchar(10),
	`last_name` varchar(10),
	`country_code` char(2),
	`human` boolean
);
--> statement-breakpoint
CREATE TABLE `incidents` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`session_id` smallint,
	`driver_id` smallint,
	`date_noted` datetime,
	`lap_number` smallint,
	`infringement` smallint,
	`penalty` smallint
);
--> statement-breakpoint
CREATE TABLE `laps` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`driver_id` smallint,
	`session_id` smallint,
	`tyre_compound` enum('s','m','h','i','w'),
	`sector1_time_ms` mediumint,
	`sector2_time_ms` mediumint,
	`sector3_time_ms` mediumint,
	`total_time_ms` mediumint,
	`valid` boolean
);
--> statement-breakpoint
CREATE TABLE `results` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`session_id` smallint,
	`driver_id` smallint,
	`status` enum('fin','dnf','dsq','ret'),
	`position` smallint,
	`points` smallint,
	`penalties_seconds` smallint
);
--> statement-breakpoint
CREATE TABLE `rounds` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(15),
	`country_code` varchar(5)
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`round_id` smallint,
	`type` enum('p','q','r'),
	`date_started` datetime,
	`date_finished` datetime
);
--> statement-breakpoint
CREATE TABLE `teams` (
	`id` smallint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(20)
);
