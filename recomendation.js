const contentSuggestions = [
    { title: "Top 10 Places to Visit in India", description: "Explore the best travel destinations across India." },
    { title: "Understanding Indian Cuisine", description: "A guide to the diverse and rich flavors of Indian food." },
    { title: "Basics of Indian Stock Market", description: "Learn the fundamentals of investing in the Indian stock market." },
    { title: "How to Prepare for UPSC Exams", description: "Essential tips and resources for cracking the UPSC civil services exam." },
    { title: "Exploring Indian Handicrafts", description: "Discover traditional handicrafts and artisan products from different regions of India." },
    { title: "Yoga for Beginners", description: "A beginner's guide to practicing yoga and its benefits." },
    { title: "Indian Festivals and Their Significance", description: "Understand the importance of various Indian festivals." },
    { title: "Guide to Indian Classical Music", description: "Learn about the rich tradition of Indian classical music." },
    { title: "How to Start a Business in India", description: "Steps and tips for starting a successful business in India." },
    { title: "Indian Film Industry Insights", description: "An overview of the Indian film industry and its major players." },
    { title: "Traditional Indian Cooking Techniques", description: "Explore traditional methods used in Indian cooking." },
    { title: "Indian Yoga Retreats", description: "Find the best yoga retreats across India for a rejuvenating experience." },
    { title: "History of Indian Architecture", description: "A look into the historical architecture styles found in India." },
    { title: "How to Learn Hindi Quickly", description: "Effective methods to learn Hindi in a short time." },
    { title: "Indian Fashion Trends", description: "Stay updated with the latest trends in Indian fashion." }
];

const productRecommendations = [
    { name: "Indian Spices Collection", price: "₹499", link: "https://www.amazon.in/s?k=Indian+Spices+Collection&crid=2LIKL1AX5I67F&sprefix=indian+spices+collection%2Caps%2C196&ref=nb_sb_noss", image: "indian-spices.jpg" },
    { name: "Bollywood Music Collection", price: "₹299", link: "https://www.amazon.in/s?k=Bollywood+Music+Collection&crid=SAI8GL7J83KV&sprefix=bollywood+music+collection%2Caps%2C190&ref=nb_sb_noss", image: "bollywood-music.jpg" },
    { name: "Yoga Mat", price: "₹799", link: "https://www.amazon.in/s?k=Yoga+Mat&crid=1ARTTD183EOXP&sprefix=yoga+mat%2Caps%2C221&ref=nb_sb_noss_1", image: "yoga-mat.jpg" },
    { name: "Traditional Saree", price: "₹2499", link: "https://www.amazon.in/s?k=Traditional+Saree&crid=MJSC37QBPUGI&sprefix=traditional+saree%2Caps%2C203&ref=nb_sb_noss_1", image: "saree.jpg" },
    { name: "Ayurvedic Skincare Kit", price: "₹1599", link: "https://www.amazon.in/s?k=Traditional+Ayurvedic+Skincare+Kit&crid=LQ60MDIRZRT6&sprefix=traditional+ayurvedic+skincare+kit+%2Caps%2C199&ref=nb_sb_noss", image: "skincare-kit.jpg" },
    { name: "Indian Art Prints", price: "₹999", link: "https://www.amazon.in/s?k=Indian+Art+Prints&crid=20S1RK60LEBYD&sprefix=indian+art+prints%2Caps%2C194&ref=nb_sb_noss_1", image: "art-prints.jpg" },
    { name: "Handcrafted Jewelry", price: "₹1499", link: "https://www.amazon.in/s?k=Handcrafted+Jewelry&crid=3SKKQ2QMZRD9D&sprefix=handcrafted+jewelry%2Caps%2C195&ref=nb_sb_noss_1", image: "jewelry.jpg" },
    { name: "Indian Literature Collection", price: "₹899", link: "https://www.amazon.in/s?k=Indian+Literature+Collection&crid=3RCZ3D4T6FC3&sprefix=indian+literature+collectio%2Caps%2C220&ref=nb_sb_noss", image: "literature.jpg" },
    { name: "Traditional Indian Tea", price: "₹399", link: "https://www.amazon.in/s?k=Traditional+Indian+Tea&crid=JPTE2FTKZGPX&sprefix=traditional+indian+thea%2Caps%2C211&ref=nb_sb_noss_2", image: "tea.jpg" },
    { name: "Bollywood DVD Set", price: "₹799", link: "https://www.amazon.in/s?k=Bollywood+DVD+Set&crid=2248Q0JQDVA29&sprefix=bollywood+dvd+set%2Caps%2C240&ref=nb_sb_noss", image: "dvd-set.jpg" }
];

