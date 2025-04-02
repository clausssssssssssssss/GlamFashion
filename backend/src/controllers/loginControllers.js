
import CustomersModel from "../models/customers.js";
import AdministratorsModel from "../models/Administrators.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};
loginController.login = async (req, res) =>{
   const {email, password} = req.body;

   try{
let userFound;
let userType;

if(email === config.emailAdmin.email && password == config.emailAdmin){
    userType = "Admin";
    userFound = {_id: "Admin"};
   }else{

  userFound = await AdministratorsModel.findOne({email});
  userType = "Administrator";

  if(!userFound){
    userFound = await CustomersModel.findOne({email})
    userType = "Customers";
  }
}
 
  if(!userFound){
    return res.json({message: "User not found"})
  }


  if(userType !== "Admin"){
   const isMatch = bcryptjs.compare(password, userFound.password);
   if(!isMatch){
    return res.json({message: "invalid password"});
   }
  }

 
  jsonwebtoken.sign(

  {id: userFound._id, userType},

  config.JWT.secret,

  {expiresIn: config.JWT.expiresIn},

  (error, token)=>{
    if(error) console.log(error);
    res.cookie("authToken", token)
    res.json({message: "usuario guardado"})
  }
  );
   }catch(error){
    console.log(error);
   }
};

export default loginController