let genderType = "female";
function printGender() 
{

    let color = "brown";

    if (genderType.startsWith("female")) 
    {
        var age = 30;
        color = "pink";
        console.log("The color is", color);
    }
    else 
        
    {
        var age = 35;
        console.log("The color is", color);
    }
    console.log("The color outside ifis", color);
    console.log("The age outside if is", age);
}
printGender()
console.log("the gender type is", genderType);