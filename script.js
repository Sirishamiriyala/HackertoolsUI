$(document).ready(function() {
  $('scan-form').submit(function(event) {
    event.preventDefault();
    console.log("sdfdfsdfdsfdsdfsfsdfsdfsddfs")
    // Get input values
    var formData = {
	'ip_address': $('#ip-address').val(),
	//'port_range': $('#port-range').val(),
	'scan_type': $('#scan-type').val(),
    }
   fetch("http://74.249.41.194:8000/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                })
                
                .then(response => response.json())
                .then(response => {

                  console.log("testdcfdsfdvf"+response)
                    $("#output-text").val(JSON.stringify(response));
                
                 })

    

  });
});
