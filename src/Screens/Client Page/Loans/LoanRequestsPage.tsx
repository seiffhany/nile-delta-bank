import React from 'react'
import RequestItem from '../../../components/RequestItem'
import { loan_requests } from '../../../data/loan_requests'

function LoanRequestsPage() {

  return (
    <section className="client_section">
      <h2>Loan Requests</h2>
      <hr className="loan_header_divider" />

      {
        loan_requests.map((request, index) => {
          return (
            <RequestItem
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

export default LoanRequestsPage