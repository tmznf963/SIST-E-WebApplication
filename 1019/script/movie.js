			var db = null;
			var movies = null;
			
			function openDb(){
				var request = window.indexedDB.open("Movies", 4);
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
					if(db.objectStoreNames.contains("movies")){
						db.deleteObjectStore("movies");
					}
					movies = db.createObjectStore("movies", {
						keyPath : "filmNum",
						autoIncrement : true
					});
				},false);	
			}
			openDb();
			
			var title = document.getElementById("txtTitle");
			var director = document.getElementById("txtDirector");
			var year = document.getElementById("txtYear");
			var synopsis = document.getElementById("txtSynopsis");
			
			document.getElementById('btnSave').addEventListener('click', function(){
				var obj = {
					title : title.value,
					director : director.value,
					year : year.value,
					synopsis : synopsis.value
				};
				var tx = db.transaction(['movies'], 'readwrite');
				tx.addEventListener('complete', function(event) {
				    console.log("Transaction Success");
				},false);
				tx.addEventListener('error', function(event) {
				    console.log("Transaction Failure");
				}, false);

				var movies = tx.objectStore("movies");
				var result = movies.put(obj);//table에 값 넣기

				result.addEventListener("success", function(event) {
				    console.log("Insert Success");
				},false);

				document.getElementById("txtTitle").value="";
				document.getElementById("txtDirector").value="";
				document.getElementById("txtYear").value="";
				document.getElementById("txtSynopsis").value="";

				var tx = db.transaction(['movies'], 'readonly');
				var movies = tx.objectStore("movies");
				var results = movies.getAll();
				results.addEventListener("success", function(){
					console.log("Select Success");
					createTable(results.result);	
				}, false);
			});//button


			function createTable(movies){
				var str = "<table border='1'><thead><tr><th>번호</th><th>제목</th>" +
								"<th>감독</th><th>상영년도</th><th>줄거리</th></tr></thead><tbody>";
				  for(var i = 0 ; i < movies.length ; i++){
					str += "<tr>";
					str += "<td>" + movies[i].filmNum + "</td>" +
								"<td>" + movies[i].title + "</td>" +
								"<td>" + movies[i].director + "</td>" +
								"<td>" + movies[i]['year'] + "</td>" +
								"<td>" + movies[i]['synopsis'] + "</td>";
					str += "</tr>";
					};
				str += "</tbody></table>";
				document.getElementById('result').innerHTML = str;
			}