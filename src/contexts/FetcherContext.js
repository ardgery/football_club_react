import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const LeaguesContext = createContext();
export default function LeaguesContextProvider(props) {
    const [competitions, setCompetitions] = useState();

    async function getCompetitions() {
        var leaguesNames = ['CL', 'BL1', 'DED', 'BSA', 'PD', 'FL1', 'ELC', 'PPL', 'CLI', 'PL'];
        var token = 'ac85731748e04303bc9842c0f6cea8fb';
        var res = [];
        var promises = [];
        for (var i = 0; i < leaguesNames.length; i++) {
            try {
                promises.push(
                    await axios.get(`http://api.football-data.org/v2/competitions/${leaguesNames[i]}`, {
                        headers: {
                            'X-Auth-Token': token,
                            'Content-Type': 'application/json'
                        }
                    }).then((resp) => {
                        res.push(resp.data)
                    }).catch((err) => console.log("Errrr = ", err))
                )
            } catch (err) {
                console.log("err = ", err)
            }

        }
        Promise.all([res]).then(function (values) {
            localStorage.setItem('competitions', JSON.stringify(values[0]));
            setCompetitions(values[0])
        }).catch(err => console.log(err));
    }


    useEffect(() => {
        const localData = localStorage.getItem('competitions');
        if (localData) {
            setCompetitions(JSON.parse(localData))
        } else {
            getCompetitions()
        }
    }, [])

    return (
        <LeaguesContext.Provider value={{ competitions }}>
            {props.children}
        </LeaguesContext.Provider>
    );
}