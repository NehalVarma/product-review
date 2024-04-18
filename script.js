    function validateForm() {
        const rating = document.querySelector('input[name="rating"]:checked');
        const date = document.getElementById('purchase-date').value;
        const image = document.getElementById('image-upload').files[0];
        const requiredFields = ['product-id', 'purchase-date'];
    
        if (!rating) {
        alert('Please provide a rating for the product (1 to 5 stars).');
        return false;
        }
    
    
        const currentDate = new Date();
        const purchaseDate = new Date(date);
        const diffTime = Math.abs(currentDate - purchaseDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 14) {
        alert('The purchase date is more than 2 weeks ago. Please escalate if needed.');
        }
    
        if (rating.value <= 1 && (!image || image.size > 1048576 || !['image/jpeg', 'image/png'].includes(image.type))) {
        alert('Please upload a valid image file (JPEG or PNG) within 1MB for ratings of 1 star or lower.');
        return false;
        }
    
        for (const fieldId of requiredFields) {
        const fieldValue = document.getElementById(fieldId).value;
        if (!fieldValue) {
            alert(`Please fill out the ${fieldId.replace('-', ' ')} field.`);
            return false;
        }
        }
    
        return true;
    }
    