const itemsPerPage = 6;
let page = 0;

function showPage(index) {
  const table = document.getElementById('my-table');
  const rows = table.tBodies[0].rows;
  if (index < 0) {
    page = 0;
  }
  else if (index > table.rows.length - itemsPerPage) {
    page = rows.length / itemsPerPage + 1;
  }
  else {
    page = index;
  }
  
  for (let i = 0; i < rows.length; i++) {
    if (i >= page && i < page + itemsPerPage) {
      rows[i].style.display = 'table-row';
    }
    else {
      rows[i].style.display = 'none';    
    }
  }
}