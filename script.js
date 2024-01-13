// An immediately invoked function expression (IIFE) to create a private scope
(function() {
  
    // Stack function for creating a stack data structure
    function Stack() {
      // Private array to store stack elements
      var st = [];
  
      // Method to add an item to the stack
      var push = function(item) {
        st.push(item);
      }
  
      // Method to remove the last item from the stack
      var pop = function() {
        // Check if the stack is not empty
        if (st.length) {
          return st.pop();
        }
        return null; // Return null if the stack is empty
      }
  // Method to get the current stack
  var getStack = function() {
    return st;
  }
  
  // Return an object with methods accessible from the outside
  return {
    push,
    pop,
    getStack
  }
  }
  
  // StackComponent function for managing the DOM interactions related to the stack
  function StackComponent() {
  var stack, pushEle, popEle, inputEle, currentStackEle;
  
  // Initialization function
  function init() {
    stack = Stack(); // Create a stack instance using the Stack function
    pushEle = document.querySelector('#push'); // Get the push button element from the DOM
    popEle = document.querySelector('#pop'); // Get the pop button element from the DOM
    inputEle = document.querySelector('#inputNumber'); // Get the input field element from the DOM
    currentStackEle = document.querySelector('#current-stack'); // Get the current stack display element from the DOM
    bindEvents(); // Bind click events to the buttons
  }
  
  // Bind click events to the push and pop buttons
  function bindEvents() {
    pushEle.addEventListener('click', handlePush);
    popEle.addEventListener('click', handlePop);
  }
  
  // Get the value from the input field
  function getStackInput() {
    return inputEle.value;
  }
  
  // Clear the input field
  function clearStackInput() {
    inputEle.value = '';
  }
  
  // Update the displayed stack in the DOM
  function updateOutput() {
    var currentStack = stack.getStack(); // Get the current stack
    if (currentStack.length) {
      currentStackEle.innerText = currentStack.join(' '); // Display the stack elements
    }else {
      currentStackEle.innerText = 'Empty'; // Display 'Empty' if the stack is empty
    }
  }
  
  // Handle the push button click event
  function handlePush() {
    var stackInput = getStackInput(); // Get the input value
    if (stackInput) {
      stack.push(stackInput); // Add the input value to the stack
      clearStackInput(); // Clear the input field
    }
    updateOutput(); // Update the displayed stack
  }
  
  // Handle the pop button click event
  function handlePop() {
    stack.pop(); // Remove the last item from the stack
    updateOutput(); // Update the displayed stack
  }
  
  // Return an object with the init method accessible from the outside
  return {
    init,
  }
  }
    // Initialize the StackComponent
    StackComponent().init();
  
   })();