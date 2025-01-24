import * as XLSX from "xlsx";

const validateExcel = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(sheet);

                // Check if required columns exist
                const requiredColumns = ["student_id", "name", "course_code", "internal", "external", "lab-internal", "lab-external"];
                const columns = Object.keys(json[0]);
                const missingColumns = requiredColumns.filter((col) => !columns.includes(col));

                if (missingColumns.length > 0) {
                    reject(new Error(`Missing columns: ${missingColumns.join(", ")}`));
                } else {
                    resolve(true); // Valid Excel file
                }
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsArrayBuffer(file);
    });
};

export default validateExcel;
