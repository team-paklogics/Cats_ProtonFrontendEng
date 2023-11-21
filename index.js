// Cat data containing information about each cat

const catData = [
  {
    // Each object represents a cat with an image source, heading, and text
    src: "./assets/images/cat_image_1.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images/cat_image_2.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images/cat_image_3.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images/cat_image_4.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images/cat_image_5.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images/cat_image_6.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images/cat_image_7.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  {
    src: "./assets/images//cat_image_8.png",
    heading: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fermentum a accumsan, consequat vitae arcu velit, nunc, suspendisse",
  },
  // Add more cat data as needed
];

// Variable to keep track of the number of favorite cats
let favoritesCount = 0;

// Function to generate cat containers and display them on the page
function generateCatContainers(catData) {
  // Get the container where cat elements will be appended
  const catGrid = document.getElementById("catGrid");

  // Iterate through each cat in the data
  catData.forEach((cat) => {
    // Create a container div for each cat
    const catContainer = document.createElement("div");
    catContainer.classList.add("cat-container");

    // Create an image element for the cat
    const catImage = document.createElement("img");
    catImage.classList.add("cat-image");
    catImage.src = cat.src;

    // Create heading and text elements for the cat information
    const catHeading = document.createElement("div");
    catHeading.classList.add("text-heading");
    catHeading.textContent = cat.heading;

    const catText = document.createElement("div");
    catText.classList.add("text-content");
    catText.textContent = cat.text;

    // Create heart icons for favoriting the cat
    const filledHeart = document.createElement("img");
    filledHeart.classList.add("heart-icon", "filled");
    filledHeart.src = "./assets/Icons/gray_heart_fill.png";
    filledHeart.style.display = "none";
    filledHeart.onclick = function () {
      toggleHeart(this);
    };

    const emptyHeart = document.createElement("img");
    emptyHeart.classList.add("heart-icon", "empty");
    emptyHeart.src = "./assets/Icons/gray_heart_not_filled.png";
    emptyHeart.onclick = function () {
      toggleHeart(this);
    };

    // Append all elements to the cat container
    catContainer.appendChild(catImage);
    catContainer.appendChild(catHeading);
    catContainer.appendChild(catText);
    catContainer.appendChild(filledHeart);
    catContainer.appendChild(emptyHeart);

    // Append the cat container to the overall grid
    catGrid.appendChild(catContainer);
  });
}
// Function to toggle the state of the heart icon when clicked
function toggleHeart(heartIcon) {
  // Find the filled and empty heart icons within the same container
  const filledHeart = heartIcon.parentElement.querySelector(".filled");
  const emptyHeart = heartIcon.parentElement.querySelector(".empty");

  // Check if the heart is currently filled or empty and update the display
  if (heartIcon.classList.contains("filled")) {
    filledHeart.style.display = "none";
    emptyHeart.style.display = "inline-block";
    favoritesCount--;
  } else {
    emptyHeart.style.display = "none";
    filledHeart.style.display = "inline-block";
    favoritesCount++;
  }

  // Update the favorite counter text
  document.getElementById("favoriteCounter").textContent = `${favoritesCount}`;
}
// Function to reset all heart icons to the empty state
function resetHearts() {
  // Find all filled and empty heart icons on the page
  const filledHearts = document.querySelectorAll(".filled");
  const emptyHearts = document.querySelectorAll(".empty");

  // Set the display of filled hearts to none and empty hearts to inline-block
  filledHearts.forEach((heart) => {
    heart.style.display = "none";
  });
  emptyHearts.forEach((heart) => {
    heart.style.display = "inline-block";
  });

  // Reset the favorites count and update the favorite counter text
  favoritesCount = 0;
  document.getElementById("favoriteCounter").textContent = `${favoritesCount}`;
}

// Generate cat containers on page load
generateCatContainers(catData);
