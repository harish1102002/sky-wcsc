import "./register.css";
import { initializeApp } from "firebase/app";
import {
  getfirestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcEwCOKoxIpnEtjv7rvcnHNsX2tSGPGPw",
  authDomain: "wcsc-df1e2.firebaseapp.com",
  projectId: "wcsc-df1e2",
  storageBucket: "wcsc-df1e2.appspot.com",
  messagingSenderId: "137394445409",
  appId: "1:137394445409:web:581295b0a167c7bba1de20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getfirestore();
const coll=collection(db,'users');

 var d=0;

function confirm() {
	d=document.getElementsByTagName("input");
	if(d[0].value.trim()!="" && d[1].value.trim()!="")
	alert("Thanks for registering");
	}
function Register(){
return(
    <div>
        <form role="form" onSubmit={confirm}>
                <div classname="name">
                    <input type="text" classname="name" 
                    id="inputEmailForm" placeholder="email" />
                     </div>
            <br/>
                <div classname="Email">
                    <input type="text" classname="email" 
                    id="inputPasswordForm" placeholder="name" required
                    autocomplete="no" />
                     </div>
            <br/>
            <div classname="Submit">
                    <button type="submit" classname="btn btn-danger rounded-pill" onClick={confirm}>Register</button>
    
            </div>
        </form>
    <div classname="bg-danger rounded p-5 h-100 d-flex flex-column align-items-center justify-content-center">
            <h3 classname="font-weight-bold">Hello, Friend!</h3>
            <p classname="small my-3">Have a Great day Ahead!</p>
        </div>
    </div>

);}
export default Register;