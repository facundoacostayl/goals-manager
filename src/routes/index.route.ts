import fs from "fs";
import Router from "express";

const router = Router();
const currentPath = `${__dirname}`;

const formatFileName = (file: string) => {
  return file.split(".").shift();
};

fs.readdirSync(currentPath).filter((file) => {
  const cleanFile = formatFileName(file);
  if (cleanFile != "index") {
    import(`./${cleanFile}.route`).then((route) => {
      router.use(`/${cleanFile}`, route.router);
    });
  }
});

export { router };
