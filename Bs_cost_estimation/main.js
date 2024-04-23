import { mainGame } from "https://cdn.jsdelivr.net/gh/moshiuzzaman/CDN/Bs_cost_estimation/Game/Game%20Home/MainGame.js";const steps = mainGame;
console.log(mainGame);

let navigationHistory = [];
let selectedOptions = [];
function myQuestion(question, index, parentContainerId = "Cost_Estimation") {
    navigationHistory.push({ question, index });
    const container = document.createElement("div");
    container.className = "Cost_Estimation_question-container";
    if (question.question) {
        const questionEl = document.createElement("h1");
        questionEl.className = "Cost_Estimation_question-title";
        questionEl.textContent = question.question;
        container.appendChild(questionEl);
    }
    if (question.questionTitle) {
        const questionTitleEl = document.createElement("p");
        questionTitleEl.className = "Cost_Estimation_question-title-content";
        questionTitleEl.textContent = question.questionTitle;
        container.appendChild(questionTitleEl);
    }

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "Cost_Estimation_options-container";
    question.options.forEach((option) => {
        const optionContainer = document.createElement("div");
        optionContainer.className = "Cost_Estimation_option-container";
        optionsContainer.appendChild(optionContainer);
        if (typeof option !== "string" && option.imageURL) {
            const image = document.createElement("img");
            image.src = option.imageURL;
            image.alt = option.label + " image";
            image.className = "option-image";
            optionContainer.appendChild(image);
        }
        const textLabel = document.createElement("div");
        textLabel.className = "text-label";
        textLabel.textContent =
            typeof option === "string" ? option : option.label;
        optionContainer.appendChild(textLabel);
        optionContainer.onclick = () => {
            // console.log(`Selected Option: ${textLabel.textContent}`);
            selectedOptions.push(textLabel.textContent);
            updateSelectedOptionsList();
            if (
                typeof option !== "string" &&
                option.children &&
                option.children.length > 0
            ) {
                document.getElementById(parentContainerId).innerHTML = "";
                option.children.forEach((childQuestion, childIndex) =>
                    myQuestion(childQuestion, childIndex, parentContainerId)
                );
            } else {
                createNameInputForm(parentContainerId);
            }
        };
        optionsContainer.appendChild(optionContainer);
    });

    document.getElementById(parentContainerId).innerHTML = "";
    document.getElementById(parentContainerId).appendChild(optionsContainer);
    container.appendChild(optionsContainer);
    if (navigationHistory.length > 1) {
        const backButtonContainer = document.createElement("div");
        backButtonContainer.className = "Cost_Estimation_back-button-container";

        const newBackButton = document.createElement("button");
        newBackButton.className = "Cost_Estimation_back-button";
        newBackButton.textContent = "Prev";
        newBackButton.onclick = () => {
            navigationHistory.pop();
            const previousState = navigationHistory.pop();
            if (previousState) {
                myQuestion(
                    previousState.question,
                    previousState.index,
                    parentContainerId
                );
            }
            selectedOptions.pop();
            updateSelectedOptionsList(false);
        };
        backButtonContainer.appendChild(newBackButton);
        container.appendChild(backButtonContainer);
    }
    document.getElementById(parentContainerId).innerHTML = "";
    document.getElementById(parentContainerId).appendChild(container);
}

