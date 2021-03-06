// User Story #1:
$(document).ready(function() {

    // caching html elements within index.html file
    const $displayMessage = $(".add-skills-here"); // h3 element
    const $input = $(".input-box"); // input box
    const $devSkillsList = $("#list-items"); // list items for dev skills
    const $addSkillsBtn = $("#add-skill-btn"); // add skills button
    const $previousEntriesUl = $(".previous-entries");
    
    // declare variables

    // save local storage object in skillsDatabase variable
    const skillsDatabase = window.localStorage;

    // save length of local storage + 1 to skillCounter variable for adding skills to local storage
    let skillCounter = skillsDatabase.length + 1;

    // for loop through each value within local storage
    // push each value from local storage to previous entries ul
    for (let i = 1; i <= skillsDatabase.length; i++) {
        let listedSkill = skillsDatabase.getItem(i);
        $previousEntriesUl.append(`<li>${listedSkill}</li>`);
    };

    // User Story #2 + #3:

    // functions
    
    // function: add entered skill to local storage
    function addToStorage(key, skill) {
        skillsDatabase.setItem(key, skill);
        $previousEntriesUl.append(`<li>${skill}</li>`);
    };

    // add skills button event listener
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
            // clear display message and hide it with css to remove additional whitespace
            $displayMessage.text(" ");
            $displayMessage.css("display", "none");
            // css display applied to previous entries

            // create delete button as it does not exist on page load
            const $deleteBtn = $('<button class="remove-btn">X</button>');

            // delete button event listener
            $deleteBtn.on("click", function() {
                $(this).parent().remove();
            });

            // prepend delete button to list item
            $addedSkill.prepend($deleteBtn);

            // append added list item to ul
            $devSkillsList.append($addedSkill);

            // clear input box after user enters skill
            $input.val("");

            // add skill to local storage
            addToStorage(skillCounter, $valOfEntry);

            // add one to skill counter
            skillCounter++;
        };
    });
});
