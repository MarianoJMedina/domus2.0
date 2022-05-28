document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('agenda');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      locale: 'es',
      headerToolbar: {
          left: 'prev next today',
          center: 'title',
          right: 'timeGridWeek timeGridDay'
      },
      buttonText: {
          today:    'Hoy',
          week:    'Semana',
          day:    'Día',
      }
    });
    calendar.render();
  });