function createNameInputForm(parentContainerId) {
    document.body.className = "body-center-form";
    const parentContainer = document.getElementById(parentContainerId);
    parentContainer.innerHTML = "";
    const form = document.createElement("form");
    form.id = "nameForm";
    form.className = "form-container";
    const formTitle = document.createElement("h1");
    formTitle.textContent =
        "Fill in the Below Form to Receive a Detailed Estimation";
    formTitle.className = "form-title";
    const formDescription = document.createElement("p");
    formDescription.textContent =
        "You're just one step away from receiving a detailed estimation from our team.";
    formDescription.className = "form-description";
    parentContainer.appendChild(formTitle);
    parentContainer.appendChild(formDescription);
    parentContainer.appendChild(form);

    const fields = [
        {
            id: "name",
            type: "text",
            placeholder: "Your Name",
            className: "form-input initial-field",
            required: true,
        },
        {
            id: "email",
            type: "email",
            placeholder: "Your Email",
            className: "form-input initial-field",
            required: true,
        },
        {
            id: "contact",
            type: "number",
            placeholder: "Contact No",
            className: "form-input secondary-field",
        },
        {
            id: "company",
            type: "text",
            placeholder: "Company",
            className: "form-input secondary-field",
        },
        {
            id: "wheredid",
            type: "select",
            options: [
                "-- Where Did You Hear About Us --",
                "Google",
                "Clutch",
                "People Per Hour",
                "GoodFirms",
                "Personal Reference",
                "Social Media",
                "Other",
            ],
            className: "form-input secondary-field",
        },
        {
            id: "YourRegion",
            type: "select",
            options: [
                "Your Region",
                "Europe",
                "North America",
                "South America",
                "Asia",
                "Africa",
                "Australia",
            ],
            className: "form-input secondary-field",
        },
        {
            id: "fileUpload",
            type: "file",
            className: "form-input secondary-field",
        },
        {
            id: "message",
            type: "textarea",
            placeholder: "Message...",
            className: "form-input secondary-field",
        },
    ];

    fields.forEach((field) => {
        let inputElement;
        if (field.type === "select") {
            inputElement = document.createElement("select");
            field.options.forEach((option) => {
                const optionElement = document.createElement("option");
                optionElement.value =
                    option === "-- Where Did You Hear About Us --"
                        ? ""
                        : option;
                optionElement.textContent = option;
                inputElement.appendChild(optionElement);
            });
        } else if (field.type === "textarea") {
            inputElement = document.createElement("textarea");
            inputElement.style.width = "100%";
        } 
        
        else {
            inputElement = document.createElement("input");
            inputElement.type = field.type;
        }
        inputElement.id = field.id;
        inputElement.name = field.id;
        inputElement.placeholder = field.placeholder;
        inputElement.className = field.className;
        if (field.required) inputElement.required = true;
        if (field.className.includes("secondary-field"))
            inputElement.style.display = "none";
        form.appendChild(inputElement);
    });

  
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.type = "button";
    nextButton.id = "nextButton";
    nextButton.className = "submit-button initial-field";
    form.appendChild(nextButton);

    const prevButton = document.createElement("button");
    prevButton.textContent = "Prev";
    prevButton.type = "button";
    prevButton.id = "prevButton";
    prevButton.className = "submit-button secondary-field";
    prevButton.style.display = "none";
    form.appendChild(prevButton);

    nextButton.addEventListener("click", function () {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            alert("Please Give the information");
            return;
        }

        document.querySelectorAll(".initial-field").forEach((element) => {
            element.style.display = "none";
            form.style.display='grid'
        });
        document.querySelectorAll(".secondary-field").forEach((element) => {
            element.style.display = "";
        });
        prevButton.style.display = "";
        nextButton.style.display = "none";

        if (!document.querySelector('input[type="submit"]')) {
            const submitButton = document.createElement("input");
            submitButton.type = "submit";
            submitButton.value = "Submit";
            submitButton.className = "submit-button";
            form.appendChild(submitButton);
        }
    });
    prevButton.addEventListener("click", function () {
        document.querySelectorAll(".initial-field").forEach((element) => {
            element.style.display = "";
            form.style.display='flex'
        });
        document.querySelectorAll(".secondary-field").forEach((element) => {
            element.style.display = "none";
        });
        nextButton.style.display = "";
        prevButton.style.display = "none";
        const submitButton = document.querySelector('input[type="submit"]');
        if (submitButton) {
            form.removeChild(submitButton);
        }
    });
    form.onsubmit = function (event) {
        event.preventDefault();
        logFormData();
    };

    function logFormData() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;
        const company = document.getElementById("company").value;
        const wheredid = document.getElementById("wheredid").value;
        const YourRegion = document.getElementById("YourRegion").value;
        const message = document.getElementById("message").value;
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Contact No:", contact);
        console.log("Company:", company);
        console.log("Where Did You Hear About Us:", wheredid);
        console.log("Your Region:", YourRegion);
        console.log("Message:", message);
    }
}
if (steps && steps.length > 0) {
    myQuestion(steps[0], 0, "Cost_Estimation");
}

