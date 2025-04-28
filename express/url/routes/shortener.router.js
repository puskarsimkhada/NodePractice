import { Router } from "express";
import { urlShortnerPost,urlGetShortner,urlShortcode } from "../controllers/postShortner.controller.js";

const router = Router();

router.get("/", urlGetShortner);
router.post("/", urlShortnerPost);
router.get("/:shortcode", urlShortcode);


// router.get("/", async (req, res) => {
//   try {
//     const file = await readFile(path.join("views", "index.html"));
//     const links = await loadLinks();

//     const content = file.toString().replaceAll(
//       " {{shortened_urls}}",
//       Object.entries(links)
//         .map(
//           ([shortCode, url]) =>
//             `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a>${url}</li>`
//         )
//         .join("")
//     );
//     return res.send(content);
//   } catch (error) {
//     return res.status(500).send("Internal Server Error");
//   }
// });


//report
// router.get("/report", (req, res) => {
//   const studentData = [
//     {
//       name: "Puskar Simkhada",
//       address: "Ohio",
//       age: 23,
//     },
//     {
//       name: "Lionel Messi",
//       address: "Miami",
//       age: 36,
//     },
//     {
//       name: "Peter",
//       address: "NewYork",
//       age: 26,
//     },
//     {
//       name: "Captain",
//       address: "LA",
//       age: 33,
//     },
//   ];

//   return res.render("report", { studentData });
// });

// router.post("/", async (req, res) => {
//   try {
//     const { url, shortCode } = req.body;
//     const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
//     const links = await loadLinks();
//     if (links[finalShortCode]) {
//       return res.status(400).send("already exist");
//     }

//     links[finalShortCode] = url;
//     await saveLinks(links);
//     return res.redirect("/");
//   } catch (error) {}
// });

// router.get("/:shortCode", async (req, res) => {
//   try {
//     const { shortCode } = req.params;
//     const links = await loadLinks();

//     if (!links[shortCode]) return res.status(404).send("404 Error");

//     return res.redirect(links[shortCode]);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Internal  Error Occured");
//   }
// });

export default router;
