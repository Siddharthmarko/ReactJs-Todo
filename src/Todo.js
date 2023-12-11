import React from "react";
import { useState } from "react";
import InputField from './InputField';

export default function Todo(){
    let arrOfTaskList = [];
    const [taskList, setTaskList] = useState([]);
    const [text, setText] = useState('');


    function insertTask() {
        if (text === '') {
            return;
        }
        taskList.map((e) => {
            return e.status = 'active';
        })
        setTaskList([...taskList]);
        setTaskList([
            ...taskList,
            {
                id: Date.now(),
                task: text, 
                status: 'active',
                delete: false,
            },
        ]);
        setText(''); 
        arrOfTaskList = [mapTaskList(taskList, setTaskList)];
    }
    function displayAllTask() {
        taskList.map((e) => {
            return e.status = 'all';
        })
        setTaskList([...taskList]);
    }
    arrOfTaskList = [mapTaskList(taskList, setTaskList)];
    
    return (
        <div className="row d-flex justify-content-center container">
            <div className="col-md-7">
                <div className="card-hover-shadow-2x mb-3 card">
                    <InputField currentValue={text} currentText={setText} insertButton={insertTask} displayTask={displayAllTask}/>
                    <div className="scroll-area-sm">
                        <perfect-scrollbar className="ps-show-limits">
                            <div style={{ position: "static" }} className="ps ps--active-y">
                                <div className="ps-content">
                                    <ul className=" list-group list-group-flush">
                                        {arrOfTaskList}
                                    </ul>
                                </div>
                            </div>
                        </perfect-scrollbar>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapTaskList( taskList, setTaskList){
    function deleteTask(e) {
        taskList.map(() => {
            if (!e.delete) {
                return e.delete = true;
            }
        })
        setTaskList([...taskList]);
    }
    let idx = 0;
    let arrOfTaskList = taskList.map((e) => {
        if (!e.delete && e.status == 'active' ){
            return <li key={e.id} className="list-group-item text-capitalize">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                            <div className="widget-heading text-25">{++idx}.&nbsp;&nbsp;&nbsp;{e.task}</div>
                            <div className="widget-subheading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>By me</i></div>
                        </div>

                        <div className="widget-content-right">
                            <button onClick={() => deleteTask(e)} className="border-0 btn-transition btn btn-outline-success">Delete</button>
                        </div>
                    </div>
                </div>
            </li>
        }
        if (e.status === 'all') {
            idx++;
            if (e.delete) {
                return <li key={e.id} className="list-group-item text-capitalize">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">

                            <div className="widget-content-left">
                                <div className="widget-heading text-25">{idx}.&nbsp;&nbsp;&nbsp; <del>{e.task}</del></div>
                                <div className="widget-subheading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>By me</i></div>
                            </div>
                        </div>
                    </div>
                </li>
            } 

            return <li key={e.id} className="list-group-item text-capitalize">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">

                            <div className="widget-content-left">
                                <div className="widget-heading text-25">{idx}.&nbsp;&nbsp;&nbsp; {e.task} </div>
                                <div className="widget-subheading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>By me</i></div>
                            </div>
                        </div>
                    </div>
                </li>
        } 
    });
    return arrOfTaskList;
}