function myform(parentContainerId) {
    const parentContainer = document.getElementById(parentContainerId);
    parentContainer.innerHTML = "";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    const form = document.createElement("form");
    form.id = "nameForm";
    form.style.maxWidth = "800px";
    form.style.margin = "20px auto 0";
    form.style.display = "grid";
    form.style.gridTemplateColumns = "1fr 1fr";
    form.style.gap = "40px";
    const fields = [
        { id: "name", placeholder: "Your Name" },
        { id: "email", placeholder: "Your Email" },
    ];
    fields.forEach((field) => {
        const input = document.createElement("input");
        input.type = field.id === "email" ? "email" : "text";
        input.id = field.id;
        input.name = field.id;
        input.required = true;
        input.style.width = "400px";
        input.placeholder = field.placeholder;
        input.style.border = "none";
        input.style.padding = "10px";
        input.style.background = "#e0e3e7";
        input.style.color = "#636669";
        form.appendChild(input);
    });
    parentContainer.appendChild(form);
    form.onsubmit = function (event) {
        event.preventDefault();
    };
}
function updateSelectedOptionsList(removeIconFromLastItem = true) {
    const mySelectedOptions = document.querySelector(
        ".Cost_Estimation_mySelectOption"
    );
    if (selectedOptions.length === 0) {
        mySelectedOptions.style.display = "none";
    } else {
        mySelectedOptions.style.display = "block";
    }
    const list = document.getElementById("Cost_Estimation_selectedOptionsList");
    list.innerHTML = "";
    selectedOptions.forEach((option, index) => {
        const li = document.createElement("li");
        li.className = "Cost_Estimation_selectedOptionsList-item";
        li.textContent = option;
        // if (!(removeIconFromLastItem && index === selectedOptions.length - 1)) {
        //     const icon = document.createElement('p');
        //     icon.textContent = '↡';
        //     li.appendChild(icon);
        // }
        list.appendChild(li);
    });
}
function removeIconForLastItem() {
    updateSelectedOptionsList(true);
}
updateSelectedOptionsList(false);

