document.addEventListener("DOMContentLoad",()=> {
	cont loginForm=document.getElementById
	("loginForm");
	
if(loginForm){
	loginForm.addEventListener ("submit",function(e){
		e.preventDefault();
		cont name=document.getElementById("studentName").value;
		cont id=document.getElementById("studentId").value;
		cont teacher=document.getElementById("teacherName").value;
		cont password=document.getElementById("examPassword").value;
		
	if(password==="exam123"){
		seassionStorage.setItem("studentName",name);
		window.location.herf="exam.html";    
	}	
	else{
		alert("Invalid exam Password");
	}
	});
}
const examForm=document.getElementById("examForm");
if(examForm){
	examForm.addEventListener("submit",function(e){
		e.preventDefault();
		let.score=0;
		
	if(document.querySelector('Input[name="q1"]:checked')?.value==="Paris")score++;
	if(document.querySelector('Input[name="q2"]:checked')?.value==="java")score++;
	window.location.href=`result.html?score=${score}`;
	});
}
});