const randomPictureProvider = (propertyId) => {
    const pictures = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
        "/4.webp",
        "/5.webp",
        "/6.webp",
        "/7.webp",
        "/8.webp",
        "/9.webp",
    ];

    // Use the property ID to determine the index
    // Convert propertyId to a number or hash it to keep it within bounds
    const index = Math.abs(propertyId) % pictures.length;

    return pictures[index];
}

export default randomPictureProvider;
