import { readFile, writeFile } from "fs/promises";
import path from "path";


export const DATA_FILE = path.join("data", "links.json");
export const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error while shortening the link");
    return {};
  }
};

export const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};