// add style in head
const style = document.createElement("style");
style.innerHTML = `
p {
    font-size: 20px;
    color: #000;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins-Bold, sans-serif;
  }
  
  .Cost_Estimation_mySelectOption {
    color: #00a7e5;
  }
  
  .Cost_Estimation_left-side {
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  
  button {
    background-color: #3c17b4;
    color: #fff;
    border: none;
    padding: 100px 200px;
    margin: 50px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #7d98b5;
  }
  .Cost_Estimation_question-container {
    text-align: center;
    color: #595959;
    font-weight: 700;
  }
  .Cost_Estimation_question-title,.form-title {
    
    color: #00a7e5;
    font-size: 38px;
    line-height: normal;
    font-weight: 800;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #00a7e5 0, #015979);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 100;
    position: relative;
    margin: 10px 0 15px;
  }
  p.Cost_Estimation_question-title-content {
    color: #444;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    position: relative;
  }
  .Cost_Estimation_options-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
  }
  .Cost_Estimation_option-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin-top: 30px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
  }
  .option-image {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    filter: grayscale(100%);
  }
  .Cost_Estimation_option-container:hover .option-image {
    filter: sepia(100%) hue-rotate(155deg) brightness(90%) saturate(300%);
  }
  .Cost_Estimation_option-container:hover {
    box-shadow: 0 10px 50px 0 rgba(30, 177, 218, 0.5);
  }
  .body-center-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  #nameForm {
    max-width: 800px;
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    column-gap: 30px;
  }
  
  .submit-button {
    display: block;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
  }
  .form-input,
  .submit-button {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 425px;
    box-sizing: border-box;
    background: #f1f1f1;
  }
  .submit-button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    height: 50px;
  }
  .submit-button:hover {
    background-color: #0056b3;
  }
  /* .form-heading,
  .form-title {
    text-align: center;
    color: #00a7e5;
    margin-bottom: 0px;
  } */
  .form-description {
    text-align: center;
    color: #595959;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  
  .Cost_Estimation_container {
    grid-template-columns: calc(100% - 250px) 250px;
    width: 100vw;
    gap: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Cost_Estimation_left-side {
    margin-top: 50px;
  }
  .Cost_Estimation_right-side {
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 1024px) {
    .Cost_Estimation_container {
        grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .Cost_Estimation_container {
        grid-template-columns: 1fr;
    }
  
    .Cost_Estimation_left-side,
    .Cost_Estimation_right-side {
        height: 50vh;
    }
  
    button {
        padding: 10px 20px;
    }
  }
  
  @media (max-width: 768px) {
    .Cost_Estimation_container {
        grid-template-columns: 1fr;
    }
  
    .Cost_Estimation_right-side {
        order: 1;
    }
  
    .Cost_Estimation_left-side {
        order: 2;
        margin-top: 20px;
    }
  
    button {
        padding: 10px 20px;
    }
  }
  
  @media (max-width: 1024px) {
    #nameForm {
        grid-template-columns: 1fr;
    }
    .name-form-input,
    .form-input,
    .submit-button {
        width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    .Cost_Estimation_container {
        grid-template-columns: 1fr;
    }
  
    .Cost_Estimation_left-side {
        margin-top: 20px;
        height: 60vh;
    }
  
    .Cost_Estimation_mySelectOption {
        font-size: 1.2em;
    }
  
    button {
        padding: 10px 20px;
    }
  }
  
  @media (max-width: 1024px) {
    .Cost_Estimation_left-side {
        height: 70vh;
    }
  }
  @media (max-width: 600px) {
    .Cost_Estimation_left-side,
    .Cost_Estimation_right-side {
        padding: 10px;
        margin-top: 10px;
    }
  }
  button {
    background-color: #3c17b4;
    color: #fff;
    border: none;
    padding: 15px 30px;
    margin: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  @media (max-width: 1024px) {
    .Cost_Estimation_container {
        grid-template-columns: 1fr;
    }
  
    .Cost_Estimation_left-side,
    .Cost_Estimation_right-side {
        margin-top: 20px;
        height: 60vh;
        width: auto;
    }
  }
  
  @media (max-width: 768px) {
    .Cost_Estimation_left-side,
    .Cost_Estimation_right-side {
        height: 50vh;
    }
  
    button {
        padding: 10px 20px;
    }
  }
  
  @media (max-width: 600px) {
    .Cost_Estimation_left-side,
    .Cost_Estimation_right-side {
        padding: 10px;
        margin-top: 10px;
    }
  }
  
  
  .name-form-input {
    width: 100%;
    padding: 10px;
    background: #e0e3e7;
    color: #636669;
  }
  
  button:hover {
    background-color: #7d98b5;
  }
  
  .Cost_Estimation_mySelectOption {
    color: #00a7e5;
    font-size: 1.5em;
  }
  
  .submit-button {
    color: #fff;
    cursor: pointer;
    height: 50px;
    border-radius: 30px;
    background-color: #099fda;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .Cost_Estimation_back-button-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .Cost_Estimation_back-button {
    padding: 10px 100px;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 50px;
    border-radius: 30px;
    background-color: #099fda;
  }
  
  li.Cost_Estimation_selectedOptionsList-item {
    border: 1px solid #23a0d6;
    margin-bottom: 11px;
    text-align: center;
    padding: 8px;
    border-radius: 6px;
    min-width: 150px;
  }
  
  form#nameForm input:not([type="submit"]), form#nameForm select, form#nameForm textarea{
    border: none !important;
    height: 50px;
    color: #000;
    outline: none;
    background: #f1f1f1;
    border-radius: 10px;
    font-size: 16px;
    transition: all .5s ease;
  }
  
  form#nameForm input:focus {
    border: 1px solid #00a7e5 !important;
  }
  
    `;
document.head.appendChild(style);




