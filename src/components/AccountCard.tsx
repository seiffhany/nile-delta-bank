import React from 'react'

function AccountCard({title, number, onClick} : {title: string, number: string, onClick?: () => void}) {
  return (
    <div className="account_card" onClick={onClick}>
        <div className="account_card_header">
          {title}
        </div>
        <div className="account_card_body">
          <p>{number}</p>
          <div className="account_card_sub">
            <p>View Balance</p>
          </div>
        </div>
      </div>
  )
}

export default AccountCard