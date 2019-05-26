-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2019 at 04:45 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `provera`
--

-- --------------------------------------------------------

--
-- Table structure for table `glavna`
--

CREATE TABLE `glavna` (
  `id` int(11) NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `1` decimal(10,2) NOT NULL,
  `2` decimal(10,2) NOT NULL,
  `3` decimal(10,2) NOT NULL,
  `4` decimal(10,2) NOT NULL,
  `5` decimal(10,2) NOT NULL,
  `6` decimal(10,2) NOT NULL,
  `7` decimal(10,2) NOT NULL,
  `8` decimal(10,2) NOT NULL,
  `9` decimal(10,2) NOT NULL,
  `10` decimal(10,2) NOT NULL,
  `11` decimal(10,2) NOT NULL,
  `12` decimal(10,2) NOT NULL,
  `13` decimal(10,2) NOT NULL,
  `14` decimal(10,2) NOT NULL,
  `15` decimal(10,2) NOT NULL,
  `16` decimal(10,2) NOT NULL,
  `17` decimal(10,2) NOT NULL,
  `18` decimal(10,2) NOT NULL,
  `19` decimal(10,2) NOT NULL,
  `20` decimal(10,2) NOT NULL,
  `21` decimal(10,2) NOT NULL,
  `22` decimal(10,2) NOT NULL,
  `23` decimal(10,2) NOT NULL,
  `24` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `glavna`
--

INSERT INTO `glavna` (`id`, `country`, `date`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`) VALUES
(2, 'grcka', '2019-04-01 00:00:00', '5.13', '4.54', '4.33', '4.23', '4.19', '4.20', '4.61', '5.26', '5.81', '6.09', '6.15', '6.14', '6.14', '6.11', '5.91', '5.69', '5.41', '5.20', '5.21', '5.65', '6.64', '6.84', '6.15', '5.81'),
(3, 'grcka', '2019-04-02 00:00:00', '5.19', '4.68', '4.58', '4.41', '4.33', '4.42', '4.75', '5.30', '5.91', '6.13', '6.20', '6.24', '6.22', '6.11', '5.90', '5.66', '5.37', '5.21', '5.35', '5.70', '6.57', '6.64', '6.20', '5.69'),
(4, 'grcka', '2019-04-03 00:00:00', '5.10', '4.59', '4.48', '4.33', '4.32', '4.38', '4.57', '5.33', '5.98', '6.29', '6.31', '6.18', '6.12', '5.98', '5.82', '5.56', '5.35', '5.26', '5.33', '5.74', '6.67', '6.77', '6.29', '5.80'),
(5, 'grcka', '2019-04-04 00:00:00', '5.22', '4.72', '4.63', '4.53', '4.67', '4.69', '5.03', '5.46', '6.02', '6.31', '6.37', '6.33', '6.33', '6.25', '6.01', '5.83', '5.61', '5.51', '5.55', '5.92', '6.72', '6.73', '6.28', '5.78'),
(6, 'grcka', '2019-04-05 00:00:00', '5.25', '4.75', '4.61', '4.43', '4.40', '4.48', '5.44', '6.03', '6.58', '6.66', '6.58', '6.38', '6.31', '6.08', '5.99', '5.98', '5.84', '5.93', '6.13', '6.63', '6.67', '6.68', '6.22', '5.78');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glavna`
--
ALTER TABLE `glavna`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glavna`
--
ALTER TABLE `glavna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
