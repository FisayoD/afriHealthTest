import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faMapMarkerAlt, 
    faEnvelope, faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";
import profileImage from "../assets/img/profile image.png";
import { useQuery, gql } from '@apollo/client';


const GET_USER_DATA = gql`
query($userName:String!) { 
  user(login: $userName){
    bio
    avatarUrl
    name
    location
    email
  }
}`

export default function MainGridLeft() {
    const { data, loading, error } = useQuery(GET_USER_DATA, {
        variables: {
            "userName": "afriHealth"
        } 
    });
    if (loading) {
            return <div>Loading...</div>
    } else {
        return (
            <div className="main-grid-left">
                <div>
                    <div>
                        <img id="profilePic" src={data.user.avatarUrl} />

                      
                    </div>

                    <div>
                        <h2>Afrihealth Limited</h2> 

                        <h2>@afrihealth</h2>

                    </div>

                </div>
                <button className="follow-btn">Follow</button>
                  <div id="status">Frontend Developer</div>

                <div>
                    

                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.user.location}
                    </div>

                   

                    <div>
                        <FontAwesomeIcon icon={faStar} /> <span>PRO</span>
                    </div>
                </div>
            </div>
        );
        }
    }


