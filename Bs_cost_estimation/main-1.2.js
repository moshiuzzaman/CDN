import { Json } from "./Script/JSON.js";

document.getElementById("cost_Estimation_container").innerHTML += `<div
    class="cost_Estimation_right-side"
    id="formContainer"
    style="display: none"
>
    <h1 class="cost_Estimation_form-title">
        Fill in the Below Form to Receive a Detailed Estimation
    </h1>
    <p class="form-description">
        You're just one step away from receiving a detailed
        estimation from our team.
    </p>
    <form id="cost_estimation_form" class="form-container">
        <input
            id="cost_estimation_form_name"
            type="text"
            placeholder="Your Name"
            class="cost_Estimation_form-input initial-field"
            required
        />
        <input
            id="cost_estimation_form_email"
            type="email"
            placeholder="Your Email"
            class="cost_Estimation_form-input initial-field"
            required
        />
        <input
            style="display: none"
            id="cost_estimation_form_contactNo"
            type="number"
            placeholder="Contact No"
            class="cost_Estimation_form-input cost_Estimation_secondary-field"
        />
        <input
            style="display: none"
            id="cost_estimation_form_company"
            type="text"
            placeholder="Company"
            class="cost_Estimation_form-input cost_Estimation_secondary-field"
        />
        <select
            style="display: none"
            id="cost_estimation_form_wheredid"
            class="cost_Estimation_form-input cost_Estimation_secondary-field"
        >
            <option value="">
                -- Where Did You Hear About Us --
            </option>
            <option value="Google">Google</option>
            <option value="Clutch">Clutch</option>
            <option value="People Per Hour">People Per Hour</option>
            <option value="GoodFirms">GoodFirms</option>
            <option value="Personal Reference">
                Personal Reference
            </option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
        </select>
        <select
            style="display: none"
            id="cost_estimation_form_YourRegion"
            class="cost_Estimation_form-input cost_Estimation_secondary-field"
        >
            <option value="">Your Region</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
        </select>
        <textarea
            style="display: none"
            id="cost_estimation_form_message"
            placeholder="Message..."
            class="cost_Estimation_form-input cost_Estimation_secondary-field"
        ></textarea>
    </form>
    <div class="cost_Estimation_form_button">
        <button
            type="button"
            id="nextButton"
            class="cost_Estimation_submit-button initial-field"
        >
            Next
        </button>
        <button
            type="button"
            id="prevButton"
            class="cost_Estimation_submit-button cost_Estimation_secondary-field"
            style="display: none"
        >
            Prev
        </button>
        <input
            id="cost_Estimation_submit-button"
            type="submit"
            value="Submit"
            class="cost_Estimation_submit-button cost_Estimation_secondary-field"
            style="display: none"
        />
    </div>
</div>
<div id="Cost_Estimation" class="cost_Estimation_right-side"></div>
<div class="cost_Estimation_left-side">
    <h2 class="cost_Estimation_mySelectOption">Selected Options</h2>
    <h3 id="cost_estimation_total">Total: 
        <span id="cost_Estimation_totalPrice">0</span>
        </h3>
    <ul id="cost_Estimation_selectedOptionsList"></ul>
</div>`;

const steps = Json;
let navigationHistory = [];
let selectedOptions = [];
const getTotalPrice = () => {
    return selectedOptions.reduce((acc, option) => acc + option.price, 0);
};
document.addEventListener("DOMContentLoaded", () => {
    if (steps && steps.length > 0) {
        renderQuestion(steps[0], 0, "Cost_Estimation");
    }
    updateSelectedOptionsList(false);
});

function renderQuestion(question, index, parentContainerId) {
    navigationHistory.push({ question, index });
    const container = createQuestionContainer(question);

    const optionsContainer = createOptionsContainer(
        question.options,
        question,
        parentContainerId
    );
    container.appendChild(optionsContainer);

    if (navigationHistory.length > 1) {
        const backButton = createBackButton(parentContainerId);
        container.appendChild(backButton);
    }

    const parentContainer = document.getElementById(parentContainerId);
    parentContainer.innerHTML = "";
    parentContainer.appendChild(container);
}

