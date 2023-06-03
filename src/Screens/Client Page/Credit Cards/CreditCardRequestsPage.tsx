import React from 'react'
import RequestItem from '../../../components/RequestItem'
import { card_requests } from '../../../data/card_requests'

function CreditCardRequestsPage() {
  return (
    <section className="client_section">
      <h2>Credit Card Requests</h2>
      <hr className="loan_header_divider" />

      {
        card_requests.map((request, index) => {
          return (
            <RequestItem
              key={index}
              request_number={request.request_number}
              submit_date={request.submit_date}
              current={request.current}
              items={request.items}
            />
          )
        })
      }
    </section>
  )
}

export default CreditCardRequestsPage