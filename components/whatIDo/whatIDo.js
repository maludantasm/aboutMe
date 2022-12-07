import { Table } from './table/table';
import tbl  from './table/table.json'
import './whatIDo.css'

export const WhatIDo = () => {
    return (
        <div className='what-i-do'>
            <div className='title'>
                <h2>
                    What I do
                </h2>
            </div>
            <div className='content'>
                <Table elements={tbl} display='column'/>
            </div>
        </div>
    )
}