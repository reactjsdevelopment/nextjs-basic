import Head from "next/head";
import { act, useState } from "react";
import { validateNumericInput } from "../utils/validateNumericInput";
import Swal from "sweetalert2";

const CaloriesDeficitCalculator = () => {

    // User health metrics data
    const [healthMetrics, setHealthMetrics] = useState({
        age : "",
        gender : "Male",
        height : "",
        weight : "",
        activity : "Sedentary"
    });

    function handleInput(value, type){
        
        const numericFields = ["age", "height", "weight"];
        // Set input value
        setHealthMetrics((prevState)=>{
            // Check if the field is a numeric field
            if (numericFields.includes(type)) {
                // Validate the numeric input
                if (!validateNumericInput(value)) {
                    // If the value is not valid, return the previous state without updating
                    alert(`${type} should be a numeric value.`);
                    return prevState;
                }
            }

            // Update the state with the new value
            const updatedMetrics = { ...prevState, [type]: value };
            return updatedMetrics;
        })
    }

    function calculateBMR(gender, weight, height, age){
        if(gender === "Male"){
            // Calculate BMR using the male formula
            return 66.4730+(13.7516*weight)+(5.0033*height)-(6.7550*age);
        } else {
            // Calculate BMR using the female formula
            return 655.0955+(9.5634*weight)+(1.8496*height)-(4.6756*age);
        }
    }

    function calculateTDEE(activity, BMR){
        // Calculate TDEE using the male formula
        switch(activity){
            case "Sedentary" :
                return (1.2*BMR).toFixed(2);
            case "Light" :
                return (1.375*BMR).toFixed(2);
            case "Moderate" :
                return (1.55 *BMR).toFixed(2);
            case "Active" :
                return (1.725*BMR).toFixed(2);
            case "Very Active" :
                return (1.9*BMR).toFixed(2);
        }
    }

    function calculateBMI(height, weight) {
        const heightInMeter = height / 100; // Convert height from cm to meters
    
        // Calculate BMI using the correct formula
        return (weight / (heightInMeter ** 2)).toFixed(2); // Square the height
    }
    
    function calculateCalories(){
        const gender = healthMetrics.gender;
        const weight = healthMetrics.weight;
        const height = healthMetrics.height;
        const age = healthMetrics.age;
        const activity = healthMetrics.activity;

        const BMI = calculateBMI(height, weight);
        const BMR = calculateBMR(gender, weight, height, age);
        const userTDEE = calculateTDEE(activity, BMR);
        const weeklyTDEE = (userTDEE*7).toFixed(2);

        // TDEE list
        const sedentaryTDEE = calculateTDEE("Sedentary", BMR);
        const lightTDEE = calculateTDEE("Light", BMR);
        const moderateTDEE = calculateTDEE("Moderate", BMR);
        const activeTDEE = calculateTDEE("Active", BMR);
        const veryActiveTDEE = calculateTDEE("Very Active", BMR);
        // Sweet Alert for results
        Swal.fire({
            title: 'Your Health Stats',
            html: `
                <div class="text-left tracking-normal">
                    <p class="font-bold">Based on your stats:</p>
                    <ul class="list-none p-0">
                        <li class="flex justify-between">
                            <span class="font-bold">Maintenance Calories:</span>
                            <span>${userTDEE} calories/day</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="font-bold">Weekly Total:</span>
                            <span>${weeklyTDEE} calories/week</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="font-bold">BMI:</span>
                            <span>${BMI}</span>
                        </li>
                    </ul>
                    <p class="font-bold mt-4">TDEE Estimates by Activity Level:</p>
                    <ul class="list-none p-0">
                        <li class="flex justify-between">
                            <span class="${sedentaryTDEE === userTDEE ? 'font-bold' : ''}">Sedentary:</span>
                            <span class="${sedentaryTDEE === userTDEE ? 'font-bold' : ''}">${sedentaryTDEE} calories</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="${lightTDEE === userTDEE ? 'font-bold' : ''}">Lightly Active:</span>
                            <span class="${lightTDEE === userTDEE ? 'font-bold' : ''}">${lightTDEE} calories</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="${moderateTDEE === userTDEE ? 'font-bold' : ''}">Moderately Active:</span>
                            <span class="${moderateTDEE === userTDEE ? 'font-bold' : ''}">${moderateTDEE} calories</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="${activeTDEE === userTDEE ? 'font-bold' : ''}">Active:</span>
                            <span class="${activeTDEE === userTDEE ? 'font-bold' : ''}">${activeTDEE} calories</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="${veryActiveTDEE === userTDEE ? 'font-bold' : ''}">Very Active:</span>
                            <span class="${veryActiveTDEE === userTDEE ? 'font-bold' : ''}">${veryActiveTDEE} calories</span>
                        </li>
                    </ul>
                    <p class="font-bold mt-4">BMI Categories:</p>
                    <ul class="list-none p-0">
                        <li class="${BMI < 18.5 ? '' : BMI === 18.5 ? 'font-bold' : ''}">Underweight: BMI < 18.5</li>
                        <li class="${BMI >= 18.5 && BMI < 25 ? 'font-bold' : ''}">Normal weight: BMI 18.5-24.9</li>
                        <li class="${BMI >= 25 && BMI < 30 ? 'font-bold' : ''}">Overweight: BMI 25-29.9</li>
                        <li class="${BMI >= 30 ? 'font-bold' : ''}">Obesity: BMI ≥ 30</li>
                    </ul>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Okay',
        });
        
    }
    
    return (
        <div className="flex flex-col min-h-screen bg-gray-800"> 
             <Head>
                <title>Calories Deficit Calculator</title>
                <meta name="description" content="Sign in to MyApp" />
            </Head>
            <main className="flex-grow flex flex-col items-center justify-center py-10">
                <div className="bg-gray-900 border border-gray-600 rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h1 className="text-4xl font-bold text-center text-white mb-6">Calories Deficit Calculator</h1>
                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-1">
                                <label className="block text-sm font-bold text-gray-300" htmlFor="Age">
                                    Age
                                </label>
                                <input
                                    className="shadow border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                    id="age"
                                    type="text"
                                    placeholder="age"
                                    value={healthMetrics.age}
                                    onChange={(e)=>{handleInput(e.target.value, "age")}}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label className="block text-sm font-bold text-gray-300" htmlFor="Gender">
                                    Gender
                                </label>
                                <select 
                                    className="shadow border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="gender"
                                    value={healthMetrics.gender}
                                    onChange={(e)=>{handleInput(e.target.value, "gender")}}
                                >
                                        <option>Male</option>
                                        <option>Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label className="block text-sm font-bold text-gray-300" htmlFor="Height">
                                    {`Height (kg)`}
                                </label>
                                <input
                                    className="shadow border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                    id="height"
                                    type="number"
                                    placeholder="height"
                                    value={healthMetrics.height}
                                    onChange={(e)=>{handleInput(e.target.value, "height")}}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label className="block text-sm font-bold text-gray-300" htmlFor="Weight">
                                    {`Weight (kg)`}
                                </label>
                                <input
                                    className="shadow border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                                    id="weight"
                                    type="text"
                                    placeholder="weight"
                                    value={healthMetrics.weight}
                                    onChange={(e)=>{handleInput(e.target.value, "weight")}}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <label className="block text-sm font-bold text-gray-300" htmlFor="Activity">
                                    Activity
                                </label>
                                <select 
                                    className="shadow border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="activity"
                                    value={healthMetrics.activity}
                                    onChange={(e)=>{handleInput(e.target.value, "activity")}}
                                >
                                        <option value={"Sedentary"}>Sedentary : little or no exercise</option>
                                        <option value={"Light"}>Light : exercise 1-3 times per week</option>
                                        <option value={"Moderate"}>Moderate : daily exercise or intense exercise 3-4 times per week</option>
                                        <option value={"Active"}>Active : intense exercise 6-7 times per week</option>
                                        <option value={"Very Active"}>Very Active : very intense exercise daily or physical job</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                onClick={()=>{calculateCalories()}}
                            >
                                Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CaloriesDeficitCalculator;