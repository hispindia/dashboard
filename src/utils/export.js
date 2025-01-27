
export const downloadPDF = (id) => {
  const printContent = document.getElementById(id).innerHTML;

  const restorePage = document.body.innerHTML;

  const printWindow = window.open('', '', 'height=650, width=900');

  printWindow.document.write('<html><head>');
 
  const styles = document.querySelectorAll('link[rel="stylesheet"], style');
  styles.forEach(style => {
    printWindow.document.head.appendChild(style.cloneNode(true));
  });

  printWindow.document.write('<style>body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }</style>');
  
  printWindow.document.write('</head><body>');
  
  printWindow.document.write(printContent);
  
  printWindow.document.write('</body></html>');
  printWindow.document.close(); 

  printWindow.onload = () => {
    printWindow.print();  
    printWindow.close();
  };
};

  
  

export  const exportToExcel = (id) => {
  const uri = "data:application/vnd.ms-excel;base64,";
  const template =
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' +
    "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name>" +
    "<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>" +
    "<body><table>{table}</table></body></html>";

  const base64 = (s) => window.btoa(unescape(encodeURIComponent(s)));

  const format = (s, c) => s.replace(/{(\w+)}/g, (m, p) => c[p]);

  const table = document.getElementById(id);
  const worksheetName = "IPHS excel sheet";
  const ctx = {
    worksheet: worksheetName || "Worksheet", 
    table: table.innerHTML,
  };

  const formattedTemplate = format(template, ctx);
  const encodedUri = uri + base64(formattedTemplate);

  const downloadLink = document.createElement("a");
  downloadLink.href = encodedUri;
  downloadLink.download = "IPHS_REPORT";
  downloadLink.click();
};