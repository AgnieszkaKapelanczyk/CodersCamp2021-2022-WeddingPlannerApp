import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Card } from '@material-ui/core';

const localizer = momentLocalizer(moment)

const WeddingCalendar = () => {
  return (
    <Card style={{display:'flex', flexDirection:'column', margin:'5rem 8rem 5rem 3rem'}}>
      <div >
    <Calendar className="myCustomHeight"
      localizer={localizer}
      //events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
    </Card>
    
  )
}

export default WeddingCalendar