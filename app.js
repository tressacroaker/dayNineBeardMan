var beardGrowth;

var setup = function(robg) {
  document.getElementById('modal').style.display = "none";
  return function(time) {
    document.getElementById("lengthdisplay").textContent = (robg*time)+"mm";
  };
};