function createQuestionContainer(question) {
    const container = document.createElement("div");
    container.className = "cost_Estimation_question-container";

    if (question.question) {
        const questionEl = document.createElement("h1");
        questionEl.className = "cost_Estimation_question-title";
        questionEl.textContent = question.question;
        container.appendChild(questionEl);
    }

    if (question.questionTitle) {
        const questionTitleEl = document.createElement("p");
        questionTitleEl.className = "cost_Estimation_question-title-content";
        questionTitleEl.textContent = question.questionTitle;
        container.appendChild(questionTitleEl);
    }

    return container;
}

function createOptionsContainer(options, question, parentContainerId) {
    // if options[0].label==='skip' then show a input field for brief description and a next button
    if (options[0].label === "Skip" || options[0].label === "INPUT FORM") {
        return handleDetailsForm(options, question, parentContainerId);
    }

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "cost_Estimation_options-container";

    options.forEach((option) => {
        const optionContainer = document.createElement("div");
        optionContainer.className = "cost_Estimation_option-container";

        if (typeof option !== "string" && option.imageURL) {
            const image = document.createElement("img");
            image.src = option.imageURL;
            image.alt = `${option.label} image`;
            image.className = "cost_estimation_option-image";
            optionContainer.appendChild(image);
        }

        const textLabel = document.createElement("div");
        textLabel.className = "text-label";
        textLabel.textContent =
            typeof option === "string" ? option : option.label;
        optionContainer.appendChild(textLabel);

        optionContainer.onclick = () =>
            handleOptionClick(option, question, parentContainerId);
        optionsContainer.appendChild(optionContainer);
    });

    return optionsContainer;
}

const handleDetailsForm = (options, question, parentContainerId) => {
    const input = document.createElement("textarea");
    input.placeholder =
        "Please provide a brief description of the changes required";
    input.className = "cost_Estimation_input";

    const nextButton = document.createElement("button");
    nextButton.className = "cost_Estimation_next-button";
    nextButton.textContent = "Next";
    nextButton.style.display = "none"; // Hide the Next button initially

    const skipButton = document.createElement("button");
    skipButton.className = "cost_Estimation_skip-button";
    skipButton.textContent = "Skip";

    const handleButtonVisibility = () => {
        if (input.value.trim() === "") {
            skipButton.style.display = "block";
            nextButton.style.display = "none";
        } else {
            skipButton.style.display = "none";
            nextButton.style.display = "block";
        }
    };

    input.oninput = handleButtonVisibility; // Call handleButtonVisibility on input change

    nextButton.onclick = () =>
        handleOptionClick(
            {
                label: input.value,
                children: options[0].children,
            },
            question,
            parentContainerId
        );

    skipButton.onclick = () =>
        handleOptionClick(
            {
                label: "Skip",
                children: options[0].children,
            },
            question,
            parentContainerId
        );

    const optionsContainer = document.createElement("div");
    optionsContainer.className =
        "cost_Estimation_options-container cost_Estimation_options-container-input";
    optionsContainer.appendChild(input);
    optionsContainer.appendChild(nextButton);
    optionsContainer.appendChild(skipButton);

    // Initial call to set button visibility correctly
    handleButtonVisibility();

    return optionsContainer;
};

function handleOptionClick(option, question, parentContainerId) {
    selectedOptions.push({
        title: question.question,
        value: typeof option === "string" ? option : option.label,
        price: option.price || 100,
    });
    console.log(selectedOptions);
    updateSelectedOptionsList();

    if (
        typeof option !== "string" &&
        option.children &&
        option.children.length > 0
    ) {
        document.getElementById(parentContainerId).innerHTML = "";
        option.children.forEach((childQuestion, childIndex) =>
            renderQuestion(childQuestion, childIndex, parentContainerId)
        );
    } else {
        document.getElementById("Cost_Estimation").style.display = "none";
        document.getElementById("formContainer").style.display = "flex";
    }
}

