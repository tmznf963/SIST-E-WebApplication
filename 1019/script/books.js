var db = null;
			var books = null;
			
			function openDb(){
				var request = window.indexedDB.open("BookStore", 3);
				request.addEventListener("error", function(event){
					console.log("Error 발생 : " + event);
				},false);	  
				request.addEventListener("success", function(evt) {
				  	console.log("Database Open Success" + this.result);
				  	db = event.target.result;
				},false);
				request.addEventListener("upgradeneeded", function(event) {
					console.log("업그레이드 진행중.");
					db = event.target.result;
					if(db.objectStoreNames.contains("books")){
						db.deleteObjectStore("books");
					}
					books = db.createObjectStore("books", {
						keyPath : "isbn",
						autoIncrement : true
					});
				},false);	
			}
			openDb();
			
			var title = document.getElementById("txtTitle");
			var price = document.getElementById("txtPrice");
			var publisher = document.getElementById("txtPushlisher");
			
			document.getElementById('btnSave').addEventListener('click', function(){
				var obj = {
					title : title.value,
					price : price.value,
					publisher : publisher.value
				};
				var tx = db.transaction(['books'], 'readwrite');
				tx.addEventListener('complete', function(event) {
				    console.log("Transaction Success");
				},false);
				tx.addEventListener('error', function(event) {
				    console.log("Transaction Failure");
				}, false);

				var books = tx.objectStore("books");
				var result = books.put(obj);//table에 값 넣기

				result.addEventListener("success", function(event) {
				    console.log("Insert Success");
				},false);

				document.getElementById("txtTitle").value="";
				document.getElementById("txtPrice").value="";
				document.getElementById("txtPushlisher").value="";
			});//button

			document.getElementById('btnSelectAll').addEventListener('click', function(){
				var tx = db.transaction(['books'], 'readonly');
				var books = tx.objectStore("books");
				var results = books.getAll();
				results.addEventListener("success", function(){
					console.log("Select Success");
					createTable(results.result);	
				}, false);
			}, false);

			function createTable(books){
				var str = "<h1>쌍용북스 책 목록</h1>";
				str += "<table border='1'><thead><tr>" +
				           "<th>ISBN</th><th>Title</th><th>Price</th><th>Publisher</th>" +
				           "</tr></thead><tbody>";
				  for(var i = 0 ; i < books.length ; i++){
					str += "<tr>";
					str += "<td>" + books[i].isbn + "</td>" +
								"<td>" + books[i].title + "</td>" +
								"<td>" + books[i]['price'] + "</td>" +
								"<td>" + books[i]['publisher'] + "</td>";
					str += "</tr>";
					};
				str += "</tbody></table>";
				document.getElementById('result').innerHTML = str;
			}