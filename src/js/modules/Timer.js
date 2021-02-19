/**
 * A class for timing duration of things
 */
class Timer {
  constructor() {
    this.startTime = new Date().getTime();
  }
  end() {
    var ms = new Date().getTime() - this.startTime;
    var seconds = ms / 1000;
    var hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = parseInt(seconds / 60);
    seconds = seconds % 60;
    return [
      hours,
      minutes,
      seconds
    ];
  }
  endString() {
    var endTime = this.end();
    let str = '';
    if (endTime[0]) {
      str += `${endTime[0]} hours `;
    }
    if (endTime[1]) {
      str += `${endTime[1]} minutes `;
    }
    str += `${endTime[2]} seconds`;
    return str;
  }
}

export {Timer};