const tailoredOffers = [
    { offer: "20% off on Indian Spices Collection! Use code: SPICE20" },
    { offer: "Buy 1 Yoga Mat, get 1 free! Use code: YOGA1FREE" },
    { offer: "10% off on all Bollywood Music Collections! Use code: BOLLY10" },
    { offer: "Save 15% on Traditional Sarees! Use code: SAREE15" },
    { offer: "Exclusive 25% off on Ayurvedic Skincare Kits! Use code: AYUR25" },
    { offer: "Buy Indian Art Prints with 30% off! Use code: ART30" },
    { offer: "Get 20% off on Handcrafted Jewelry! Use code: JEWEL20" },
    { offer: "Save 10% on Indian Literature Collections! Use code: LIT10" },
    { offer: "Enjoy 15% off on Traditional Indian Tea! Use code: TEA15" },
    { offer: "DVD Set of Bollywood Classics at 20% off! Use code: BOLLY20" }
];

// Function to render content suggestions
function renderContentSuggestions() {
    const contentList = document.getElementById('content-list');
    contentSuggestions.forEach(content => {
        const contentItem = document.createElement('div');
        contentItem.innerHTML = `<h3>${content.title}</h3><p>${content.description}</p>`;
        contentList.appendChild(contentItem);
    });
}

// Function to render product recommendations
function renderProductRecommendations() {
    const productList = document.getElementById('product-list');
    productRecommendations.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100px;">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.link}">Buy Now</a>
        `;
        productList.appendChild(productItem);
    });
}

// Function to render tailored offers
function renderTailoredOffers() {
    const offersList = document.getElementById('offers-list');
    tailoredOffers.forEach(offer => {
        const offerItem = document.createElement('div');
        offerItem.innerHTML = `<p>${offer.offer}</p>`;
        offersList.appendChild(offerItem);
    });
}

// Function to handle preferences
function handlePreferences(event) {
    event.preventDefault();
    const preference = document.getElementById('preferences').value;
    const recommendationsContainer = document.getElementById('recommendation-container');
    
    // Clear previous recommendations
    recommendationsContainer.innerHTML = '';

    const filteredRecommendations = productRecommendations.filter(product => {
        if (preference === 'all') return true;
        if (preference === 'clothing' && (product.name.includes('Saree') || product.name.includes('Jewelry'))) return true;
        if (preference === 'spices' && product.name.includes('Spices')) return true;
        if (preference === 'music' && product.name.includes('Music')) return true;
        if (preference === 'literature' && product.name.includes('Literature')) return true;
        if (preference === 'tea' && product.name.includes('Tea')) return true;
        if (preference === 'dvd' && product.name.includes('DVD')) return true;
        return false;
    });

    filteredRecommendations.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100px;">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.link}">Buy Now</a>
        `;
        recommendationsContainer.appendChild(productItem);
    });
}

// Initialize the page with recommendations
document.addEventListener('DOMContentLoaded', () => {
    renderContentSuggestions();
    renderProductRecommendations();
    renderTailoredOffers();
});

// Home button functionality
document.getElementById('homeButton').addEventListener('click', () => {
    window.location.href = 'home.html'; // Adjust the path to your home page
});

// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, #recommendations').forEach(el => el.classList.toggle('dark-mode'));
});
