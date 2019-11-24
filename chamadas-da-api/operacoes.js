function pacientes(){
  var requestEndpoint = buscarPacientes();
  var pacientes_table = document.getElementById('pacientes_table');

  console.log(requestEndpoint)
    $.ajax({
        url: requestEndpoint,
        method: "GET",
        success: function (data) {


          // Create an empty <tr> element and add it to the 1st position of the table:

          // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:

var jsonData = data.data;
          // Method 2

           for(var i = 0; i < jsonData.length; i++)
           {
             var row = pacientes_table.insertRow(i+1);
             var cell1 = row.insertCell(0);
             var cell2 = row.insertCell(1);
             var cell3 = row.insertCell(2);
             var cell4 = row.insertCell(3);

             cell1.innerHTML = i+1;
             cell2.innerHTML = jsonData[i].attributes.nome_completo;
             cell3.innerHTML = '-------';
             cell4.innerHTML = jsonData[i].attributes.created_at
          /*   cell5.innerHTML = '<td><button type="button" class="btn btn-default btn-rounded">Remarcar</button>
                                <button type="button" class="btn btn-danger btn-rounded">Cancelar</button>
                                <button type="button" class="btn btn-success btn-rounded">Atender</button></td>'               // create a new row
*/
           }
        },
        error: function (error) {
          console.log(error);
        }
    });
}
