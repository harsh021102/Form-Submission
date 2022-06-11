import React, { useState } from 'react'
import FirstPage from './FirstPage'
import Friendly from './Friendly'
import Header from './Header'
import TeamName from './TeamName'
import TableData from './TableData'
import Tournament from './Tournament'

function App() {
    const [page,setPage] = useState(1)
    const [formdata,setFormData] = useState({
      matchType:"",
      startDateAndTime: null,
      endDateAndTime:null,
      comments: "",
      matchLocation:"",
      tournamentName:"",
      team1:"",
      team2:"",
      teamOne:"",
      teamTwo:"",
    })
    const Next = () =>{
        if(page===1)
        {
          return (
            <div>
              <FirstPage formdata={formdata} setFormData={setFormData}/>
              <div className="flex justify-end pr-36">
              <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{if(page<3){
                if(formdata.matchType==="")
                  setPage(page)
                else
                 setPage(page+1)
              }}}>Next</button>
            </div>
            </div>
          )
        }
        else if(page===2&&formdata.matchType==="Friendly"){
        return (
          <>
            <Friendly formdata={formdata} setFormData={setFormData}/>
            <div className="flex justify-end gap-2 mt-2 pr-36">
              <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{if(page>0) setPage(page=>page-1)}}>Prev</button>
              <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{if(page<3){
                if(formdata.startDateAndTime===null&&formdata.endDateAndTime===null&&formdata.comments===""&&formdata.matchLocation==="")
                  setPage(page)
                else
                 setPage(page+1)
              }}}>Next</button>
            </div>
            </>
          )}
          else if(page===2&&formdata.matchType==="Tournament"){
            return (
              <>
            <Tournament formdata={formdata} setFormData={setFormData}/>
            <div className="flex justify-end gap-2 mt-2 pr-36">
              <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{if(page>0) setPage(page=>page-1)}}>Prev</button>
              <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{if(page<3){
                if(formdata.startDateAndTime===null&&formdata.endDateAndTime===null&&formdata.comments===""&&formdata.matchLocation===""&&formdata.tournamentName==="")
                  setPage(page)
                  else
                  setPage(page+1)
                }}}>Next</button>
            </div>
            </>
          )}
          else if(page===3)
          {
            return (
              <>
              <TeamName formdata={formdata} setFormData={setFormData}/>
              <div className="flex justify-end gap-2 mt-4 pr-32">
                <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{if(page>0) setPage(page=>page-1)}}>Prev</button>
                <button className="px-4 py-2 text-xl bg-blue-300 rounded-md shadow-md" onClick={()=>{ if(page===3){
                  if(formdata.team1===""&&formdata.team2===""&&formdata.teamOne===""&&formdata.teamTwo==="")
                    setPage(page)
                  else
                    setPage(page+1)
                }}}>Submit</button>
              </div>
              </>
            )
          }
          else if(page===4)
          {
            const start = formdata.startDateAndTime
            const startString=start.toLocaleString()
            const end = formdata.endDateAndTime
            const endString=end.toLocaleString()
            return(
              <><TableData team1={formdata.team1} team2={formdata.team2} matchType={formdata.matchType} tournamentName={formdata.tournamentName} startDateAndTime={startString} endDateAndTime={endString} location={formdata.matchLocation} comments={formdata.comments} type1={formdata.teamOne} type2={formdata.teamTwo}/></>
            )
          }
    }
    return (
      <div className='w-full'>
        <Header page={page}/>
        <div className='w-full '>
          {
            Next()
          }
        </div>
      </div>
    )
}

export default App