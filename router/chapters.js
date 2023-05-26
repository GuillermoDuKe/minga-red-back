import { Router } from "express"
import create from "../controllers/authors/create.js"
import read from "../controllers/chapters/read.js"

let chaptersRouter = Router()

chaptersRouter.get('/', read)
// authorsRouter.post('/',create)

export default chaptersRouter