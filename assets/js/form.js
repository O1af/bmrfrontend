const calculateRate = (sex, weight, height, age) => {
	let bmr = 0;
	if (sex == "m") {
		bmr = 66.47 + 6.24 * weight + 12.7 * height - 6.755 * age;
	} else {
		bmr = 655.1 + 6.24 * weight + 4.7 * height - 4.7 * age;
	}
	return bmr;
};

const handleSubmit = async () => {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	age = document.getElementById("age").value;
	sex = document.getElementById("sex").value;
	result = document.getElementById("bmrresult");
	res = calculateRate(sex,weight,height,age);
	result.innerHTML = "Basal Metabolic Rate: " + res + " Calories";
};
