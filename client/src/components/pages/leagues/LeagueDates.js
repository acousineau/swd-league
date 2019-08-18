import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const LeagueDates = ({ startDate, setStart, endDate, setEnd }) => {
  return (
    <form className="l-row dates-select form-section">
      <div className="l-col-6 start-date">
        <label className="react-datepicker-wrapper">
          Start Date
          <DatePicker maxDate={endDate} selected={startDate} onChange={setStart} />
        </label>
      </div>
      <div className="l-col-6 end-date">
        <label className="react-datepicker-wrapper">
          End Date
          <DatePicker minDate={startDate} selected={endDate} onChange={setEnd} />
        </label>
      </div>
    </form>
  )
}

export default LeagueDates
