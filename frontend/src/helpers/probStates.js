export const probStates = [
    {
        problemStatement: "Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).\n\nSpecifically, ans is the concatenation of two nums arrays.\n\nReturn the array ans.",
        customJudge: "1 3 2 1",
        constraints: "• n == nums.length\n\n• 1 <= n <= 1000\n\n• 1 <= nums[i] <= 1000",
        sampleInput: "1 1 2",
        sampleOutput: "1 1 2 1 1 2",
        explanation: "The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]\n\n- ans = [1,2,1,1,2,1]",
        inputCheck: "1 3 2 1 1 3 2 1",
        outputCheck: "1 3 2 1 1 3 2 1\r\n",
    },

    {
        problemStatement: "Given an array of integers nums, sort the array in ascending order and return it.\n\nYou must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.",
        customJudge: "5 1 1 2 0 0",
        constraints: "• 1 <= nums.length <= 5 * 104\n\n• -5 * 104 <= nums[i] <= 5 * 104",
        sampleInput: "5 2 3 1",
        sampleOutput: "1 2 3 5",
        explanation: "After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).",
        inputCheck: "0 0 1 1 2 5",
        outputCheck: "0 0 1 1 2 5\r\n",
    },

    {
        problemStatement: "You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.\n\nYou should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].\n\nReturn the array ans. Answers within 10-5 of the actual answer will be accepted.\n\nNote that:\n\n• Kelvin = Celsius + 273.15\n\n• Fahrenheit = Celsius * 1.80 + 32.00",
        customJudge: "0",
        constraints: "• 0 <= celsius <= 1000",
        sampleInput: '10"',
        sampleOutput: '"283.15 50"',
        explanation: "'e' is the letter that was added.",
        inputCheck: "273.15 32",
        outputCheck: "273.15 32\r\n",
    }
];