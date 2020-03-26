
var name = "babatunde"

var courses = ["HTML", "CSS", "JAVASCRIPT"]

console.log(name)
console.log(courses)

if ((courses.length % 2) !== 0) {
	for (var i = 1; i <= 200; i++) {
		if (i % 2 !== 0) {
		console.log(i)
		}
	}
}
else if((courses.length % 2) == 0){
	for (var i = 1; i <= 200; i++){
		if (i % 2 == 0) {
		console.log(i)
		}
	}
}