function createBackButton(parentContainerId) {
    const backButtonContainer = document.createElement("div");
    backButtonContainer.className = "cost_Estimation_back-button-container";

    const backButton = document.createElement("button");
    backButton.className = "cost_Estimation_back-button";
    backButton.textContent = "Prev";
    backButton.onclick = () => {
        navigationHistory.pop();
        const previousState = navigationHistory.pop();
        if (previousState) {
            renderQuestion(
                previousState.question,
                previousState.index,
                parentContainerId
            );
        }
        selectedOptions.pop();
        updateSelectedOptionsList(false);
    };

    backButtonContainer.appendChild(backButton);
    return backButtonContainer;
}

function updateSelectedOptionsList(removeIconFromLastItem = true) {
    const mySelectedOptions = document.querySelector(
        ".cost_Estimation_mySelectOption"
    );
    const totalPriceDiv = document.getElementById("cost_estimation_total");

    document.getElementById(
        "cost_Estimation_totalPrice"
    ).innerText = `£${getTotalPrice()}`;
    if (selectedOptions.length === 0) {
        mySelectedOptions.style.display = "none";
        totalPriceDiv.style.display = "none";
    } else {
        mySelectedOptions.style.display = "block";
        totalPriceDiv.style.display = "block";
    }
    const list = document.getElementById("cost_Estimation_selectedOptionsList");
    list.innerHTML = "";
    selectedOptions.forEach((option, index) => {
        const li = document.createElement("li");
        li.className = "cost_Estimation_selectedOptionsList-item";
        const label = document.createElement("p");
        label.classList.add("cost_Estimation_selectedOptionsList_item_label");
        label.innerText = option.value;
        const price = document.createElement("p");
        price.classList.add("cost_Estimation_selectedOptionsList_item_label");
        price.innerText = `£${option.price}`;

        li.appendChild(label);
        li.appendChild(price);

        list.appendChild(li);
    });
}

document
    .getElementById("nextButton")
    .addEventListener("click", async function () {
        const nameInput = document.getElementById("cost_estimation_form_name");
        const emailInput = document.getElementById(
            "cost_estimation_form_email"
        );
        const initialFormSubmitted = await initialFormSubmit();
        if (!initialFormSubmitted) {
            alert("Failed to submit the form");
            return;
        }

        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            alert("Please provide the required information");
            return;
        }

        document.querySelectorAll(".initial-field").forEach((element) => {
            element.style.display = "none";
            document.getElementById("cost_estimation_form").style.display =
                "grid";
        });
        document
            .querySelectorAll(".cost_Estimation_secondary-field")
            .forEach((element) => {
                element.style.display = "";
            });
        document.getElementById("prevButton").style.display = "";
        document.getElementById("nextButton").style.display = "none";

        if (!document.querySelector('input[type="submit"]')) {
            const submitButton = document.createElement("input");
            submitButton.type = "submit";
            submitButton.value = "Submit";
            submitButton.className = "cost_Estimation_submit-button";
            document.getElementById("nameForm").appendChild(submitButton);
        }
    });

document.getElementById("prevButton").addEventListener("click", function () {
    document.querySelectorAll(".initial-field").forEach((element) => {
        element.style.display = "";
    });
    document
        .querySelectorAll(".cost_Estimation_secondary-field")
        .forEach((element) => {
            element.style.display = "none";
        });
    document.getElementById("prevButton").style.display = "none";
    document.getElementById("nextButton").style.display = "";
    const submitButton = document.querySelector('input[type="submit"]');
    if (submitButton) {
        submitButton.style.display = "none";
    }
});

