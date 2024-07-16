const ENDPOINT = "Add your endpoint here";

// Function to get product title
const getProductTitle = () => {
    const titleElement = document.querySelector(
        '[data-automation="product-title"]'
    );
    return titleElement ? titleElement.innerText.trim() : undefined;
};

// Function to get color variants
const getColorVariants = () => {
    const colorElements = document.querySelectorAll(
        '[data-automation="pdp-colour-thumbnail"], [data-automation="pdp-colour-thumbnail-selected"]'
    );
    return Array.from(colorElements).map((el) => {
        const colorName = el.getAttribute("value");
        const imgElement = el.querySelector("img");
        const imgSrc = imgElement ? imgElement.src : "";
        return { color: colorName, img: imgSrc };
    });
};

// Function to get product prices
const getProductPrices = () => {
    const currentPriceElement = document.querySelector(
        '[data-automation="product-price-now"]'
    );
    const originalPriceElement = document.querySelector(
        '[data-automation="product-price-was"]'
    );
    return {
        currentPrice: currentPriceElement
            ? currentPriceElement.innerText.trim()
            : undefined,
        originalPrice: originalPriceElement
            ? originalPriceElement.innerText.trim()
            : undefined,
    };
};

// Function to get image URLs
const getImageUrls = () => {
    const imgElements = document.querySelectorAll(
        '[data-automation="product-image"]'
    );
    return Array.from(imgElements).map((img) => img.src);
};

// Function to get sizes
const getSizes = () => {
    const sizeInputs = document.querySelectorAll('input[name="size"]');
    if (!sizeInputs.length) {
        return undefined;
    }
    return Array.from(sizeInputs).map((input) => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        const sizeText = label
            ? label.textContent.trim()
            : "Size label not found";
        return { value: input.value, text: sizeText };
    });
};

// Function to get all product details
const getProductDetails = () => ({
    productName: getProductTitle(),
    variants: getColorVariants(),
    prices: getProductPrices(),
    imageUrls: getImageUrls(),
    sizes: getSizes(),
});

// Send product data to the endpoint
const sendProductData = (data) => {
    fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
};

// Execute the function to get product details and log the data
const productData = getProductDetails();
sendProductData(productData);
