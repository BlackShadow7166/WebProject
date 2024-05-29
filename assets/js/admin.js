document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("productForm");
  const jwtToken = localStorage.getItem("jwtToken"); // Retrieve the JWT token from localStorage

  productForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(productForm);
    const productData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      originalPrice: formData.get("originalPrice"),
      category: formData.get("category"),
      inStock: formData.get("inStock") === "on",
      imageUrl: formData.get("imageUrl"),
      isNewProduct: formData.get("isNew") === "on",
      isSale: formData.get("isSale") === "on",
    };

    try {
      const response = await fetch("http://localhost:3000/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`, // Include the JWT token in the header
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert("Product added successfully");
        productForm.reset();
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
});
