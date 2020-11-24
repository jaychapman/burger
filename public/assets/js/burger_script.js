$(function () {
    $(".addBurgerForm").on("submit", function (event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#addBurger").val().trim(),
        devoured: 0,
      };
      
    
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger,
      }).then(function (res) {
        console.log("Added new burger");
        location.reload();
      });
    });

  
    $(".eatBurger").on("click", function (event) {
      event.preventDefault();
  
      let id = $(this).data("id");
      let devouredState = {
        devoured: 1,
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState,
      }).then(function () {
        console.log("Burger devoured");
        location.reload();
      });
    });
  
    $(".deleteBurger").on("click", function (event) {
      event.preventDefault();
  
      let id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id,
      }).then(location.reload());
    });
  });


  