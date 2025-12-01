document.addEventListener('DOMContentLoaded', () => {

    // Get references to all four input fields
    const decimalInput = document.getElementById('decimal');
    const binaryInput = document.getElementById('binary');
    const octalInput = document.getElementById('octal');
    const hexadecimalInput = document.getElementById('hexadecimal');

    
    function showInvalidError(activeInput) {
        const inputs = [decimalInput, binaryInput, octalInput, hexadecimalInput];
        inputs.forEach(input => {
            if (input !== activeInput) {
                input.value = "Invalid Input";
            }
        });
    }

    
    function clearOthers(activeInput) {
        const inputs = [decimalInput, binaryInput, octalInput, hexadecimalInput];
        inputs.forEach(input => {
            if (input !== activeInput) {
                input.value = "";
            }
        });
    }

    //--- 1. Event Listener for Decimal Input ---
    decimalInput.addEventListener('input', () => {
        const decValue = decimalInput.value;

        if (decValue === "") {
            clearOthers(decimalInput);
            return;
        }
        if (!/^[0-9]+$/.test(decValue)) {
            showInvalidError(decimalInput);
            return;
        }

        const decNumber = parseInt(decValue, 10);

        binaryInput.value = decNumber.toString(2);
        octalInput.value = decNumber.toString(8);
        hexadecimalInput.value = decNumber.toString(16).toUpperCase();
    });

    // --- 2. Event Listener for Binary Input ---
    binaryInput.addEventListener('input', () => {
        const binValue = binaryInput.value;

        if (binValue === "") {
            clearOthers(binaryInput);
            return;
        }

        if (!/^[01]+$/.test(binValue)) {
            showInvalidError(binaryInput);
            return;
        }

            const decNumber = parseInt(binValue, 2);

    
        decimalInput.value = decNumber;
        octalInput.value = decNumber.toString(8);
        hexadecimalInput.value = decNumber.toString(16).toUpperCase();
    });

    // --- 3. Event Listener for Octal Input ---
    octalInput.addEventListener('input', () => {
        const octValue = octalInput.value;

        if (octValue === "") {
            clearOthers(octalInput);
            return;
        }

        if (!/^[0-7]+$/.test(octValue)) {
            showInvalidError(octalInput);
            return;
        }

        const decNumber = parseInt(octValue, 8);

        decimalInput.value = decNumber;
        binaryInput.value = decNumber.toString(2);
        hexadecimalInput.value = decNumber.toString(16).toUpperCase();
    });

    // --- 4. Event Listener for Hexadecimal Input ---
    hexadecimalInput.addEventListener('input', () => {
        const hexValue = hexadecimalInput.value;

        if (hexValue === "") {
            clearOthers(hexadecimalInput);
            return;
        }

        if (!/^[0-9A-Fa-f]+$/.test(hexValue)) {
            showInvalidError(hexadecimalInput);
            return;
        }

        const decNumber = parseInt(hexValue, 16);

        decimalInput.value = decNumber;
        binaryInput.value = decNumber.toString(2);
        octalInput.value = decNumber.toString(8);
    });

});