import React from "react";
import { useState } from "react";
import InputField from './InputField';

export default function Todo() {
    const [taskList, setTaskList] = useState([]);
    const [text, setText] = useState('');

    function insertTask() {
        if (text === '') {
            return;
        }

        taskList.forEach((e) => {
            e.status = 'active';
        });
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
    }

    function displayAllTask() {
        taskList.forEach((e) => {
            return e.status = 'all';
        })
        setTaskList([...taskList]);
    }
    function deleteTask(e) {
        taskList.forEach(() => {
            if (!e.delete) {
                return e.delete = true;
            }
        })
        setTaskList([...taskList]);
    }

    return (
        <div className="row d-flex justify-content-center container">
            <div className="col-md-7">
                <div className="card-hover-shadow-2x mb-3 card">
                    <InputField currentValue={text} currentText={setText} insertButton={insertTask} displayTask={displayAllTask} />
                    <div className="scroll-area-sm">
                        <perfect-scrollbar className="ps-show-limits">
                            <div style={{ position: "static" }} className="ps ps--active-y">
                                <div className="ps-content">
                                    <ul className=" list-group list-group-flush">
                                        {taskList.map((e, idx) => {
                                            let deleteAndStatus = (!e.delete && e.status == 'active');

                                            if (!e.delete && e.status == 'active' || e.status == 'all') {
                                                return <li key={e.id} className="list-group-item text-capitalize">
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left">
                                                                <div className="widget-heading text-25">{idx + 1}.&nbsp;&nbsp;&nbsp;
                                                                    {
                                                                        deleteAndStatus
                                                                            ? `${e.task}`
                                                                            : e.status === 'all'
                                                                                ? e.delete
                                                                                    ? <del>{e.task}</del>
                                                                                    : `${e.task}`
                                                                                : null
                                                                    }
                                                                </div>
                                                                <div className="widget-subheading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>By me</i></div>
                                                            </div>

                                                            <div className="widget-content-right">
                                                                {(!e.delete && e.status == 'active') ? <button onClick={() => deleteTask(e)} className="border-0 btn-transition btn btn-outline-success">Delete</button> : ''}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            }
                                        })}
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
