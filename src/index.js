import "./styles.css";

const carouselDiv = document.querySelector(".carousel");
const imageListDiv = document.querySelector(".image-list");
const imgList = imageListDiv.querySelectorAll("img");

const nextButton = document.createElement("button");
const previousButton = document.createElement("button");
const imgLinkDiv = document.createElement("div");

imgList[0].classList.add("x-visible");

let currentImgIndex = [...imgList].findIndex((img) =>
  img.classList.contains("x-visible")
);

imgList.forEach((img, index) => {
  img.classList.add("x-img");
  const imgLinkButton = document.createElement("button");
  imgLinkButton.classList.add("x-imgLink-button");

  imgLinkButton.addEventListener("click", () => {
    currentImgIndex = [...imgList].findIndex((img) =>
      img.classList.contains("x-visible")
    );
    imgList[currentImgIndex].classList.remove("x-visible");
    imgList[index].classList.add("x-visible");
    imgLinkButtons[currentImgIndex].classList.remove(
      "x-current-imgLink-button"
    );
    imgLinkButtons[index].classList.add("x-current-imgLink-button");
  });
  imgLinkDiv.append(imgLinkButton);
});

const imgLinkButtons = imgLinkDiv.querySelectorAll("button");
imgLinkButtons[0].classList.add("x-current-imgLink-button");

nextButton.classList.add("x-next-button");
previousButton.classList.add("x-previous-button");
imgLinkDiv.classList.add("x-imgLink-div");

carouselDiv.append(previousButton, nextButton, imgLinkDiv);

imgLinkButtons.forEach((button, index) => {
  let rangeIndex = Math.floor((currentImgIndex + 1) / 5);
  let i = 5 * rangeIndex;
  let j = 5 * rangeIndex + 5;
  button.classList.remove("x-visible");
  if (currentImgIndex >= i && currentImgIndex < j) {
    if (index >= i && index < j) {
      button.classList.add("x-visible");
    }
  }
});

const showNextImg = () => {
  currentImgIndex = [...imgList].findIndex((img) =>
    img.classList.contains("x-visible")
  );

  if (currentImgIndex + 1 < imgList.length) {
    imgList[currentImgIndex].classList.remove("x-visible");
    imgList[currentImgIndex + 1].classList.add("x-visible");
    imgLinkButtons[currentImgIndex].classList.remove(
      "x-current-imgLink-button"
    );
    imgLinkButtons[currentImgIndex + 1].classList.add(
      "x-current-imgLink-button"
    );

    imgLinkButtons.forEach((button, index) => {
      let rangeIndex = Math.floor((currentImgIndex + 1) / 5);
      let i = 5 * rangeIndex;
      let j = 5 * rangeIndex + 5;
      button.classList.remove("x-visible");
      if (currentImgIndex + 1 >= i && currentImgIndex + 1 < j) {
        if (index >= i && index < j) {
          button.classList.add("x-visible");
        }
      }
    });
  }
  if (currentImgIndex + 1 >= imgList.length) {
    nextButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  }
};

const showPrevImg = () => {
  currentImgIndex = [...imgList].findIndex((img) =>
    img.classList.contains("x-visible")
  );

  if (currentImgIndex - 1 > -1) {
    imgList[currentImgIndex].classList.remove("x-visible");
    imgList[currentImgIndex - 1].classList.add("x-visible");
    imgLinkButtons[currentImgIndex].classList.remove(
      "x-current-imgLink-button"
    );
    imgLinkButtons[currentImgIndex - 1].classList.add(
      "x-current-imgLink-button"
    );
    imgLinkButtons.forEach((button, index) => {
      let rangeIndex = Math.floor((currentImgIndex - 1) / 5);
      let i = 5 * rangeIndex;
      let j = 5 * rangeIndex + 5;
      if (i < 0) {
        i = 0;
        j = 5;
      }
      button.classList.remove("x-visible");
      if (currentImgIndex - 1 >= i && currentImgIndex - 1 < j) {
        if (index >= i && index < j) {
          button.classList.add("x-visible");
        }
      }
    });
  }
  if (currentImgIndex - 1 <= -1) {
    previousButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  }
};

setInterval(() => {
  currentImgIndex = [...imgList].findIndex((img) =>
    img.classList.contains("x-visible")
  );
  if (currentImgIndex + 1 < imgList.length) {
    imgList[currentImgIndex].classList.remove("x-visible");
    imgList[currentImgIndex + 1].classList.add("x-visible");
    imgLinkButtons[currentImgIndex].classList.remove(
      "x-current-imgLink-button"
    );
    imgLinkButtons[currentImgIndex + 1].classList.add(
      "x-current-imgLink-button"
    );

    imgLinkButtons.forEach((button, index) => {
      let rangeIndex = Math.floor((currentImgIndex + 1) / 5);
      let i = 5 * rangeIndex;
      let j = 5 * rangeIndex + 5;
      button.classList.remove("x-visible");
      if (currentImgIndex + 1 >= i && currentImgIndex + 1 < j) {
        if (index >= i && index < j) {
          button.classList.add("x-visible");
        }
      }
    });
  }
  if (currentImgIndex + 1 >= imgList.length) {
    imgList[currentImgIndex].classList.remove("x-visible");
    imgList[0].classList.add("x-visible");
    imgLinkButtons[currentImgIndex].classList.remove(
      "x-current-imgLink-button"
    );
    imgLinkButtons[0].classList.add("x-current-imgLink-button");

    imgLinkButtons.forEach((button, index) => {
      currentImgIndex = 0;
      let rangeIndex = Math.floor((currentImgIndex + 1) / 5);
      let i = 5 * rangeIndex;
      let j = 5 * rangeIndex + 5;
      button.classList.remove("x-visible");
      if (currentImgIndex + 1 >= i && currentImgIndex + 1 < j) {
        if (index >= i && index < j) {
          button.classList.add("x-visible");
        }
      }
    });
  }
}, 10000);

nextButton.addEventListener("click", showNextImg);
previousButton.addEventListener("click", showPrevImg);
