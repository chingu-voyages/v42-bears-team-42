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
    let tally = [];
    const first = daysArray[0].month;
    const last = daysArray[6].month
    if ( first !== last) tally = [first, last]
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
      <div className='border-2 border-purple-700 rounded-lg'>
        <div className="w-12/12 font-semibold text-2xl text-center bg-gray-400 py-1">{year}</div>
        <div className="w-12/12 p-1 flex justify-between text-2xl border-t-2 border-purple-700">
          <button className="px-1 mx-1 border-solid border-2 border-black rounded-lg"
                onClick={decrementWeek}>ᐸ
          </button>
          <div className="">
            { 
              (monthsDisplayed.length > 0 && monthsDisplayed[0] !== month) &&
                <span className="text-gray-400">{monthsDisplayed[0] + ' / '}</span>
            }
            <select className="bg-gray-200 inline-block cursor-pointer"
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
          <button className="px-1 mx-1 border-solid border-2 border-black rounded-lg"
                onClick={incrementWeek}>ᐳ
          </button>
        </div>
      </div>
      <div className="flex justify-end w-full">        
        <div className="w-9/12 pl-2">
          <div className="w-12/12 flex justify-between text-xl">
            {days.map((day) => <div key={day} className="w-1/12 mx-4 py-1">{day}</div>)}
          </div>
          <div className="w-12/12 flex justify-between text-xl rounded-lg">
            {daysOfWeek.map((day) => 
              (day.month === month) ?
                <div key={day.date} className="w-1/12 mx-4 py-1 text-black">{numAbbreviate(day.date)}</div>
              :
                <div key={day.date} className="w-1/12 mx-4 py-1 text-gray-400">{numAbbreviate(day.date)}</div>
            )
            }
          </div>
        </div>
      </div>
    </>

  )
}

export default Calender;