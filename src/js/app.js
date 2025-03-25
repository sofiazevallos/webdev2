// Selects an action from a dropdown menu
function selectAction() {
    // Placeholder for selecting an action
    console.log("Action selected from dropdown menu");
}

// Adds rows to the grid
function addRow() {
    // Placeholder for adding a row to the grid
    console.log("Row added to the grid");
}

// Adds columns to the grid
function addColumn() {
    // Placeholder for adding a column to the grid
    console.log("Column added to the grid");
}

// Removes rows from the grid
function removeRow() {
   
    console.log("Row removed from the grid");
}

// Removes columns from the grid
function removeColumn() {
    const grid = document.getElementById('gridContainer');
    if (grid.rows[0].cells.length > 0) {
        for (const row of grid.rows) {
            row.deleteCell(-1); // Remove the last cell from each row
        }
    }
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
