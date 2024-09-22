# rks-db

`rks-db` is a lightweight, file-based database system for Node.js, designed to simulate database-like functionality using the file system. It provides simple methods for creating, reading, updating, and deleting data in JSON format, making it ideal for practice or small projects without the need for a full-fledged database.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Importing the Module](#importing-the-module)
  - [Creating a New Entry (`make`)](#creating-a-new-entry-make)
  - [Finding All Entries (`findAll`)](#finding-all-entries-findall)
  - [Finding an Entry by ID (`findById`)](#finding-an-entry-by-id-findbyid)
  - [Updating an Entry (`update`)](#updating-an-entry-update)
  - [Deleting an Entry by ID (`deleteById`)](#deleting-an-entry-by-id-deletebyid)
  - [Deleting All Entries (`deleteAll`)](#deleting-all-entries-deleteall)
- [API Reference](#api-reference)
  - [make(dir, databaseName, schema)](#makedirdatabasename-schema)
  - [findAll(dir)](#findalldir)
  - [findById(dir, id)](#findbyiddir-id)
  - [update(dir, id, updateData)](#updatedir-id-updatedata)
  - [deleteById(dir, id)](#deletebyiddir-id)
  - [deleteAll(dir)](#deletealldir)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create** new entries (saved as JSON files in a directory).
- **Find all** data in a directory.
- **Find by ID** from the directory.
- **Update** data by ID.
- **Delete by ID** or **Delete all** files in a directory.
- Simple and easy-to-use API based on Node.js's native `fs` module.
- No external dependencies beyond Node.js.

## Installation

Install `rks-db` using npm:

```bash
npm install rks-db
```
