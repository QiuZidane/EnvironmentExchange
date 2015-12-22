var environment = 0;
$.getJSON("envir.json", function(data,showalert) {
    // console.log("data = "+JSON.stringify(data));
    environment = data;
    // console.log("environment = "+environment);
}); 