# rks-db

`rks-db` is a lightweight, file-based database system for Node.js, designed to simulate database-like functionality using the file system. It provides simple methods for creating, reading, updating, and deleting data in JSON format, making it ideal for practice or small projects without the need for a full-fledged database.

## Features

- **Create** new entries (saved as JSON files in a directory).
- **Find all** data in a directory.
- **Find by ID** from the directory.
- **Update** data by ID.
- **Delete by ID** or **Delete all** files in a directory.
- Simple and easy-to-use API based on `fs` (Node's File System module).
  
## Installation

Install `rks-db` using npm:

```bash
npm install rks-db

## Usage

### Importing the Module

To use `rks-db`, import the functions you need from the package:

```javascript
import { make, findAll, findById, update, deleteById, deleteAll } from 'rks-db';

