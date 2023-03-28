import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {cookie,useCookies} from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Dashboard() {

  const navigate=useNavigate();



 const [cookies,setCookie, removeCookie] = useCookies([]);
    useEffect(()=>{
      const verifyUser = async () => {
        if (!cookies) {
          navigate("/login");
        } else {
        
          const data = await axios.get(
            "http://localhost:4000/talentbox/welcome",
            {},
            {
              withCredentials: true,
            }
           
          )
          console.log(data);
        
          if (!data.status) {
            removeCookie("jwtToken");
            navigate("/login");
          } else
          console.log("hii")
            toast.error(`Hi`, {
              theme: "dark",
            });
        }
      };
      verifyUser();
      console.log(cookies.jwtToken)

  },[cookies,navigate,removeCookie])




 const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:4000/talentbox/getDashboardContent")
    .then(function (response) {
      let info=response.data.data
           setData(info);
    })
    .catch(function (error) {
      console.log(error);
    });
 
  }, []);


 
  
  const logOut = () => {
    
let cookieValue = null;

if(cookies){
  axios.get("http://localhost:4000/talentbox/logout").then(function(response){
   try{
    document.cookie = `jwtTokens=${response.name.token}; SameSite=None; Secure`
    
   }catch(err){
    console.log(err.message);
   }
  
removeCookie('jwtToken')

  })
}
navigate('/register');

  };



  return (
    <>
      <div className="main-page" id="i">
      <blockquote class="blockquote">
                    <span>
                      <q>
                        The question of whether computers can think is like the
                        question of whether submarines can swim."<br></br>
                       
                      </q>
                    
                    </span>
                   <footer class="quote-author blockquote-footer">
                        <cite>E.W. Dijkstra</cite>
                      </footer>
                  </blockquote>

                  {
    
   

    data.map(item => (
      <>
               
    <ul  key={item.id}>

{(() => {
if (item.title!=="Ramadan Kareem"  &&  item.title!=="Web Page") {
return <>


<li id="list" class="list-group-item d-flex justify-content-between align-items-center">
  <i className={item.title}></i>
     <h2 className="name">{item.content}({item.age}hours)</h2>
 <span className="badge bg-primary rounded-pill">  <i class="fa-solid fa-arrow-right-arrow-left"></i></span>
</li>
</>;
} else {
return <span>{item.falseValue}</span>;
}
})()}



</ul>
                    </>  
    ))}
                  
                  <button className="logout" onClick={logOut}>Logout</button>
     
      </div>
    

      <ToastContainer />
    </>
  );
}
