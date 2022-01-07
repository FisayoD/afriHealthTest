import { DangerousChangeType } from "graphql";
import React from "react";



export default function ContributionGrid(props) {
    // console.log(props.contributionData.contributionCalendar.weeks)
    // let count = 0;
    console.log(props.contributionData);
    return (
        <div className="contribution-grid">
           {props.contributionData.contributionCalendar.weeks.map((days) => {
              return days.contributionDays.map((day, index) => {
                //   console.log(day.contributionCount);
                  
                  if (day.contributionCount == 0) {
                      return <div key={index}></div> 
                } else {
                    return <div key={index} style={{ backgroundColor: `${day.color}` }}></div> 
                      
                  }
               })
           })}
        </div>
       )
}
