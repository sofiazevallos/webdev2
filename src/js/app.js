// Selects an action from a dropdown menu
function selectAction() {
    // Placeholder for selecting an action
    console.log("Action selected from dropdown menu");
}

// Adds rows to the grid
function addRow() {
    const grid = document.getElementById('gridContainer');
    const newRow = grid.insertRow(-1); // Insert a row at the end of the table
    const cols = grid.rows[0].cells.length;
    for (let i = 0; i < cols; i++) {
        const newCell = newRow.insertCell(i);
        newCell.innerHTML = 'New Cell'; // Or other default content
    }
    console.log("Row added to the grid");
}

// Adds columns to the grid
function addColumn() {
    // Placeholder for adding a column to the grid
    console.log("Column added to the grid");
}

// Removes rows from the grid
function removeRow() {
    // Placeholder for removing a row from the grid
    console.log("Row removed from the grid");
}

// Removes columns from the grid
function removeColumn() {
    // Placeholder for removing a column from the grid
    console.log("Column removed from the grid");
}

// Selects a color from a dropdown menu of colors
function selectColor() {
    // Placeholder for selecting a color
    console.log("Color selected from dropdown");
}

// Colors a single cell
function colorCell(cellId, color) {
    // Placeholder for coloring a specific cell
    console.log(`Cell ${cellId} colored with ${color}`);
}

// Colors all uncolored cells with the selected color
function colorAllUncoloredCells(color) {
    // Placeholder for coloring all uncolored cells
    console.log("All uncolored cells colored with", color);
}

// Colors all cells with the selected color
function colorAllCells(color) {
    // Placeholder for coloring all cells
    console.log("All cells colored with", color);
}

// Clears all cells' color and restore all cells to their initial color (e.g., white)
function clearColor() {
    // Placeholder for clearing all cells' color
    console.log("All cells' colors cleared");
}

// Event listeners for dropdown menu actions (assuming HTML elements with IDs are set)
document.getElementById('actionMenu').addEventListener('change', function(event) {
    const selectedAction = event.target.value;
    switch(selectedAction) {
        case 'addRow':
            addRow();
            break;
        case 'addColumn':
            addColumn();
            break;
        case 'removeRow':
            removeRow();
            break;
        case 'removeColumn':
            removeColumn();
            break;
        case 'selectColor':
            selectColor(); // This function would need to handle grabbing the color from another input
            break;
        case 'colorCell':
            // Assuming there's a way to specify which cell and color
            colorCell('cellId', 'color'); // These would be dynamic based on user input
            break;
        case 'colorAllUncoloredCells':
            colorAllUncoloredCells('color');
            break;
        case 'colorAllCells':
            colorAllCells('color');
            break;
        case 'clearColor':
            clearColor();
            break;
        default:
            console.log('No action found');
    }
});
