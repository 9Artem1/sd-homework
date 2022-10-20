function showingMiddleAge(isFemaleGender) {
  let middleAge;
  let genderName;
    if (isFemaleGender) {
      middleAge = 77.6;
      genderName = "женщин";
    } else {
      middleAge = 67.5;
      genderName = "мужчин";
    }
  
  let testGenderNameAndMiddleAge = genderName + "-" + middleAge;
    console.log(testGenderNameAndMiddleAge);
    console.log("Эталон:", genderName, '-', middleAge); 
  middleAgeElement.setAttribute('data-middle', middleAge); 
  genderElement.setAttribute('data-sex', genderName); 
  document.documentElement.style
    .setProperty('--lifespan', middleAge);
}
