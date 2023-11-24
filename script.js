setInterval(() => {
  let d = new Date();
  let day_ = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()]
  console.log(day_);
  let date_ = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let h = d.getHours();
  if (date_ < 10) {
    date_ = "0" + date_;
  }

  let AMPM = "AM";
  if (h >= 12) {
    AMPM = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  if (h > 12) {
    h = h - 12;
    if (h < 10) {
      h = "0" + h;
    }
  }
  if (h > 12) {
  }
  ampm.innerHTML = AMPM;
  day.innerHTML = day_;
  date.innerHTML = date_+"/"+month+"/"+year;
  hours1.innerHTML = h;
  minutes1.innerHTML = m;
  seconds1.innerHTML = s;
}, 1000);
