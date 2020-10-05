window.addEventListener('load', (x) => {
	
	
	document.getElementById("person1").addEventListener('click',function(e){
		
			localStorage.setItem("personId",0);
			
	});
		document.getElementById("person2").addEventListener('click',function(e){
			localStorage.setItem("personId",1);
			
	});
		document.getElementById("person3").addEventListener('click',function(e){
			localStorage.setItem("personId",2);
			
	});
		document.getElementById("person4").addEventListener('click',function(e){
			localStorage.setItem("personId",3);
			
	});
});


