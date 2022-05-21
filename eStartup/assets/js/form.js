const handleSubmit = async () => {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	age = document.getElementById("age").value;
	sex = document.getElementById("sex").value;
	fetch("http://localhost:3000/bmr", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			sex: sex,
			height: height,
			weight: weight,
			age: age,
		}),
	})
		.then((response) => {
			console.log(response.json());
		})
		.catch((err) => {
			console.error(err);
		});
};
