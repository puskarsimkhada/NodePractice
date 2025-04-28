import crypto from 'crypto'
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { loadLinks } from '../models/urlshortner.model.js';
import { saveLinks } from '../models/urlshortner.model.js';
export const urlGetShortner = async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.html"));
    const links = await loadLinks();

    const content = file.toString().replaceAll(
      " {{shortened_urls}}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a>${url}</li>`
        )
        .join("")
    );
    return res.send(content);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}

export const urlShortnerPost = async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await loadLinks();
    if (links[finalShortCode]) {
      return res.status(400).send("already exist");
    }

    links[finalShortCode] = url;
    await saveLinks(links);
    return res.redirect("/");
  } catch (error) {}
}


export const urlShortcode = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) return res.status(404).send("404 Error");

    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal  Error Occured");
  }
}