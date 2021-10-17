// User Story #1:

let $listItem = $(".list-item");

// $(document).ready(function () {
//     $listItem.remove();
// });

// User Story #2:

$("#add-skill-btn").on("click", function() {
    let $valOfEntry = $(".input-box").val();
    let $addedSkill = $(`<li class="list-item"><button class="remove-btn">X</button>${$valOfEntry}</li>`)
    $("#list-items").append($addedSkill);
    $(".input-box").val("");
    $(".remove-btn").on("click", function() {
        $(this).parent().remove();
    });
});

// User Story #3: above
