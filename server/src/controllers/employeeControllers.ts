import { Request, Response } from "express";

import { sp } from "@pnp/sp-commonjs";


const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const response = await sp.web.lists.getByTitle("userlist").items.getAll();
    return res.json(response);
  } catch (error) {
    console.log(error);
  }
};
const getSingleEmployee = async (req: Request, res: Response) => {
  let id: number = Number.parseInt(req.params.id);
  try {
    const response = await sp.web.lists
      .getByTitle("userlist")
      .items.getById(id)();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

const addEmployee = async (req: Request, res: Response) => {
  try {
    const { email, designation, first_name, gender, dob } = req.body;
    const newUser={
        first_name:first_name,
        email:email,
        designation,
        dob:dob,
        gender:gender,
    }
    const response = await sp.web.lists.getByTitle("userlist").items.add(newUser)
   
    const folderId = response.data.Id;
    const newFolderName = `${folderId}`;
    const documentLibaryName = `Sample`;
    const documentLibary = sp.web.lists.getByTitle(documentLibaryName);
    await documentLibary.rootFolder.folders
      .addUsingPath(newFolderName)
      .then(() => {
        console.log(`Folder ${newFolderName} created`);
      });
    return res.send(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteEmploye = async (req: Request, res: Response) => {
  let id: number = Number.parseInt(req.params.id);
  try {
    const user = await sp.web.lists.getByTitle("userlist").items.getById(id);
    if (!user) {
      throw new Error("user not found");
    } else {
      await sp.web.lists.getByTitle("userlist").items.getById(id).delete();
      res.send("deleted user");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getAllEmployees, getSingleEmployee, addEmployee, deleteEmploye };

