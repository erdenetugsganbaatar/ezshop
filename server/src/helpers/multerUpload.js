import multer from "multer";
import path from "path";
import fs from "fs";

const getDatePath = (date) => {
    return date.getFullYear() + "/" + (date.getMonth() + 1);
}

const getDirPath = (dirPath) => {
    try {
        if (!fs.existsSync(dirPath)) fs.promises.mkdir(dirPath, { recursive: true });
        return dirPath;
    } catch (error) {
        console.error("ERROR:",error.message);
    }
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, getDirPath('uploads/' + getDatePath(new Date())));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});

export default multer({storage})

