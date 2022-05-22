const handleSubmit = async () => {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	age = document.getElementById("age").value;
	sex = document.getElementById("sex").value;
	result = document.getElementById("bmrresult");
	fetch("https://hello-world-1-hytpdimfwa-uc.a.run.app/bmr", {
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
			response = response.json();
			return response;
		})
		.then((res) => {
			console.log(res);
			result.innerHTML = "Basal Metabolic Rate: " + res;
		})
		.catch((err) => {
			console.error(err);
		});
};
