import React, { Component } from 'react'
import profiles from '../data/berlin.json';
import "../styles/Facebook.css";

export class Facebook extends Component {

    constructor(props){
        super(props);
        this.profiles=profiles;
        let countriesList =[]
        this.profiles.forEach((profile)=>{
            if (!countriesList.includes(profile.country)){countriesList.push(profile.country)};
        })
        this.countries =countriesList;
        this.state = {
            filter: "All",
        };
        
    }

    filter = (country)=> { 
        this.setState({filter:country});
    };


    render() {
        let filteredList=[];
        if(this.state.filter!=="All") {

            filteredList= this.profiles.filter((profile)=>{
                if (profile.country===this.state.filter) {return profile}
            })
        }

        else{
            filteredList=[...this.profiles];
        }

        return (
            <div className="facebookWrapper">
                <div>
                <ul className="countryButtonList">
                <li onClick={()=>{this.filter("All")}} className="countryButton" key="all">All</li>
                    {this.countries.map((country)=>{
                        return <li onClick={()=>{this.filter(country)}}  className="countryButton" key={country}>{country}</li>
                    })}
                </ul>
                </div>
                <ul>
                {filteredList.map((profile)=>{
                    return <li className="profileCard" key={profile.lastName}>
                            <img src={profile.img} alt="profileImage"></img>
                            <div className="informationSections">
                                <p><strong>First name:</strong> {profile.firstName}</p>
                                <p><strong>Last name:</strong> {profile.lastName}</p>
                                <p><strong>Country:</strong> {profile.country}</p> 
                                {profile.isStudent && <p><strong>Country:</strong> Student</p>} 
                                {!profile.isStudent && <p><strong>Country:</strong> Teacher</p>} 
                                
                            </div>
        
                    </li>
                })}

            </ul>
            </div>

        )
    }
}

export default Facebook
