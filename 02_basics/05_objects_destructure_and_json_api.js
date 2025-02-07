const course ={
	courseName : "js in Hindi",
	courseInstructor : "Alif",
	price : "999"
}

// course.courseName

const {courseInstructor : instructor } = course 

console.log(instructor)

const Navbar = ({company}) =>{
	console.log(company)
}

Navbar(company="jsw")
