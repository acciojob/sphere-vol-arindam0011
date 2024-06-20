function volume_sphere() {
    //Write your code here
	const calculate=document.getElementById("submit")
	calculate.addEventListener("click", function(event){
		event.preventDefault();
		let radiusValue=document.getElementById("radius").value;
		if(radiusValue<0){
			return document.getElementById("volume").value="NaN"
		}
	const pi = Math.PI; 
    const volume = (4 / 3) * pi * Math.pow(radiusValue, 3);
	return document.getElementById("volume").value=volume.toFixed(4);
	});
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
