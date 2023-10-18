function calculate() {
    const box1 = new Date(document.getElementById("box1").value);
    const box2 = new Date(document.getElementById("box2").value);
  
    let ageInYears = box2.getFullYear() - box1.getFullYear();
    let ageInMonths = box2.getMonth() - box1.getMonth();
    let ageInDays = box2.getDate() - box1.getDate();
  
    if (ageInDays < 0) {
      ageInMonths--;
      ageInDays += new Date(box2.getFullYear(), box2.getMonth(), 0).getDate();
    }
  
    if (ageInMonths < 0) {
      ageInYears--;
      ageInMonths += 12;
    }
  
    document.getElementById("result").innerHTML = `Age: ${ageInYears} years, ${ageInMonths} months, ${ageInDays} days`;
  }
  