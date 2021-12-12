import { useState } from 'react';
import Axios from 'axios';

import css from './myPage_aside.module.css';

import HashTag from './HashTag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MyPage_checklist_list from './MyPage_checklist_list';
import axios from 'axios';
import MyPage_aside_listBlock from './MyPage_aside_listBlock';

const icon_plus = <FontAwesomeIcon icon={faPlus} />
const icon_faSearch = <FontAwesomeIcon className={css.searchicon} icon={faSearch}/>

function MyPage_aside(){

    let checklist_array = [];

    let checklistBlock = [];

    const name = 'daniel';

    function createChecklist() {

        Axios.post("http://localhost:3001/createChecklist").then(() => {
            alert('success');
        });
    };
    
    function get_myChecklist(){
        Axios.get("http://localhost:3001/getMyChecklist").then((res) => {
            checklist_array.push(res.data[0]);
            // console.log(checklist_array);
        });

        // print on aside menu
        for(let obj of checklist_array){
            // console.log(obj);
            checklistBlock.push(<MyPage_aside_listBlock checklist={obj} />);
        }

        console.log(checklistBlock);
       
    }


    get_myChecklist();

    return(
        <aside className={css.myPage_aside}>
            <div class={css.asideContainer}>
                <h1>CHECKLIST</h1>
                <div className={css.createBtn}>
                    <button id='createNewChecklist' onClick={createChecklist}>{icon_plus}<span>Create Checklist</span></button>
                </div>
                <div className={css.search}>
                    <input className={css.searchBar} type="text" defaultValue=""/>
                    {icon_faSearch}
                    
                </div>
                <div className={css.hashTagBox}>
                    <div className={css.hashTag}>
                        <HashTag name="청소"/>
                        <HashTag name="작업"/>
                        <HashTag name="과제"/>
                        <HashTag name="등산"/>
                        <HashTag name="산"/>
                        <HashTag name="휴식"/>
                    </div>
                </div>
                <div className={css.checklistContainer}>
                    {checklistBlock}
                </div>
            </div>
        </aside>
    );
}

export default MyPage_aside;