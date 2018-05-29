'use strict';
//event handlers for buttons
$(function () {

    //function for adding new burgers
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let  newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };
        console.log(newBurger);

        //send POST request on click
        $.ajax("/api/burgers", {
            method: "POST",
            url: "/api/burgers",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger Added!!");
                location.reload();
            }
        );
    });

    //function for devouring burgers
    $(".devoured").on("click", function (event) {
        let id = $(this).data("id");
        let nowDevoured = $(this).data("nowdevoured");
        if (nowDevoured === false) {
            //send PUT request
            $.ajax({
                method: "PUT",
                url: "/api/burgers/" + id
            }).then(function () {
                console.log("burger now eaten");
                location.reload();
            }
            );
        } else {
            $(this).prop("disabled", true);
        }
    });

    //no code below this line
});