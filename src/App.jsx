import { useState } from 'react'


function App() {
  const [sessionDate,setSessionDate] = useState('');
  const[sessionTime,setSessionTime]=useState('');
  const[sessionInterval,setSessionInterval]=useState(0);
  const[durationPerSession,setDurationPerSession]=useState(0);
  const[lastSessionDate,setLastSessionDate]=useState('')
  const[lastSessionTime,setLastSessionTime]=useState('');
  const handleSessionDateChange=(e)=>{
    setSessionDate(e.target.value);
  };
  const handleSessionTimeChange=(e)=>{
    setSessionTime(e.target.value);
  };
  const handleSessionIntervalChange=(e)=>{
    setSessionInterval(parseInt(e.target.value));
  };
  const handleDurationPerSessionChange=(e)=>{
    setDurationPerSession(parseInt(e.target.value));
  };
  const handleLastSessionDateChnage=(e)=>{
    setLastSessionDate(e.target.value);
  };
  const handleLastSessionTimeChange=(e)=>{
    setLastSessionTime(e.target.value);
  };
  const calculateTotalSessions = () => {
    const { sessionDate, lastSessionDate, sessionInterval } = formData;
    if (!sessionDate || !lastSessionDate || sessionInterval <= 0) return 0;

    // Calculate the difference in days between sessionDate and lastSessionDate
    const startDate = new Date(sessionDate);
    const endDate = new Date(lastSessionDate);

    // Check if start date is after end date, return 0 sessions if true
    if (startDate > endDate) return 0;

    // Calculate the number of sessions using the interval
    const daysDifference = differenceInDays(endDate, startDate);
    return Math.floor(daysDifference / sessionInterval) + 1; // +1 to include the first session
  };

  const handleSubmit=()=>{
    console.log('Session Date:',sessionDate);
    console.log('Session Time:',sessionTime);
    console.log('Session Interval:',sessionInterval);
    console.log('Duration Per Session:',durationPerSession);
    console.log('Last Session Date:',lastSessionDate);
    console.log('Last Session Time:',lastSessionTime);
    const totalSessions = calculateTotalSessions();
    setFormData((prevData) => ({
      ...prevData,
      totalSessions: totalSessions
    }));

    // Logging data for debugging purposes
    console.log('Form Data:', formData);
    console.log('Total Sessions:', totalSessions);
  };
  

  return (
    <div >
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-9xl ">
      <h1 className="text-2xl font-bold mb-4 text-center">Session Settings</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <lable htmlFor="sessionDate" className="block text-gray-700 text-sm font-bold mb-2">Session Date</lable>
          <input 
          type="date"
          id="sessionDate"
          value={sessionDate}
          onChange={handleSessionDateChange}
          className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}/>
        </div>
        <div>
          <label htmlFor="sessionTime" className="block text-gray-700 text-sm font-bold mb-2">
            Session Time
          </label>
          <input
            type="time"
            id="sessionTime"
            value={sessionTime}
            onChange={handleSessionTimeChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="totalSessions" className ="block text-gray-700 text-sm font-bold mb-2">Total Sessions</label>
          <input
          type="number"
          id="totalSessions"
          value={0}
          readOnly
          classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="sessionInterval" className="block text-gray-700 text-sm font-bold mb-2">
            Session Interval
          </label>
          <input
            type="number"
            id="sessionInterval"
            value={sessionInterval}
            onChange={handleSessionIntervalChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <span className="text-gray-600 text-sm">Days</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="durationPerSession" className="block text-gray-700 text-sm font-bold mb-2">
            Duration per session
          </label>
          <input
            type="number"
            id="durationPerSession"
            value={durationPerSession}
            onChange={handleDurationPerSessionChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <span className="text-gray-600 text-sm">Minutes</span>
        </div>
        <div>
          <label htmlFor="lastSessionDate" className="block text-gray-700 text-sm font-bold mb-2">
            Last Session Date
          </label>
          <input
            type="date"
            id="lastSessionDate"
            value={lastSessionDate}
            onChange={handleLastSessionDateChnage}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="lastSessionTime" className="block text-gray-700 text-sm font-bold mb-2">
            Last Session Time
          </label>
          <input
            type="time"
            id="lastSessionTime"
            value={lastSessionTime}
            onChange={handleLastSessionTimeChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-4 focus:outline-none focus:shadow-outline">
          Cancel
        </button>

        </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-9xl">
      <h1 className="text-2xl font-bold mb-4">Session Schedule</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="w-2/12">Session Date</div>
        <div className="w-2/12">Start Time</div>
        <div className="w-2/12">End Time</div>
        <div className="w-4/12">Verified By</div>
      </div>
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Past/ Current Session's</h2>
        <div className="flex justify-between items-center mb-2">
          <div className="w-2/12">19-09-2024</div>
          <div className="w-2/12">Start Time</div>
          <div className="w-2/12">End Time</div>
          <div className="w-4/12"></div>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Upcoming Session's</h2>
        <div className="flex justify-between items-center mb-2">
          <div className="w-2/12">22-09-2024</div>
          <div className="w-2/12">01:00 pm</div>
          <div className="w-2/12">02:00 pm</div>
          <div className="w-4/12"></div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="w-2/12">25-09-2024</div>
          <div className="w-2/12">01:00 pm</div>
          <div className="w-2/12">02:00 pm</div>
          <div className="w-4/12"></div>
        </div>
      </div>
    </div>

    </div>
    </div>
    
  )
}

export default App
