// User Story #1:
$(document).ready(function() {

    // caching html elements
    const $displayMessage = $(".add-skills-here"); // h3 element
    const $input = $(".input-box"); // input box
    const $devSkillsList = $("#list-items"); // list items for dev skills
    const $addSkillsBtn = $("#add-skill-btn"); // add skills button

// User Story #2 + #3:

    $addSkillsBtn.on("click", function() {
        
        // grabbing user input
        let $valOfEntry = $input.val();

        // create list item element using the user's input
        let $addedSkill = $(`<li class="list-item"> ${$valOfEntry}</li>`);

        // conditional logic
        if ($valOfEntry.length === 0) {
            $displayMessage.css("display", "block");
            $displayMessage.text("Please enter a valid skill!");
            // return statement added to prevent appending an empty string as a skill on the list
            return;
        } else {
            $displayMessage.text(" ");
            $displayMessage.css("display", "none");

            const $deleteBtn = $('<button class="remove-btn">X</button>');

            $deleteBtn.on("click", function() {
                $(this).parent().remove();
            });
            $addedSkill.prepend($deleteBtn);
            $devSkillsList.append($addedSkill);
            $input.val("");
        };
    });
});
