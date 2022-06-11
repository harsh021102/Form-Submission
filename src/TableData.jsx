import React from 'react'
import TableHeading from './TableHeading'
import TableContent from './TableContent'
import Team from './Team'

function TableData({team1,team2,matchType,tournamentName,startDateAndTime,endDateAndTime,location,comments,type1,type2}) {
  console.log("TableDate",matchType)
  let tournament = tournamentName
  if(tournament==="")
  {
    tournament="-"
  }
  return (
    <div>
        <div className=' mt-12 mx-4 h-96 '>
            <div className='grid grid-cols-8'>
              <TableHeading heading="Team 1"/>
              <TableHeading heading="Team 2"/>
              <TableHeading heading="Match Type"/>
              <TableHeading heading="Tournament"/>
              <TableHeading heading="Start Date & Time"/>
              <TableHeading heading="End Date & Time"/>
              <TableHeading heading="Location"/>
              <TableHeading heading="Comments"/>
              <Team content={team1} type={type1}/>
              <Team content={team2} type={type2}/>
              <TableContent content={matchType}/>
              <TableContent content={tournament}/>
              <TableContent content={startDateAndTime}/>
              <TableContent content={endDateAndTime}/>
              <TableContent content={location}/>
              <div className='flex flex-col text-center py-8 text-sm w-full text-black rounded-md shadow-md bg-blue-100 overflow-hidden'><h1 className='overflow-auto'>{comments}</h1></div>
            </div>
        </div>
    </div>
  )
}

export default TableData