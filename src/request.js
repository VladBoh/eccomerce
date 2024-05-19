export const cardList = document.querySelector("#card-list");

export const trunc = (text, maxLength) =>
    text?.length > maxLength ? text?.substring(0, maxLength - 3) + "..." : text;

export const deleteProduct = (productId) => {
    axios.delete(`https://api.escuelajs.co/api/v1/products/${productId}`)
}
