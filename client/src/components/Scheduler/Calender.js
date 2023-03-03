import { useState, useEffect } from 'react'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const numAbbreviate = (num) => {
  let postfix = 'th';
  switch (num % 10) {
    case 1:
      postfix = 'st';
      break;
    case 2:
      postfix = 'nd';
      break;
    case 3:
      postfix = 'rd';
      break;
    default:
      break;
  }
  if (num >= 11 && num <= 13) postfix = 'th';
  return String(num + postfix);
}

/*
:on calendar setup:
-find prior Sunday for startDate:

-check if schedule already exists for current PrevSunday/Start
 -if so, load/end; if not, set new default schedule

:new default schedule
-build daysArray

:when decrementing to before previous Sunday, prior schedules should load
:when switching to new week, ask to save if anything modified (schedule modified state)
:displayed year needs to follow rightmost month, so it looks correct on year splits. 
-We could also have the previous year pop up to the left of prev month
*/

const firstDateOfWeek = (date) => {
  // let newDate = new Date(date);
  
  // while (days[newDate.getDay()] !== 'Sunday') {
  //   newDate.setDate(newDate.getDate() - 1);
  // }
  // return newDate;
  const prevSunday = date.setDate(date.getDate() - date.getDay());
  return new Date(prevSunday);
}

const createWeekDaysArray = (date) => {
  const daysArr = [];
  let newDate = new Date(date);
  for (let i = 0; i < 7; i++) {
		const day = newDate.getDate();
    const month = newDate.getMonth();
		daysArr.push({date: day, month: months[month]});
    newDate.setDate(newDate.getDate() + 1);
	}
  return daysArr;
}

const Calender = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [monthsDisplayed, setMonthsDisplayed] = useState([]);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [startOfWeekDate, setStartOfWeekDate] = useState(null);

  const incrementWeek = () => {
    const date = new Date(startOfWeekDate);
    for (let i = 0; i < 7; i++) date.setDate(date.getDate() + 1);
    setStartOfWeekDate(date);
  }

  const decrementWeek = () => {
    const date = new Date(startOfWeekDate);
    for (let i = 0; i < 7; i++) date.setDate(date.getDate() - 1);
    setStartOfWeekDate(date);
  }

  const setCalenderDates = (date) => {
    if (date) {
      let lastDay = new Date(date);
      lastDay.setDate(lastDay.getDate() + 6);
      setYear(lastDay.getFullYear());

      const startDate = firstDateOfWeek(date);
      const daysArray = createWeekDaysArray(startDate)
      setDaysOfWeek(daysArray);
      let months = tallyMonthsDisplayed(daysArray);
      setMonthsDisplayed(months);
      console.log('')
    }
  }

  const monthSelect = (newMonth) => {
    const date = new Date();
    let monthIndex = 0
    while (months[monthIndex] !== newMonth) monthIndex++;
    date.setFullYear(year);
    date.setMonth(monthIndex);
    date.setDate(1);
    setStartOfWeekDate(date);
  }

  const tallyMonthsDisplayed = (daysArray) => {
    const first = daysArray[0].month;
    const last =  daysArray[6].month;
    let tally = [first, last];
    setMonth(last);

    return tally;
  }
 
  //initialize calender date
  useEffect(() => {
    const today = new Date();
    //if today has a schedule, load it, otherwise run next line
    //if schedul exists, need to create loading functionality to build calendar or maybe modify
    //calendar builder to build what it needs to (whatever is not included in a sched save), then check if there's
    //a scheduler for the reamining info or create the empty defaults
    setStartOfWeekDate(firstDateOfWeek(today));
  },[])

  //update calender date
  useEffect(() => {
    setCalenderDates(startOfWeekDate);
  }, [startOfWeekDate])

  return (
    <>
      <div className='flex justify-between w-full p-1 border-2 border-purple-700 border-b-0 rounded-t-lg text-2xl bg-black'>
        <div className='flex justify-between'>
          {/* < Button */}
          <button className="px-1 mx-1 border-solid border-2 border-purple-700 rounded-lg text-purple-700" onClick={decrementWeek}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          {/* Save Button */}
          <button className="text-xs font-semibold border-2 border-purple-700 rounded-full ml-1 bg-purple-400 py-0 px-4"
                  onClick={()=> console.log('saving')}>
            Save
          </button>
        </div>
        {/* Month Control */}
        <div className="flex flex-row">
          { monthsDisplayed[0] !== monthsDisplayed[1] && <span className="text-purple-400">{monthsDisplayed[0] + ' / '}</span> }
          <select className="flex-1 flex-shrink w-fit bg-black cursor-pointer text-purple-700 text-right"
                  onChange={(e) => monthSelect(e.target.value)}
                  value={monthsDisplayed[1]}
                  name="months"
                  id="months">
            { months.map((monthLabel) => <option key={monthLabel} value={monthLabel}>{monthLabel}</option> )}
          </select>
          <div className="text-purple-700 ml-4">{year}</div>
        </div>
        <div className="flex justify-between">
          {/* Send Button */}
          <button className="text-xs font-semibold border-2 border-purple-700 rounded-full mr-1 bg-purple-400 py-0 px-4"
                  onClick={()=> console.log('saving')}>
            Send
          </button>
          {/* > Button */}
          <button className="px-1 mx-1 border-solid border-2 border-purple-700 rounded-lg text-purple-700" onClick={incrementWeek}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-end w-full border-purple-700 border-x-2 bg-white">
        <div className="w-9/12">
          <div className="w-full flex justify-between text-xl">
            {days.map((day) => <div key={day} className="flex-1">{day}</div>)}
          </div>
          <div className="w-full flex justify-between text-xl rounded-lg">
            {daysOfWeek.map((day) => {
              return (
                <div key={day.date} className={"flex-1 " + (day.month === month ? "text-purple-700" : "text-purple-400")}>
                  {numAbbreviate(day.date)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>

  )
}

//px-1 mx-1 border-solid border-2 border-purple-700 rounded-lg text-purple-700
//px-1 mx-1 border-solid border-2 border-purple-700 rounded-lg text-purple-700
export default Calender;