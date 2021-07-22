import React from 'react'
import { useState } from 'react'
import Loading from "./../../Loading.svg"
function SampleReport() {
    const [form1, setform1] = useState(false)
    const [form2, setform2] = useState(false)
    const [form3, setform3] = useState(false)
    const [form4, setform4] = useState(false)
    const [form5, setform5] = useState(true)
    const [form6, setform6] = useState(false)
    
    return (
        <div className="sample-report">
             <p style={{textAlign:"left",marginBottom:"0px",paddingBottom:"0px",marginTop:"0"}}>Sample's Report</p>
             
             {form1?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1"}} >Do you want to record your sample data?</p><div className="sample-report-btn-area">
                <button className="sample-report-btn1">No </button>
                <button className="sample-report-btn2">Yes</button>
            </div>    <p style={{marginTop:"70px",marginLeft:"2px",fontSize:"12px",fontWeight:"400",textAlign:"left",color:"#9e9e9e"}}><span style={{backgroundColor:"#9e9e9e",border:"0.001px solid white ",borderRadius:"60%",color:"black",textAlign:"center",paddingLeft:"3.5px",paddingRight:"1.5px",marginRight:"5px"}} > ? </span>Write about callibaration.</p>
        </>:null}
             {form2?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1"}} >Enter the sample description.</p><input disabled={true} style={{border:"0",padding:"9px",backgroundColor:"#ebebeb"}} value={"Sample Description"} /> <div className="sample-report-btn-area2">
                <button className="sample-report-btn1">Cancel</button>
                <button className="sample-report-btn2">Next</button>
            </div></>:null}
             {form3?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1"}} >Enter the sample ID</p><input disabled={true} style={{border:"0",padding:"9px",backgroundColor:"#ebebeb"}} value={"ASUS-00-00"} /> <div className="sample-report-btn-area2">
                <button className="sample-report-btn1">Back</button>
                <button className="sample-report-btn2">Next</button>
            </div></>:null}
             {form4?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1"}} >Start recording your sample</p> <div className="sample-report-btn-area2" style={{marginTop:"90px"}}>
                <button className="sample-report-btn1" >Back</button>
                <button className="sample-report-btn2">Start</button>
            </div></>:null}
             {form5?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1",marginBottom:"5px"}} >Recording your sample data</p><div style={{display:"flex"}}><img src={Loading} width="46%" /><p style={{marginLeft:"15px",fontSize:"14px",fontWeight:"500",textAlign:"left",color:"#B1B1B1"}} >00.05 sec</p></div> <div className="sample-report-btn-area2">
                <button className="sample-report-btn1">Cancel</button>
                <button className="sample-report-btn2">Stop</button>
            </div></>:null}
             {form6?<><p style={{fontSize:"14px",fontWeight:"400",textAlign:"left",color:"#B1B1B1"}} >Choose the file format</p><div className="phno-div">
            <p style={{color:"#B1B1B1",margin:"0",borderRight:"1px solid #B1B1B1",marginLeft:"0",marginRight:"0",paddingTop:"4px",flex:"2",fontSize:"14px"}}>Format</p>
            <select className="phno-inp" style={{marginLeft:"0",paddingTop:"15px"}} type="text" defaultValue={"pdf"}  autoComplete={false}>
            <option value="pdf" >PDF</option>
            <option value="word">MS Word</option>
            </select>
            
            </div> <div className="sample-report-btn-area2" style={{width:"120px",marginTop:"95px",marginLeft:"160px"}}>
                <button className="sample-report-btn2">Generate</button>
            </div></>:null}
            
        </div>
    )
}

export default SampleReport