document
    .getElementById("cost_Estimation_submit-button")
    .addEventListener("click", async function (event) {
        console.log("Form submitted");
        event.preventDefault();
        const formSubmitted = await handleFormSubmit();
        if (!formSubmitted) {
            alert("Failed to submit the form");
            return;
        }
        alert("Form submitted successfully");
        // window.location.reload();
    });

const initialFormSubmit = async () => {
    const name = document.getElementById("cost_estimation_form_name").value;
    const email = document.getElementById("cost_estimation_form_email").value;

    const res = await fetch(
        "https://stage.brainstation-23.co.uk/wp-json/endpoints/cost-estimator/data/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "seleced-items": selectedOptions,
                totalPrice: getTotalPrice(),
                name,
                email,
                key: 1234,
            }),
        }
    );
    const data = await res.json();

    if (data.status) {
        console.log("Data has been submitted successfully");
        return true;
    } else {
        console.log("Failed to submit the data");
        return false;
    }
};

const handleFormSubmit = async () => {
    const contactNo = document.getElementById(
        "cost_estimation_form_contactNo"
    ).value;
    const companyName = document.getElementById(
        "cost_estimation_form_company"
    ).value;
    const whereFind = document.getElementById(
        "cost_estimation_form_wheredid"
    ).value;
    const region = document.getElementById(
        "cost_estimation_form_YourRegion"
    ).value;
    const message = document.getElementById(
        "cost_estimation_form_message"
    ).value;
    const name = document.getElementById("cost_estimation_form_name").value;
    const email = document.getElementById("cost_estimation_form_email").value;

    const res = await fetch(
        "https://stage.brainstation-23.co.uk/wp-json/endpoints/cost-estimator/final-data/",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "seleced-items": selectedOptions,
                totalPrice: getTotalPrice(),
                name,
                email,
                contactNo,
                companyName,
                whereFind,
                region,
                message,

                key: 1234,
            }),
        }
    );
    const data = await res.json();
    console.log(data);
    if (data.status) {
        console.log("Data has been submitted successfully");
        return true;
    } else {
        console.log("Failed to submit the data");
        return false;
    }
};

