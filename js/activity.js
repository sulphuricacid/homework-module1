$(document).ready(function () {
  //Row-label cells (td:first-child, e.g. "Hiking") and "Not Available" cells
  //are excluded — only the actual activity entries are selectable
  var cells = $("table tbody td").not(":first-child").filter(function () {
    return $(this).text().trim() !== "Not Available";
  });

  cells.addClass("selectable");

  cells.click(function () {
    $(this).toggleClass("selected");
  });
});
