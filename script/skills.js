var skills = ["html", "css", "js", "python", "c", "c++", "react", "bootstrap", "auth", "firestore", "storage", "fcm"];
var per = [90, 80, 75, 70, 70, 60, 65, 60, 80, 85, 80, 75];
function interval(skill, per) {
  var per1=0;
  setInterval(()=>{
    per1+=1;
    if (per1>=per) {
      clearInterval();
    } else {
      document.getElementById(skill).value=per1;
    }
  }, 20)
}
function progress() {
  if (document.getElementById("skills").offsetTop<=window.pageYOffset) {
    window.removeEventListener("scroll", progress);
    for (let i=0;i<skills.length;i++) {
      interval(skills[i],per[i]);
    }
  }
}

window.addEventListener("scroll", progress)