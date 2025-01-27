import { COLOR_CODES } from "./constant";

export class ValueColorChecker {
    constructor(thresholds = {}) {
        // Set thresholds for colors (default values can be overridden)
        this.thresholds = {
            low: thresholds.low || 20,
            medium: thresholds.medium || 50,
            high: thresholds.high || 100,
            gap: thresholds.high || true,
            ...thresholds
        };
    }

    /**
     * Get color based on the value.
     * @param {number} value - The value to check.
     * @returns {string} - The color corresponding to the value.
     */
    getColor(value) {
        if (value <= this.thresholds.low) {
            return COLOR_CODES.green;
        } else if (value > this.thresholds.low && value <= this.thresholds.medium) {
            return COLOR_CODES.orange;
        } else if (value > this.thresholds.medium) {
            return COLOR_CODES.red;
        } else if ((value == this.thresholds.high) && this.gap) {
            return COLOR_CODES.red;
        } else if ((value == this.thresholds.high) && !(this.gap)) {
            return COLOR_CODES.green;
        } else {
            return "blue"; // Color for values above the high threshold
        }
    }
}

// Example Usage
// const checker = new ValueColorChecker({});

// console.log(checker.getColor(15));  // Output: "red"
// console.log(checker.getColor(45));  // Output: "yellow"
// console.log(checker.getColor(90));  // Output: "green"
// console.log(checker.getColor(150)); // Output: "blue"
