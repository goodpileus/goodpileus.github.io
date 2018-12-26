$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	var light = document.getElementById('light');

	if (n < 10) {
	  light.className = "day";
	}
	else if (n < 16) {
	  light.className = "sunset";
	}
	else {
	  light.className = "night";
	}

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }

  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
			var time = document.querySelectorAll('.time');
			for (i = 0; i < time.length; i++) {
				time[i].innerHTML = h + ":" + m + ":" + s;
			}
      t = setTimeout(function () {
          startTime()
      }, 500);
  }
  startTime();

	(function titleScroller(text) {
    document.title = text;
    console.log(text);
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}("the light in this house is time "));
});
