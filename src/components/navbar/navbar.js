import React,  {useState} from "react";
//import { NavLink } from "react-router-dom";
import './navbar.css'

import { Navbar } from 'react-bootstrap';
import Recursive from "../recursive/recursive";
const Header = (props) => {

    const [text, setText] = useState('{"a": "b"}');
    const [treeData, setTreeData] = useState();
    const [show, setShow] = useState(false);

    const data = {};

    const checkJson = () => {
        let formatData = {};
        try {
            JSON.parse(text)
            return true;
        } catch (e) {
             props.notify(400, 'Invalid json')
        }

        return false;
    }

    const PrettyPrintJson = () => {
        // (destructured) data could be a prop for example

        if (!checkJson) return;

        setText(JSON.stringify(JSON.parse(text), undefined, 4))
        //return props.notify(200, 'success')
    }

    const showTreeData = () => {
        setShow(true)
    }

    return(
        <div>
            <Navbar expand="lg" style={{backgroundColor: 'black', color : 'white'}}>
                <Navbar.Brand style={{color : 'white'}} >JSON PARSER</Navbar.Brand>
            </Navbar>

            <div style={{display : 'flex'}}>
                <div className="form-group" style={{color : "black", marginTop : '2em', width:"50%", paddingRight: '10px'}}>
                    <label>Text Area:</label>
                    <textarea
                        className="form-control input-contact"
                        id="exampleFormControlTextarea1"
                        rows="20"
                        placeholder='{"a": "b"}'
                        style={{border:"none", borderBottom: "1px solid red", color: 'white', width : '100%'}}
                        onChange={(event) => {
                            setText(event.target.value)
                        }}
                        value={text}


                    />
                </div>
                <div style={{display : 'inline-block', float : 'left', marginTop : '15em', marginRight: '1%'}}>
                    <div style={{ marginTop : '1%'}}>
                        <input
                            style={{
                                color: 'white',
                                backgroundColor: 'rgba(27,27,27,.91)',
                                borderRadius: '2em',
                                border: 'none',
                                height: "2.5em",
                                width: "5em"
                            }}
                            className='submit-button'
                            type="button"
                            value="Format"
                            onClick={PrettyPrintJson}
                        />
                    </div>
                    <div style={{ marginTop : '50%'}}>
                        <input
                            style={{
                                color: 'white',
                                backgroundColor: 'rgba(27,27,27,.91)',
                                borderRadius: '2em',
                                border: 'none',
                                height: "2.5em",
                                width: "5em"
                            }}
                            className='submit-button'
                            type="button"
                            value="View Tree"
                            onClick={showTreeData}
                        />
                    </div>
                </div>
                {show ? <div className="form-group" style={{color : "white", marginTop : '4em', width:"50%", paddingLeft: '15px', backgroundColor: 'rgba(27,27,27,.91)'}}>
                    {/*<Recursive data={data}/>*/}
                </div> : <div className="form-group" style={{color : "white", marginTop : '4em', width:"50%", paddingLeft: '15px', backgroundColor: 'rgba(27,27,27,.91)'}}>
                    {/*<Recursive data={data}/>*/}
                </div>}
            </div>
        </div>
    );
}


export default Header;
