$(document).ready(function () {
  $('#get-data').click(function () {
    var showTable = $('#show-table');

    $.getJSON('data/service-prices.json', function (data) {
      console.log(data);

      var services = data.services.map(function (service) {
        return service.Name + '</td>' + 
        '<td>' + service.Price + '</td>' +
        '<td>' + service.Time + '</td>';
      });

        showTable.empty();
        if (services.length) {
            var cell = '<td>' + services.join('<td>');
            var rows = $('<tr />').html(cell);
            showTable.append(rows);
        }
    });
  });
});