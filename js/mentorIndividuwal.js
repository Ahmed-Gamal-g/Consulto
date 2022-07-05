let Review = document.querySelector(".Review");
let Benefits = document.querySelector(".Benefits");
let Overview = document.querySelector(".Overview");

let ReviewsText = document.querySelector(".Reviews-text");
let BenefitsText = document.querySelector(".Benefits-text");
let OverviewText = document.querySelector(".Overview-text");

Review.onclick = () => {
  ReviewsText.style.display = "inline-flex";
  BenefitsText.style.display = "none";
  OverviewText.style.display = "none";
  Review.style.color = "#1E3869";
  Overview.style.color = "black";
  Benefits.style.color = "black";
  Review.style.borderBottom = "2px solid black";
  Overview.style.borderBottom = "2px solid transparent";
  Benefits.style.borderBottom = "2px solid transparent";
};

Benefits.onclick = () => {
  ReviewsText.style.display = "none";
  BenefitsText.style.display = "inline-flex";
  OverviewText.style.display = "none";
  Benefits.style.color = "#1E3869";
  Overview.style.color = "black";
  Review.style.color = "black";
  Benefits.style.borderBottom = "2px solid black";
  Overview.style.borderBottom = "2px solid transparent";
  Review.style.borderBottom = "2px solid transparent";
};

Overview.onclick = () => {
  ReviewsText.style.display = "none";
  BenefitsText.style.display = "none";
  OverviewText.style.display = "block";
  Benefits.style.color = "#1E3869";
  Overview.style.color = "#1E3869";
  Review.style.color = "black";
  Overview.style.borderBottom = "2px solid black";
  Review.style.borderBottom = "2px solid transparent";
  Benefits.style.borderBottom = "2px solid transparent";
};
