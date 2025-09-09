// Expense Manager - Generated App
document.addEventListener('DOMContentLoaded', function() {
    console.log('Expense Manager loaded successfully!');
    
    
    const mainButton = document.getElementById('mainButton');
    const output = document.getElementById('output');
    
    if (mainButton && output) {
        mainButton.addEventListener('click', function() {
            output.innerHTML = '<p>Hello from Expense Manager! Button clicked at ' + new Date().toLocaleTimeString() + '</p>';
        });
    }
});