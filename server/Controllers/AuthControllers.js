const UserModel=require("../Models/UserModels")
const jwt=require("jsonwebtoken")

const maxAge=3*24*60*0;

const createToken=(id)=>{
    
    return jwt.sign({id},"talent-box_secret-key",{
        expiresIn:3*24*60*60,
    })
}

const handleError=(err)=>{
    let errors={name:"",email:"",password:""}


    console.log(err);
    if (err.message === "incorrect email") {
      errors.email = "That email is not registered";
    }
  
    if (err.message === "incorrect password") {
      errors.password = "That password is incorrect";
    }
    if(err.code===11000 ){
        let name=err.keyValue.hasOwnProperty("name")
        let email=err.keyValue.hasOwnProperty("email")
        
        if(name==true){
          errors.name="The user-name is already taken . Try another one"
        }
        if(email==true){
            errors.email="The e-mail is already registered try-loggin in"
        }
    }
    if(err.message.includes("Users validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
    }
    return errors;
}


module.exports.register= async(req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        const user=await UserModel.create({name,email,password}) 
        console.log(user)
    const token=createToken(user._id);
        res.cookie("jwt",token,{
            withCredentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        });
    

    
    res.status(201).json({user:user._id,created:true})
    }catch(err){
        console.log(err)
        let errors =handleError(err);
        res.json({errors,created:false})
    }
};
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.login(email, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id, status: true });
    } catch (err) {
      const errors = handleError(err);
      res.json({ errors, status: false });
    }
  };

module.exports.welcomeMessage = async(req,res) => {
    try {
        res.status(200).json({message : "welcome TalentBox !!!! "});
    } catch (error) {
        res.status(500).json({message:"error occured"})
    }
}
