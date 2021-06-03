// creates an object to keep trak of values
const Calculator = {
    // this is displays 0 on the screen
    Display Value: '0',
    // this will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    // this checks wether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator, we set it to null for now
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit (digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // we are checking to seeif Wait_Second_Operandis true and set
    // Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
       // this overwrites Display_Value if the current value is 0
       // otherwise it adds onto it
       Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
    // this ection handles decimal points
    function Input Decimal (dot) {
       // this ensures that accidental clicking of the decimal point
       // doesn't cause bugs in your operation
       if  (Calculator. Wait Second Operand === true) return;
       if (Calculator. Display_Value.includes(dot)) {
       // we are saying that if the Display_Valuedoes not contain a decimal point
       // we want to add a decimal point
           Calculator.Display_Value += dot;
       }
    }
    
    //this section handles operators
    function Handle Operator(Next OPerator) {
        const { First_Operand, Display_Value, operator } = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in
    //Calculator.First_Operand if it doesn't already exist
    const Value_of_INput = parseFloat(Display_Value)
    //checks if an operator already exists and if Wait_Second_Operand is true,
    //then updates the operator and exits from the function
    if (operator && Calculator.Wait Second Operand) {
        Calculator. operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exists
       const Value_Now = First_Operand || 0;
       //if operator exists, property lookup is performed for the operator
       //in the Perform_Calculation object and the function that matches the
       //operator is execcuted
       let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
       //here we add a fixed amount of numbers after the decimal
       result = Number(result). toFixed(9)
       //this will remove any trailing 0's
       result = (result * 1).toString()
       Calculator.Display_Value = parseFloat(result);
       Caluclator.First_Operand = parseFloat(result);
       
    }
    Calculator.Wait SEcond Operand = true;
    Calculator.operatore = Next_Operator;
    
    }
    
    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
        
       '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand
        
        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
        
        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
        
        '=': (First_Operand, Second_Operand) => Second_Operand