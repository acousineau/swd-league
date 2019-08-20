import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const LeagueDates = ({ startDate, setStart, endDate, setEnd }) => {
  const [hasStart, selectStart] = useState(false)
  const [hasEnd, selectEnd] = useState(false)

  return (
    <form className="l-row dates-select form-section">
      <div className="l-col-6 start-date">
        <label className="react-datepicker-wrapper">
          Start Date
          <DatePicker
            className={`${hasStart ? 'has-start' : ''}`}
            maxDate={endDate}
            selected={startDate}
            onChange={setStart}
            onBlur={e => {
              if (startDate) {
                selectStart(true)
              }
            }}
          />
        </label>
      </div>
      <div className="l-col-6 end-date">
        <label className="react-datepicker-wrapper">
          End Date
          <DatePicker
            className={`${hasEnd ? 'has-end' : ''}`}
            minDate={startDate}
            selected={endDate}
            onChange={setEnd}
            onBlur={e => {
              if (endDate) {
                selectEnd(true)
              }
            }}
          />
        </label>
      </div>
    </form>
  )
}

export default LeagueDates
