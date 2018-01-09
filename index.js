            
     $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });
    var config = {
        apiKey: "AIzaSyCnmcJ7JVTEKT1pBnLfT3jNiWbiMDaEkv0",
        authDomain: "node-c2eee.firebaseapp.com",
        databaseURL: "https://node-c2eee.firebaseio.com",
        projectId: "node-c2eee",
        storageBucket: "node-c2eee.appspot.com",
        messagingSenderId: "424763610679"
      };
      firebase.initializeApp(config);
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });
    var defaultDatabase = firebase.database();
    var firebaseRef = defaultDatabase.ref();
    var geoFireRef = firebaseRef.child("eventlocation");
    var newPostKey = geoFireRef.push().key;
    var geoFire = new GeoFire(geoFireRef);
    geoFire.set(newPostKey, [37.79, -122.41]).then(function() {
        console.log("Provided key has been added to GeoFire");
      }, function(error) {
        console.log("Error: " + error);
      });

      var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="mail' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="phone' + counter + '"/></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });

    function calculateRow(row) {
        var price = +row.find('input[name^="price"]').val();
    
    }
    
    function calculateGrandTotal() {
        var grandTotal = 0;
        $("table.order-list").find('input[name^="price"]').each(function () {
            grandTotal += +$(this).val();
        });
        $("#grandtotal").text(grandTotal.toFixed(2));
    }
