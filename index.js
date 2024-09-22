import fs from "fs";

export const findAll = (dir) => {
  const dataArray = [];
  try {
    if (!dir) {
      throw new Error("Please enter your directory name!");
    }
    const response = fs.readdirSync(dir);

    if (response.length > 0) {
      response.forEach((fileName) => {
        const singleData = fs.readFileSync(
          `${dir.trim()}/${fileName.trim()}`,
          "utf-8"
        );

        const parsedObject = JSON.parse(singleData);

        dataArray.push(parsedObject);
      });
      return {
        ok: true,
        message: "Successfully retrive data",
        data: dataArray,
      };
    } else {
      return {
        ok: false,
        message: "No Data Found !",
      };
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};
export const findById = (dir, findId) => {
  try {
    if (!dir) {
      throw new Error("Please enter your directory name");
    } else if (!findId) {
      throw new Error("Please enter your find id");
    } else {
      const findData = fs.readFileSync(
        `${dir.trim()}/${findId.trim()}.json`,
        "utf-8"
      );
      if (!findData) {
        throw new Error(`no data found with this "${findId}" id`);
      }
      const parsedData = JSON.parse(findData);

      if (parsedData) {
        return {
          ok: true,
          message: `Successfully retrive data with this "${findId}" id`,
          data: parsedData,
        };
      }
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      return {
        ok: false,
        message: `No Data found with this ${findId} id`,
      };
    }
    return {
      ok: false,
      message: err.message,
    };
  }
};

export const make = (dir, databaseName, schema) => {
  const updateSchema = {
    id: crypto.randomUUID(),
    ...schema,
  };
  try {
    if (!dir) {
      throw new Error("No directory found !");
    } else if (!schema) {
      throw new Error("No schema found !");
    } else {
      // checking first the directory already availible or not in datbase
      const readDirectories = fs.readdirSync(`${dir}`);
      if (!readDirectories) {
        throw new Error("Something went wrong ");
      }
      const isAvail = readDirectories.find((rd) => rd === databaseName);

      isAvail || fs.mkdirSync(`${dir}/${databaseName}`);
      fs.writeFileSync(
        `${dir}/${databaseName}/${updateSchema?.id}.json`,
        JSON.stringify(updateSchema)
      );
      return {
        ok: true,
        message: "Successfully created data",
        data: updateSchema,
      };
    }
  } catch (err) {
    return {
      ok: true,
      message: err.message,
    };
  }
};

export const update = (dir, updateId, updateData) => {
  try {
    if (!updateData) {
      throw new Error("Update data required !");
    }
    if (!dir) {
      throw new Error("No directoires found !");
    } else if (!updateId) {
      throw new Error("No Update id found !");
    } else {
      const updateObject = {
        id: updateId,
        ...updateData,
      };
      fs.writeFileSync(`${dir}/${updateId}.json`, JSON.stringify(updateObject));
      return {
        ok: true,
        message: "successfully updated Data",
        updatedData: updateObject,
      };
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};

export const deleteById = (dir, deleteId) => {
  try {
    if (!dir) {
      throw new Error("No directoires found !");
    }
    if (!deleteId) {
      throw new Error("No Delete Id found !");
    }

    fs.unlinkSync(`${dir}/${deleteId}.json`);
    return {
      ok: true,
      message: "successfully deleted data",
    };
  } catch (err) {
    if (err.code === "ENOENT") {
      return {
        ok: true,
        message: "Invalid delete id!",
      };
    }
  }
};

export const deleteAll = (dir) => {
  if (!dir) {
    throw new Error("Directory  is required.");
  }

  try {
    // Check if the directory exists before attempting to delete
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      return {
        ok: true,
        message: `Directory '${dir}' has been deleted.`,
      };
    } else {
      return {
        ok: false,
        message: `Directory '${dir}' does not exist.`,
      };
    }
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};
