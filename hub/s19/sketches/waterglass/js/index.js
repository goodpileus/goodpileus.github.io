const $batteryInfo = document.querySelector('.battery-manager .info');
const $charging = $batteryInfo.querySelector('.battery-charging');
const $level = $batteryInfo.querySelector('.battery-level');
const $remaining = $batteryInfo.querySelector('.battery-remaining');

const $battery = document.querySelector('.battery-manager .battery');
const $batteryLevel = $battery.querySelector('.level');

navigator.getBattery()
  .then(function(battery) {
    (function init() {
      updateChargeInfo();
      updateLevelInfo();
      updateDischargingInfo();

      battery.addEventListener('chargingchange', updateChargeInfo);
      battery.addEventListener('levelchange', updateLevelInfo);
      battery.addEventListener('dischargingtimechange', updateDischargingInfo);
    }());

    function updateChargeInfo() {
      let $value = $charging.querySelector('.value');
      $value.innerHTML = (battery.charging ? 'Yes' : 'No');
      
      $battery.classList.remove('battery--is-plugged');
      if (battery.charging) {
        $battery.classList.add('battery--is-plugged');
      }
    }
    function updateLevelInfo() {
      let $value = $level.querySelector('.value');
      let perc = battery.level * 100;
      $value.innerHTML = (perc.toFixed(2) + '%');

      let percStep = perc - perc % 5;
      $batteryLevel.classList.add('level--' + percStep);
    }
    function updateDischargingInfo() {
      let $value = $remaining.querySelector('.value');
      $value.innerHTML = ~~battery.dischargingTime > 0 ? moment.duration(battery.dischargingTime, 'seconds')
                               .format('h[h] m[m]') : '--';
    }
  }
);