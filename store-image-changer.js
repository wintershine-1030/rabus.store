// Store Image Changer Script
// Dynamically change website images using images from the store folder

// List of images from the store folder
const storeImages = [
    'store/photo_2025-08-02_11-30-21.jpg',
    'store/photo_2025-08-02_11-30-21 (2).jpg',
    'store/photo_2025-08-02_11-30-21 (3).jpg',
    'store/photo_2025-08-02_11-30-21 (4).jpg',
    'store/photo_2025-08-02_11-30-22.jpg',
    'store/photo_2025-08-02_11-30-23.jpg',
    'store/photo_2025-08-02_11-31-05.jpg',
    'store/photo_2025-08-02_11-36-27.jpg'
];

// Current image index
let currentImageIndex = 0;

// Function to change store images
function changeStoreImage() {
    // Find all image elements - header images and product images
    const headerImages = document.querySelectorAll('img[data-aid="HEADER_VIDEO_FILL_POSTER"]');
    const videoPosters = document.querySelectorAll('video[data-aid="HEADER_VIDEO"]');
    const productImages = document.querySelectorAll('[data-aid*="PRODUCT_IMAGE_RENDERED"]');
    const backgroundElements = document.querySelectorAll('[data-ux="Background"][role="img"]');
    
    // Select next image
    currentImageIndex = (currentImageIndex + 1) % storeImages.length;
    const newImageSrc = storeImages[currentImageIndex];
    
    // Change header images
    headerImages.forEach(img => {
        img.src = newImageSrc;
        img.alt = newImageSrc;
    });
    
    // Change video posters
    videoPosters.forEach(video => {
        video.poster = newImageSrc;
    });
    
    // Change product images
    productImages.forEach(element => {
        if (element.tagName === 'IMG') {
            element.src = newImageSrc;
            element.alt = newImageSrc;
        } else if (element.style.backgroundImage) {
            element.style.backgroundImage = `url(${newImageSrc})`;
        }
    });
    
    // Change background elements (product cards)
    backgroundElements.forEach(element => {
        element.style.backgroundImage = `url(${newImageSrc})`;
    });
    
    console.log('Image changed to:', newImageSrc);
}

// Function to change background images
function changeBackgroundImage() {
    const backgroundElements = document.querySelectorAll('.c1-1p'); // Background image class
    
    currentImageIndex = (currentImageIndex + 1) % storeImages.length;
    const newImageSrc = storeImages[currentImageIndex];
    
    backgroundElements.forEach(element => {
        element.style.backgroundImage = `url(${newImageSrc})`;
    });
    
    console.log('Background image changed to:', newImageSrc);
}

// Function to select random image
function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * storeImages.length);
    currentImageIndex = randomIndex;
    const randomImageSrc = storeImages[randomIndex];
    
    // Change all image elements
    const allImages = document.querySelectorAll('img[data-aid="HEADER_VIDEO_FILL_POSTER"], video[data-aid="HEADER_VIDEO"], [data-aid*="PRODUCT_IMAGE_RENDERED"], [data-ux="Background"][role="img"]');
    
    allImages.forEach(element => {
        if (element.tagName === 'IMG') {
            element.src = randomImageSrc;
            element.alt = randomImageSrc;
        } else if (element.tagName === 'VIDEO') {
            element.poster = randomImageSrc;
        } else if (element.style.backgroundImage) {
            element.style.backgroundImage = `url(${randomImageSrc})`;
        }
    });
    
    console.log('Random image set to:', randomImageSrc);
}

// Function to change only product images
function changeProductImages() {
    const productImages = document.querySelectorAll('[data-aid*="PRODUCT_IMAGE_RENDERED"]');
    const backgroundElements = document.querySelectorAll('[data-ux="Background"][role="img"]');
    
    currentImageIndex = (currentImageIndex + 1) % storeImages.length;
    const newImageSrc = storeImages[currentImageIndex];
    
    // Change product images
    productImages.forEach(element => {
        if (element.tagName === 'IMG') {
            element.src = newImageSrc;
            element.alt = newImageSrc;
        } else if (element.style.backgroundImage) {
            element.style.backgroundImage = `url(${newImageSrc})`;
        }
    });
    
    // Change background elements (product cards)
    backgroundElements.forEach(element => {
        element.style.backgroundImage = `url(${newImageSrc})`;
    });
    
    console.log('Product images changed to:', newImageSrc);
}

// Function to start automatic image slideshow
function startImageSlideshow(interval = 5000) {
    setInterval(() => {
        changeStoreImage();
    }, interval);
    
    console.log(`Image slideshow started with ${interval}ms interval.`);
}

// Function to start product image slideshow
function startProductSlideshow(interval = 5000) {
    setInterval(() => {
        changeProductImages();
    }, interval);
    
    console.log(`Product image slideshow started with ${interval}ms interval.`);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Store Image Changer loaded.');
    console.log('Available images:', storeImages);
    
    // Set initial image
    setRandomImage();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowRight':
                changeStoreImage();
                break;
            case 'ArrowLeft':
                currentImageIndex = (currentImageIndex - 1 + storeImages.length) % storeImages.length;
                changeStoreImage();
                break;
            case 'r':
            case 'R':
                setRandomImage();
                break;
            case 's':
            case 'S':
                startImageSlideshow();
                break;
            case 'p':
            case 'P':
                changeProductImages();
                break;
        }
    });
    
    console.log('Keyboard shortcuts:');
    console.log('- → : Next image');
    console.log('- ← : Previous image');
    console.log('- R : Random image');
    console.log('- S : Start slideshow');
    console.log('- P : Change product images only');
});

// Expose functions globally (available in browser console)
window.StoreImageChanger = {
    changeImage: changeStoreImage,
    changeBackground: changeBackgroundImage,
    changeProducts: changeProductImages,
    setRandom: setRandomImage,
    startSlideshow: startImageSlideshow,
    startProductSlideshow: startProductSlideshow,
    getImages: () => storeImages,
    getCurrentIndex: () => currentImageIndex
}; 