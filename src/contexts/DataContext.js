import React, { createContext, useReducer, useEffect, useContext, useState } from 'react';
import dataReducer from 'reducers/dataReducer';
import { MenuContext } from 'contexts/MenuContext';



export const DataContext = createContext();

export default function DataContextProvider(props) {
    const [contentData, dispatchContentData] = useReducer(dataReducer, { newsIds: [], dataDisplay: [], type: null, dataTitle: 'top', startDisplay: -30, endDisplay: 0 });
    const { activeMenu } = useContext(MenuContext);



    const saveDatas = (newsIds, isFirstData) => {
        let startDisplay = !isFirstData && contentData.newsIds.length !== contentData.dataDisplay.length ? contentData.startDisplay + 30 : 0;
        let endDisplay = !isFirstData && contentData.newsIds.length !== contentData.dataDisplay.length ? contentData.endDisplay + 30 : 30;
        let slicedIds = newsIds.slice(startDisplay, endDisplay);

        const getSlicedDatas = slicedIds.map((v) => {
            return new Promise((resolve, reject) => {
                fetch(`https://hacker-news.firebaseio.com/v0/item/${v}.json?print=pretty`)
                    .then((resp) => resp.json())
                    .then((data) => {
                        resolve(data);
                    })
                    .catch(error => console.log(error));
            })
        })
        Promise.all(getSlicedDatas)
            .then((results) => {
                // let firstResults = contentData.newsIds.length === contentData.dataDisplay.length ? [...contentData.dataDisplay] : results;
                let displayData = !isFirstData && contentData.newsIds.length !== contentData.dataDisplay.length ? [...contentData.dataDisplay, ...results] : results;
                dispatchContentData({
                    type: "SUCCESS_GET_DATA",
                    newsIds: newsIds,
                    dataDisplay: displayData,
                    startDisplay: startDisplay,
                    endDisplay: endDisplay,
                    loading: false
                })

            }).catch(err => console.log(err));
    }

    const getNextDatas = () => {
        saveDatas(contentData.newsIds)
    }


    const getNewsIds = async (par) => {
        let getNewsIds = await fetch(`https://hacker-news.firebaseio.com/v0/${par}stories.json?print=pretty`)
        let newsIds = await getNewsIds.json();
        saveDatas(newsIds, true)
    }

    useEffect(() => {
        console.log("activeMenuuuuu = " + activeMenu)
        getNewsIds(activeMenu);
    }, [activeMenu])

    useEffect(() => {
        if (contentData.type === 'add_more_data') {
            getNextDatas();
        }
    }, [contentData])

    return (
        <DataContext.Provider value={{ contentData, dispatchContentData }}>
            {props.children}
        </DataContext.Provider>
    );
}