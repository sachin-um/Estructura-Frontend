import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

import '../../assets/admindb.css';
import Header from '../../components/adminDashboard/Header';
import { tokens } from '../../theme';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens;
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        allDay: selected.allDay,
        end: selected.endStr,
        id: `${selected.dateStr}-${title}`,
        start: selected.startStr,
        title,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`,
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header subtitle="Full Calendar Interactive Page" title="Calendar" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          backgroundColor={colors.primary[400]}
          borderRadius="4px"
          flex="1 1 20%"
          p="15px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  borderRadius: '2px',
                  margin: '10px 0',
                }}
                key={event.id}
              >
                <ListItemText
                  primary={event.title}
                  secondary={<Typography></Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            headerToolbar={{
              center: 'title',
              left: 'prev,next today',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialEvents={[
              {
                date: '2022-09-14',
                id: '12315',
                title: 'All-day event',
              },
              {
                date: '2022-09-28',
                id: '5123',
                title: 'Timed event',
              },
            ]}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            dayMaxEvents={true}
            editable={true}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            height="75vh"
            initialView="dayGridMonth"
            select={handleDateClick}
            selectMirror={true}
            selectable={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
