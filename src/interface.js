$ (document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$('#set_temperature').click(function() { 
   thermostat.setTemperature($('#degrees').val());
     updateTemperature();
  });

$('#reset_temperature').click(function() {
  thermostat.reset();
  updateTemperature();
});

$('#on').click(function() {
  thermostat.savingsOn();
  $('#psm').text('Power Saving Mode: On')
});


$('#off').click(function() {
  thermostat.savingsOff();
  $('#psm').text('Power Saving Mode: Off')
});

$('#view_usage').click(function(){
  $('#usage').text(thermostat.viewUsage());
});

function updateTemperature() {
   $('#thermostat').text(thermostat.temperature);
 };
});

