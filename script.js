document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("input[type='checkbox']").addEventListener("change", function() {
    if (this.checked) {
      document.querySelector("div>div").style.transform = "scaleY(-1)";
      document.body.style.background = "#f6dfdf";
    }
    else {
      document.querySelector("div>div").style.transform = "";
      document.body.style.background = "";
    }
  });
});
