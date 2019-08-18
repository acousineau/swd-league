import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function LeagueDates(startDate, setStart, endDate, setEnd) {
  return (
    <form>
      <div className="l-row dates-select">
        <div className="l-col-6 start-date">
          <label>
            Start Date
            <DatePicker maxDate={endDate} selected={startDate} onChange={setStart} />
          </label>
        </div>
        <div className="l-col-6 end-date">
          <label>
            End Date
            <DatePicker minDate={startDate} selected={endDate} onChange={setEnd} />
          </label>
        </div>
      </div>
    </form>
  )
}

export default LeagueDates
