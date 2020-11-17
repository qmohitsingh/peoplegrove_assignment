import React from 'react'
import { Route, Switch , Redirect} from "react-router-dom";
import Header from "./navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
//import Main from "./home/main";

function App() {

    const notify = async (status, message) => {

        if (status === 400) {
            toast.error(message, {
                autoClose: 3000,
            });
        }

        if (status === 200) {
            toast.success(message, {
                autoClose: 3000,
            });
        }
    }

    return (
        <div>
            <ToastContainer hideProgressBar />
            <Header notify={notify}/>

        </div>
    );
}

export default App;
