import express from "express"
import {getAllEmployees,getSingleEmployee,addEmployee,deleteEmploye} from "../controllers/employeeControllers"

const router =express.Router()

router.get("/",getAllEmployees)
router.get("/single/:id",getSingleEmployee)
router.post("/add",addEmployee)
router.delete("/delete/:id",deleteEmploye)

export{
    router
}