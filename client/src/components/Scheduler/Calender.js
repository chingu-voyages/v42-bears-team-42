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
:on load: get today and send through calendar setup
:on calendar setup:
-find prior Sunday for startDate:
function getPrevSunday(date) {
  return date.setDate(date.getDate() - date.getDay());
}
-check if schedule already exists for current PrevSunday/Start
 -if so, load/end; if not, set new default schedule

:new default schedule
-build daysArray

:when decrementing to before previous Sunday, prior schedules should load
:when switching to new week, ask to save if anything modified (schedule modified state)
*/

const firstDateOfWeek = (date) => {
  let newDate = new Date(date);
  
  while (days[newDate.getDay()] !== 'Sunday') {
    newDate.setDate(newDate.getDate() - 1);
  }
  return newDate;
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
      setYear(date.getFullYear());
      setMonth(months[date.getMonth()]);
      const startDate = firstDateOfWeek(date);
      const daysArray = createWeekDaysArray(startDate)
      setDaysOfWeek(daysArray);
      setMonthsDisplayed(tallyMonthsDisplayed(daysArray));
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
    let tally = [first];
    if(first !== last) tally.push(daysArray[6]);
    return tally;
  }
 
  //initialize calender date
  useEffect(() => {
    const today = new Date();
    setStartOfWeekDate(firstDateOfWeek(today));
  },[])

  //update calender date
  useEffect(() => {
    setCalenderDates(startOfWeekDate);
  }, [startOfWeekDate])

  return (
    <>
      <div className='flex justify-between w-full p-1 border-2 border-purple-700 border-b-0 rounded-t-lg text-2xl bg-black'>
        {/* < Button */}
        <button className="px-1 mx-1 border-solid border-2 border-purple-700 rounded-lg text-purple-700" onClick={decrementWeek}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/* Month Control */}
        <div className="">
          { 
            monthsDisplayed.length > 1 && <span className="text-purple-400">{monthsDisplayed[0] + ' / '}</span>
          }
          <select className="bg-black cursor-pointer text-purple-700 text-left"
                  onChange={(e) => monthSelect(e.target.value)}
                  value={monthsDisplayed[1] || monthsDisplayed[0]}
                  name="months"
                  id="months">
            { months.map((monthLabel) => <option key={monthLabel} value={monthLabel}>{monthLabel}</option> )}
          </select>
          { 
            // (monthsDisplayed.length > 0 && monthsDisplayed[1] !== month) &&
            //   <span className="text-gray-400">{' / ' + monthsDisplayed[1]}</span>
          }
        </div>
        <div className="text-white">{year}</div>
        {/* > Button */}
        <button className="px-1 mx-1 border-solid border-2 border-purple-700 rounded-lg text-purple-700" onClick={incrementWeek}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div className="flex justify-end w-full border-purple-700 border-x-2 bg-white">
        <div className="w-9/12">
          <div className="w-full flex justify-between text-xl">
            {days.map((day) => <div key={day} className="flex-1">{day}</div>)}
          </div>
          <div className="w-full flex justify-between text-xl rounded-lg">
            {daysOfWeek.map((day) => {
              return (
                <div key={day.date} className={"flex-1 " + (day.month === month ? "text-black" : "text-gray-400")}>
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


/*
  return (
    <>
      <div className='flex justify-between w-full p-1 border-2 border-b-0 border-purple-700 rounded-t-lg text-2xl bg-gray-400'>
        <button className="px-1 mx-1 border-solid border-2 border-black rounded-lg"
              onClick={decrementWeek}>ᐸ
        </button>
        <div className="">
          { 
            (monthsDisplayed.length > 0 && monthsDisplayed[0] !== month) &&
              <span className="text-gray-400">{monthsDisplayed[0] + ' / '}</span>
          }
          <select className="bg-gray-400 inline-block cursor-pointer"
                  onChange={(e) => monthSelect(e.target.value)}
                  value={month}
                  name="months"
                  id="months">
            { months.map((monthLabel) => <option key={monthLabel} value={monthLabel}>{monthLabel}</option> )}
          </select>
          { 
            (monthsDisplayed.length > 0 && monthsDisplayed[1] !== month) &&
              <span className="text-gray-400">{' / ' + monthsDisplayed[1]}</span>
          }
        </div>
        <div className="">{year}</div>
        <button className="px-1 mx-1 border-solid border-2 border-black rounded-lg"
              onClick={incrementWeek}>ᐳ
        </button>
      </div>
      <div className="flex justify-end w-full border-purple-700 border-x-2">
        <div className="w-9/12">
          <div className="w-full flex justify-between text-xl">
            {days.map((day) => <div key={day} className="flex-1">{day}</div>)}
          </div>
          <div className="w-full flex justify-between text-xl rounded-lg">
            {daysOfWeek.map((day) => {
              return (
                <div key={day.date} className={"flex-1 " + (day.month === month ? "text-black" : "text-gray-400")}>
                  {numAbbreviate(day.date)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>

  )
*/
export default Calender;