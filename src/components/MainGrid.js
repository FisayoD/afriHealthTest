import React from "react";
import MainGridLeft from "./MainGridLeft";
import MainGridRight from "./MainGridRight";
import MainTabs from "./MainTabs";
import PinnedProject from "./PinnedProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ContributionGrid from "./ContributionGrid";
import Link from "./Link";
import { useQuery, gql } from '@apollo/client';

const GET_CONTRIBUTION_DATA = gql`
query($userName:String!) { 
  user(login: $userName){
    repositories(first: 50){
            nodes{
              id
              name
              url
              shortDescriptionHTML
              primaryLanguage{
                color
                name
              }
            }
        }
    contributionsCollection {
      contributionYears
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
  }
}

    `

export default function MainGrid() {
    const { data, loading, error } = useQuery(GET_CONTRIBUTION_DATA, {
        variables: {
            "userName": "afriHealth"
        } 
    });
    if (loading) {
        return <div>Loading...</div>
    } else {
        var { repositories, contributionsCollection } = data.user;
        return (
            <div className="content">
                <MainTabs />
                 <main className="container">
                <MainGridLeft />

                <MainGridRight>
                
                    <p style={{color:"#c9d1d9", marginTop:"25px"}}>Popular Repositories</p>
                        <div className="pinned-grid">
                            {repositories.nodes.map((project) => {
                            return    <PinnedProject btnValue={project.name} styleColor={project.primaryLanguage.color} 
                        description={project.shortDescriptionHTML} projLang={project.primaryLanguage.name} url={project.url}>
                            <FontAwesomeIcon icon={faBook} />
                        </PinnedProject>
                            })}
                    </div>

                    {contributionsCollection.contributionCalendar.totalContributions} contributions in the last year
                    
                        
                    
                    <div className="contribution">
                        <ContributionGrid contributionData= {contributionsCollection} />
                    </div>

                    <div className="contribution-activity">
                        <div>
                            <p>Contribution activity</p>

                            <span>December 2021</span>

                            <div>
                                <span><FontAwesomeIcon icon={faBook} /></span>
                                <p href="">Created 2 commits in 1 repository</p><br/>   
                            </div>
                                
                            
                                
                            <Link btnValue="Show more activity" />
                        </div>

                            <div>
                                {contributionsCollection.contributionYears.map((year) => {
                                    return <div><Link btnValue={year} /></div>
                                })}
                        </div>
                    </div>
                </MainGridRight>
            </main>

           </div>
              );

    }
}
