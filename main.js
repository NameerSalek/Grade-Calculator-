const grade=document.querySelector("#grade")

function calculate() {
	if (grade.value<33) {
		var a=document.querySelector("#h")
		a.innerText="F GPA-0.00"
		return false
	}
	if (grade.value<40) {
		var a=document.querySelector("#h")
		a.innerText="D GPA-1.00"
		return false
	}
	if (grade.value<50) {
		var a=document.querySelector("#h")
		a.innerText="C GPA-2.00"
		return false
	}
	if (grade.value<60) {
		var a=document.querySelector("#h")
		a.innerText="B GPA-3.00"
		return false
	}
	if (grade.value<70) {
		var a=document.querySelector("#h")
		a.innerText="A- GPA-3.50"
		return false
	}
	if (grade.value<80) {
		var a=document.querySelector("#h")
		a.innerText="A GPA-4.00"
		return false
	}
	if (grade.value<100) {
		var a=document.querySelector("#h")
		a.innerText="A+ GPA-5.00"
		return false
	}
}