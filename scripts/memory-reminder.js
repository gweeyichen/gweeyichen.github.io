#!/usr/bin/env node

/**
 * This script serves as a reminder to read the memory folder
 * It can be run manually or integrated into development workflows
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk'; // You may need to install this package
import { fileURLToPath } from 'url';

// Get the project root directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const memoryFolder = path.join(projectRoot, 'memory');

// Check if memory folder exists
if (!fs.existsSync(memoryFolder)) {
  console.error(chalk.red('ERROR: Memory folder not found!'));
  console.error(chalk.yellow('Please create the memory folder and add the required documentation.'));
  process.exit(1);
}

// List of required files
const requiredFiles = ['architect.md', 'memory.md'];

// Check if required files exist
const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(memoryFolder, file)));

if (missingFiles.length > 0) {
  console.error(chalk.red(`ERROR: Missing required memory files: ${missingFiles.join(', ')}`));
  console.error(chalk.yellow('Please create these files with the appropriate documentation.'));
  process.exit(1);
}

// Get the last modified time of the memory files
const lastModifiedTimes = requiredFiles.map(file => {
  const filePath = path.join(memoryFolder, file);
  const stats = fs.statSync(filePath);
  return {
    file,
    mtime: stats.mtime
  };
});

// Sort by most recently modified
lastModifiedTimes.sort((a, b) => b.mtime - a.mtime);

// Calculate days since last update
const now = new Date();
const daysSinceLastUpdate = Math.floor((now - lastModifiedTimes[0].mtime) / (1000 * 60 * 60 * 24));

// Display reminder
console.log(chalk.green('='.repeat(80)));
console.log(chalk.green.bold('MEMORY FOLDER REMINDER'));
console.log(chalk.green('='.repeat(80)));
console.log();
console.log(chalk.white('Before working on the Alchemy project, please read the memory folder documents:'));
console.log();

requiredFiles.forEach(file => {
  console.log(chalk.cyan(`- ${file}`));
});

console.log();
console.log(chalk.white(`Last update: ${lastModifiedTimes[0].file} (${daysSinceLastUpdate} days ago)`));
console.log();

if (daysSinceLastUpdate > 30) {
  console.log(chalk.yellow('WARNING: Memory documents have not been updated in over 30 days.'));
  console.log(chalk.yellow('Consider reviewing and updating them with recent changes.'));
} else {
  console.log(chalk.green('Memory documents are up to date.'));
}

console.log();
console.log(chalk.green('='.repeat(80)));

// Exit successfully
process.exit(0);
