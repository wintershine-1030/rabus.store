# Store Image Changer

A JavaScript utility that dynamically changes website images using images from the `store/` folder.

## Features

- **Dynamic Image Changes**: Automatically changes header images and video posters
- **Keyboard Shortcuts**: Quick navigation through images
- **Random Image Selection**: Set random images from the store folder
- **Slideshow Mode**: Automatic image rotation
- **Background Image Changes**: Change background images dynamically
- **Console Integration**: Full control through browser console

## Available Images

The script uses the following images from the `store/` folder:

- `photo_2025-08-02_11-30-21.jpg`
- `photo_2025-08-02_11-30-21 (2).jpg`
- `photo_2025-08-02_11-30-21 (3).jpg`
- `photo_2025-08-02_11-30-21 (4).jpg`
- `photo_2025-08-02_11-30-22.jpg`
- `photo_2025-08-02_11-30-23.jpg`
- `photo_2025-08-02_11-31-05.jpg`
- `photo_2025-08-02_11-36-27.jpg`

## Usage

### 1. Include the Script

Add the script to your HTML file:

```html
<script src="store-image-changer.js"></script>
```

### 2. Keyboard Shortcuts

- **→** (Right Arrow): Next image
- **←** (Left Arrow): Previous image
- **R**: Random image
- **S**: Start slideshow

### 3. Console Functions

Open your browser's developer console (F12) and use these functions:

```javascript
// Change to next image
StoreImageChanger.changeImage()

// Set random image
StoreImageChanger.setRandom()

// Start slideshow (5 second intervals)
StoreImageChanger.startSlideshow()

// Change background images
StoreImageChanger.changeBackground()

// Get list of available images
StoreImageChanger.getImages()

// Get current image index
StoreImageChanger.getCurrentIndex()
```

### 4. Custom Slideshow Interval

```javascript
// Start slideshow with custom interval (in milliseconds)
StoreImageChanger.startSlideshow(3000) // 3 seconds
```

## How It Works

The script automatically:

1. **Loads on page load** and sets a random initial image
2. **Finds image elements** with specific data attributes:
   - `img[data-aid="HEADER_VIDEO_FILL_POSTER"]`
   - `video[data-aid="HEADER_VIDEO"]`
3. **Updates images** when functions are called
4. **Provides console feedback** for debugging

## Test Page

Open `test-image-changer.html` in your browser to see a demonstration of the functionality.

## Integration with Main Site

The script is already included in `index.html` and will automatically:

- Change header images on the main website
- Update video posters
- Provide keyboard shortcuts for navigation
- Log changes to the console

## Browser Compatibility

Works in all modern browsers that support:
- ES6+ JavaScript
- DOM manipulation
- Event listeners
- Console API

## Troubleshooting

1. **Images not changing**: Check browser console for errors
2. **Keyboard shortcuts not working**: Ensure the script is loaded
3. **Console errors**: Verify image paths are correct

## File Structure

```
ankaspace.store/
├── index.html (main website with script included)
├── store-image-changer.js (main script)
├── test-image-changer.html (test page)
├── README.md (this file)
└── store/
    ├── photo_2025-08-02_11-30-21.jpg
    ├── photo_2025-08-02_11-30-21 (2).jpg
    ├── photo_2025-08-02_11-30-21 (3).jpg
    ├── photo_2025-08-02_11-30-21 (4).jpg
    ├── photo_2025-08-02_11-30-22.jpg
    ├── photo_2025-08-02_11-30-23.jpg
    ├── photo_2025-08-02_11-31-05.jpg
    └── photo_2025-08-02_11-36-27.jpg
``` 