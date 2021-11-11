//StartingBid
let startPrice = 100;
let totalPrice = 0;

//CheckBoxes
const instruments = document.querySelector('input[name="instruments"]');
const cook = document.querySelector('input[name="cook"]');
const easygoingCharacter = document.querySelector('input[name="easygoingCharacter"]');
const sings = document.querySelector('input[name="sings"]');
const parents = document.querySelector('input[name="parents"]');
const GossipsCharacter = document.querySelector('input[name="GossipsCharacter"]');
const Person = document.querySelector('input[name="Person"]');

//Radio button
const radioAge = document.querySelectorAll('input[name="age"]');

//Calculation function
function calculate(){

    //Education Value 
    let selectedEdLvl = document.getElementById('education');
    let edRes = 0;

    if (selectedEdLvl.options[selectedEdLvl.selectedIndex].value == "bachelor"){
        edRes = startPrice * 1.5;
    }

    if (selectedEdLvl.options[selectedEdLvl.selectedIndex].value == "college"){
        edRes = startPrice * 1.2;
    }

    if (selectedEdLvl.options[selectedEdLvl.selectedIndex].value == "high_school"){
        edRes = startPrice * 1.05;
    }

    if (selectedEdLvl.options[selectedEdLvl.selectedIndex].value == "middle_school"){
        edRes = startPrice * 0.9;
    }

    //Networth Value 
    let selectedNetworth = document.getElementById('networth');
    let networthRes = 0;

    if (selectedNetworth.options[selectedNetworth.selectedIndex].value == "upper_class"){
        networthRes = edRes * 2;
    }

    if (selectedNetworth.options[selectedNetworth.selectedIndex].value == "middle_class"){
        networthRes = edRes * 1.5;
    }

    if (selectedNetworth.options[selectedNetworth.selectedIndex].value == "lower_class"){
        networthRes = edRes * 1.2;
    }

    //Caste Value
    let selectedCaste = document.getElementById('Caste');
    let casteRes = 0;

    if (selectedCaste.options[selectedCaste.selectedIndex].value == "Caste_Brahmin"){
        casteRes = networthRes + 100;
    }

    if (selectedCaste.options[selectedCaste.selectedIndex].value == "Caste_Kshatriya"){
        casteRes = networthRes + 50;
    }

    if (selectedCaste.options[selectedCaste.selectedIndex].value == "Caste_Vaishya"){
        casteRes = networthRes + 20;
    }

    if (selectedCaste.options[selectedCaste.selectedIndex].value == "Caste_Shudra"){
        casteRes = networthRes + 10;
    }

    if (selectedCaste.options[selectedCaste.selectedIndex].value == "Caste_Varna"){
        casteRes = networthRes - 50;
    }

    totalPrice = casteRes;

    //Skills Value 
    if (instruments.checked) {
        totalPrice = totalPrice + parseInt(instruments.value);
	}

    if (cook.checked) {
        totalPrice = totalPrice + parseInt(cook.value);
	}

    if (easygoingCharacter.checked) {
        totalPrice = totalPrice + parseInt(easygoingCharacter.value);
	}

    if (sings.checked) {
        totalPrice = totalPrice + parseInt(sings.value);
	}
    
    //Age Value
    for (const radio of radioAge) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); // 300 000 * 1.2
		}
	}

    //Reputation Value
    if (parents.checked) {
        totalPrice = totalPrice * parseFloat(parents.value);
	}
    
    if (GossipsCharacter.checked) {
        totalPrice = totalPrice * parseFloat(GossipsCharacter.value);
	}

    if (Person.checked) {
        totalPrice = totalPrice - parseInt(Person.value);
	}

        document.getElementById("result").innerHTML = "The price for your bride"+ name +" "+ "is" + " " + totalPrice;

    //document.querySelector("#result").innerHTML = totalPrice;
}


//const totalPrice = (((((startPrice*educationLevel) * familyNetwoth) + caste + skills)*age)*reputation)    