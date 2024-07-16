(function() {

    function getProductDetails() {
        const productName = document.getElementById('product-title').innerText.trim();
        // const variantReferenceId = document.querySelector('.variant-id').innerText.trim(); // Adjust selector
        // const priceElement = document.querySelector('.price');
        // let price = priceElement ? priceElement.innerText.trim() : 'Price not found';

        return {
            productName,
            // variantReferenceId,
            // price
        };
    }


    const productData = getProductDetails();
    console.log('Product data:', productData);
    
    
})();
