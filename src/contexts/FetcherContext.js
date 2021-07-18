import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

export const FetcherContext = createContext();
export default function FetcherContextProvider(props) {
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




    // let leaguesNames = ['WC', 'CL', 'BL1', 'DED', 'BSA', 'PD', 'FL1', 'ELC', 'PPL', 'EC', 'SA', 'PL', 'CLI'];
    // let leaguesUrl = [];
    // for (var i = 0; i < leaguesNames.length; i++) {
    //     leaguesUrl.push(
    //         `http://api.football-data.org/v2/competitions/${leaguesNames[i]}`
    //     )
    // }

    // const { data, error } = useSWR(
    //     [leaguesUrl, datas.token], //get all areas
    //     // [`http://api.football-data.org/v2/${datas.url}`, datas.token], //get all areas
    //     //[`http://api.football-data.org/v2/competitions?areas=2088`, token], //get competitions based on area
    //     // [`http://api.football-data.org/v2/competitions/2002/teams`, token], //get teams based on competitions
    //     // [`http://api.football-data.org/v2/teams/5`, token], // get list players of teams
    //     // [`http://api.football-data.org/v2/players/44`, token], // get detail of player
    //     fetcher
    // );


    // useEffect(() => {
    //     console.log("section = ", datas.section)
    //     switch (datas.section) {
    //         case 'areas':
    //             setDatas({ ...datas, url: 'competitions/CL/teams' })
    //             break;
    //         case 'competitions':
    //             setDatas({ ...datas, url: 'competitions?areas=2088' })
    //             break;
    //         case 'teams':
    //             setDatas({ ...datas, url: 'competitions/2002/teams' })
    //             break;
    //         default:
    //             setDatas({ ...datas, url: 'teams' })
    //     }


    // }, [datas.section])

    return (
        <FetcherContext.Provider value={{ competitions }}>
            {props.children}
        </FetcherContext.Provider>
    );
}