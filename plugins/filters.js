import Vue from 'vue'

Vue.filter("timeLeft", (seconds) => {
    if (seconds < 0) {
        return "now";
    } else if (seconds < 60) {
        return seconds + ` second${(seconds !== 0 )? 's':''}`;
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return minutes + ` minute${(minutes !== 1 )? 's':''}, ` + remainingSeconds + ` second${(remainingSeconds !== 1 )? 's':''}`;
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return hours + ` hour${(hours !== 1 )? 's':''}, ` + remainingMinutes + ` minute${(remainingMinutes !== 1 )? 's':''}`;
      } else if (seconds < 2592000) {
        const days = Math.floor(seconds / 86400);
        const remainingHours = Math.floor((seconds % 86400) / 3600);
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return days + ` day${(days !== 1 )? 's':''}, ` + remainingHours + ` hour${(remainingHours !== 1 )? 's':''}`;
      } else {
        const months = Math.floor(seconds / 2592000);
        const remainingDays = Math.floor((seconds % 2592000) / 86400);
        const remainingHours = Math.floor((seconds % 86400) / 3600);
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return months + ` month${(months !== 1 )? 's':''}, ` + remainingDays + ` day${(remainingDays !== 1 )? 's':''}`;
      }

})
