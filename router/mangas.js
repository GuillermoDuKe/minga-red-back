import { Router } from "express"
import create from "../controllers/authors/create.js"
import read from "../controllers/mangas/read.js"

let mangasRouter = Router()

mangasRouter.get('/', read)
// authorsRouter.post('/',create)

export default mangasRouter