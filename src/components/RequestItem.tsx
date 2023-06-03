import React from 'react'
import { Steps } from 'antd';
import '../css/client-page.css'

function RequestItem({request_number, submit_date, current, items} : {request_number: number, submit_date: string, current: number, items: any}) {
  return (
    <div className="request-item">
        <h2>Request #{request_number} | <span className='request-item-submission'>submitted at {submit_date}</span></h2>
        <Steps
          current={current}
          items={items}
        />
        <hr className='divider'/>
    </div>
  )
}

export default RequestItem