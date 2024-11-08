// Utility Functions for Cart and Wishlist Management

// Function to get the current cart items from localStorage
const getStoreCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    return storedListStr ? JSON.parse(storedListStr) : []; // Return empty array if not found
}

// Function to add an item to the cart list in localStorage
const addToStoredCartList = (id) => {
    const storedList = getStoreCartList();  // Get the current cart list
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the cart');  // Log if item is already in the cart
    } else {
        storedList.push(id);  // Add the item ID to the cart list
        localStorage.setItem("cart-list", JSON.stringify(storedList));  // Save the updated list
    }
}

// Function to get the current wishlist items from localStorage
const getWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    return storedWishListStr ? JSON.parse(storedWishListStr) : []; // Return empty array if not found
}

// Function to add an item to the wishlist in localStorage
const addToWishList = (id) => {
    const storedWishList = getWishList();  // Get the current wishlist
    if (storedWishList.includes(id)) {
        console.log(id, "already added to wishlist");  // Log if item is already in the wishlist
    } else {
        storedWishList.push(id);  // Add the item ID to the wishlist
        localStorage.setItem("wish-list", JSON.stringify(storedWishList));  // Save the updated wishlist
    }
}

// Export the functions to be used in other components
export { addToWishList, addToStoredCartList, getStoreCartList };
