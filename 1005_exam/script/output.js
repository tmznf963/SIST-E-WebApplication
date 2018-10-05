function output(){
   var w = window.open();
   w.document.open();
   w.document.write('<!DOCTYPE html>');
   w.document.write('<html>');
   w.document.write('<head>');
   w.document.write('   <meta charset="utf-8">');
   w.document.write('   <title>사원급여표</title>');
   w.document.write('   <link rel="stylesheet" href="css/output.css">');
   w.document.write('</head>');
   w.document.write('<body>');
   w.document.write('<h1>사원급여표</h1>');
   w.document.write('<table border="1">');
   w.document.write('<thead>');
   w.document.write('<tr>');
   w.document.write('<th>사원번호</th><th>사원이름</th><th>부서명</th><th>기본급</th><th>호급수당</th><th>가족수당</th><th>야간수당</th><th>총금액</th><th>실수령액</th>');
   w.document.write('</tr>');
   w.document.write('</thead>');
   w.document.write('<tbody>');
   for(i=0 ; i < array.length ; i++){
      var s = array[i];
      w.document.write('   <tr>');
      w.document.write('   <td>' + s.getNum() + '</td><td>' + s.getName() + '</td><td>' + s.getDept() + '</td><td>' + s.getGibon() + '</td><td>' + s.getHosal() + '</td><td>' + s.getFamsal() + '</td><td>' + s.getNightsal() + '</td><td>' + s.getSum() + '</td><td>' + s.getSal() + '</td>');
      w.document.write('   </tr>');
   }
   w.document.write('</tbody>');
   w.document.write('</table>');
   w.document.write('</body>');
   w.document.write('</html>');
   w.document.close();
}