const style = document.createElement("style");
style.innerHTML = `.cost_Estimation_container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins-Bold, sans-serif;
    width: 95%;
}

.cost_Estimation_mySelectOption {
    color: #00a7e5;
}

.cost_Estimation_left-side {
    padding: 20px;
    border-radius: 5px;
    margin-top: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cost_Estimation_question-container {
    text-align: center;
    color: #595959;
    font-weight: 700;
}
.cost_Estimation_question-title,
.cost_Estimation_form-title {
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
    text-align: center;
}
p.cost_Estimation_question-title-content {
    color: #444;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    position: relative;
}
.cost_Estimation_options-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}
.cost_Estimation_option-container {
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
.cost_estimation_option-image {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    filter: grayscale(100%);
}
.cost_Estimation_option-container:hover .cost_estimation_option-image {
    filter: sepia(100%) hue-rotate(155deg) brightness(90%) saturate(300%);
}
.cost_Estimation_option-container:hover {
    box-shadow: 0 10px 50px 0 rgba(30, 177, 218, 0.5);
}
.body-center-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
#cost_estimation_form {
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    column-gap: 30px;
}

.cost_Estimation_submit-button {
    display: block;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cost_Estimation_form-input,
.cost_Estimation_submit-button {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background: #f1f1f1;
}
.cost_Estimation_submit-button {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    height: 50px;
}
.cost_Estimation_submit-button:hover {
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

.cost_Estimation_container {
    grid-template-columns: calc(100% - 250px) 250px;
    /* width: 100vw; */
    gap: 20px;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.cost_Estimation_left-side {
    margin-top: 50px;
}
.cost_Estimation_right-side {
    padding: 20px;
    border-radius: 5px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 1024px) {
    .cost_Estimation_container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .cost_Estimation_container {
        grid-template-columns: 1fr;
    }

    .cost_Estimation_left-side,
    .cost_Estimation_right-side {
        height: 50vh;
    }

    button {
        padding: 10px 20px;
    }
}

@media (max-width: 768px) {
    .cost_Estimation_container {
        grid-template-columns: 1fr;
    }

    .cost_Estimation_right-side {
        order: 1;
    }

    .cost_Estimation_left-side {
        order: 2;
        margin-top: 20px;
    }
}

@media (max-width: 1024px) {
    #cost_estimation_form {
        grid-template-columns: 1fr;
    }
    .name-cost_Estimation_form-input,
    .cost_Estimation_form-input,
    .submit-button {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .cost_Estimation_container {
        grid-template-columns: 1fr;
    }

    .cost_Estimation_left-side {
        margin-top: 20px;
        height: 60vh;
    }

    .cost_Estimation_mySelectOption {
        font-size: 1.2em;
    }
}

@media (max-width: 1024px) {
    .cost_Estimation_left-side {
        height: 70vh;
    }
}
@media (max-width: 600px) {
    .cost_Estimation_left-side,
    .cost_Estimation_right-side {
        padding: 10px;
        margin-top: 10px;
    }
}

@media (max-width: 1024px) {
    .cost_Estimation_container {
        grid-template-columns: 1fr;
    }

    .cost_Estimation_left-side,
    .cost_Estimation_right-side {
        margin-top: 20px;
        height: 60vh;
        width: auto;
    }
}

@media (max-width: 768px) {
    .cost_Estimation_left-side,
    .cost_Estimation_right-side {
        height: 50vh;
    }
}

@media (max-width: 600px) {
    .cost_Estimation_left-side,
    .cost_Estimation_right-side {
        padding: 10px;
        margin-top: 10px;
    }
}

.name-cost_Estimation_form-input {
    width: 100%;
    padding: 10px;
    background: #e0e3e7;
    color: #636669;
}

.cost_Estimation_mySelectOption {
    color: #00a7e5;
    font-size: 1.5em;
}

.cost_Estimation_submit-button {
    color: #fff;
    cursor: pointer;
    height: 50px;
    border-radius: 30px;
    background-color: #099fda;
}

.cost_Estimation_submit-button:hover {
    background-color: #0056b3;
}

.cost_Estimation_back-button-container {
    text-align: center;
    margin-top: 20px;
}

.cost_Estimation_back-button {
    padding: 10px 100px;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 50px;
    border-radius: 30px;
    background-color: #099fda;
}

li.cost_Estimation_selectedOptionsList-item {
    border: 1px solid #23a0d6;
    margin-bottom: 11px;
    text-align: center;
    padding: 8px;
    border-radius: 6px;
    min-width: 150px;
}

form#cost_estimation_form input:not([type="submit"]),
form#cost_estimation_form select,
form#cost_estimation_form textarea {
    border: none !important;
    height: 50px;
    color: #000;
    outline: none;
    background: #f1f1f1;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.5s ease;
    width: 400px;
}

form#cost_estimation_form input:focus {
    border: 1px solid #00a7e5 !important;
}

.cost_Estimation_form_button button,
.cost_Estimation_submit-button {
    width: 293px;
    margin: 10px;
}
ul#cost_Estimation_selectedOptionsList {
    list-style: none;
}
.cost_Estimation_form_button {
    display: flex;
}
.cost_Estimation_options-container-input{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
}

.cost_Estimation_options-container-input button {
    padding: 10px 100px;
    border: none;
    color: #fff;
    cursor: pointer;
    height: 50px;
    border-radius: 30px;
    background-color: #099fda;
}

.cost_Estimation_options-container-input
    textarea {
    border: none !important;
    height: 50px;
    color: #000;
    outline: none;
    background: #f1f1f1;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.5s ease;
    width: 800px !important;
    padding: 15px;
}

p.cost_Estimation_selectedOptionsList_item_label,#cost_estimation_total {
    margin: 0;
}
`;
document.head.appendChild(style);
