const AptitudeStudyMaterial = [
  //1 Number System
  {
    id: 1,
    topic: 'Number System',
    description:
      'Complete guide to understanding numbers, their types, properties, and applications in aptitude problems',

    sections: [
      {
        id: 1,
        title: 'Introduction to Number System',
        content:
          'The number system is the foundation of mathematics. It includes different types of numbers and their properties, which are essential for solving aptitude problems efficiently.',
        importance:
          'Forms the basis for 30-40% of quantitative aptitude questions in competitive exams',
      },

      {
        id: 2,
        title: 'Types of Numbers',
        subtopics: [
          {
            name: 'Natural Numbers (N)',
            definition: 'Counting numbers starting from 1',
            example: '1, 2, 3, 4, 5, 6, ...',
            notation: 'N = {1, 2, 3, 4, ...}',
            properties: [
              'Smallest natural number is 1',
              'No largest natural number (infinite)',
              'Used for counting objects',
              'Closed under addition and multiplication',
            ],
          },
          {
            name: 'Whole Numbers (W)',
            definition: 'Natural numbers including zero',
            example: '0, 1, 2, 3, 4, 5, ...',
            notation: 'W = {0, 1, 2, 3, 4, ...}',
            properties: [
              'Smallest whole number is 0',
              'All natural numbers are whole numbers',
              'Zero is neither positive nor negative',
            ],
          },
          {
            name: 'Integers (Z)',
            definition: 'All positive and negative whole numbers including zero',
            example: '..., -3, -2, -1, 0, 1, 2, 3, ...',
            notation: 'Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}',
            types: [
              'Positive Integers: 1, 2, 3, ...',
              'Negative Integers: -1, -2, -3, ...',
              'Zero: 0 (neither positive nor negative)',
            ],
          },
          {
            name: 'Rational Numbers (Q)',
            definition: 'Numbers that can be expressed as p/q where p and q are integers and q ≠ 0',
            example: '1/2, 3/4, -5/7, 0.5, 2.333..., 7 (can be written as 7/1)',
            notation: 'Q = {p/q | p, q ∈ Z, q ≠ 0}',
            properties: [
              'Can be expressed as fractions',
              'Includes terminating decimals (0.5, 0.25)',
              'Includes recurring decimals (0.333..., 1.666...)',
              'All integers are rational numbers',
            ],
          },
          {
            name: 'Irrational Numbers',
            definition: 'Numbers that cannot be expressed as p/q',
            example: '√2, √3, π (pi), e, √5, ∛7',
            properties: [
              'Non-terminating and non-recurring decimals',
              'Cannot be expressed as fractions',
              'π = 3.14159265... (infinite non-repeating)',
              '√2 = 1.41421356... (infinite non-repeating)',
            ],
          },
          {
            name: 'Real Numbers (R)',
            definition: 'All rational and irrational numbers combined',
            example: 'All numbers on the number line',
            includes: [
              'All rational numbers',
              'All irrational numbers',
              'Both positive and negative numbers',
              'Zero',
            ],
          },
          {
            name: 'Prime Numbers',
            definition: 'Natural numbers greater than 1 with exactly two factors: 1 and itself',
            example: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...',
            properties: [
              '2 is the only even prime number',
              '1 is NOT a prime number',
              'Smallest prime number is 2',
              'There are infinite prime numbers',
            ],
            tricks: [
              'To check if n is prime, test divisibility up to √n',
              'Primes (except 2 and 3) are of form 6k±1',
            ],
          },
          {
            name: 'Composite Numbers',
            definition: 'Natural numbers greater than 1 that have more than two factors',
            example: '4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, ...',
            properties: [
              'Can be factored into primes',
              'Smallest composite number is 4',
              'Every composite has at least 3 factors',
            ],
          },
          {
            name: 'Co-prime Numbers',
            definition: 'Two numbers whose HCF (GCD) is 1',
            example: '(3, 5), (7, 9), (15, 28), (21, 22)',
            properties: [
              'They may not be prime themselves',
              'They have no common factor except 1',
              'Example: 8 and 15 are co-prime (HCF = 1)',
            ],
          },
          {
            name: 'Even Numbers',
            definition: 'Numbers divisible by 2',
            example: '2, 4, 6, 8, 10, 12, 14, ...',
            form: '2n where n is an integer',
            properties: [
              'Last digit is 0, 2, 4, 6, or 8',
              'Even ± Even = Even',
              'Even × Any number = Even',
            ],
          },
          {
            name: 'Odd Numbers',
            definition: 'Numbers not divisible by 2',
            example: '1, 3, 5, 7, 9, 11, 13, 15, ...',
            form: '2n + 1 where n is an integer',
            properties: ['Last digit is 1, 3, 5, 7, or 9', 'Odd ± Odd = Even', 'Odd × Odd = Odd'],
          },
        ],
      },

      {
        id: 3,
        title: 'Important Formulas',
        formulas: [
          {
            category: 'Sum Formulas',
            items: [
              {
                name: 'Sum of first n natural numbers',
                formula: '1 + 2 + 3 + ... + n = n(n+1)/2',
                example: 'Sum of first 100 numbers = 100(101)/2 = 5050',
              },
              {
                name: 'Sum of first n odd numbers',
                formula: '1 + 3 + 5 + ... + (2n-1) = n²',
                example: 'Sum of first 10 odd numbers = 10² = 100',
              },
              {
                name: 'Sum of first n even numbers',
                formula: '2 + 4 + 6 + ... + 2n = n(n+1)',
                example: 'Sum of first 10 even numbers = 10(11) = 110',
              },
              {
                name: 'Sum of squares of first n natural numbers',
                formula: '1² + 2² + 3² + ... + n² = n(n+1)(2n+1)/6',
                example: '1² + 2² + 3² + ... + 10² = 10(11)(21)/6 = 385',
              },
              {
                name: 'Sum of cubes of first n natural numbers',
                formula: '1³ + 2³ + 3³ + ... + n³ = [n(n+1)/2]²',
                example: '1³ + 2³ + 3³ + 4³ = [4(5)/2]² = 100',
              },
            ],
          },
          {
            category: 'Number of Terms',
            items: [
              {
                name: 'Numbers divisible by k in range [a, b]',
                formula: '⌊b/k⌋ - ⌊(a-1)/k⌋',
                example: 'Numbers divisible by 7 from 1 to 100 = ⌊100/7⌋ - ⌊0/7⌋ = 14',
              },
              {
                name: 'Count of numbers from a to b',
                formula: 'b - a + 1',
                example: 'Count from 10 to 50 = 50 - 10 + 1 = 41',
              },
            ],
          },
          {
            category: 'Factors and Multiples',
            items: [
              {
                name: 'Number of factors',
                formula: 'If n = p₁^a × p₂^b × p₃^c, then factors = (a+1)(b+1)(c+1)',
                example: '60 = 2² × 3¹ × 5¹, factors = (2+1)(1+1)(1+1) = 12',
              },
              {
                name: 'Sum of factors',
                formula:
                  'If n = p₁^a × p₂^b, then sum = [(p₁^(a+1) - 1)/(p₁ - 1)] × [(p₂^(b+1) - 1)/(p₂ - 1)]',
                example: 'For 12 = 2² × 3¹: Sum = [(2³-1)/(2-1)] × [(3²-1)/(3-1)] = 7 × 4 = 28',
              },
              {
                name: 'LCM × HCF',
                formula: 'LCM(a,b) × HCF(a,b) = a × b',
                example: 'For 12 and 18: LCM = 36, HCF = 6, 36 × 6 = 12 × 18 = 216',
              },
            ],
          },
          {
            category: 'Perfect Numbers',
            items: [
              {
                name: 'Perfect Square',
                formula: 'n² where n is a natural number',
                examples: '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, ...',
                properties: [
                  'Has odd number of factors',
                  'Square root is an integer',
                  'Last digit can be 0,1,4,5,6,9 only (never 2,3,7,8)',
                ],
              },
              {
                name: 'Perfect Cube',
                formula: 'n³ where n is a natural number',
                examples: '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, ...',
                properties: ['Cube root is an integer', 'Can end in any digit 0-9'],
              },
            ],
          },
          {
            category: 'Digit-based Formulas',
            items: [
              {
                name: 'Sum of digits',
                description: 'Keep adding digits until single digit',
                example: '12345 → 1+2+3+4+5 = 15 → 1+5 = 6',
              },
              {
                name: 'Digital root',
                formula: '1 + ((n-1) mod 9) for n > 0',
                example: 'Digital root of 65 = 1 + (64 mod 9) = 1 + 1 = 2 (or 6+5=11, 1+1=2)',
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Divisibility Rules',
        description: 'Quick tests to check if a number is divisible without actual division',
        rules: [
          {
            divisor: 2,
            rule: 'Last digit is even (0, 2, 4, 6, 8)',
            example: '1234 is divisible by 2 (ends in 4)',
          },
          {
            divisor: 3,
            rule: 'Sum of all digits is divisible by 3',
            example: '12345: 1+2+3+4+5 = 15, divisible by 3 ✓',
          },
          {
            divisor: 4,
            rule: 'Last two digits form a number divisible by 4',
            example: '1316: 16 is divisible by 4 ✓',
          },
          {
            divisor: 5,
            rule: 'Last digit is 0 or 5',
            example: '1235, 1240 are divisible by 5',
          },
          {
            divisor: 6,
            rule: 'Number is divisible by both 2 and 3',
            example: '126: divisible by 2 (even) and 3 (1+2+6=9) ✓',
          },
          {
            divisor: 7,
            rule: 'Double the last digit and subtract from rest. If result is divisible by 7, original is too',
            example: '203: 20 - (3×2) = 20 - 6 = 14, divisible by 7 ✓',
          },
          {
            divisor: 8,
            rule: 'Last three digits form a number divisible by 8',
            example: '12016: 016 is divisible by 8 ✓',
          },
          {
            divisor: 9,
            rule: 'Sum of all digits is divisible by 9',
            example: '1269: 1+2+6+9 = 18, divisible by 9 ✓',
          },
          {
            divisor: 10,
            rule: 'Last digit is 0',
            example: '1230 is divisible by 10',
          },
          {
            divisor: 11,
            rule: 'Difference between sum of digits at odd positions and even positions is 0 or divisible by 11',
            example: '2728: (2+2) - (7+8) = 4 - 15 = -11, divisible by 11 ✓',
          },
          {
            divisor: 12,
            rule: 'Number is divisible by both 3 and 4',
            example: '144: divisible by 3 and 4 ✓',
          },
        ],
      },

      {
        id: 5,
        title: 'Cyclicity and Unit Digits',
        description: 'Pattern of unit digits in powers of numbers',
        patterns: [
          {
            base: 0,
            cycle: [0],
            cyclicity: 1,
            note: 'Always ends in 0',
          },
          {
            base: 1,
            cycle: [1],
            cyclicity: 1,
            note: 'Always ends in 1',
          },
          {
            base: 2,
            cycle: [2, 4, 8, 6],
            cyclicity: 4,
            example: '2¹→2, 2²→4, 2³→8, 2⁴→6, 2⁵→2 (repeats)',
          },
          {
            base: 3,
            cycle: [3, 9, 7, 1],
            cyclicity: 4,
            example: '3¹→3, 3²→9, 3³→7, 3⁴→1, 3⁵→3 (repeats)',
          },
          {
            base: 4,
            cycle: [4, 6],
            cyclicity: 2,
            example: '4¹→4, 4²→6, 4³→4 (repeats)',
          },
          {
            base: 5,
            cycle: [5],
            cyclicity: 1,
            note: 'Always ends in 5',
          },
          {
            base: 6,
            cycle: [6],
            cyclicity: 1,
            note: 'Always ends in 6',
          },
          {
            base: 7,
            cycle: [7, 9, 3, 1],
            cyclicity: 4,
            example: '7¹→7, 7²→9, 7³→3, 7⁴→1, 7⁵→7 (repeats)',
          },
          {
            base: 8,
            cycle: [8, 4, 2, 6],
            cyclicity: 4,
            example: '8¹→8, 8²→4, 8³→2, 8⁴→6, 8⁵→8 (repeats)',
          },
          {
            base: 9,
            cycle: [9, 1],
            cyclicity: 2,
            example: '9¹→9, 9²→1, 9³→9 (repeats)',
          },
        ],
        howToUse:
          'To find unit digit of a^n: Divide n by cyclicity of a. The remainder tells position in cycle. If remainder is 0, use last position.',
        examples: [
          {
            problem: 'Find unit digit of 7³⁵',
            solution: 'Cyclicity of 7 = 4. 35 ÷ 4 = remainder 3. Position 3 in cycle [7,9,3,1] = 3',
            answer: '3',
          },
          {
            problem: 'Find unit digit of 2⁴⁸',
            solution:
              'Cyclicity of 2 = 4. 48 ÷ 4 = remainder 0 (use position 4). Position 4 in cycle [2,4,8,6] = 6',
            answer: '6',
          },
        ],
      },

      {
        id: 6,
        title: 'Tests for Perfect Squares and Cubes',
        perfectSquareTests: [
          {
            test: 'Ending digits',
            rule: 'Perfect square can only end in 0, 1, 4, 5, 6, or 9',
            example: 'Numbers ending in 2, 3, 7, 8 are NOT perfect squares',
          },
          {
            test: 'Number of factors',
            rule: 'Perfect square has odd number of factors',
            example: '16 has factors: 1,2,4,8,16 (5 factors - odd) ✓',
          },
          {
            test: 'Prime factorization',
            rule: 'All prime factors must have even powers',
            example: '144 = 2⁴ × 3² (all even powers) ✓',
          },
          {
            test: 'Consecutive perfect squares',
            rule: 'Difference between n² and (n+1)² is 2n+1',
            example: '10² = 100, 11² = 121, difference = 21 = 2(10)+1',
          },
        ],
        perfectCubeTests: [
          {
            test: 'Prime factorization',
            rule: 'All prime factors must have powers divisible by 3',
            example: '216 = 2³ × 3³ (all divisible by 3) ✓',
          },
          {
            test: 'Ending digits',
            rule: 'Perfect cube can end in any digit 0-9',
            example: '1, 8, 27, 64, 125, 216, ... (all endings possible)',
          },
        ],
      },

      {
        id: 7,
        title: 'Important Number Properties',
        properties: [
          {
            category: 'Addition Properties',
            items: [
              'Even + Even = Even',
              'Odd + Odd = Even',
              'Even + Odd = Odd',
              'Sum of n consecutive numbers is divisible by n if n is odd',
            ],
          },
          {
            category: 'Multiplication Properties',
            items: [
              'Even × Any = Even',
              'Odd × Odd = Odd',
              'Product of n consecutive numbers is divisible by n!',
            ],
          },
          {
            category: 'Special Properties',
            items: [
              '0 is neither positive nor negative',
              '1 is neither prime nor composite',
              '2 is the only even prime number',
              'Negative of negative is positive',
              'Product of two negative numbers is positive',
            ],
          },
        ],
      },

      {
        id: 8,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Checking if large number is prime',
            method: 'Test divisibility only up to √n',
            example: 'To check if 97 is prime, test only up to √97 ≈ 9.8, i.e., test 2,3,5,7',
          },
          {
            name: 'Squaring numbers ending in 5',
            method: '(10a + 5)² = 100a(a+1) + 25',
            example: '35² = 3×4 hundred + 25 = 1225',
          },
          {
            name: 'Multiply by 11',
            method: 'Add adjacent digits (middle digit = sum of original middle digits)',
            example: '23 × 11: 2_(2+3)_3 = 253',
          },
          {
            name: 'Finding remainder when divided by 9',
            method: 'Find sum of digits, that sum mod 9 is the answer',
            example: '4567 ÷ 9: sum = 22 → 2+2 = 4, remainder = 4',
          },
          {
            name: 'Checking divisibility by 99',
            method: 'Sum of groups of 2 digits from right should be divisible by 99',
            example: '123456: 12+34+56 = 102, not divisible by 99',
          },
          {
            name: 'Quick squaring near 50',
            method: 'For n near 50: n² = 2500 + 100(n-50) + (n-50)²',
            example: '53² = 2500 + 300 + 9 = 2809',
          },
        ],
      },

      {
        id: 9,
        title: 'Common Number Series',
        series: [
          {
            type: 'Natural Numbers',
            sequence: '1, 2, 3, 4, 5, ...',
            nthTerm: 'n',
            sum: 'n(n+1)/2',
          },
          {
            type: 'Even Numbers',
            sequence: '2, 4, 6, 8, 10, ...',
            nthTerm: '2n',
            sum: 'n(n+1)',
          },
          {
            type: 'Odd Numbers',
            sequence: '1, 3, 5, 7, 9, ...',
            nthTerm: '2n-1',
            sum: 'n²',
          },
          {
            type: 'Square Numbers',
            sequence: '1, 4, 9, 16, 25, ...',
            nthTerm: 'n²',
            sum: 'n(n+1)(2n+1)/6',
          },
          {
            type: 'Cube Numbers',
            sequence: '1, 8, 27, 64, 125, ...',
            nthTerm: 'n³',
            sum: '[n(n+1)/2]²',
          },
          {
            type: 'Triangular Numbers',
            sequence: '1, 3, 6, 10, 15, ...',
            nthTerm: 'n(n+1)/2',
            description: 'Sum of first n natural numbers',
          },
          {
            type: 'Prime Numbers',
            sequence: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...',
            note: 'No general formula',
          },
        ],
      },

      {
        id: 10,
        title: 'Problem-Solving Strategies',
        strategies: [
          {
            strategy: 'Two-digit number problems',
            approach: 'Represent as 10a + b where a is tens digit, b is units digit',
            example: 'Number 43 = 10(4) + 3',
          },
          {
            strategy: 'Consecutive number problems',
            approach: 'Use n, n+1, n+2 or n-1, n, n+1',
            example: 'Three consecutive numbers: n, n+1, n+2',
          },
          {
            strategy: 'Finding remainders',
            approach: 'Use modular arithmetic or cyclicity',
            example: '2⁵⁰ mod 7: Use cyclicity of powers of 2',
          },
          {
            strategy: 'Factorization problems',
            approach: 'Break into prime factors first',
            example: '72 = 2³ × 3², easier to work with',
          },
          {
            strategy: 'Perfect square/cube problems',
            approach: 'Check prime factorization for even/triple powers',
            example: 'Is 1296 a perfect square? 1296 = 2⁴ × 3⁴ (yes)',
          },
        ],
      },

      {
        id: 11,
        title: 'Important Number Sets to Remember',
        sets: [
          {
            name: 'Squares 1-30',
            values:
              '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900',
          },
          {
            name: 'Cubes 1-20',
            values:
              '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000',
          },
          {
            name: 'Primes up to 100',
            values:
              '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97',
          },
          {
            name: 'Powers of 2 (up to 2¹⁰)',
            values: '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024',
          },
        ],
      },

      {
        id: 12,
        title: 'Practice Tips',
        tips: [
          'Memorize squares up to 30 and cubes up to 20',
          'Learn divisibility rules by heart - saves calculation time',
          'Practice cyclicity patterns for quick unit digit calculations',
          'Always factorize numbers to see patterns clearly',
          'For large calculations, estimate first to check reasonableness',
          'Use options elimination in multiple choice questions',
          'Remember: Perfect square never ends in 2, 3, 7, or 8',
          'Keep a formula sheet handy during initial practice',
        ],
      },

      {
        id: 13,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Thinking 1 is a prime number',
            correction: '1 is neither prime nor composite',
          },
          {
            mistake: 'Forgetting 2 is the only even prime',
            correction: 'All other even numbers are composite',
          },
          {
            mistake: 'Confusing HCF and LCM',
            correction: 'HCF ≤ smaller number, LCM ≥ larger number',
          },
          {
            mistake: 'Wrong cyclicity calculation',
            correction: 'If remainder is 0, use last position in cycle, not position 0',
          },
          {
            mistake: 'Not simplifying before calculation',
            correction: 'Always factorize and simplify first',
          },
        ],
      },

      {
        id: 14,
        title: 'Exam Strategy',
        examTips: [
          'Number system questions usually appear in first 10 questions',
          'They are generally easier and scoring',
          'Attempt them first to build confidence',
          'Use approximation for time-saving',
          "Don't spend more than 1 minute per question",
          'If stuck, move on and return later',
          "Check if answer is reasonable (e.g., can't have negative count)",
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'Sum of n natural numbers: n(n+1)/2',
        'Sum of n odd numbers: n²',
        'Number of factors: (a+1)(b+1)(c+1) for n = p₁^a × p₂^b × p₃^c',
        'a² - b² = (a+b)(a-b)',
        'LCM × HCF = Product of two numbers',
      ],

      mustRememberFacts: [
        'Smallest prime: 2',
        'Smallest composite: 4',
        'Only even prime: 2',
        'Perfect squares end only in: 0,1,4,5,6,9',
        'Co-prime means HCF = 1',
      ],
    },
  },

  //2 H.C.F and L.C.M
  {
    id: 2,
    topic: 'H.C.F and L.C.M',
    description:
      'Master the concepts of Highest Common Factor and Lowest Common Multiple - essential for solving problems related to divisibility, fractions, and number theory',

    sections: [
      {
        id: 1,
        title: 'Introduction to HCF and LCM',
        content:
          'HCF (Highest Common Factor) and LCM (Lowest Common Multiple) are fundamental concepts in number theory that help us solve various arithmetic problems efficiently. Understanding these concepts is crucial for competitive exams.',
        importance:
          'HCF and LCM questions appear in 90% of quantitative aptitude tests and form the basis for fraction, ratio, and number problems',
      },

      {
        id: 2,
        title: 'What is HCF (Highest Common Factor)?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'HCF is the greatest number that divides two or more numbers without leaving a remainder. It is also called GCD (Greatest Common Divisor).',
            example: 'HCF of 12 and 18 is 6 (largest number that divides both)',
            properties: [
              'HCF is always ≤ smallest number',
              'HCF of two prime numbers is always 1',
              'HCF of consecutive numbers is always 1',
              'HCF of (a, a) = a',
            ],
          },
          {
            name: 'Alternative Names',
            description: 'HCF is also known as:',
            types: [
              'GCD - Greatest Common Divisor',
              'GCF - Greatest Common Factor',
              'Greatest Common Measure',
            ],
          },
          {
            name: 'Key Characteristics',
            properties: [
              'Always a factor of both/all numbers',
              'Cannot be greater than the smallest number',
              'Used for simplifying fractions',
              'Used in problems involving division into equal parts',
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'What is LCM (Lowest Common Multiple)?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'LCM is the smallest positive number that is divisible by two or more numbers without leaving a remainder.',
            example: 'LCM of 4 and 6 is 12 (smallest number divisible by both)',
            properties: [
              'LCM is always ≥ largest number',
              'LCM of two prime numbers is their product',
              'LCM of (a, a) = a',
              'LCM is used for adding/subtracting fractions',
            ],
          },
          {
            name: 'Alternative Names',
            description: 'LCM is also known as:',
            types: [
              'Least Common Multiple',
              'Lowest Common Denominator (LCD) - for fractions',
              'Smallest Common Multiple',
            ],
          },
          {
            name: 'Key Characteristics',
            properties: [
              'Always a multiple of all numbers',
              'Cannot be less than the largest number',
              'Used for finding common denominators',
              'Used in time-based repetition problems',
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Methods to Find HCF',
        subtopics: [
          {
            name: 'Method 1: Prime Factorization Method',
            definition:
              'Express each number as a product of prime factors and take the product of common prime factors with lowest powers.',
            example: 'Find HCF of 36 and 48\n36 = 2² × 3²\n48 = 2⁴ × 3\nHCF = 2² × 3 = 12',
            properties: [
              'Best for smaller numbers',
              'Gives clear visualization',
              'Easy to understand',
              'Time-consuming for large numbers',
            ],
          },
          {
            name: "Method 2: Division Method (Euclid's Algorithm)",
            definition:
              'Divide the larger number by smaller, then divide the divisor by remainder. Continue until remainder is 0. The last divisor is the HCF.',
            example:
              'Find HCF of 48 and 18\n48 = 18 × 2 + 12\n18 = 12 × 1 + 6\n12 = 6 × 2 + 0\nHCF = 6',
            properties: [
              'Most efficient for large numbers',
              'Works very fast',
              'Used in computer algorithms',
              'Also called Euclidean Algorithm',
            ],
          },
          {
            name: 'Method 3: Factor Listing Method',
            definition: 'List all factors of each number and find the greatest common factor.',
            example:
              'Find HCF of 12 and 16\nFactors of 12: 1, 2, 3, 4, 6, 12\nFactors of 16: 1, 2, 4, 8, 16\nCommon: 1, 2, 4\nHCF = 4',
            properties: [
              'Good for small numbers',
              'Easy to visualize',
              'Not practical for large numbers',
              'Time-consuming',
            ],
          },
          {
            name: 'Method 4: Continuous Division Method',
            definition:
              'Divide all numbers by common prime factors until no common factor remains. Product of divisors is HCF.',
            example:
              'Find HCF of 12, 18, 24\n2 | 12  18  24\n3 | 6   9   12\n  | 2   3   4\nHCF = 2 × 3 = 6',
            properties: [
              'Best for 3+ numbers',
              'Visual and systematic',
              'Easy to verify',
              'Commonly used in schools',
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Methods to Find LCM',
        subtopics: [
          {
            name: 'Method 1: Prime Factorization Method',
            definition:
              'Express each number as product of prime factors and take the product of all prime factors with highest powers.',
            example: 'Find LCM of 12 and 18\n12 = 2² × 3\n18 = 2 × 3²\nLCM = 2² × 3² = 36',
            properties: [
              'Clear and systematic',
              'Works well for 2-3 numbers',
              'Easy to verify',
              'Requires factorization skill',
            ],
          },
          {
            name: 'Method 2: Division Method',
            definition:
              'Divide numbers by common prime factors and continue dividing until no common factors remain. Product of divisors and remaining numbers is LCM.',
            example:
              'Find LCM of 6, 8, 12\n2 | 6   8   12\n2 | 3   4   6\n2 | 3   2   3\n3 | 3   1   3\n  | 1   1   1\nLCM = 2×2×2×3 = 24',
            properties: [
              'Best for multiple numbers',
              'Systematic approach',
              'Easy to calculate',
              'Commonly used in exams',
            ],
          },
          {
            name: 'Method 3: Using HCF Formula',
            definition: 'For two numbers: LCM = (a × b) / HCF(a, b)',
            example: 'Find LCM of 12 and 18\nHCF(12, 18) = 6\nLCM = (12 × 18) / 6 = 216 / 6 = 36',
            properties: [
              'Fastest for two numbers',
              'Uses the HCF-LCM relationship',
              'Very efficient',
              'Only works for 2 numbers',
            ],
          },
          {
            name: 'Method 4: Listing Multiples',
            definition: 'List multiples of each number and find the smallest common multiple.',
            example:
              'Find LCM of 4 and 6\nMultiples of 4: 4, 8, 12, 16, 20...\nMultiples of 6: 6, 12, 18, 24...\nLCM = 12',
            properties: [
              'Good for small numbers',
              'Easy to understand',
              'Not practical for large numbers',
              'Time-consuming',
            ],
          },
        ],
      },

      {
        id: 6,
        title: 'Important Formulas and Relationships',
        formulas: [
          {
            category: 'Golden Rule',
            items: [
              {
                name: 'HCF × LCM = Product of two numbers',
                formula: 'HCF(a,b) × LCM(a,b) = a × b',
                example: 'For 12 and 18: HCF=6, LCM=36. Check: 6×36 = 12×18 = 216 ✓',
                note: 'This only works for TWO numbers, not three or more',
              },
            ],
          },
          {
            category: 'Derived Formulas',
            items: [
              {
                name: 'Finding LCM using HCF',
                formula: 'LCM(a,b) = (a × b) / HCF(a,b)',
                example: 'If HCF of 20,30 is 10, then LCM = (20×30)/10 = 60',
              },
              {
                name: 'Finding HCF using LCM',
                formula: 'HCF(a,b) = (a × b) / LCM(a,b)',
                example: 'If LCM of 12,16 is 48, then HCF = (12×16)/48 = 4',
              },
              {
                name: 'Finding one number',
                formula: 'If HCF, LCM, and one number known: Other = (HCF × LCM) / Known number',
                example: 'HCF=4, LCM=48, one number=16. Other = (4×48)/16 = 12',
              },
            ],
          },
          {
            category: 'Special Cases',
            items: [
              {
                name: 'Co-prime numbers',
                formula: 'If HCF(a,b) = 1, then LCM(a,b) = a × b',
                example: 'HCF(7,11) = 1, so LCM = 7×11 = 77',
              },
              {
                name: 'When one divides another',
                formula: 'If a divides b, then HCF=a and LCM=b',
                example: 'For 6 and 18: HCF=6 (smaller), LCM=18 (larger)',
              },
              {
                name: 'Equal numbers',
                formula: 'HCF(a,a) = LCM(a,a) = a',
                example: 'HCF(15,15) = LCM(15,15) = 15',
              },
              {
                name: 'Three numbers',
                formula: 'HCF(a,b,c) × LCM(a,b,c) ≠ a × b × c',
                note: 'The golden rule does NOT apply to 3+ numbers',
              },
            ],
          },
          {
            category: 'HCF and LCM of Fractions',
            items: [
              {
                name: 'HCF of fractions',
                formula: 'HCF = HCF(numerators) / LCM(denominators)',
                example: 'HCF of 2/3 and 4/5 = HCF(2,4)/LCM(3,5) = 2/15',
              },
              {
                name: 'LCM of fractions',
                formula: 'LCM = LCM(numerators) / HCF(denominators)',
                example: 'LCM of 2/3 and 4/5 = LCM(2,4)/HCF(3,5) = 4/1 = 4',
              },
            ],
          },
        ],
      },

      {
        id: 7,
        title: 'Properties and Rules',
        subtopics: [
          {
            name: 'HCF Properties',
            properties: [
              'HCF is always a divisor of both numbers',
              'HCF ≤ smallest of the numbers',
              'HCF(a,b) = HCF(b,a) - Commutative',
              'HCF(a,0) = a',
              'HCF(a,1) = 1 for all a > 1',
              'If a divides b, then HCF(a,b) = a',
              'HCF divides both a and b',
              'HCF divides (a+b) and (a-b)',
            ],
          },
          {
            name: 'LCM Properties',
            properties: [
              'LCM is always a multiple of both numbers',
              'LCM ≥ largest of the numbers',
              'LCM(a,b) = LCM(b,a) - Commutative',
              'LCM(a,1) = a',
              'LCM(a,0) = 0',
              'If a divides b, then LCM(a,b) = b',
              'Both a and b divide LCM',
              'LCM(a,b,c) = LCM(LCM(a,b),c)',
            ],
          },
          {
            name: 'Relationship Properties',
            properties: [
              'HCF ≤ Both numbers ≤ LCM',
              'HCF divides LCM',
              'LCM is a multiple of HCF',
              'For co-primes: HCF=1, LCM=product',
              'HCF(ma, mb) = m × HCF(a,b)',
              'LCM(ma, mb) = m × LCM(a,b)',
            ],
          },
        ],
      },

      {
        id: 8,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Quick HCF for similar-looking numbers',
            method: 'For numbers like 24, 36, 48 - find HCF of differences',
            example: 'HCF(24,36,48) = HCF(differences) = HCF(12,12,24) = 12',
          },
          {
            name: 'HCF by subtraction',
            method: 'Keep subtracting smaller from larger until equal',
            example: 'HCF(48,18): 48-18=30, 30-18=12, 18-12=6, 12-6=6. HCF=6',
          },
          {
            name: 'LCM of fractions - Quick method',
            method: 'Convert to whole numbers, find LCM, then convert back',
            example: 'LCM(1/2, 1/3, 1/4) = 1/HCF(2,3,4) = 1/1 = 1',
          },
          {
            name: 'Using prime factorization shortcut',
            method: 'For powers of same prime, HCF=lower power, LCM=higher power',
            example: '12=2²×3, 18=2×3²: HCF=2¹×3¹=6, LCM=2²×3²=36',
          },
          {
            name: 'Finding HCF of consecutive numbers',
            method: 'HCF of consecutive numbers is always 1',
            example: 'HCF(25,26) = 1, HCF(100,101,102) = 1',
          },
          {
            name: 'Quick check for co-primes',
            method:
              'If sum of digits of both numbers is not divisible by 3, and both are odd, likely co-prime',
            example: '7 and 11 are co-prime (both odd, no common factors)',
          },
          {
            name: 'LCM for numbers with one common factor',
            method: 'LCM = (larger number × smaller number) / common factor',
            example: 'LCM(15,25) = (15×25)/5 = 75',
          },
          {
            name: 'Mental calculation for small numbers',
            method: 'Memorize LCM and HCF of common pairs (6,8), (12,16), (15,20)',
            example: 'LCM(6,8)=24, HCF(6,8)=2 (memorize these)',
          },
        ],
      },

      {
        id: 9,
        title: 'Problem-Solving Strategies',
        strategies: [
          {
            name: 'Division problems',
            approach: 'When dividing into equal parts → Find HCF',
            example: 'Divide 36 and 48 into equal parts: HCF(36,48) = 12',
          },
          {
            name: 'Repetition problems',
            approach: 'When events repeat together → Find LCM',
            example: 'Bells ring at 6,8,12 seconds: Next together = LCM(6,8,12) = 24 sec',
          },
          {
            name: 'Remainder problems',
            approach: 'Number that leaves same remainder → (differences) - Find HCF',
            example:
              'N leaves remainder 3 when divided by 15 and 27: HCF(15-3, 27-3) = HCF(12,24) = 12',
          },
          {
            name: 'Fraction simplification',
            approach: 'To simplify fractions → Find HCF of numerator and denominator',
            example: '48/72 = 48÷12 / 72÷12 = 4/6 = 2/3 (HCF=12)',
          },
          {
            name: 'Finding original numbers',
            approach: 'If HCF and LCM known → Use HCF × LCM = product formula',
            example: 'HCF=6, LCM=72, one number=12. Other = (6×72)/12 = 36',
          },
          {
            name: 'Three number problems',
            approach: 'Find pairwise first, then combine',
            example: 'HCF(12,18,24) = HCF(HCF(12,18), 24) = HCF(6,24) = 6',
          },
          {
            name: 'Time-based problems',
            approach: 'Meeting/coinciding → LCM of time periods',
            example: 'Trains depart at 6h, 8h, 12h intervals: Meet after LCM(6,8,12) = 24 hours',
          },
          {
            name: 'Distance problems',
            approach: 'Equal steps or equal distances → HCF of distances',
            example: 'Measure 36m, 48m with same rod: Max length = HCF(36,48) = 12m',
          },
        ],
      },

      {
        id: 10,
        title: 'Common Problem Types',
        subtopics: [
          {
            name: 'Type 1: Finding HCF and LCM',
            example: 'Find HCF and LCM of 24 and 36',
            solution: '24 = 2³×3, 36 = 2²×3². HCF = 2²×3 = 12. LCM = 2³×3² = 72',
          },
          {
            name: 'Type 2: Bells/Lights Problem',
            example: '3 bells ring at 12, 15, 18 second intervals. When will they ring together?',
            solution: 'LCM(12,15,18) = 180 seconds = 3 minutes',
          },
          {
            name: 'Type 3: Equal Distribution',
            example: 'Largest number that divides 70 and 125 leaving remainder 5 in each',
            solution: 'HCF(70-5, 125-5) = HCF(65,120) = 5',
          },
          {
            name: 'Type 4: Product Formula Application',
            example: 'HCF=13, LCM=273, one number=39. Find other',
            solution: 'Other = (13×273)/39 = 91',
          },
          {
            name: 'Type 5: Fraction Problems',
            example: 'HCF of 2/3, 8/9, 16/27',
            solution: 'HCF(2,8,16)/LCM(3,9,27) = 2/27',
          },
          {
            name: 'Type 6: Measurement Problems',
            example: 'Greatest tape that can measure 525, 675, 825 cm',
            solution: 'HCF(525,675,825) = 75 cm',
          },
          {
            name: 'Type 7: Ratio Problems',
            example: 'Two numbers in ratio 3:4, HCF is 5. Find numbers',
            solution: 'Numbers are 3×5=15 and 4×5=20',
          },
          {
            name: 'Type 8: Remainder Problems',
            example: 'Largest number dividing 54,66,108 leaving same remainder',
            solution: 'HCF(66-54, 108-66, 108-54) = HCF(12,42,54) = 6',
          },
        ],
      },

      {
        id: 11,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'Find HCF and LCM of 72 and 120',
            solution:
              'Step 1: Prime factorization\n72 = 2³ × 3²\n120 = 2³ × 3 × 5\n\nStep 2: HCF (common factors, lowest power)\nHCF = 2³ × 3 = 8 × 3 = 24\n\nStep 3: LCM (all factors, highest power)\nLCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360\n\nVerify: 24 × 360 = 72 × 120 = 8640 ✓',
            answer: 'HCF = 24, LCM = 360',
          },
          {
            question:
              'Three bells toll at intervals of 9, 12, 15 minutes. If they start together at 8:00 AM, when will they next toll together?',
            solution:
              'Step 1: Find LCM of time intervals\n9 = 3²\n12 = 2² × 3\n15 = 3 × 5\n\nStep 2: LCM calculation\nLCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 minutes\n\nStep 3: Convert to hours\n180 minutes = 3 hours\n\nStep 4: Add to start time\n8:00 AM + 3 hours = 11:00 AM',
            answer: '11:00 AM',
          },
          {
            question:
              'The HCF of two numbers is 16 and their LCM is 160. If one number is 32, find the other',
            solution:
              'Step 1: Use formula\nHCF × LCM = Product of two numbers\n\nStep 2: Substitute known values\n16 × 160 = 32 × Other number\n\nStep 3: Calculate\n2560 = 32 × Other number\nOther number = 2560 / 32 = 80\n\nStep 4: Verify\nHCF(32,80) = 16 ✓\nLCM(32,80) = 160 ✓',
            answer: '80',
          },
        ],
      },

      {
        id: 12,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Confusing HCF and LCM',
            correction:
              "Remember: HCF is smaller (High Can't exceed Factors), LCM is larger (Low Can't be Multiple less)",
          },
          {
            mistake: 'Using HCF×LCM=Product for 3+ numbers',
            correction: 'This formula ONLY works for TWO numbers. For 3+, calculate separately',
          },
          {
            mistake: 'Taking highest power for HCF',
            correction: 'HCF takes LOWEST power, LCM takes HIGHEST power',
          },
          {
            mistake: 'Forgetting to include all prime factors in LCM',
            correction: 'LCM must include ALL prime factors from all numbers',
          },
          {
            mistake: 'Not simplifying the final answer',
            correction: 'Always reduce fractions and simplify where possible',
          },
          {
            mistake: 'Assuming HCF is always small',
            correction: 'HCF can equal the smaller number if one divides the other',
          },
          {
            mistake: "Missing the 'remainder' in remainder problems",
            correction: 'Subtract remainder first, then find HCF of differences',
          },
          {
            mistake: 'Wrong formula for fractions',
            correction: 'Remember: HCF(fractions) = HCF(num)/LCM(den), not the reverse',
          },
        ],
      },

      {
        id: 13,
        title: 'Practice Tips',
        tips: [
          "Master prime factorization up to 100 - it's the foundation",
          "Practice Euclid's algorithm for speed",
          'Memorize LCM and HCF of common pairs: (6,8), (12,16), (15,20), (18,24)',
          'Always verify using HCF × LCM = Product formula for 2 numbers',
          "For 3+ numbers, use division method - it's faster",
          "In exams, if asked for only HCF or LCM, find just that - don't waste time",
          'Check answer reasonableness: HCF ≤ numbers ≤ LCM',
          "Practice remainder and division problems - they're common in exams",
          'Learn to identify problem type quickly (bells, distribution, measurement)',
        ],
      },

      {
        id: 14,
        title: 'Exam Strategy',
        examTips: [
          'HCF/LCM questions are usually in first 15 questions - attempt them first',
          'They are high-scoring and less time-consuming',
          'Use options elimination - check if HCF divides all numbers',
          'For LCM, check if answer is divisible by all given numbers',
          'If calculation seems lengthy, look for shortcuts or patterns',
          'Time limit: Maximum 1-1.5 minutes per question',
          'Practice mental calculation of HCF for numbers up to 100',
          'In word problems, identify whether you need HCF or LCM first',
        ],
      },

      {
        id: 15,
        title: 'Important Number Pairs (Memorize)',
        sets: [
          {
            name: 'Common HCF and LCM Pairs',
            values:
              '(6,8): HCF=2, LCM=24 | (6,9): HCF=3, LCM=18 | (8,12): HCF=4, LCM=24 | (9,12): HCF=3, LCM=36 | (10,15): HCF=5, LCM=30 | (12,16): HCF=4, LCM=48 | (12,18): HCF=6, LCM=36 | (14,21): HCF=7, LCM=42 | (15,20): HCF=5, LCM=60 | (16,24): HCF=8, LCM=48 | (18,24): HCF=6, LCM=72 | (20,30): HCF=10, LCM=60',
          },
          {
            name: 'Co-prime Pairs (HCF=1)',
            values: '(3,5), (4,9), (5,7), (6,7), (7,8), (7,9), (8,9), (9,10), (11,12), (13,14)',
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'HCF × LCM = a × b (for 2 numbers only)',
        'HCF: Take common primes with LOWEST power',
        'LCM: Take all primes with HIGHEST power',
        'HCF of fractions = HCF(numerators) / LCM(denominators)',
        'LCM of fractions = LCM(numerators) / HCF(denominators)',
        'If one divides other: HCF=smaller, LCM=larger',
        'Co-primes: HCF=1, LCM=product',
      ],

      mustRememberFacts: [
        'HCF ≤ all numbers ≤ LCM',
        'HCF divides LCM always',
        'HCF of consecutive numbers = 1',
        'Division problems → Use HCF',
        'Repetition problems → Use LCM',
        'HCF×LCM formula works only for 2 numbers',
      ],

      quickIdentification: [
        'Equal parts/groups → HCF',
        'Together/simultaneously → LCM',
        'Largest/greatest that divides → HCF',
        'Smallest/least that is divisible → LCM',
        'Same remainder → HCF of differences',
        'Common denominator → LCM',
      ],
    },
  },

  //3 Decimal Fractions
  {
    id: 3,
    topic: 'Decimal Fractions',
    description:
      'Master decimal fractions - the bridge between whole numbers and fractions. Learn operations, conversions, and problem-solving techniques essential for competitive exams.',

    sections: [
      {
        id: 1,
        title: 'Introduction to Decimal Fractions',
        content:
          'Decimal fractions (or simply decimals) are fractions where the denominator is a power of 10 (10, 100, 1000, etc.). They provide an alternative way to represent fractions and make calculations easier in many situations.',
        importance:
          'Decimal questions appear in 80% of aptitude tests and are fundamental for percentage, ratio, and financial calculations',
      },

      {
        id: 2,
        title: 'What is a Decimal Fraction?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'A decimal fraction is a fraction whose denominator is 10 or a power of 10 (10, 100, 1000, etc.). Written using a decimal point (.) to separate the whole number part from the fractional part.',
            example: '0.5 = 5/10, 0.75 = 75/100, 0.125 = 125/1000',
            properties: [
              'The decimal point separates whole and fractional parts',
              'Each position after decimal represents a power of 10',
              'Can represent any fraction accurately or approximately',
              'Makes arithmetic operations easier',
            ],
          },
          {
            name: 'Parts of a Decimal',
            description: 'A decimal number has two main parts:',
            types: [
              'Whole Number Part: Digits before the decimal point (e.g., in 25.75, whole part is 25)',
              'Decimal Part: Digits after the decimal point (e.g., in 25.75, decimal part is 75)',
              'Decimal Point: The dot (.) that separates the two parts',
            ],
          },
          {
            name: 'Reading Decimals',
            example:
              "25.75 is read as 'twenty-five point seven five' or 'twenty-five and seventy-five hundredths'",
            properties: [
              'Point method: Read each digit after decimal separately',
              'Place value method: Read as a fraction',
              "0.5 = 'zero point five' or 'five tenths'",
              "3.14 = 'three point one four' or 'three and fourteen hundredths'",
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'Types of Decimals',
        subtopics: [
          {
            name: 'Terminating Decimals',
            definition:
              'Decimals that end after a finite number of digits. They have exact decimal representation.',
            example: '0.5, 0.25, 0.125, 2.75, 5.625',
            properties: [
              'Can be exactly represented in decimal form',
              'Result when denominator has only 2 and/or 5 as prime factors',
              '1/2 = 0.5, 1/4 = 0.25, 1/8 = 0.125',
              'Always convertible to exact fractions',
            ],
          },
          {
            name: 'Non-Terminating Recurring Decimals',
            definition:
              'Decimals where digits repeat infinitely in a pattern. Also called repeating decimals or periodic decimals.',
            example: '0.333... (1/3), 0.666... (2/3), 0.142857142857... (1/7)',
            notation: '0.333... = 0.3̄ (bar over repeating digit)',
            properties: [
              'One or more digits repeat infinitely',
              'Result when denominator has prime factors other than 2 and 5',
              'Can be converted to fractions',
              'Pattern length varies: 1/3 has 1-digit pattern, 1/7 has 6-digit pattern',
            ],
          },
          {
            name: 'Non-Terminating Non-Recurring Decimals',
            definition:
              'Decimals that neither terminate nor repeat. These represent irrational numbers.',
            example: 'π = 3.14159265..., √2 = 1.41421356..., e = 2.71828...',
            properties: [
              'Cannot be expressed as fractions',
              'Represent irrational numbers',
              'No repeating pattern',
              'Cannot be exactly represented',
            ],
          },
          {
            name: 'Pure Recurring Decimals',
            definition:
              'Recurring decimals where repetition starts immediately after the decimal point.',
            example: '0.333... (1/3), 0.777... (7/9), 0.454545... (5/11)',
            properties: [
              'All digits after decimal point repeat',
              'No non-repeating part after decimal',
              'Easy to convert to fractions',
            ],
          },
          {
            name: 'Mixed Recurring Decimals',
            definition:
              'Recurring decimals with some non-repeating digits before the repeating part.',
            example: '0.1666... (1/6), 0.0833... (1/12), 0.58333... (7/12)',
            properties: [
              'Has non-repeating part followed by repeating part',
              'More complex to convert to fractions',
              'Common in division problems',
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Decimal Place Values',
        subtopics: [
          {
            name: 'Place Value Chart',
            description: 'Each position in a decimal has a specific value based on powers of 10',
            example:
              'In 3456.789:\n3 = Thousands (10³)\n4 = Hundreds (10²)\n5 = Tens (10¹)\n6 = Ones (10⁰)\n7 = Tenths (10⁻¹)\n8 = Hundredths (10⁻²)\n9 = Thousandths (10⁻³)',
          },
          {
            name: 'Positions After Decimal Point',
            properties: [
              '1st position: Tenths (1/10 = 0.1)',
              '2nd position: Hundredths (1/100 = 0.01)',
              '3rd position: Thousandths (1/1000 = 0.001)',
              '4th position: Ten-thousandths (1/10000 = 0.0001)',
              '5th position: Hundred-thousandths (1/100000 = 0.00001)',
              '6th position: Millionths (1/1000000 = 0.000001)',
            ],
          },
          {
            name: 'Expanded Form',
            example:
              '25.347 = 2×10 + 5×1 + 3×(1/10) + 4×(1/100) + 7×(1/1000)\n= 20 + 5 + 0.3 + 0.04 + 0.007',
          },
        ],
      },

      {
        id: 5,
        title: 'Operations on Decimals',
        subtopics: [
          {
            name: 'Addition of Decimals',
            definition:
              'Line up decimal points vertically and add as usual, keeping decimal point in the same position.',
            example: 'Add 12.45 + 3.678:\n  12.450\n+  3.678\n-------\n  16.128',
            properties: [
              'Align decimal points vertically',
              'Add zeros to make equal length (optional but helpful)',
              'Add column by column from right to left',
              'Keep decimal point in the answer at the same position',
            ],
          },
          {
            name: 'Subtraction of Decimals',
            definition: 'Line up decimal points and subtract, borrowing when necessary.',
            example: 'Subtract 8.5 - 3.625:\n  8.500\n- 3.625\n-------\n  4.875',
            properties: [
              'Align decimal points',
              'Add zeros to make equal length',
              'Subtract column by column',
              'Borrow from left when needed',
            ],
          },
          {
            name: 'Multiplication of Decimals',
            definition: 'Multiply as whole numbers, then place decimal point in the answer.',
            example:
              'Multiply 2.5 × 3.4:\n25 × 34 = 850\nDecimal places: 1 + 1 = 2\nAnswer: 8.50 = 8.5',
            properties: [
              'Ignore decimal points and multiply as whole numbers',
              'Count total decimal places in both numbers',
              'Place decimal point in answer with same total places',
              'Remove trailing zeros if needed',
            ],
          },
          {
            name: 'Division of Decimals',
            definition: 'Convert divisor to whole number by moving decimal point, then divide.',
            example: 'Divide 8.4 ÷ 2.1:\nMultiply both by 10: 84 ÷ 21 = 4',
            properties: [
              'Move decimal in divisor to make it whole',
              'Move decimal in dividend by same number of places',
              'Divide as usual',
              'Place decimal point in answer',
            ],
          },
        ],
      },

      {
        id: 6,
        title: 'Conversion: Decimal to Fraction',
        subtopics: [
          {
            name: 'Terminating Decimal to Fraction',
            definition:
              'Count decimal places, write as fraction with denominator as power of 10, then simplify.',
            example: '0.75 = 75/100 = 3/4 (÷ 25)\n0.125 = 125/1000 = 1/8 (÷ 125)',
            method:
              'Step 1: Count decimal places (n)\nStep 2: Write as number/10ⁿ\nStep 3: Simplify by finding HCF',
          },
          {
            name: 'Pure Recurring Decimal to Fraction',
            definition:
              'Let x = decimal, multiply by 10ⁿ (n = length of repeating block), subtract and solve.',
            example:
              'Convert 0.3̄ to fraction:\nLet x = 0.333...\n10x = 3.333...\n10x - x = 3\n9x = 3\nx = 3/9 = 1/3',
            formula: 'For 0.abc̄: Fraction = abc/999 (number of 9s = repeating digits)',
            properties: ['0.1̄ = 1/9', '0.2̄ = 2/9', '0.3̄ = 3/9 = 1/3', '0.12̄ = 12/99 = 4/33'],
          },
          {
            name: 'Mixed Recurring Decimal to Fraction',
            definition: 'More complex: use formula or algebraic method.',
            example: 'Convert 0.16̄ to fraction:\n0.16̄ = (16-1)/90 = 15/90 = 1/6',
            formula:
              'For 0.ab̄c: Fraction = (abc - a)/(900) where a is non-repeating, bc is repeating',
            properties: [
              'Separate non-repeating and repeating parts',
              'Use formula or algebraic method',
              'Simplify final fraction',
            ],
          },
        ],
      },

      {
        id: 7,
        title: 'Conversion: Fraction to Decimal',
        subtopics: [
          {
            name: 'Direct Division Method',
            definition: 'Divide numerator by denominator using long division.',
            example: '3/4 = 3 ÷ 4 = 0.75\n2/3 = 2 ÷ 3 = 0.666... = 0.6̄',
            properties: [
              'Most straightforward method',
              'May result in terminating or recurring decimal',
              'Continue division to see pattern',
            ],
          },
          {
            name: 'Equivalent Fraction Method',
            definition: 'Convert denominator to power of 10 if possible.',
            example: '3/4 = (3×25)/(4×25) = 75/100 = 0.75\n3/5 = (3×2)/(5×2) = 6/10 = 0.6',
            properties: [
              'Works only if denominator has factors of 2 and/or 5',
              'Quick for simple fractions',
              'Gives terminating decimals',
            ],
          },
          {
            name: 'Identifying Decimal Type',
            definition: "Check denominator's prime factors to predict decimal type.",
            properties: [
              'Only 2 and/or 5: Terminating (1/4 = 0.25, 3/8 = 0.375)',
              'Contains 3, 7, 11, etc.: Recurring (1/3 = 0.3̄, 1/7 = 0.142857̄)',
              'Irrational: Non-terminating non-recurring (√2, π)',
            ],
          },
        ],
      },

      {
        id: 8,
        title: 'Comparing and Ordering Decimals',
        subtopics: [
          {
            name: 'Method 1: Place Value Comparison',
            definition: 'Compare digit by digit from left to right.',
            example:
              'Compare 0.45 and 0.5:\n0.45 = 0.45\n0.5 = 0.50\nSince 4 < 5 in tenths place, 0.45 < 0.5',
            properties: [
              'Start from leftmost digit after decimal',
              'First different digit determines order',
              'Add zeros to make equal length for clarity',
            ],
          },
          {
            name: 'Method 2: Convert to Like Decimals',
            definition: 'Make all decimals have same number of decimal places by adding zeros.',
            example:
              'Order: 0.7, 0.07, 0.707, 0.77\nAs: 0.700, 0.070, 0.707, 0.770\nOrder: 0.070 < 0.700 < 0.707 < 0.770',
            properties: [
              'Add trailing zeros to equal length',
              'Compare as whole numbers',
              'Easy to visualize',
            ],
          },
          {
            name: 'Method 3: Convert to Fractions',
            definition: 'Convert all to fractions with common denominator and compare.',
            example:
              'Compare 0.5, 0.33, 0.25:\n= 1/2, 1/3, 1/4\n= 6/12, 4/12, 3/12\nOrder: 0.25 < 0.33 < 0.5',
          },
        ],
      },

      {
        id: 9,
        title: 'Rounding Decimals',
        subtopics: [
          {
            name: 'Rounding Rules',
            definition: 'Rules for rounding to a specific decimal place:',
            properties: [
              'If next digit is 0-4: Round down (keep the digit)',
              'If next digit is 5-9: Round up (increase digit by 1)',
              'Remove all digits after the rounding position',
            ],
          },
          {
            name: 'Rounding to Decimal Places',
            example:
              'Round 3.14159 to 2 decimal places:\nLook at 3rd place: 1\nSince 1 < 5, round down\nAnswer: 3.14',
            properties: [
              '1 decimal place: nearest tenth (0.1)',
              '2 decimal places: nearest hundredth (0.01)',
              '3 decimal places: nearest thousandth (0.001)',
            ],
          },
          {
            name: 'Rounding to Significant Figures',
            example:
              'Round 0.004567 to 2 significant figures:\nFirst 2 non-zero digits: 45\nNext digit: 6 (≥5, round up)\nAnswer: 0.0046',
            properties: [
              'Count only non-zero digits',
              "Leading zeros don't count",
              'Trailing zeros after decimal count if after non-zero digit',
            ],
          },
          {
            name: 'Rounding to Nearest Whole',
            example: 'Round 7.6 to nearest whole: 8\nRound 7.4 to nearest whole: 7',
            properties: ['Look at tenths place', 'If ≥ 5, round up', 'If < 5, round down'],
          },
        ],
      },

      {
        id: 10,
        title: 'Important Formulas and Rules',
        formulas: [
          {
            category: 'Conversion Formulas',
            items: [
              {
                name: 'Decimal to Fraction (Terminating)',
                formula: 'n decimal places → Denominator = 10ⁿ, then simplify',
                example: '0.625 = 625/1000 = 5/8',
              },
              {
                name: 'Pure Recurring to Fraction',
                formula: '0.abc̄ = abc/999',
                example: '0.27̄ = 27/99 = 3/11',
              },
              {
                name: 'Mixed Recurring to Fraction',
                formula: '0.ab̄c = (abc - a)/990',
                example: '0.16̄ = (16-1)/90 = 15/90 = 1/6',
              },
              {
                name: 'Fraction to Decimal',
                formula: 'Divide numerator by denominator',
                example: '7/8 = 7 ÷ 8 = 0.875',
              },
            ],
          },
          {
            category: 'Operation Rules',
            items: [
              {
                name: 'Multiplication by 10, 100, 1000',
                formula: 'Move decimal point right by number of zeros',
                example: '3.456 × 100 = 345.6 (move 2 places right)',
              },
              {
                name: 'Division by 10, 100, 1000',
                formula: 'Move decimal point left by number of zeros',
                example: '45.6 ÷ 100 = 0.456 (move 2 places left)',
              },
              {
                name: 'Decimal Places in Product',
                formula: 'Sum of decimal places in factors',
                example: '2.5 (1 place) × 3.14 (2 places) = 7.850 (3 places)',
              },
              {
                name: 'Decimal Places in Division',
                formula: 'Adjust to make divisor whole, then divide',
                example: '8.4 ÷ 2.1 = 84 ÷ 21 (multiply both by 10)',
              },
            ],
          },
          {
            category: 'Special Conversions (Memorize)',
            items: [
              {
                name: 'Common Fractions to Decimals',
                formula:
                  '1/2=0.5, 1/3=0.3̄, 1/4=0.25, 1/5=0.2, 1/6=0.16̄, 1/7=0.142857̄, 1/8=0.125, 1/9=0.1̄, 1/10=0.1',
              },
              {
                name: 'Common Decimals to Fractions',
                formula:
                  '0.5=1/2, 0.25=1/4, 0.75=3/4, 0.2=1/5, 0.4=2/5, 0.6=3/5, 0.8=4/5, 0.125=1/8, 0.375=3/8',
              },
            ],
          },
        ],
      },

      {
        id: 11,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Quick Multiplication by 0.5',
            method: 'Divide by 2',
            example: '48 × 0.5 = 48 ÷ 2 = 24',
          },
          {
            name: 'Quick Multiplication by 0.25',
            method: 'Divide by 4',
            example: '80 × 0.25 = 80 ÷ 4 = 20',
          },
          {
            name: 'Quick Division by 0.5',
            method: 'Multiply by 2',
            example: '15 ÷ 0.5 = 15 × 2 = 30',
          },
          {
            name: 'Quick Division by 0.25',
            method: 'Multiply by 4',
            example: '12 ÷ 0.25 = 12 × 4 = 48',
          },
          {
            name: 'Moving Decimal for Powers of 10',
            method: 'Right for multiplication, Left for division',
            example: '3.5 × 1000 = 3500 (move 3 right)\n4500 ÷ 100 = 45 (move 2 left)',
          },
          {
            name: 'Comparing Decimals Quickly',
            method: 'Add zeros to make equal length, then compare as whole numbers',
            example: '0.5 vs 0.45: Make 0.50 vs 0.45, so 50 > 45',
          },
          {
            name: 'Converting Recurring Decimals Quickly',
            method: 'Use patterns: 0.1̄=1/9, 0.2̄=2/9, ..., 0.9̄=1',
            example: '0.4̄ = 4/9, 0.7̄ = 7/9',
          },
          {
            name: 'Squaring Decimals Near Whole Numbers',
            method: 'Use (a+b)² = a² + 2ab + b² or (a-b)² = a² - 2ab + b²',
            example: '9.8² = (10-0.2)² = 100 - 4 + 0.04 = 96.04',
          },
          {
            name: 'Adding/Subtracting by Mental Compensation',
            method: 'Round to nearest whole, adjust result',
            example: '7.8 + 5.9 = 8 + 6 - 0.2 - 0.1 = 14 - 0.3 = 13.7',
          },
          {
            name: 'Quick Check for Repeating Decimal',
            method: 'Check denominator: if prime factors other than 2,5 exist → recurring',
            example: '1/7: 7 is prime (not 2 or 5) → recurring ✓',
          },
        ],
      },

      {
        id: 12,
        title: 'Common Problem Types',
        subtopics: [
          {
            name: 'Type 1: Basic Operations',
            example: 'Calculate: 12.5 + 3.75 - 2.125',
            solution: '= 16.25 - 2.125 = 14.125',
          },
          {
            name: 'Type 2: Multiplication and Division',
            example: 'Find: 2.5 × 3.6 ÷ 1.5',
            solution: '= 9.0 ÷ 1.5 = 9 × (10/15) = 6',
          },
          {
            name: 'Type 3: Conversion Problems',
            example: 'Express 0.375 as a fraction',
            solution: '0.375 = 375/1000 = 3/8',
          },
          {
            name: 'Type 4: Comparison Problems',
            example: 'Which is greater: 0.7 or 0.699?',
            solution: '0.700 > 0.699, so 0.7 is greater',
          },
          {
            name: 'Type 5: Word Problems',
            example: "Price of 1 kg rice is $2.50. What's the cost of 3.5 kg?",
            solution: '3.5 × 2.50 = $8.75',
          },
          {
            name: 'Type 6: Fraction to Recurring Decimal',
            example: 'Express 2/3 as decimal',
            solution: '2 ÷ 3 = 0.666... = 0.6̄',
          },
          {
            name: 'Type 7: Finding Unknown',
            example: 'If 0.75 of a number is 60, find the number',
            solution: 'Number = 60 ÷ 0.75 = 60 × (4/3) = 80',
          },
          {
            name: 'Type 8: Ordering Decimals',
            example: 'Arrange: 0.8, 0.08, 0.808, 0.88',
            solution: '0.080 < 0.800 < 0.808 < 0.880',
          },
        ],
      },

      {
        id: 13,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'Convert 0.36̄ to a fraction in simplest form',
            solution:
              'Step 1: Identify the repeating part\nRepeating digits: 36 (2 digits)\n\nStep 2: Use the formula for pure recurring\n0.36̄ = 36/99\n\nStep 3: Simplify by finding HCF\nHCF(36, 99) = 9\n36 ÷ 9 = 4\n99 ÷ 9 = 11\n\nStep 4: Final answer\n0.36̄ = 4/11',
            answer: '4/11',
          },
          {
            question: 'A book costs $12.75. If you buy 4 books, how much do you pay?',
            solution:
              'Step 1: Identify the operation\nNeed to multiply: 12.75 × 4\n\nStep 2: Multiply ignoring decimal\n1275 × 4 = 5100\n\nStep 3: Place decimal point\nOriginal has 2 decimal places\nAnswer: 51.00\n\nStep 4: Final answer\n$51.00',
            answer: '$51.00',
          },
          {
            question: 'If 0.2̄ + 0.5̄ = ?, express as a fraction',
            solution:
              'Step 1: Convert to fractions\n0.2̄ = 2/9\n0.5̄ = 5/9\n\nStep 2: Add fractions\n2/9 + 5/9 = 7/9\n\nStep 3: Convert back to decimal (optional)\n7/9 = 0.777... = 0.7̄\n\nStep 4: Final answer\n7/9 or 0.7̄',
            answer: '7/9 or 0.7̄',
          },
          {
            question: 'Simplify: 10 - 3.45 + 2.8',
            solution:
              'Step 1: Align decimals\n  10.00\n-  3.45\n-------\n   6.55\n\nStep 2: Add the second part\n   6.55\n+  2.80\n-------\n   9.35\n\nStep 3: Final answer\n9.35',
            answer: '9.35',
          },
        ],
      },

      {
        id: 14,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Forgetting to align decimal points in addition/subtraction',
            correction: 'Always write numbers with decimal points vertically aligned',
          },
          {
            mistake: 'Wrong decimal place count in multiplication',
            correction: 'Add decimal places from both numbers: 2.5 (1) × 3.14 (2) = 7.850 (3)',
          },
          {
            mistake: 'Not moving decimal in both dividend and divisor',
            correction: 'In 8.4 ÷ 2.1, move decimal in BOTH to get 84 ÷ 21',
          },
          {
            mistake: 'Comparing 0.5 and 0.45 as 5 > 45',
            correction: 'Make equal length: 0.50 vs 0.45, then 50 > 45 ✓',
          },
          {
            mistake: 'Wrong formula for mixed recurring decimals',
            correction: '0.1̄6 ≠ 16/99. Use proper formula: (16-1)/90 = 15/90 = 1/6',
          },
          {
            mistake: 'Forgetting to simplify fractions',
            correction: 'Always reduce: 0.25 = 25/100 = 1/4 (not just 25/100)',
          },
          {
            mistake: 'Rounding 2.5 to 2 instead of 3',
            correction: 'When digit is exactly 5, round UP: 2.5 → 3',
          },
          {
            mistake: 'Thinking 0.5 × 2 = 0.10',
            correction: '0.5 × 2 = 1.0 = 1 (not 0.10)',
          },
        ],
      },

      {
        id: 15,
        title: 'Practice Tips',
        tips: [
          'Memorize common fraction-decimal equivalents (1/2, 1/3, 1/4, etc.)',
          'Practice mental arithmetic with 0.5, 0.25, 0.75',
          'Master the art of moving decimals for powers of 10',
          'Use estimation to check if your answer is reasonable',
          'Practice converting recurring decimals - they appear frequently',
          'Learn to quickly identify terminating vs recurring by denominator',
          'Always align decimal points before adding/subtracting',
          'Practice rounding to different decimal places',
          'Use real-life examples: money calculations help understand decimals',
          'Check your work by converting back and forth',
        ],
      },

      {
        id: 16,
        title: 'Exam Strategy',
        examTips: [
          'Decimal questions are usually straightforward - attempt them early',
          'Use options to verify your answer quickly',
          'For conversion questions, check if answer is in simplest form',
          'Time limit: 45 seconds to 1 minute per question',
          'If calculation seems complex, look for shortcuts',
          'For comparison, make equal decimal places first',
          'In word problems, identify the operation carefully',
          'Round only in final answer, not intermediate steps',
          'Watch for tricky questions mixing decimals and fractions',
          'Use approximation for quick elimination of wrong options',
        ],
      },

      {
        id: 17,
        title: 'Important Decimal Equivalents (Memorize)',
        sets: [
          {
            name: 'Unit Fractions',
            values:
              '1/2 = 0.5 | 1/3 = 0.3̄ | 1/4 = 0.25 | 1/5 = 0.2 | 1/6 = 0.16̄ | 1/7 = 0.142857̄ | 1/8 = 0.125 | 1/9 = 0.1̄ | 1/10 = 0.1',
          },
          {
            name: 'Common Fractions',
            values:
              '2/3 = 0.6̄ | 3/4 = 0.75 | 2/5 = 0.4 | 3/5 = 0.6 | 4/5 = 0.8 | 5/6 = 0.83̄ | 3/8 = 0.375 | 5/8 = 0.625 | 7/8 = 0.875',
          },
          {
            name: 'Recurring Patterns',
            values:
              '1/9 = 0.1̄ | 2/9 = 0.2̄ | 3/9 = 0.3̄ | 4/9 = 0.4̄ | 5/9 = 0.5̄ | 6/9 = 0.6̄ | 7/9 = 0.7̄ | 8/9 = 0.8̄',
          },
          {
            name: 'Powers of 2 Denominators',
            values:
              '1/2 = 0.5 | 1/4 = 0.25 | 1/8 = 0.125 | 1/16 = 0.0625 | 1/32 = 0.03125 | 3/4 = 0.75 | 5/8 = 0.625 | 7/8 = 0.875',
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'Terminating decimal → Fraction: Count places, make 10ⁿ denominator, simplify',
        'Pure recurring 0.abc̄ = abc/999',
        'Mixed recurring 0.ab̄c = (abc - a)/990',
        'Multiply by 10ⁿ: Move decimal right n places',
        'Divide by 10ⁿ: Move decimal left n places',
        'Decimal places in product = sum of decimal places',
        'To divide by decimal: Make divisor whole first',
      ],

      mustRememberFacts: [
        'Terminating: denominator has only 2 and/or 5',
        'Recurring: denominator has other prime factors',
        '1/3 = 0.3̄, 1/6 = 0.16̄, 1/7 = 0.142857̄',
        '0.5 = 1/2, 0.25 = 1/4, 0.75 = 3/4',
        'Align decimal points for +/-',
        'Count total decimal places for ×',
        'Round 5 and above UP',
      ],

      quickConversions: [
        '× 0.5 = ÷ 2',
        '× 0.25 = ÷ 4',
        '÷ 0.5 = × 2',
        '÷ 0.25 = × 4',
        '× 1.5 = × 3/2',
        '0.1̄ = 1/9, 0.2̄ = 2/9, ... 0.9̄ = 1',
      ],
    },
  },
  //4 Square Root & Cube Root
  {
    id: 4,
    topic: 'Square Root & Cube Root',
    description:
      'Master square roots and cube roots - essential concepts for simplification, equations, and mensuration problems in competitive exams',

    sections: [
      {
        id: 1,
        title: 'Introduction to Roots',
        content:
          'Square roots and cube roots are inverse operations of squaring and cubing numbers. Understanding these concepts is crucial for solving algebraic equations, simplifying expressions, and solving mensuration problems.',
        importance:
          'Root problems appear in 70% of quantitative aptitude tests and are fundamental for geometry, algebra, and number system questions',
      },

      {
        id: 2,
        title: 'What is Square Root?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'The square root of a number is a value that, when multiplied by itself, gives the original number. It is denoted by the radical symbol √.',
            example:
              '√16 = 4 because 4 × 4 = 16\n√25 = 5 because 5 × 5 = 25\n√64 = 8 because 8 × 8 = 64',
            notation: '√n or n^(1/2) or n^0.5',
            properties: [
              'Every positive number has two square roots: positive and negative',
              '√16 = ±4, but by convention we take positive root',
              'Square root of negative numbers is not real (imaginary)',
              '√0 = 0, √1 = 1',
            ],
          },
          {
            name: 'Perfect Squares',
            definition: 'Numbers that are squares of integers are called perfect squares.',
            example:
              '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400...',
            properties: [
              'Always have integer square roots',
              'End only in 0, 1, 4, 5, 6, or 9',
              'Never end in 2, 3, 7, or 8',
              'Sum of first n odd numbers = n²',
              'Difference between consecutive squares: n² - (n-1)² = 2n - 1',
            ],
          },
          {
            name: 'Types of Square Roots',
            types: [
              'Rational: √4 = 2, √9 = 3 (exact values)',
              'Irrational: √2 = 1.414..., √3 = 1.732... (non-terminating, non-recurring)',
              'Surd: Square root that cannot be simplified to rational (√2, √3, √5)',
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'What is Cube Root?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'The cube root of a number is a value that, when multiplied by itself three times, gives the original number. It is denoted by ∛.',
            example:
              '∛8 = 2 because 2 × 2 × 2 = 8\n∛27 = 3 because 3 × 3 × 3 = 27\n∛125 = 5 because 5 × 5 × 5 = 125',
            notation: '∛n or n^(1/3) or n^0.333...',
            properties: [
              'Every number has exactly one real cube root',
              'Cube root of negative numbers is negative',
              '∛(-8) = -2 because (-2)³ = -8',
              '∛0 = 0, ∛1 = 1',
            ],
          },
          {
            name: 'Perfect Cubes',
            definition: 'Numbers that are cubes of integers are called perfect cubes.',
            example:
              '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096...',
            properties: [
              'Always have integer cube roots',
              'Can end in any digit 0-9',
              'Cube of even number is even, odd is odd',
              'Sum of cubes: 1³ + 2³ + ... + n³ = [n(n+1)/2]²',
            ],
          },
          {
            name: 'Key Difference from Square Root',
            properties: [
              'Cube root of negative numbers exists (and is negative)',
              'Only one real cube root (not ±)',
              'Perfect cubes can end in any digit',
              'Cube root grows slower than square root',
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Methods to Find Square Root',
        subtopics: [
          {
            name: 'Method 1: Prime Factorization',
            definition: 'Express the number as product of prime factors, then group in pairs.',
            example: 'Find √144:\n144 = 2⁴ × 3²\n√144 = 2² × 3 = 4 × 3 = 12',
            steps: [
              'Step 1: Find prime factorization',
              'Step 2: Group same primes in pairs',
              'Step 3: Take one number from each pair',
              'Step 4: Multiply the numbers',
            ],
            properties: [
              'Best for perfect squares',
              'Shows if number is perfect square',
              "If all powers are even, it's a perfect square",
            ],
          },
          {
            name: 'Method 2: Long Division Method',
            definition:
              'Systematic method to find square root digit by digit, works for any number.',
            example:
              'Find √529:\n1. Pair digits from right: 5|29\n2. Find largest digit whose square ≤ 5: 2 (4)\n3. Remainder: 5-4=1, bring down 29\n4. Double quotient: 4_, find digit: 43×3=129\n5. Answer: 23',
            steps: [
              'Pair digits from right to left',
              'Find largest square ≤ first pair',
              'Subtract and bring down next pair',
              'Double the quotient and continue',
            ],
            properties: [
              'Works for any number',
              'Can find square root to any decimal places',
              'Time-consuming but accurate',
            ],
          },
          {
            name: 'Method 3: Estimation Method',
            definition: 'Estimate by finding nearest perfect squares.',
            example:
              'Find √50:\nNearest perfect squares: 49 (7²) and 64 (8²)\nSince 50 is close to 49, √50 ≈ 7.07',
            properties: [
              'Quick for approximations',
              'Good for multiple choice',
              'Use for checking reasonableness',
            ],
          },
          {
            name: 'Method 4: Digit-by-Digit Method',
            definition: 'For perfect squares, use pattern recognition.',
            example:
              '√625: Ends in 5, so root ends in 5\nFirst digit: √6 is between 2 and 3, so 25\n√625 = 25',
            properties: [
              'Very fast for perfect squares',
              'Uses last digit patterns',
              'Requires memorization',
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Methods to Find Cube Root',
        subtopics: [
          {
            name: 'Method 1: Prime Factorization',
            definition: 'Express the number as product of prime factors, then group in triplets.',
            example: 'Find ∛216:\n216 = 2³ × 3³\n∛216 = 2 × 3 = 6',
            steps: [
              'Step 1: Find prime factorization',
              'Step 2: Group same primes in triplets',
              'Step 3: Take one number from each triplet',
              'Step 4: Multiply the numbers',
            ],
            properties: [
              'Best for perfect cubes',
              'Shows if number is perfect cube',
              "If all powers divisible by 3, it's perfect cube",
            ],
          },
          {
            name: 'Method 2: Estimation Method',
            definition: 'Find nearest perfect cubes and estimate.',
            example: 'Find ∛30:\nNearest cubes: 27 (3³) and 64 (4³)\n∛30 ≈ 3.1 (closer to 27)',
            properties: ['Quick approximation', 'Good for MCQs', 'Use for elimination'],
          },
          {
            name: 'Method 3: Digit Pattern Method',
            definition: 'For perfect cubes, use last digit pattern.',
            example:
              '∛13824:\nLast digit 4 → cube root ends in 4\nRemove last 3 digits: 13\n2³ = 8, 3³ = 27, so first digit is 2\n∛13824 = 24',
            properties: [
              'Very fast for perfect cubes',
              'Last digit of cube determines last digit of root',
              'Pattern: 1→1, 2→8, 3→7, 4→4, 5→5, 6→6, 7→3, 8→2, 9→9, 0→0',
            ],
          },
        ],
      },

      {
        id: 6,
        title: 'Properties and Rules',
        subtopics: [
          {
            name: 'Square Root Properties',
            properties: [
              '√(a × b) = √a × √b',
              '√(a ÷ b) = √a ÷ √b',
              '√a² = |a| (absolute value)',
              '(√a)² = a',
              '√a + √b ≠ √(a+b)',
              '√a - √b ≠ √(a-b)',
              'If a > b, then √a > √b (for positive numbers)',
              '√(a²b) = a√b',
            ],
          },
          {
            name: 'Cube Root Properties',
            properties: [
              '∛(a × b) = ∛a × ∛b',
              '∛(a ÷ b) = ∛a ÷ ∛b',
              '∛a³ = a (exact, no absolute value needed)',
              '(∛a)³ = a',
              '∛a + ∛b ≠ ∛(a+b)',
              '∛(-a) = -∛a',
              'If a > b, then ∛a > ∛b',
              '∛(a³b) = a∛b',
            ],
          },
          {
            name: 'Comparison Rules',
            properties: [
              '√n > ∛n for n > 1',
              '√n < ∛n for 0 < n < 1',
              '√n = ∛n for n = 0 or n = 1',
              'nth root decreases as n increases',
            ],
          },
        ],
      },

      {
        id: 7,
        title: 'Important Formulas',
        formulas: [
          {
            category: 'Basic Formulas',
            items: [
              {
                name: 'Square of square root',
                formula: '(√a)² = a',
                example: '(√16)² = 16',
              },
              {
                name: 'Square root of square',
                formula: '√(a²) = |a|',
                example: '√(5²) = 5, √((-5)²) = 5',
              },
              {
                name: 'Cube of cube root',
                formula: '(∛a)³ = a',
                example: '(∛27)³ = 27',
              },
              {
                name: 'Cube root of cube',
                formula: '∛(a³) = a',
                example: '∛(5³) = 5, ∛((-5)³) = -5',
              },
            ],
          },
          {
            category: 'Operations with Roots',
            items: [
              {
                name: 'Product of square roots',
                formula: '√a × √b = √(ab)',
                example: '√2 × √8 = √16 = 4',
              },
              {
                name: 'Quotient of square roots',
                formula: '√a ÷ √b = √(a/b)',
                example: '√18 ÷ √2 = √9 = 3',
              },
              {
                name: 'Product of cube roots',
                formula: '∛a × ∛b = ∛(ab)',
                example: '∛2 × ∛4 = ∛8 = 2',
              },
              {
                name: 'Power of roots',
                formula: '(√a)ⁿ = √(aⁿ) = a^(n/2)',
                example: '(√5)² = 5, (√3)⁴ = 9',
              },
            ],
          },
          {
            category: 'Simplification Formulas',
            items: [
              {
                name: 'Rationalizing denominator',
                formula: 'a/√b = (a√b)/b',
                example: '1/√2 = √2/2',
              },
              {
                name: 'Combining like roots',
                formula: 'a√b + c√b = (a+c)√b',
                example: '2√3 + 5√3 = 7√3',
              },
              {
                name: 'Difference of squares with roots',
                formula: '(√a + √b)(√a - √b) = a - b',
                example: '(√5 + √2)(√5 - √2) = 5 - 2 = 3',
              },
              {
                name: 'Square of sum with roots',
                formula: '(√a + √b)² = a + b + 2√(ab)',
                example: '(√3 + √2)² = 3 + 2 + 2√6 = 5 + 2√6',
              },
            ],
          },
          {
            category: 'Special Identities',
            items: [
              {
                name: 'Sum of first n squares',
                formula: '1² + 2² + ... + n² = n(n+1)(2n+1)/6',
                example: '1² + 2² + 3² + 4² = 4(5)(9)/6 = 30',
              },
              {
                name: 'Sum of first n cubes',
                formula: '1³ + 2³ + ... + n³ = [n(n+1)/2]²',
                example: '1³ + 2³ + 3³ = [3(4)/2]² = 36',
              },
              {
                name: 'Difference of consecutive squares',
                formula: 'n² - (n-1)² = 2n - 1',
                example: '10² - 9² = 100 - 81 = 19 = 2(10) - 1',
              },
            ],
          },
        ],
      },

      {
        id: 8,
        title: 'Tests for Perfect Squares',
        subtopics: [
          {
            name: 'Last Digit Test',
            definition: 'A perfect square can only end in 0, 1, 4, 5, 6, or 9',
            example: '484 ends in 4 ✓ Possible\n123 ends in 3 ✗ Not a perfect square',
            properties: [
              'Numbers ending in 2, 3, 7, 8 are NEVER perfect squares',
              'Quick elimination method',
              'First check in any problem',
            ],
          },
          {
            name: 'Digital Root Test',
            definition:
              'Digital root (sum of digits until single digit) of perfect square is 1, 4, 7, or 9',
            example: '144: 1+4+4 = 9 ✓\n123: 1+2+3 = 6 ✗',
            properties: [
              'Digital roots 2, 3, 5, 6, 8 → Not perfect square',
              'Not sufficient alone, but good elimination',
              'Combine with other tests',
            ],
          },
          {
            name: 'Prime Factorization Test',
            definition: 'All prime factors must have even powers',
            example: '144 = 2⁴ × 3² (all even) ✓\n72 = 2³ × 3² (3 is odd) ✗',
            properties: ['Most reliable test', 'Definitive answer', 'Time-consuming'],
          },
          {
            name: 'Number of Factors Test',
            definition: 'Perfect squares have odd number of total factors',
            example:
              '16 has factors: 1,2,4,8,16 (5 factors - odd) ✓\n12 has factors: 1,2,3,4,6,12 (6 factors - even) ✗',
            properties: ['Unique property of perfect squares', 'Useful for factor problems'],
          },
        ],
      },

      {
        id: 9,
        title: 'Tests for Perfect Cubes',
        subtopics: [
          {
            name: 'Last Digit Pattern',
            definition: 'Last digit of cube determines last digit of root uniquely',
            example: 'Cube ending in 8 → root ends in 2\nCube ending in 7 → root ends in 3',
            properties: [
              '0→0, 1→1, 2→8, 3→7, 4→4, 5→5, 6→6, 7→3, 8→2, 9→9',
              'Perfect cubes can end in any digit 0-9',
              'Unique mapping for each digit',
            ],
          },
          {
            name: 'Prime Factorization Test',
            definition: 'All prime factors must have powers divisible by 3',
            example: '216 = 2³ × 3³ (both divisible by 3) ✓\n72 = 2³ × 3² (2 not divisible by 3) ✗',
            properties: [
              'Most reliable test',
              'Definitive answer',
              'Check if all exponents are multiples of 3',
            ],
          },
          {
            name: 'Estimation Test',
            definition: 'Check if cube root is between two consecutive integers',
            example: 'For 125: 4³=64, 5³=125, 6³=216\n125 is exactly 5³ ✓',
            properties: ['Quick verification', 'Use memorized cubes'],
          },
        ],
      },

      {
        id: 10,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Quick Square Root of Perfect Square',
            method: 'Use last digit and first digit estimation',
            example:
              '√784: Ends in 4, so root ends in 2 or 8. √7≈2.6, so first digit is 2. Answer: 28',
          },
          {
            name: 'Squaring numbers ending in 5',
            method: 'n5² = n(n+1) hundred + 25',
            example: '35² = 3×4 hundred + 25 = 1225\n85² = 8×9 hundred + 25 = 7225',
          },
          {
            name: 'Squaring near 50',
            method: 'n² = 2500 + 100(n-50) + (n-50)²',
            example: '48² = 2500 + 100(-2) + 4 = 2500 - 200 + 4 = 2304',
          },
          {
            name: 'Quick Cube Root of Perfect Cube (2-digit root)',
            method: 'Last 3 digits give last digit, remaining give first digit',
            example:
              '∛19683: Last 3 digits are 683 (ends in 3→root ends in 7)\nRemaining: 19 is between 2³=8 and 3³=27, so 2\nAnswer: 27',
          },
          {
            name: 'Approximating Square Root',
            method: '√N ≈ (N + a²)/(2a) where a² is nearest perfect square',
            example: '√50: nearest square is 49 (7²)\n√50 ≈ (50+49)/(2×7) = 99/14 ≈ 7.07',
          },
          {
            name: 'Checking perfect square quickly',
            method: 'Check last digit first, then digital root',
            example: 'Is 156 perfect square? Ends in 6 ✓, digital root = 3 ✗ Not perfect square',
          },
          {
            name: 'Square root of fraction',
            method: '√(a/b) = √a/√b',
            example: '√(25/36) = √25/√36 = 5/6',
          },
          {
            name: 'Simplifying √n when n = a²×b',
            method: '√(a²b) = a√b',
            example: '√72 = √(36×2) = 6√2\n√50 = √(25×2) = 5√2',
          },
          {
            name: 'Mental calculation for (a+b)(a-b)',
            method: '= a² - b², useful with roots',
            example: '(√7+√3)(√7-√3) = 7-3 = 4',
          },
          {
            name: 'Cube root of negative numbers',
            method: '∛(-n) = -∛n',
            example: '∛(-27) = -∛27 = -3',
          },
        ],
      },

      {
        id: 11,
        title: 'Common Problem Types',
        subtopics: [
          {
            name: 'Type 1: Finding Square/Cube Roots',
            example: 'Find √1296 and ∛1728',
            solution: '√1296: 1296 = 36², so √1296 = 36\n∛1728: 1728 = 12³, so ∛1728 = 12',
          },
          {
            name: 'Type 2: Checking Perfect Squares/Cubes',
            example: 'Is 2025 a perfect square? Is 2744 a perfect cube?',
            solution: '2025 = 45², yes ✓\n2744 = 14³, yes ✓',
          },
          {
            name: 'Type 3: Simplifying Expressions',
            example: 'Simplify: √48 + √75 - √27',
            solution: '= 4√3 + 5√3 - 3√3 = 6√3',
          },
          {
            name: 'Type 4: Equations with Roots',
            example: 'If √x = 12, find x',
            solution: '√x = 12 → x = 12² = 144',
          },
          {
            name: 'Type 5: Comparison Problems',
            example: 'Which is greater: √50 or ∛150?',
            solution: '√50 ≈ 7.07, ∛150 ≈ 5.31, so √50 > ∛150',
          },
          {
            name: 'Type 6: Finding Unknown',
            example: 'The square root of what number is 15?',
            solution: 'If √x = 15, then x = 15² = 225',
          },
          {
            name: 'Type 7: Rationalizing Denominator',
            example: 'Rationalize: 1/√5',
            solution: '1/√5 × √5/√5 = √5/5',
          },
          {
            name: 'Type 8: Addition of Numbers to Make Perfect Square',
            example: 'What should be added to 2000 to make it perfect square?',
            solution: '√2000 ≈ 44.7, next square = 45² = 2025\nAdd: 2025 - 2000 = 25',
          },
        ],
      },

      {
        id: 12,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'Find the square root of 3136 by prime factorization',
            solution:
              'Step 1: Find prime factorization\n3136 = 2⁶ × 7²\n\nStep 2: Take half of each exponent\n√3136 = 2³ × 7¹\n\nStep 3: Calculate\n= 8 × 7 = 56\n\nVerify: 56² = 3136 ✓',
            answer: '56',
          },
          {
            question: 'Find the cube root of 13824',
            solution:
              'Step 1: Use last digit method\nLast digit is 4 → cube root ends in 4\n\nStep 2: Remove last 3 digits\nRemaining: 13\n\nStep 3: Find between which cubes\n2³ = 8, 3³ = 27\n13 is between them, closer to 8\nSo first digit is 2\n\nStep 4: Answer\n∛13824 = 24\n\nVerify: 24³ = 13824 ✓',
            answer: '24',
          },
          {
            question: 'Simplify: (√7 + √3)(√7 - √3)',
            solution:
              'Step 1: Recognize pattern\nThis is (a+b)(a-b) = a² - b²\n\nStep 2: Apply formula\n(√7 + √3)(√7 - √3) = (√7)² - (√3)²\n\nStep 3: Simplify\n= 7 - 3 = 4\n\nAnswer: 4',
            answer: '4',
          },
          {
            question:
              'What is the smallest number that must be subtracted from 1000 to make it a perfect cube?',
            solution:
              'Step 1: Find nearest smaller cube\n10³ = 1000 (exactly!)\n\nStep 2: Check\n1000 is already a perfect cube\n\nStep 3: But if question asks for next lower\n9³ = 729\n1000 - 729 = 271\n\nBut since 1000 = 10³, subtract 0 or look for 9³\nIf looking for proper answer: 1000 is perfect cube',
            answer: '0 (1000 is already perfect cube) or 271 (to reach previous cube 729)',
          },
        ],
      },

      {
        id: 13,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Thinking √(a+b) = √a + √b',
            correction: '√(a+b) ≠ √a + √b. Example: √(9+16) = √25 = 5, but √9 + √16 = 3 + 4 = 7',
          },
          {
            mistake: 'Forgetting negative cube roots exist',
            correction: '∛(-27) = -3 (not error). Cube roots of negative numbers are negative',
          },
          {
            mistake: 'Confusing √a² with a (ignoring negative)',
            correction: '√a² = |a| (absolute value). √((-5)²) = √25 = 5, not -5',
          },
          {
            mistake: 'Assuming all numbers ending in 0,1,4,5,6,9 are perfect squares',
            correction:
              "These digits are necessary but not sufficient. 124 ends in 4 but isn't perfect square",
          },
          {
            mistake: 'Wrong simplification: √8 = 2',
            correction: '√8 = √(4×2) = 2√2 ≈ 2.83, not 2',
          },
          {
            mistake: 'Thinking (√a)² = √a',
            correction: '(√a)² = a. Example: (√5)² = 5, not √5',
          },
          {
            mistake: 'Wrong cube root pattern for last digit',
            correction: 'Cube ending in 8 → root ends in 2 (not 8). Memorize the pattern correctly',
          },
          {
            mistake: 'Rationalizing incorrectly',
            correction: '1/√2 = √2/2 (not 1/2 or √2)',
          },
        ],
      },

      {
        id: 14,
        title: 'Practice Tips',
        tips: [
          'Memorize perfect squares up to 30² = 900',
          'Memorize perfect cubes up to 20³ = 8000',
          'Practice last digit patterns for both squares and cubes',
          'Learn to quickly identify if number can be perfect square/cube',
          "Master prime factorization - it's the most reliable method",
          'Practice simplifying surds (√2, √3, √5, etc.)',
          'Memorize common irrational roots: √2≈1.414, √3≈1.732, √5≈2.236',
          'Learn the squaring tricks for numbers ending in 5',
          'Practice rationalizing denominators',
          'Use estimation to verify your answers',
        ],
      },

      {
        id: 15,
        title: 'Exam Strategy',
        examTips: [
          'For perfect squares/cubes, use last digit method - fastest',
          'Check options: square/cube them to verify',
          'Use elimination: check last digit first',
          'For simplification, factor out perfect squares/cubes first',
          'Time limit: 30-45 seconds per question',
          'Approximation is often enough for MCQs',
          "If asked 'smallest number to add/subtract', find nearest perfect square/cube",
          "For comparison questions, estimate don't calculate exactly",
          'Remember: √n grows slower than n but faster than log n',
          'Practice mental calculation of squares up to 25',
        ],
      },

      {
        id: 16,
        title: 'Important Numbers to Memorize',
        sets: [
          {
            name: 'Perfect Squares (1-30)',
            values:
              '1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256, 17²=289, 18²=324, 19²=361, 20²=400, 21²=441, 22²=484, 23²=529, 24²=576, 25²=625, 26²=676, 27²=729, 28²=784, 29²=841, 30²=900',
          },
          {
            name: 'Perfect Cubes (1-20)',
            values:
              '1³=1, 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729, 10³=1000, 11³=1331, 12³=1728, 13³=2197, 14³=2744, 15³=3375, 16³=4096, 17³=4913, 18³=5832, 19³=6859, 20³=8000',
          },
          {
            name: 'Common Irrational Roots',
            values: '√2 = 1.414, √3 = 1.732, √5 = 2.236, √6 = 2.449, √7 = 2.646, √10 = 3.162',
          },
          {
            name: 'Last Digit of Cubes',
            values:
              'If cube ends in: 0→root ends in 0, 1→1, 2→8, 3→7, 4→4, 5→5, 6→6, 7→3, 8→2, 9→9',
          },
          {
            name: 'Last Digit of Squares',
            values: '0→0, 1→1, 2→4, 3→9, 4→6, 5→5, 6→6, 7→9, 8→4, 9→1',
          },
        ],
      },

      {
        id: 17,
        title: 'Advanced Concepts',
        subtopics: [
          {
            name: 'nth Root',
            definition: 'General root: ⁿ√a means the number which when raised to power n gives a',
            example: '⁴√16 = 2 (because 2⁴ = 16)\n⁵√32 = 2 (because 2⁵ = 32)',
          },
          {
            name: 'Surds',
            definition: 'Irrational roots that cannot be simplified to rational numbers',
            example: "√2, √3, √5 are surds\n√4 = 2 is not a surd (it's rational)",
            properties: [
              'Cannot be expressed as fractions',
              'Can be simplified but remain irrational',
              'Used in exact calculations',
            ],
          },
          {
            name: 'Conjugate Surds',
            definition: 'Pairs of form (a+√b) and (a-√b)',
            example: '(3+√2) and (3-√2)',
            properties: [
              'Product is always rational',
              '(a+√b)(a-√b) = a² - b',
              'Used in rationalization',
            ],
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        '√(ab) = √a × √b',
        '√(a/b) = √a / √b',
        '(√a)² = a',
        '∛(ab) = ∛a × ∛b',
        '(√a + √b)(√a - √b) = a - b',
        'Perfect square ends only in: 0,1,4,5,6,9',
        'Perfect cube can end in any digit 0-9',
      ],

      mustRememberFacts: [
        '√16 = 4, √25 = 5, √36 = 6, √49 = 7, √64 = 8, √81 = 9, √100 = 10',
        '∛8 = 2, ∛27 = 3, ∛64 = 4, ∛125 = 5, ∛216 = 6, ∛1000 = 10',
        '√2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236',
        'Cube ending in 8 → root ends in 2',
        'Cube ending in 7 → root ends in 3',
        'n² - (n-1)² = 2n - 1',
      ],

      quickTests: [
        'Perfect square: Check last digit (must be 0,1,4,5,6,9)',
        'Perfect square: Digital root must be 1,4,7,9',
        'Perfect square: Has odd number of factors',
        'Perfect cube: Prime factors have powers divisible by 3',
        'Square n ending in 5: n(n+1)00 + 25',
      ],
    },
  },
  //5 Average
  {
    id: 5,
    topic: 'Average',
    description:
      'Master the concept of average (arithmetic mean) - a fundamental topic that appears in various forms across all competitive exams. Learn calculation techniques, problem-solving strategies, and shortcuts.',

    sections: [
      {
        id: 1,
        title: 'Introduction to Average',
        content:
          'Average, also called arithmetic mean, is the central value of a set of numbers. It represents the typical or middle value and is one of the most frequently tested topics in quantitative aptitude.',
        importance:
          'Average problems appear in 90% of competitive exams and form the basis for statistics, data interpretation, and real-world problem solving',
      },

      {
        id: 2,
        title: 'What is Average?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'The average (or mean) is the sum of all values divided by the total number of values.',
            formula: 'Average = Sum of all values / Number of values',
            example: 'Average of 10, 20, 30 = (10+20+30)/3 = 60/3 = 20',
            properties: [
              'Always lies between minimum and maximum values',
              'Can be a whole number or decimal',
              'Most common measure of central tendency',
              'Affected by extreme values (outliers)',
            ],
          },
          {
            name: 'Notation',
            description: 'Average is represented in different ways:',
            types: [
              'A or Avg or x̄ (x-bar)',
              'Arithmetic Mean (AM)',
              'Mean',
              'All three terms are interchangeable',
            ],
          },
          {
            name: 'Basic Formula',
            formula: 'Average = (x₁ + x₂ + x₃ + ... + xₙ) / n',
            example: 'Average of 5, 10, 15, 20 = (5+10+15+20)/4 = 50/4 = 12.5',
            properties: [
              'n = total count of numbers',
              'Sum = Average × Number of values',
              'If all numbers are equal, average equals that number',
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'Key Formulas and Relationships',
        formulas: [
          {
            category: 'Basic Formulas',
            items: [
              {
                name: 'Average Formula',
                formula: 'Average = Sum / Count',
                example: 'Average of 12, 15, 18 = (12+15+18)/3 = 45/3 = 15',
              },
              {
                name: 'Sum Formula',
                formula: 'Sum = Average × Count',
                example: 'If average of 5 numbers is 20, sum = 20 × 5 = 100',
              },
              {
                name: 'Count Formula',
                formula: 'Count = Sum / Average',
                example: 'If sum is 60 and average is 12, count = 60/12 = 5',
              },
            ],
          },
          {
            category: 'Change in Average',
            items: [
              {
                name: 'When one number is added',
                formula: 'New Average = (Old Sum + New Number) / (Old Count + 1)',
                example: 'Average of 10,20,30 is 20. Add 40: New avg = (60+40)/4 = 25',
              },
              {
                name: 'When one number is removed',
                formula: 'New Average = (Old Sum - Removed Number) / (Old Count - 1)',
                example: 'Average of 10,20,30,40 is 25. Remove 40: New avg = (100-40)/3 = 20',
              },
              {
                name: 'When constant is added to all',
                formula: 'New Average = Old Average + Constant',
                example: 'If average is 50, add 5 to all numbers, new average = 50 + 5 = 55',
              },
              {
                name: 'When all numbers multiplied by constant',
                formula: 'New Average = Old Average × Constant',
                example: 'If average is 20, multiply all by 3, new average = 20 × 3 = 60',
              },
            ],
          },
          {
            category: 'Special Averages',
            items: [
              {
                name: 'Average of first n natural numbers',
                formula: 'Average = (n + 1) / 2',
                example: 'Average of first 100 natural numbers = 101/2 = 50.5',
              },
              {
                name: 'Average of first n even numbers',
                formula: 'Average = n + 1',
                example: 'Average of first 10 even numbers = 10 + 1 = 11',
              },
              {
                name: 'Average of first n odd numbers',
                formula: 'Average = n',
                example: 'Average of first 10 odd numbers = 10',
              },
              {
                name: 'Average of consecutive numbers',
                formula: 'Average = (First + Last) / 2',
                example: 'Average of 5,6,7,8,9,10 = (5+10)/2 = 7.5',
              },
              {
                name: 'Average of consecutive even/odd numbers',
                formula: 'Average = (First + Last) / 2',
                example: 'Average of 2,4,6,8,10 = (2+10)/2 = 6',
              },
            ],
          },
          {
            category: 'Weighted Average',
            items: [
              {
                name: 'Weighted average formula',
                formula: 'Weighted Avg = Σ(value × weight) / Σ(weight)',
                example:
                  'Scores: 80(3 credits), 90(4 credits) = (80×3 + 90×4)/(3+4) = 600/7 = 85.71',
              },
              {
                name: 'Average speed (different distances)',
                formula: 'Avg Speed = Total Distance / Total Time',
                example:
                  '60km at 30km/h, 40km at 20km/h: Total distance=100km, Time=2+2=4h, Avg=100/4=25km/h',
                note: 'NOT (30+20)/2 = 25. Must calculate using time.',
              },
              {
                name: 'Average speed (equal distances)',
                formula: 'Average Speed = 2ab/(a+b) for two speeds a and b',
                example: '60km at 30km/h, 60km at 20km/h: Avg = 2×30×20/(30+20) = 1200/50 = 24km/h',
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Properties of Average',
        subtopics: [
          {
            name: 'Basic Properties',
            properties: [
              'Average always lies between the smallest and largest values',
              'If all numbers are equal, average equals that number',
              'Average can be fraction/decimal even if all values are integers',
              'Sum of deviations from average is always zero',
              'Average is affected by every value in the dataset',
              'Extreme values (outliers) significantly affect average',
            ],
          },
          {
            name: 'Effect of Operations',
            properties: [
              'Adding k to all values → Average increases by k',
              'Subtracting k from all values → Average decreases by k',
              'Multiplying all values by k → Average multiplied by k',
              'Dividing all values by k → Average divided by k',
              'If all values increase by x%, average increases by x%',
            ],
          },
          {
            name: 'Comparison Properties',
            properties: [
              'If average of group A > average of group B, combined average lies between them',
              'Larger group has more weight in combined average',
              'If one group is much larger, combined average is closer to its average',
              'Average ≠ Median (except in symmetric distributions)',
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Types of Average Problems',
        subtopics: [
          {
            name: 'Type 1: Basic Average Calculation',
            definition: 'Finding average of given numbers',
            example: 'Find average of 12, 18, 24, 30, 36',
            solution: 'Sum = 12+18+24+30+36 = 120. Count = 5. Average = 120/5 = 24',
            tricks: [
              'Use symmetry if numbers are evenly spaced',
              'For consecutive numbers: (first+last)/2',
              'Check if numbers form arithmetic progression',
            ],
          },
          {
            name: 'Type 2: Finding Missing Value',
            definition: 'Given average and some values, find the missing value(s)',
            example: 'Average of 5 numbers is 27. Four numbers are 20,25,30,35. Find 5th number.',
            solution:
              'Sum of 5 numbers = 27×5 = 135. Sum of 4 numbers = 110. 5th number = 135-110 = 25',
            approach: 'Use: Missing value = Total Sum - Known Sum',
          },
          {
            name: 'Type 3: Change in Average',
            definition: 'How average changes when values are added/removed/modified',
            example: "Average of 10 numbers is 50. If 5 is added to each, what's new average?",
            solution: 'New average = 50 + 5 = 55 (when constant added to all)',
            tricks: [
              'Adding/removing constant: adjust average by that constant',
              'Multiplying/dividing: multiply/divide average',
              'Adding/removing values: recalculate sum',
            ],
          },
          {
            name: 'Type 4: Combined Average (Mixture)',
            definition: 'Finding average of combined groups',
            example:
              'Class A (20 students, avg 70), Class B (30 students, avg 80). Combined average?',
            solution: 'Combined avg = (20×70 + 30×80)/(20+30) = (1400+2400)/50 = 76',
            formula: 'Combined Avg = (n₁×avg₁ + n₂×avg₂)/(n₁+n₂)',
          },
          {
            name: 'Type 5: Replacement Problems',
            definition: 'One value replaced by another, find new average',
            example: 'Average of 50 numbers is 38. If 45 replaced by 55, new average?',
            solution:
              'Increase in sum = 55-45 = 10. New sum = 38×50+10 = 1910. New avg = 1910/50 = 38.2',
            approach: 'Find change in sum, adjust average',
          },
          {
            name: 'Type 6: Average of Subgroups',
            definition: 'Finding individual group averages from combined data',
            example:
              'Average of 15 numbers is 40. First 8 avg is 35, last 8 avg is 43. Find 8th number.',
            solution:
              'Total sum = 15×40 = 600. First 8 sum = 8×35 = 280. Last 8 sum = 8×43 = 344. 8th number counted twice: 280+344-600 = 24',
            trick: 'Middle number counted in both groups',
          },
          {
            name: 'Type 7: Age Problems',
            definition: 'Average age increases/decreases over time',
            example: "Average age of 5 people is 30. After 3 years, what's average age?",
            solution:
              "Each person's age increases by 3, so average increases by 3. New avg = 30+3 = 33",
            principle: 'Each year, average age increases by 1 year',
          },
          {
            name: 'Type 8: Speed/Distance Problems',
            definition: 'Average speed for different segments of journey',
            example: 'Person travels 120km at 40km/h and returns at 60km/h. Average speed?',
            solution:
              'Total distance = 240km. Time = 120/40 + 120/60 = 3+2 = 5h. Avg speed = 240/5 = 48km/h',
            important: 'NOT (40+60)/2 = 50. Must use total distance/total time',
          },
        ],
      },

      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Average of consecutive numbers',
            method: 'Take middle value directly',
            example: 'Average of 5,6,7,8,9 = middle value = 7 (no calculation needed)',
          },
          {
            name: 'Average of evenly spaced numbers',
            method: 'Average = (First + Last) / 2',
            example: 'Average of 10,15,20,25,30 = (10+30)/2 = 20',
          },
          {
            name: 'When numbers increase/decrease by same amount',
            method: 'Average also increases/decreases by that amount',
            example: 'If average is 50 and all values increase by 10, new average = 60',
          },
          {
            name: 'Deviation method',
            method: 'Choose assumed average, find deviations, adjust',
            example:
              'Find avg of 47,52,48,51,49: Assume 50. Deviations: -3,+2,-2,+1,-1. Sum=-3. Avg=50-3/5=49.4',
          },
          {
            name: 'Quick check for reasonableness',
            method: 'Average must be between min and max values',
            example: 'If values are 10,20,30, average must be between 10 and 30',
          },
          {
            name: 'Symmetric data',
            method: "If data is symmetric around a value, that's the average",
            example: '2,4,6,8,10 symmetric around 6, so average = 6',
          },
          {
            name: 'For large numbers',
            method: 'Subtract common value, find average, add back',
            example: 'Avg of 997,998,999,1000,1001 = Avg of -3,-2,-1,0,1 + 1000 = -1 + 1000 = 999',
          },
          {
            name: 'When one number removed from average',
            method: 'If avg increases, removed number was below avg; if decreases, above avg',
            example:
              'Avg of 5 numbers is 30. Remove one, avg becomes 32. Removed number = 30-4×2 = 22 (below avg)',
          },
          {
            name: 'Equal distance formula',
            method: 'For equal distances at speeds a and b: Avg = 2ab/(a+b)',
            example: 'Go at 40km/h, return at 60km/h: Avg = 2×40×60/(40+60) = 48km/h',
          },
          {
            name: 'When new member joins',
            method: 'New avg = Old avg + (New value - Old avg)/(New count)',
            example: 'Avg of 4 is 25. Add 35: New avg = 25 + (35-25)/5 = 25 + 2 = 27',
          },
        ],
      },

      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Simple Average',
            question: 'Find the average of 12, 15, 18, 21, 24',
            solution:
              'These are evenly spaced (difference = 3). Average = (12+24)/2 = 18. Or middle value = 18',
            shortcut: 'For arithmetic progression, average = middle term',
          },
          {
            name: 'Pattern 2: Average with Exclusion',
            question:
              "Average of 5 numbers is 27. If one number 32 is excluded, what's new average?",
            solution: 'Old sum = 27×5 = 135. New sum = 135-32 = 103. New avg = 103/4 = 25.75',
            shortcut: 'Quick check: removing 32 (above avg 27) should decrease average ✓',
          },
          {
            name: 'Pattern 3: Average with Inclusion',
            question:
              'Average of 4 numbers is 25. When 5th number is added, average becomes 27. Find 5th number.',
            solution: 'Old sum = 25×4 = 100. New sum = 27×5 = 135. 5th number = 135-100 = 35',
            shortcut: '5th number = New avg + (Increase×Old count) = 27 + (2×4) = 35',
          },
          {
            name: 'Pattern 4: Average Age Problem',
            question:
              "Average age of 30 students is 15. Teacher's age included, average becomes 16. Teacher's age?",
            solution: "Students' sum = 30×15 = 450. New sum = 31×16 = 496. Teacher = 496-450 = 46",
            shortcut: 'Teacher = New avg + Increase×Count = 16 + 1×30 = 46',
          },
          {
            name: 'Pattern 5: Consecutive Numbers',
            question: 'Average of 6 consecutive even numbers is 25. Find largest.',
            solution: 'If average is 25, middle is 25. Numbers: 20,22,24,26,28,30. Largest = 30',
            shortcut: 'For even count, two middle numbers average to 25: 24,26. Go 2 more: 30',
          },
          {
            name: 'Pattern 6: Three Number Problem',
            question:
              'Average of 3 numbers is 60. First is twice second, third is thrice second. Find first.',
            solution:
              'Let second = x. First = 2x, third = 3x. (2x+x+3x)/3 = 60. 6x = 180. x = 30. First = 60',
            approach: 'Use ratio relationships with variables',
          },
        ],
      },

      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question:
              'The average of 20 numbers is 15. If 3 is added to each number, what is the new average?',
            solution:
              'Step 1: Understand the concept\nWhen constant added to all numbers, average increases by that constant\n\nStep 2: Apply formula\nNew Average = Old Average + Added Constant\nNew Average = 15 + 3 = 18\n\nStep 3: Verify (optional)\nOld sum = 15×20 = 300\nNew sum = 300 + (3×20) = 360\nNew avg = 360/20 = 18 ✓',
            answer: '18',
          },
          {
            question:
              "Average salary of 20 workers is $2500. If manager's salary $4500 is included, what's the new average?",
            solution:
              "Step 1: Find old total\nOld sum = 20 × 2500 = $50,000\n\nStep 2: Add manager's salary\nNew sum = 50,000 + 4,500 = $54,500\n\nStep 3: Calculate new average\nNew count = 21\nNew average = 54,500 / 21 = $2,595.24\n\nAlternative method:\nIncrease = (4500-2500)/21 = 2000/21 ≈ 95.24\nNew avg = 2500 + 95.24 = 2595.24",
            answer: '$2,595.24',
          },
          {
            question:
              'A batsman has an average of 50 runs in 10 innings. How many runs must he score in next innings to increase average to 52?',
            solution:
              'Step 1: Find current total\nCurrent sum = 50 × 10 = 500 runs\n\nStep 2: Find required total\nRequired sum for 11 innings = 52 × 11 = 572 runs\n\nStep 3: Find runs needed\nRuns in next innings = 572 - 500 = 72 runs\n\nStep 4: Verify\nNew average = (500+72)/11 = 572/11 = 52 ✓',
            answer: '72 runs',
          },
          {
            question:
              'Average of 15 numbers is 36. Average of first 8 is 32, average of last 8 is 38. Find the 8th number.',
            solution:
              'Step 1: Find total sum\nTotal sum = 15 × 36 = 540\n\nStep 2: Find sum of first 8\nFirst 8 sum = 8 × 32 = 256\n\nStep 3: Find sum of last 8\nLast 8 sum = 8 × 38 = 304\n\nStep 4: Note that 8th number is counted twice\nFirst 8 + Last 8 = 256 + 304 = 560\nThis includes 8th number twice\n\nStep 5: Find 8th number\n8th number = 560 - 540 = 20\n\nVerify: First 7 + 8th + Last 7 = Total\n(256-20) + 20 + (304-20) = 540 ✓',
            answer: '20',
          },
        ],
      },

      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Calculating average speed as (speed1 + speed2)/2',
            correction: 'Average speed = Total Distance / Total Time, NOT average of speeds',
          },
          {
            mistake: 'Forgetting that removed/added value affects count',
            correction:
              'When removing a value, count decreases by 1. When adding, count increases by 1',
          },
          {
            mistake: 'Not noticing when value is counted twice',
            correction: 'In subgroup problems (first n, last n), middle value(s) counted twice',
          },
          {
            mistake: 'Assuming average must be one of the given numbers',
            correction: 'Average can be any value between min and max, including decimals',
          },
          {
            mistake: 'Using wrong formula for combined average',
            correction: 'Must weight by group sizes: (n₁×avg₁ + n₂×avg₂)/(n₁+n₂)',
          },
          {
            mistake: 'Forgetting to change count when values added/removed',
            correction: 'New average = New sum / New count (not old count)',
          },
          {
            mistake: 'Calculating age average without considering time passed',
            correction: "Each year, everyone's age increases by 1, so average increases by 1",
          },
          {
            mistake: 'Mixing up increase in average vs increase in sum',
            correction: 'If average increases by 2, sum increases by 2 × count',
          },
        ],
      },

      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Always check if answer is between minimum and maximum values',
          'Look for patterns: consecutive, evenly spaced, symmetric',
          'Use deviation method for numbers close to each other',
          'For speed problems, always calculate using time',
          'Draw diagrams for complex word problems',
          'Verify your answer by working backwards',
          'Master the formulas for special cases (consecutive, natural numbers)',
          'Practice weighted average problems thoroughly',
          'Remember: adding/removing changes count too',
          'Use options to verify - plug back into original condition',
        ],
      },

      {
        id: 11,
        title: 'Exam Strategy',
        examTips: [
          'Average questions are scoring - attempt them early',
          'Time limit: 45 seconds to 1 minute per question',
          'For simple average, use shortcuts (middle value, first+last)',
          'Check if numbers form arithmetic progression',
          'Use approximation for quick elimination',
          'In age problems, remember average increases with time',
          'For speed problems, be extra careful - common trap',
          'If calculation seems long, look for pattern or shortcut',
          'Verify answer reasonableness immediately',
          'Use options: if answer not between min/max, eliminate',
        ],
      },

      {
        id: 12,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Natural Number Averages',
            values:
              'First n natural numbers: (n+1)/2 | First n even numbers: n+1 | First n odd numbers: n | Consecutive numbers: (first+last)/2',
          },
          {
            name: 'Effect of Operations',
            values:
              'Add k to all: avg+k | Subtract k: avg-k | Multiply by k: avg×k | Divide by k: avg÷k',
          },
          {
            name: 'Speed Formulas',
            values:
              'Different distances: Total distance/Total time | Equal distances at a,b: 2ab/(a+b) | Three equal distances: 3abc/(ab+bc+ca)',
          },
          {
            name: 'Combined Average',
            values: 'Two groups: (n₁×A₁ + n₂×A₂)/(n₁+n₂) | Weighted: Σ(value×weight)/Σ(weight)',
          },
        ],
      },

      {
        id: 13,
        title: 'Advanced Concepts',
        subtopics: [
          {
            name: 'Geometric Mean',
            definition: 'For n numbers: GM = (x₁ × x₂ × ... × xₙ)^(1/n)',
            example: 'GM of 4 and 9 = √(4×9) = √36 = 6',
            note: 'AM ≥ GM (Arithmetic Mean ≥ Geometric Mean)',
          },
          {
            name: 'Harmonic Mean',
            definition: 'HM = n / (1/x₁ + 1/x₂ + ... + 1/xₙ)',
            example: 'HM of 2 and 3 = 2/(1/2 + 1/3) = 2/(5/6) = 12/5 = 2.4',
            note: 'Used in rate problems, average speed',
          },
          {
            name: 'Relationship between Means',
            formula: 'AM ≥ GM ≥ HM',
            example: 'For 4 and 9: AM=6.5, GM=6, HM≈5.54',
            properties: [
              'Equality holds when all numbers are equal',
              'AM most commonly used',
              'HM used for rates and speeds',
            ],
          },
          {
            name: 'Median',
            definition: 'Middle value when arranged in order',
            example: 'For 3,5,7,9,11: median = 7 (middle value)',
            note: 'Not affected by extreme values unlike mean',
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'Average = Sum / Count',
        'Sum = Average × Count',
        'First n natural: (n+1)/2',
        'Consecutive: (first+last)/2',
        'Add constant k: avg + k',
        'Multiply by k: avg × k',
        'Combined avg: (n₁A₁+n₂A₂)/(n₁+n₂)',
        'Speed (equal dist): 2ab/(a+b)',
      ],

      mustRememberFacts: [
        'Average lies between min and max',
        'Adding constant to all → add to average',
        'When value removed: count decreases',
        'Speed average ≠ average of speeds',
        'First n odd numbers: average = n',
        'First n even numbers: average = n+1',
        'Sum of deviations from average = 0',
      ],

      quickChecks: [
        'Answer between min and max?',
        'For consecutive: take middle value',
        'Speed: use distance/time, not avg of speeds',
        'Added/removed: adjust count',
        'Age: each year, avg increases by 1',
        'Evenly spaced: (first+last)/2',
      ],
    },
  },
  //6 Problems on Ages
  {
    id: 6,
    topic: 'Problems on Ages',
    description:
      'Master Problems on Ages - a scoring topic based on linear equations and ratios. Learn how to translate word problems into equations, use the constant difference concept, and apply ratio-based shortcuts.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Ages',
        content:
          'Problems on Ages are essentially an application of linear equations and ratios. They test your ability to visualize timelines (past, present, future) and translate verbal statements into mathematical relationships.',
        importance:
          'This topic appears in almost every competitive exam (banking, SSC, GATE) and is considered high-accuracy because equations can be easily verified.',
      },
      {
        id: 2,
        title: 'What is Problems on Ages?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'Mathematical problems dealing with finding the age of individuals based on given relationships (ratios, sums, differences) at different points in time.',
            formula: 'Equation: Age_Future = Age_Present + n',
            example: 'If present age is x, age after 5 years is x+5.',
            properties: [
              'Difference between ages of two people is ALWAYS constant',
              'Ratio of ages changes over time',
              'Sum of ages increases by (n × number of people) after n years',
            ],
          },
          {
            name: 'Notation',
            description: 'Standard terms used to define time periods:',
            types: [
              'Present Age: x (usually the variable to find)',
              'n years ago / Back / Before: (x - n)',
              'n years hence / After / Later: (x + n)',
              "E.g., '5 years ago' means subtract 5",
            ],
          },
          {
            name: 'Basic Relationships',
            formula: 'Relationship translation',
            example: "'A is twice as old as B' -> A = 2B",
            properties: [
              "Is/Was/Will be -> usually means '=' sign",
              'Times -> Multiplication',
              'Older/Younger -> Addition/Subtraction',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas and Relationships',
        formulas: [
          {
            category: 'Timeline Formulas',
            items: [
              {
                name: 'Future Age',
                formula: 'Age after n years = Present Age + n',
                example: 'If A is 20 now, after 10 years A = 30',
              },
              {
                name: 'Past Age',
                formula: 'Age n years ago = Present Age - n',
                example: 'If A is 20 now, 5 years ago A = 15',
              },
            ],
          },
          {
            category: 'Combined Relationships',
            items: [
              {
                name: 'Sum of Ages',
                formula: 'Sum after n years = Current Sum + (n × Number of People)',
                example: 'Sum of A and B is 40. After 5 years: 40 + (5×2) = 50',
              },
              {
                name: 'Difference of Ages',
                formula: 'Difference after n years = Current Difference',
                example:
                  'If A is 5 years older than B now, A will be 5 years older than B after 50 years too',
              },
            ],
          },
          {
            category: 'Ratio Formulas',
            items: [
              {
                name: 'Ratio Change',
                formula: 'If ratio is a:b now, after k years it becomes (ax+k) : (bx+k)',
                example: 'Ratio 3:4. After 5 years: (3x+5)/(4x+5)',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Ages',
        subtopics: [
          {
            name: 'The Constant Difference Rule',
            properties: [
              'The age gap between two people never changes.',
              'If Father is 25 years older than Son, he will always be 25 years older.',
              'This property is key to solving ratio problems quickly.',
            ],
          },
          {
            name: 'Ratio Behavior',
            properties: [
              'As time passes, the ratio of ages tends toward 1:1.',
              'Example: 2:1 (ages 4 and 2) becomes 4:3 (ages 8 and 6) after 4 years.',
              'The ratio never reverses (older person stays older).',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Age Problems',
        subtopics: [
          {
            name: 'Type 1: Ratio Based',
            definition: 'Given current ratio and future/past ratio.',
            example: 'Ratio of A:B is 3:4. After 5 years it becomes 4:5. Find present ages.',
            solution: 'Gap in ratios is (4-3)=1 part. 1 part = 5 years. A=3*5=15, B=4*5=20.',
            tricks: [
              'Check vertical difference in ratios.',
              'If difference is same, equate to years gap.',
            ],
          },
          {
            name: "Type 2: 'Times' Relationships",
            definition: 'One person is n times another.',
            example: "Father is 3 times son's age. After 10 years, he will be 2 times.",
            solution: 'F=3S. (3S+10) = 2(S+10). 3S+10 = 2S+20. S=10. F=30.',
            approach: 'Use single variable equations.',
          },
          {
            name: 'Type 3: Average Age',
            definition: 'Using average to find total sum.',
            example: 'Average age of 3 people is 25. Ratios 2:3:5. Find ages.',
            solution: 'Sum = 25×3 = 75. 2x+3x+5x=75. 10x=75. x=7.5. Ages are 15, 22.5, 37.5.',
            formula: 'Total Sum = Average × Count',
          },
          {
            name: 'Type 4: Past and Future Combined',
            definition: 'Comparing past age with future age.',
            example: '10 years ago A was half of B. 10 years hence A will be 3/4 of B.',
            solution: "Establish timeline. Use variables for '10 years ago' to simplify.",
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Option Checking Method',
            method: 'Check if options are divisible by ratio terms.',
            example:
              "If A:B is 3:4, A's age MUST be divisible by 3. Eliminate options not divisible by 3.",
          },
          {
            name: 'Constant Difference Method',
            method: 'Balance the ratio difference.',
            example:
              'A:B = 3:1 (diff 2). New Ratio 2:1 (diff 1). Multiply new ratio by 2 to make diff constant -> 4:2. Now compare 3:1 to 4:2.',
          },
          {
            name: 'Unitary Method',
            method: "If ratio changes from x:y to (x+1):(y+1) in 'n' years, then 1 unit = n years.",
            example:
              '3:4 becomes 4:5 in 5 years. 1 unit increase = 5 years. Present age = 3*5 = 15.',
          },
          {
            name: 'Cross Product Method',
            method: 'For Ratio 1 (a:b) to Ratio 2 (c:d) in x years: Age A = a * [x(c-d)] / [ad-bc]',
            example: "Direct formula for calculating '1 unit' value.",
          },
        ],
      },
      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Simple Ratio',
            question: 'A and B are in ratio 3:5. After 5 years ratio is 2:3. Find A.',
            solution: '3x+5 / 5x+5 = 2/3 -> 9x+15 = 10x+10 -> x=5. A = 3(5) = 15.',
          },
          {
            name: 'Pattern 2: Equation Word Problem',
            question: 'Father is 30 years older than son. In 12 years, father will be 3 times son.',
            solution: 'F = S+30. F+12 = 3(S+12). Substitute: S+30+12 = 3S+36. S=3. F=33.',
          },
          {
            name: 'Pattern 3: Marriage/Birth',
            question:
              'Avg age of couple was 25 when married 5 years ago. Now they have a child, avg age is 20.',
            solution:
              'Old Sum (2 people) = 50. Present Sum (2 people) = 50 + 10 = 60. New Sum (3 people) = 20*3 = 60. Child = 60-60 = 0 (Just born).',
          },
        ],
      },
      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question:
              'The ages of A and B are in the ratio 4:5. Five years hence, the ratio will be 5:6. Find present age of A.',
            solution:
              "Step 1: Check ratio difference\n4:5 to 5:6. (5-4)=1 and (6-5)=1.\nDifference is constant (1 unit).\n\nStep 2: Equate to time\n1 unit = 5 years.\n\nStep 3: Calculate\nA's age = 4 units = 4 * 5 = 20 years.",
            answer: '20 years',
          },
          {
            question:
              'Ten years ago, P was half of Q. If ratio of their present ages is 3:4, what is the total of their present ages?',
            solution:
              'Step 1: Assume present ages\n3x and 4x.\n\nStep 2: Go back 10 years\n(3x - 10) and (4x - 10).\n\nStep 3: Form equation\n(3x - 10) = 1/2 * (4x - 10)\n2(3x - 10) = 4x - 10\n6x - 20 = 4x - 10\n2x = 10 -> x = 5.\n\nStep 4: Find Total\nTotal = 3x + 4x = 7x = 7 * 5 = 35.',
            answer: '35 years',
          },
        ],
      },
      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Adding years to only one side of the ratio',
            correction: "When moving to future, add 'n' to numerator AND denominator.",
          },
          {
            mistake: "Confusing 'ago' and 'hence'",
            correction: 'Ago = Subtract (-). Hence = Add (+).',
          },
          {
            mistake: "Forgetting to multiply 'n' by number of people in Sum problems",
            correction: 'If 3 people grow 5 years older, Total Sum increases by 15, not 5.',
          },
          {
            mistake: "Answering 'x' instead of the requested value",
            correction: "Question might ask for 'Age after 3 years', don't just mark present age.",
          },
        ],
      },
      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          "Always define 'x' as the Present Age to avoid confusion.",
          'Check options for divisibility (e.g., if ratio is 3:4, answer is multiple of 3).',
          'Draw a small timeline (Past -- Present -- Future) for complex questions.',
          "Master the 'Constant Difference' technique to solve without X.",
          'Verify your answer: Put the age back into the condition to see if it holds true.',
        ],
      },
      {
        id: 11,
        title: 'Exam Strategy',
        examTips: [
          "Start with 'Ratio' questions - they are fastest.",
          'Use options substitution if the equation looks complex.',
          "Watch out for terms like 'product of ages' - leads to quadratic equations.",
          "If question says 'Father is 3 times more than son', it means F = S + 3S = 4S.",
          'Time management: Simple ratio < 30s, Complex equation < 60s.',
        ],
      },
      {
        id: 12,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Linear Translation',
            values: 'Is/Was/Will = (=) | Ago/Before = (-) | Hence/After = (+)',
          },
          {
            name: 'Ratio Trick',
            values: 'If A:B changes to C:D in n years: Balance difference (C-D) and (A-B) first.',
          },
          {
            name: 'Sum Rule',
            values: 'New Sum = Old Sum + (Years Passed × Number of People)',
          },
        ],
      },
      {
        id: 13,
        title: 'Advanced Concepts',
        subtopics: [
          {
            name: 'Quadratic Age Problems',
            definition: 'Problems involving product of ages.',
            example: 'Product of ages is 48. If one is 2 years older than other...',
            solution: 'x(x+2) = 48. Solve for x.',
          },
          {
            name: 'Data Sufficiency',
            definition: 'Determining if given statements are enough to find the age.',
            note: 'Common in bank exams. Check if you have as many independent equations as variables.',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'Future Age = Present + N',
        'Past Age = Present - N',
        'Age Diff is CONSTANT',
        'Sum increases by N × People',
      ],
      mustRememberFacts: [
        'Difference in ages never changes.',
        'Ratio difference must be equalized to use unitary method.',
        "'Times more' = (n+1) times.",
        'Always check divisibility with ratio terms.',
      ],
      quickChecks: [
        'Is answer divisible by ratio?',
        'Is child younger than parent?',
        'Did I add years to both people?',
        'Did I answer for the correct year (present vs future)?',
      ],
    },
  },
  //7 Percentage
  {
    id: 7,
    topic: 'Percentage',
    description:
      'Master the concept of Percentages - the backbone of arithmetic. Learn how to compare quantities, calculate growth, and handle successive changes efficiently using fraction-based shortcuts and ratio methods.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Percentage',
        content:
          "Percentage is a mathematical ratio expressed as a fraction of 100. The term 'Percent' comes from the Latin 'per centum', meaning 'by the hundred'. It is the most universal way of comparing proportions across different datasets.",
        importance:
          'Percentage is a prerequisite for over 50% of quantitative aptitude topics, including Profit & Loss, Simple/Compound Interest, Data Interpretation, and Mixtures.',
      },
      {
        id: 2,
        title: 'What is Percentage?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'A percentage is a fraction with 100 as its denominator. It represents a part of a whole where the whole is always considered to be 100.',
            formula: 'Percentage = (Value / Total Value) × 100',
            example: 'If a student scores 45 out of 50, Percentage = (45/50) × 100 = 90%',
            properties: [
              'Always relative to a base value (100)',
              'x% of y is equal to y% of x',
              'Can be greater than 100% (indicating growth or more than a whole)',
              'Dimensionless quantity (no units like kg or m)',
            ],
          },
          {
            name: 'Notation',
            description: 'Percentages are represented and converted in three main ways:',
            types: [
              'Percent symbol (%)',
              'Fraction (e.g., 25% = 1/4)',
              'Decimal (e.g., 25% = 0.25)',
              'Ratio (e.g., 25% = 1:4)',
            ],
          },
          {
            name: 'Basic Formula',
            formula: 'Value = (P / 100) × Total',
            example: 'Find 20% of 150: (20/100) × 150 = 30',
            properties: [
              'P = Percentage rate',
              'Total = Base value (original amount)',
              'Value = Percentage result',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas and Relationships',
        formulas: [
          {
            category: 'Basic Formulas',
            items: [
              {
                name: 'Percentage Change',
                formula: '% Change = [(New - Old) / Old] × 100',
                example: 'Price rises from 40 to 50: [(50-40)/40] × 100 = 25% increase',
              },
              {
                name: 'Finding the Base',
                formula: 'Total = (Value × 100) / P',
                example: 'If 40 is 10% of a number, Number = (40 × 100) / 10 = 400',
              },
            ],
          },
          {
            category: 'Successive Changes',
            items: [
              {
                name: 'Two Successive Changes',
                formula: 'Net % Change = [a + b + (ab/100)]%',
                example: 'Increase of 10% then 20%: 10 + 20 + (10×20/100) = 32%',
              },
              {
                name: 'Successive Decrease (Discount)',
                formula: 'Net Discount = [d1 + d2 - (d1×d2/100)]%',
                example: 'Discounts of 20% and 10%: 20 + 10 - (200/100) = 28%',
              },
            ],
          },
          {
            category: 'Product Constancy',
            items: [
              {
                name: 'Price and Consumption',
                formula: 'Reduction in Consumption = [r / (100 + r)] × 100',
                example:
                  'If price increases 25%, consumption must decrease by [25/125] × 100 = 20% to keep expenditure constant',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Percentage',
        subtopics: [
          {
            name: 'Fractional Equivalents',
            properties: [
              '1/2 = 50%',
              '1/3 = 33.33%',
              '1/4 = 25%',
              '1/5 = 20%',
              '1/6 = 16.66%',
              '1/8 = 12.5%',
              '1/9 = 11.11%',
              '1/11 = 9.09%',
            ],
          },
          {
            name: 'Effect of Operations',
            properties: [
              'Multiplying a number by 1.10 = 10% increase',
              'Multiplying a number by 0.85 = 15% decrease',
              'If a value increases by x% then decreases by x%, net change is always a decrease of (x²/100)%',
              'Percent change is independent of the actual value, it only depends on the ratio',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Percentage Problems',
        subtopics: [
          {
            name: 'Type 1: Basic Calculations',
            definition: 'Direct application of % formula',
            example: 'What is 15% of 40% of 500?',
            solution: '(15/100) × (40/100) × 500 = 30',
            tricks: [
              'Split the percentage: 15% = 10% + 5%',
              'Convert to fractions for faster calculation',
            ],
          },
          {
            name: 'Type 2: Income and Expenditure',
            definition: 'Calculating savings or expense based on salary changes',
            example:
              'Man spends 75% of income. Income increases by 20%, expense increases by 10%. Savings increase?',
            solution:
              'Assume Income=100, Exp=75, Sav=25. New Income=120, New Exp=82.5. New Sav=37.5. Increase = (12.5/25) × 100 = 50%',
            approach: 'Always assume base value as 100 for easy tracking',
          },
          {
            name: 'Type 3: Election Problems',
            definition: 'Determining total votes based on winning margins',
            example: 'Candidate A gets 60% and wins by 400 votes. Total votes?',
            solution: 'A=60%, B=40%. Difference=20%. If 20% = 400, then 100% = 2000',
            tricks: [
              'Winning Margin = Winner % - Loser %',
              'Total Votes = (Margin × 100) / % Difference',
            ],
          },
          {
            name: 'Type 4: Population and Depreciation',
            definition: 'Value changes over years (compounding effect)',
            example: 'Town population 10,000 increases 10% annually. Population after 2 years?',
            solution: '10,000 × 1.1 × 1.1 = 12,100',
            formula: 'Final = Initial × (1 ± r/100)^n',
          },
          {
            name: 'Type 5: Examination Marks',
            definition: 'Calculating total marks based on passing % and failures',
            example: 'Student gets 30% and fails by 15 marks. Passing % is 40. Max marks?',
            solution: 'Gap between 30% and 40% is 10%. If 10% = 15, then 100% = 150',
            approach: 'Match the percentage gap with the numerical gap',
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'The A-B-Rule (Successive)',
            method: 'Net % = a + b + ab/100',
            example: 'Two 10% increases result in 21%, not 20%',
          },
          {
            name: 'x% of y = y% of x',
            method: 'Swap numbers to make calculation easier',
            example: '64% of 50 is hard. 50% of 64 is easy = 32',
          },
          {
            name: 'Fractional conversion',
            method: 'Replace % with its fractional equivalent',
            example: '37.5% of 80 → (3/8) × 80 = 30',
          },
          {
            name: 'The 10% Rule',
            method: 'Shift decimal one place left for 10%, half that for 5%',
            example: '10% of 450 is 45. 5% is 22.5',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Adding percentages of different bases',
            correction: '20% of 100 + 20% of 200 is NOT 40% of anything',
          },
          {
            mistake: 'Incorrect base in increase/decrease',
            correction: 'To increase by 20%, use 100 as base. To return, the base is now 120',
          },
          {
            mistake: 'Linear calculation of successive discounts',
            correction: 'A 50% + 50% discount is NOT free; it is a 75% discount',
          },
        ],
      },
      {
        id: 8,
        title: 'Quick Reference Table',
        sets: [
          {
            name: 'Fraction to %',
            values: '1/2=50% | 1/3=33.3% | 1/4=25% | 1/5=20% | 1/8=12.5% | 1/12=8.33%',
          },
          {
            name: 'Net Change Formula',
            values:
              'Successive: a + b + ab/100 | Population: P(1 + r/100)^n | Depreciation: P(1 - r/100)^n',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'x% of y = (x * y) / 100',
        'Change % = (Diff / Original) * 100',
        'Net Successive = a + b + ab/100',
        'A = B(1 + r/100)',
      ],
      mustRememberFacts: [
        "Base value is always the 'Original' or 'Than' value",
        'Multiplying by 1.x is an x% increase',
        '1/7 is approximately 14.28%',
        'Successive increase then decrease of same % always results in loss',
      ],
    },
  },
  //8 Profit and Loss
  {
    id: 8,
    topic: 'Profit and Loss',
    description:
      'Master profit and loss calculations - essential for business mathematics, discounts, and pricing problems. Learn to solve complex problems involving cost price, selling price, discounts, and profit/loss percentages efficiently.',

    sections: [
      {
        id: 1,
        title: 'Introduction to Profit and Loss',
        content:
          'Profit and Loss is the study of transactions involving buying and selling of goods. Understanding these concepts is crucial for business calculations, determining pricing strategies, and solving real-world commercial problems.',
        importance:
          'Profit and Loss questions appear in 90% of quantitative aptitude tests. They form the basis for business mathematics, data interpretation, and are essential in banking and management exams',
      },

      {
        id: 2,
        title: 'Basic Terminology',
        subtopics: [
          {
            name: 'Cost Price (CP)',
            definition:
              'The price at which an article is purchased. It includes the actual price paid and any additional expenses like transportation, taxes, etc.',
            example: 'Bought a phone for $500 + $20 shipping = CP = $520',
            properties: [
              'Also called Purchase Price or Buying Price',
              'Base value for profit/loss calculation',
              'Includes all expenses incurred in acquiring the item',
              'Always a positive value',
            ],
          },
          {
            name: 'Selling Price (SP)',
            definition: 'The price at which an article is sold to the customer.',
            example: 'Sold the phone for $600 = SP = $600',
            properties: [
              'Price received from customer',
              'Determines profit or loss',
              'Can be less than, equal to, or more than CP',
              'Final transaction price',
            ],
          },
          {
            name: 'Profit (Gain)',
            definition:
              'When Selling Price is more than Cost Price, the difference is called Profit.',
            formula: 'Profit = SP - CP (when SP > CP)',
            example: 'CP = $500, SP = $600, Profit = $100',
            properties: [
              'Positive difference between SP and CP',
              'Indicates successful business transaction',
              'Can be expressed as amount or percentage',
              'Goal of every business',
            ],
          },
          {
            name: 'Loss',
            definition:
              'When Cost Price is more than Selling Price, the difference is called Loss.',
            formula: 'Loss = CP - SP (when CP > SP)',
            example: 'CP = $600, SP = $500, Loss = $100',
            properties: [
              'Positive difference between CP and SP',
              'Indicates unsuccessful transaction',
              'Can be expressed as amount or percentage',
              'Business aims to minimize losses',
            ],
          },
          {
            name: 'Marked Price (MP)',
            definition:
              'The price marked or labeled on an article. It is the price before any discount is given.',
            example: 'Price tag shows $1000 = Marked Price = $1000',
            notation: 'Also called List Price or Catalogue Price',
            properties: [
              'Usually higher than selling price',
              'Basis for calculating discount',
              'What customer sees on price tag',
              'May or may not equal selling price',
            ],
          },
          {
            name: 'Discount',
            definition:
              "A reduction given on the Marked Price. It's the difference between Marked Price and Selling Price.",
            formula: 'Discount = MP - SP',
            example: 'MP = $1000, SP = $800, Discount = $200',
            properties: [
              'Always reduces the price',
              'Marketing strategy to attract customers',
              'Can be flat amount or percentage',
              'Multiple discounts can be successive',
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'Fundamental Formulas',
        formulas: [
          {
            category: 'Basic Profit and Loss',
            items: [
              {
                name: 'Profit',
                formula: 'Profit = SP - CP (when SP > CP)',
                example: 'CP = $400, SP = $500, Profit = $100',
              },
              {
                name: 'Loss',
                formula: 'Loss = CP - SP (when CP > SP)',
                example: 'CP = $500, SP = $400, Loss = $100',
              },
              {
                name: 'Profit Percentage',
                formula: 'Profit% = (Profit / CP) × 100',
                example: 'Profit = $100, CP = $400, Profit% = (100/400)×100 = 25%',
              },
              {
                name: 'Loss Percentage',
                formula: 'Loss% = (Loss / CP) × 100',
                example: 'Loss = $100, CP = $500, Loss% = (100/500)×100 = 20%',
              },
            ],
          },
          {
            category: 'SP and CP Relationships',
            items: [
              {
                name: 'SP when Profit% known',
                formula: 'SP = CP × (100 + Profit%) / 100',
                example: 'CP = $400, Profit% = 25%, SP = 400 × 125/100 = $500',
              },
              {
                name: 'SP when Loss% known',
                formula: 'SP = CP × (100 - Loss%) / 100',
                example: 'CP = $500, Loss% = 20%, SP = 500 × 80/100 = $400',
              },
              {
                name: 'CP when SP and Profit% known',
                formula: 'CP = (SP × 100) / (100 + Profit%)',
                example: 'SP = $500, Profit% = 25%, CP = (500×100)/125 = $400',
              },
              {
                name: 'CP when SP and Loss% known',
                formula: 'CP = (SP × 100) / (100 - Loss%)',
                example: 'SP = $400, Loss% = 20%, CP = (400×100)/80 = $500',
              },
            ],
          },
          {
            category: 'Marked Price and Discount',
            items: [
              {
                name: 'Discount',
                formula: 'Discount = MP - SP',
                example: 'MP = $1000, SP = $800, Discount = $200',
              },
              {
                name: 'Discount Percentage',
                formula: 'Discount% = (Discount / MP) × 100',
                example: 'Discount = $200, MP = $1000, Discount% = 20%',
              },
              {
                name: 'SP after Discount',
                formula: 'SP = MP × (100 - Discount%) / 100',
                example: 'MP = $1000, Discount% = 20%, SP = 1000 × 80/100 = $800',
              },
              {
                name: 'MP when SP and Discount% known',
                formula: 'MP = (SP × 100) / (100 - Discount%)',
                example: 'SP = $800, Discount% = 20%, MP = (800×100)/80 = $1000',
              },
            ],
          },
          {
            category: 'Combined Formulas',
            items: [
              {
                name: 'SP with Markup and Discount',
                formula: 'SP = CP × (100 + Markup%) / 100 × (100 - Discount%) / 100',
                example: 'CP = $100, Markup 50%, Discount 20%: SP = 100 × 1.5 × 0.8 = $120',
              },
              {
                name: 'Profit% when MP and Discount% known',
                formula: 'Profit% = [(100 + Markup%) × (100 - Discount%) / 100] - 100',
                example: 'Markup 50%, Discount 20%: Profit% = (150 × 80/100) - 100 = 20%',
              },
              {
                name: 'Successive Discounts',
                formula: 'Single Discount% = D₁ + D₂ - (D₁ × D₂)/100',
                example: '20% + 10%: Single = 20 + 10 - (20×10)/100 = 28%',
              },
            ],
          },
          {
            category: 'Special Formulas',
            items: [
              {
                name: 'Golden Rule (Product of Numbers)',
                formula: 'CP × SP (at profit) = CP × SP (at loss) only if same article',
                note: 'HCF × LCM = Product relation but for profit-loss calculations',
              },
              {
                name: 'Break-even Point',
                formula: 'SP = CP (No profit, no loss)',
                example: 'If SP = CP, Profit% = 0%, Loss% = 0%',
              },
              {
                name: 'Profit/Loss on combined transactions',
                formula: 'Overall Profit/Loss = Sum of individual profits/losses',
                example: 'Item A: +$50, Item B: -$30, Overall: +$20',
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Important Relationships and Properties',
        subtopics: [
          {
            name: 'Key Relationships',
            properties: [
              'If SP > CP → Profit',
              'If CP > SP → Loss',
              'If SP = CP → No profit, no loss (Break-even)',
              'Profit% and Loss% always calculated on CP (not SP)',
              'Discount% always calculated on MP (not SP or CP)',
              'Higher CP → Lower Profit% for same profit amount',
              'MP = CP + Markup on CP',
              'SP = MP - Discount on MP',
            ],
          },
          {
            name: 'Percentage Properties',
            properties: [
              'Profit% = (SP/CP - 1) × 100',
              'Loss% = (1 - SP/CP) × 100',
              'If Profit% = x, then SP = CP(1 + x/100)',
              'If Loss% = x, then SP = CP(1 - x/100)',
              'A profit of x% followed by loss of x% results in net loss',
              'Net change = x² / 100 (always loss for equal profit-loss %)',
            ],
          },
          {
            name: 'Markup and Discount Relationship',
            properties: [
              'Markup is on CP, Discount is on MP',
              'Final Profit = (Markup% - Discount% - Markup%×Discount%/100)',
              "If Markup% = Discount%, there's still a profit",
              'Multiple successive discounts always less than sum of discounts',
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Problem Types and Methods',
        subtopics: [
          {
            name: 'Type 1: Basic Profit/Loss Calculation',
            definition: 'Find profit/loss or percentage given CP and SP',
            example: 'CP = $800, SP = $1000. Find profit%',
            solution: 'Profit = 1000 - 800 = $200. Profit% = (200/800) × 100 = 25%',
            method: 'Calculate difference, then percentage on CP',
          },
          {
            name: 'Type 2: Finding CP or SP',
            definition: 'Given profit/loss% and one price, find the other',
            example: 'SP = $450, Profit% = 25%. Find CP',
            solution: 'CP = (450 × 100) / 125 = $360',
            method: 'Use relationship formulas',
          },
          {
            name: 'Type 3: Markup and Discount',
            definition: 'Problems involving marked price and discounts',
            example: 'Marked 40% above CP, 10% discount. CP = $100. Find SP',
            solution: 'MP = 100 × 1.4 = $140. SP = 140 × 0.9 = $126',
            method: 'Calculate MP first, then apply discount',
          },
          {
            name: 'Type 4: Two Transactions (Profit and Loss)',
            definition: 'Items sold with different profit/loss percentages',
            example: 'Two items at $990 each. One at 10% profit, other at 10% loss. Overall?',
            solution:
              'CP₁ = 990/1.1 = 900. CP₂ = 990/0.9 = 1100. Total CP = 2000, SP = 1980. Loss = $20, Loss% = 1%',
            method: 'Calculate individual CPs, then total profit/loss',
          },
          {
            name: 'Type 5: Successive Discounts',
            definition: 'Multiple discounts applied one after another',
            example: 'MP = $1000, discounts 20% then 10%. Final SP?',
            solution:
              'After 20%: 1000 × 0.8 = 800. After 10%: 800 × 0.9 = $720. Single discount = 28%',
            method: 'Apply discounts successively, not additively',
          },
          {
            name: 'Type 6: Dishonest Dealer',
            definition: 'False weights or measures used',
            example: 'Uses 900g weight but claims 1kg. Profit% if sold at CP?',
            solution:
              'Gives 900g, charges for 1000g. Profit = 100g on 900g. Profit% = (100/900)×100 = 11.11%',
            method: 'Calculate on actual quantity given vs claimed',
          },
          {
            name: 'Type 7: Loss to Profit Conversion',
            definition: 'Find SP needed to convert loss into profit',
            example: 'Selling at $240 gives 20% loss. At what price to get 20% profit?',
            solution: 'CP = (240×100)/80 = $300. For 20% profit: SP = 300×1.2 = $360',
            method: 'Find CP first, then calculate new SP',
          },
          {
            name: 'Type 8: Ratio-based Problems',
            definition: 'CP and SP given in ratio form',
            example: 'CP:SP = 4:5. Find profit%',
            solution: 'Let CP = 4x, SP = 5x. Profit = x. Profit% = (x/4x)×100 = 25%',
            method: 'Use ratio to find profit, then percentage',
          },
        ],
      },

      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Quick Profit% to SP Multiplier',
            method: 'For x% profit: multiply CP by (100+x)/100',
            example: '25% profit: multiply by 1.25. CP $400 → SP = $500',
          },
          {
            name: 'Quick Loss% to SP Multiplier',
            method: 'For x% loss: multiply CP by (100-x)/100',
            example: '20% loss: multiply by 0.8. CP $500 → SP = $400',
          },
          {
            name: 'Successive Discount Quick Formula',
            method: 'Two discounts D₁, D₂: Single = D₁ + D₂ - D₁D₂/100',
            example: '20% + 10%: 20 + 10 - 200/100 = 28% (not 30%)',
          },
          {
            name: 'Quick CP from SP and Profit%',
            method: 'CP = SP × 100/(100+Profit%)',
            example: 'SP $125, 25% profit: CP = 125 × 100/125 = $100',
          },
          {
            name: 'Same CP, Different Profit/Loss%',
            method: 'Equal % profit and loss always results in net loss',
            example: '10% profit then 10% loss: Net = -(10²/100) = -1% loss',
          },
          {
            name: 'Dishonest Dealer Trick',
            method: 'Profit% = (Cheated amount / Actual amount) × 100',
            example: 'Gives 800g for 1kg: (200/800)×100 = 25% profit',
          },
          {
            name: 'Markup-Discount Net Profit',
            method: 'Net Profit% = Markup% - Discount% - (Markup% × Discount%)/100',
            example: '30% markup, 20% discount: 30 - 20 - 600/100 = 4% profit',
          },
          {
            name: 'Quick Break-even Check',
            method: 'If Profit% on one = Loss% on other at same SP, overall is loss',
            example: 'Both sold at $100: one 20% profit, other 20% loss → Net loss 4%',
          },
          {
            name: 'Mental Calculation for Simple %',
            method: '10% = divide by 10, 20% = divide by 5, 25% = divide by 4, 50% = divide by 2',
            example: '25% profit on $400: 400/4 = 100 profit, SP = $500',
          },
          {
            name: 'Reverse Percentage Trick',
            method: 'To find original after x% increase: divide by (1 + x/100)',
            example: "After 20% increase it's $120. Original = 120/1.2 = $100",
          },
        ],
      },

      {
        id: 7,
        title: 'Step-by-Step Solved Examples',
        examples: [
          {
            question:
              'A shopkeeper marks his goods 30% above cost price and gives 10% discount. Find his profit percentage.',
            solution:
              'Step 1: Assume CP = $100 (for easy calculation)\n\nStep 2: Calculate Marked Price\nMP = CP + 30% of CP\nMP = 100 + 30 = $130\n\nStep 3: Calculate Selling Price after discount\nDiscount = 10% of MP = 10% of 130 = $13\nSP = MP - Discount = 130 - 13 = $117\n\nStep 4: Calculate Profit\nProfit = SP - CP = 117 - 100 = $17\n\nStep 5: Calculate Profit%\nProfit% = (Profit/CP) × 100 = (17/100) × 100 = 17%\n\nAlternate (Quick formula):\nProfit% = 30 - 10 - (30×10)/100 = 30 - 10 - 3 = 17%',
            answer: '17%',
          },
          {
            question:
              'A man sells two articles at $990 each. On one he gains 10% and on the other he loses 10%. What is his overall gain or loss percentage?',
            solution:
              'Step 1: Find CP of first article (10% profit)\nSP₁ = $990, Profit% = 10%\nCP₁ = (990 × 100) / 110 = $900\n\nStep 2: Find CP of second article (10% loss)\nSP₂ = $990, Loss% = 10%\nCP₂ = (990 × 100) / 90 = $1100\n\nStep 3: Calculate total CP and SP\nTotal CP = 900 + 1100 = $2000\nTotal SP = 990 + 990 = $1980\n\nStep 4: Calculate overall loss\nLoss = CP - SP = 2000 - 1980 = $20\n\nStep 5: Calculate Loss%\nLoss% = (20/2000) × 100 = 1%\n\nQuick Method:\nEqual % profit and loss → Loss% = (10²/100) = 1%',
            answer: '1% loss',
          },
          {
            question:
              'By selling an article for $240, a man loses 20%. At what price should he sell it to gain 20%?',
            solution:
              'Step 1: Find Cost Price\nSP = $240, Loss% = 20%\nCP = (SP × 100) / (100 - Loss%)\nCP = (240 × 100) / 80 = $300\n\nStep 2: Calculate new SP for 20% profit\nFor 20% profit:\nSP = CP × (100 + Profit%) / 100\nSP = 300 × 120 / 100 = $360\n\nStep 3: Verification\nOriginal: CP = 300, SP = 240, Loss = 60 (20% of 300) ✓\nNew: CP = 300, SP = 360, Profit = 60 (20% of 300) ✓',
            answer: '$360',
          },
          {
            question:
              'A trader uses a false weight of 900g instead of 1kg while selling goods at cost price. What is his profit percentage?',
            solution:
              'Step 1: Understand the situation\nClaims to sell: 1000g\nActually sells: 900g\nCharges: Price for 1000g\n\nStep 2: Calculate the cheating amount\nCheated amount = 1000 - 900 = 100g\n\nStep 3: Calculate profit percentage\nActual goods sold = 900g\nExtra charged for = 100g\nProfit% = (Extra charged / Actual sold) × 100\nProfit% = (100 / 900) × 100 = 11.11%\n\nAlternate method:\nHe gives 900g but charges for 1000g\nProfit% = [(1000-900)/900] × 100 = 11.11%',
            answer: '11.11%',
          },
          {
            question:
              'A shopkeeper offers successive discounts of 20% and 10%. If the marked price is $1000, what is the final selling price and equivalent single discount?',
            solution:
              'Step 1: Apply first discount (20%)\nDiscount₁ = 20% of 1000 = $200\nPrice after 1st discount = 1000 - 200 = $800\n\nStep 2: Apply second discount (10% on reduced price)\nDiscount₂ = 10% of 800 = $80\nFinal SP = 800 - 80 = $720\n\nStep 3: Calculate equivalent single discount\nTotal discount = 1000 - 720 = $280\nSingle discount% = (280/1000) × 100 = 28%\n\nQuick formula:\nSingle Discount% = 20 + 10 - (20×10)/100 = 30 - 2 = 28%\n\nNote: 20% + 10% ≠ 30% for successive discounts!',
            answer: 'SP = $720, Single Discount = 28%',
          },
        ],
      },

      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Calculating profit/loss% on SP instead of CP',
            correction: 'Always calculate Profit% and Loss% on Cost Price, not Selling Price',
          },
          {
            mistake: 'Adding successive discounts directly (20% + 10% = 30%)',
            correction: 'Use formula: D₁ + D₂ - (D₁×D₂)/100. Answer is 28%, not 30%',
          },
          {
            mistake: 'Thinking equal % profit and loss cancel out',
            correction: 'Equal % profit and loss always results in net loss = (x²/100)%',
          },
          {
            mistake: 'Calculating discount% on CP or SP instead of MP',
            correction: 'Discount% is always on Marked Price',
          },
          {
            mistake: 'Not considering all costs in CP',
            correction: 'CP includes purchase price + transport + taxes + any other expenses',
          },
          {
            mistake: 'Confusing markup with profit',
            correction: 'Markup is on CP to get MP. Profit is difference between SP and CP',
          },
          {
            mistake: 'Using wrong formula for CP when loss% given',
            correction: 'CP = (SP × 100)/(100 - Loss%), not (100 + Loss%)',
          },
          {
            mistake: 'Forgetting to convert % to decimal in calculations',
            correction: "25% = 0.25 or 25/100. Don't use 25 directly in formulas",
          },
        ],
      },

      {
        id: 9,
        title: 'Advanced Concepts',
        subtopics: [
          {
            name: 'Partnership and Profit Sharing',
            definition:
              'When two or more people invest in business, profit/loss shared in ratio of investments',
            example: 'A invests $3000, B invests $5000. Profit $800. A gets: (3/8)×800 = $300',
            formula: 'Share = (Individual investment / Total investment) × Total profit',
          },
          {
            name: 'Time-based Partnership',
            definition: 'When partners invest for different time periods',
            example:
              'A invests $5000 for 6 months, B $3000 for 8 months. Ratio = (5000×6):(3000×8) = 30:24 = 5:4',
            formula: 'Ratio = (Investment₁ × Time₁) : (Investment₂ × Time₂)',
          },
          {
            name: 'Overhead Charges',
            definition: 'Additional expenses like rent, salary, electricity added to CP',
            example: 'Bought for $1000, overhead $200. Effective CP = $1200',
            note: 'Must include in CP for correct profit calculation',
          },
          {
            name: 'Depreciation',
            definition: 'Decrease in value over time (opposite of appreciation)',
            example:
              'Machine worth $10000 depreciates 10% yearly. After 2 years = 10000×(0.9)² = $8100',
            formula: 'Value after n years = Initial × (1 - Rate/100)ⁿ',
          },
        ],
      },

      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Always start by assuming CP = $100 for percentage problems - makes calculation easier',
          'Memorize key multipliers: 10%=1.1, 20%=1.2, 25%=1.25, 50%=1.5 for profit',
          'For two items at same SP with equal % profit and loss, always net loss',
          'Master successive discount formula - appears in 80% of exams',
          'Practice dishonest dealer problems - common and scoring',
          'Remember: Profit/Loss% always on CP, Discount% always on MP',
          'For markup-discount problems, calculate MP first, then apply discount',
          'Learn to quickly convert between SP, CP using multipliers',
          'Practice ratio-based problems - they test concept clarity',
          'Always verify if answer makes logical sense (SP > CP for profit)',
        ],
      },

      {
        id: 11,
        title: 'Exam Strategy',
        examTips: [
          'Profit and Loss questions are high-scoring - attempt them first',
          'Time limit: 60-90 seconds per question',
          'Use CP = $100 trick for quick calculations in percentage problems',
          'For successive discounts, NEVER add percentages directly',
          'Check options: work backwards from answer choices if stuck',
          "Markup-discount problems: calculate step-by-step, don't rush",
          'For two transactions problem, calculate individual CPs separately',
          "Watch for 'at cost price' - often involves cheating/false weights",
          'If problem seems complex, break into: Find CP → Find SP → Calculate Profit%',
          'Verify reasonableness: 100% profit means SP = 2×CP',
        ],
      },

      {
        id: 12,
        title: 'Important Concepts to Remember',
        subtopics: [
          {
            name: 'The 4% Rule',
            definition: 'When x% profit followed by x% loss (or vice versa), net loss = x²/100%',
            example: '10% profit then 10% loss: Net loss = 100/100 = 1%',
            properties: [
              'Always results in loss (never profit)',
              'Independent of order (profit first or loss first)',
              'Works for any percentage',
            ],
          },
          {
            name: 'Break-even Analysis',
            definition: 'Point where Total Revenue = Total Cost (no profit, no loss)',
            example:
              'If fixed cost = $1000, variable cost = $20/unit, SP = $30/unit. Break-even = 1000/10 = 100 units',
          },
          {
            name: 'Margin vs Markup',
            definition: 'Markup is on CP, Margin is on SP',
            example: 'CP=$80, SP=$100. Markup=25% (on CP), Margin=20% (on SP)',
            note: 'In aptitude exams, usually markup (on CP) is used',
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'Profit = SP - CP (when SP > CP)',
        'Loss = CP - SP (when CP > SP)',
        'Profit% = (Profit/CP) × 100',
        'SP = CP × (100 ± Profit%/Loss%) / 100',
        'CP = (SP × 100) / (100 ± Profit%/Loss%)',
        'Successive Discount = D₁ + D₂ - (D₁×D₂)/100',
        'Net Profit = Markup% - Discount% - (Markup×Discount)/100',
      ],

      mustRememberFacts: [
        'Profit/Loss% always on CP, never on SP',
        'Discount% always on MP, never on CP or SP',
        'Equal % profit and loss → Always net loss = x²/100%',
        'Successive discounts: NEVER add directly',
        'At cost price with false weight → Profit from cheating',
        'MP = CP + Markup, SP = MP - Discount',
        'Break-even: SP = CP (no profit, no loss)',
      ],

      quickShortcuts: [
        '20% profit: multiply CP by 1.2',
        '25% profit: multiply CP by 1.25',
        '20% loss: multiply CP by 0.8',
        '25% loss: multiply CP by 0.75',
        'Two equal discounts x%: Single = 2x - x²/100',
        'Dishonest dealer: Profit% = (Cheated/Actual)×100',
      ],

      commonPatterns: [
        'Two items, same SP, equal % profit-loss → 1% loss',
        'Markup on CP, Discount on MP → Final profit depends on both',
        'False weight problem → Calculate on actual quantity given',
        'Loss to profit conversion → Find CP first, then new SP',
      ],
    },
  },
  //9 Ratio and Proportion
  {
    id: 9,
    topic: 'Ratio and Proportion',
    description:
      'Master the art of comparison using Ratios and Proportions. This topic is the foundation for Data Interpretation, Mixtures, Partnerships, and Algebra. Learn to simplify complex relationships into simple parts.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Ratio and Proportion',
        content:
          'Ratio is the comparison of two quantities of the same unit by division. Proportion is the equality of two ratios. Together, they form the basis for solving problems involving distribution, scaling, and mixtures.',
        importance:
          'Crucial for DI (Data Interpretation), Profit & Loss, Time & Work, and Geometry. It allows for quick solving without heavy algebraic equations.',
      },
      {
        id: 2,
        title: 'What is Ratio and Proportion?',
        subtopics: [
          {
            name: 'Definition of Ratio',
            definition:
              "A relationship between two quantities 'a' and 'b' of the same kind, expressed as a:b or a/b.",
            formula: 'Ratio = Antecedent : Consequent',
            example: 'If A has 2 apples and B has 3, Ratio A:B = 2:3',
            properties: [
              'Order matters: a:b is not same as b:a',
              'Quantities must be in same unit',
              "Multiplication/Division by constant doesn't change ratio",
            ],
          },
          {
            name: 'Definition of Proportion',
            definition: 'An equation stating that two ratios are equal.',
            formula: 'a:b :: c:d or a/b = c/d',
            example: '2:3 :: 4:6 (Since 2/3 = 4/6)',
            properties: [
              'Product of Extremes = Product of Means (a×d = b×c)',
              'd is the Fourth Proportional',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas and Relationships',
        formulas: [
          {
            category: 'Types of Proportions',
            items: [
              {
                name: 'Fourth Proportional',
                formula: 'If a:b :: c:x, then x = (b×c)/a',
                example: 'Fourth prop to 4, 9, 12 -> x = (9×12)/4 = 27',
              },
              {
                name: 'Third Proportional',
                formula: 'If a:b :: b:x, then x = b²/a',
                example: 'Third prop to 16 and 36 -> x = 36²/16 = 81',
              },
              {
                name: 'Mean Proportional',
                formula: 'If a:x :: x:b, then x = √(ab)',
                example: 'Mean prop between 4 and 9 -> x = √(36) = 6',
              },
            ],
          },
          {
            category: 'Types of Ratios',
            items: [
              {
                name: 'Compounded Ratio',
                formula: 'For a:b and c:d, compounded ratio is (ac) : (bd)',
                example: 'Compound of 2:3 and 4:5 = 8:15',
              },
              {
                name: 'Duplicate/Triplicate Ratio',
                formula: 'Duplicate = a²:b² | Triplicate = a³:b³',
                example: 'Duplicate of 2:3 = 4:9',
              },
              {
                name: 'Sub-duplicate Ratio',
                formula: '√a : √b',
                example: 'Sub-duplicate of 25:16 = 5:4',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Proportion',
        subtopics: [
          {
            name: 'Algebraic Properties',
            properties: [
              'Invertendo: If a:b :: c:d, then b:a :: d:c',
              'Alternendo: If a:b :: c:d, then a:c :: b:d',
              'Componendo: If a:b :: c:d, then (a+b):b :: (c+d):d',
              'Dividendo: If a:b :: c:d, then (a-b):b :: (c-d):d',
              'Componendo & Dividendo: If a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d)',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Ratio Problems',
        subtopics: [
          {
            name: 'Type 1: Merging Ratios',
            definition: 'Combining separate ratios into a single continuous ratio.',
            example: 'A:B = 2:3, B:C = 4:5. Find A:B:C.',
            solution: 'Make B common. Multiply first by 4, second by 3. A:B:C = 8:12:15.',
            trick: 'Neighbor Method (Fill empty spaces with neighbor)',
          },
          {
            name: 'Type 2: Distribution Problems',
            definition: 'Dividing a total amount in a given ratio.',
            example: 'Divide $500 in ratio 2:3.',
            solution: 'Total parts = 2+3=5. 1 part = 100. Shares are $200 and $300.',
          },
          {
            name: 'Type 3: Coins and Notes',
            definition: 'Given value or count of coins in a ratio.',
            example: 'Bag has $1, 50c, 25c coins in ratio 5:6:8. Total value $240.',
            solution: 'Convert to values: 5x($1) + 6x($0.5) + 8x($0.25) = 240. Solve for x.',
          },
          {
            name: 'Type 4: Income and Expenditure',
            definition: 'Using ratio of income and savings to find salary.',
            example: 'Income ratio 5:3, Expenses 9:5. Savings same.',
            approach: 'Cross-multiplication method or balancing difference.',
          },
          {
            name: 'Type 5: Mixtures',
            definition: 'Adding liquid to change ratio.',
            example: 'Milk:Water is 7:3. Add 5L water, ratio becomes 7:4.',
            solution:
              "Milk didn't change (7 parts). Water increased 1 part. 1 part = 5L. Initial mixture = 10 parts = 50L.",
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'The Neighbor Method (Merging)',
            method: 'Write ratios in rows. Fill empty slot with the number adjacent to it.',
            example: 'A:B=1:2, B:C=3:4 -> \n1  2  (2)\n(3) 3  4\nMultiply down: 3 : 6 : 8',
          },
          {
            name: 'Cross Product (Ages/Income)',
            method:
              'If Ratio 1 changes to Ratio 2 by adding/subtracting x: Use Cross Product difference.',
            example:
              'Difference in cross product of ratios = Difference in value × Difference in ratio terms',
          },
          {
            name: 'LCD Method for Fractions',
            method: 'If ratio is 1/2 : 1/3 : 1/4, multiply all by LCM (12).',
            example: '6 : 4 : 3',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: "Pattern 1: 'What must be added'",
            question: 'What number must be added to 6, 10, 14, 22 to make them proportional?',
            solution: 'Let x be added. (6+x)/(10+x) = (14+x)/(22+x). Check options quickly.',
            shortcut: 'x = (ad - bc) / ((b+c) - (a+d))',
          },
          {
            name: 'Pattern 2: Partnership',
            question: 'Profit sharing based on investment and time.',
            solution: 'Profit Ratio = (Investment A × Time A) : (Investment B × Time B)',
          },
        ],
      },
      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'If A:B = 3:4 and B:C = 8:9, find A:C.',
            solution:
              'Step 1: Write as fractions\nA/B = 3/4, B/C = 8/9\n\nStep 2: Multiply fractions\n(A/B) × (B/C) = (3/4) × (8/9)\nA/C = 24/36 = 2/3\n\nStep 3: Convert to ratio\nA:C = 2:3',
            answer: '2:3',
          },
          {
            question:
              'Two numbers are in ratio 3:5. If 9 is subtracted from each, they are in ratio 12:23. Find numbers.',
            solution:
              'Step 1: Cross Product shortcut\n3   5\n12  23\nDifference in years/value = 9\n\nStep 2: Calculate\n(3×23) - (5×12) = 69 - 60 = 9 units\n(12×9) - (23×9) = difference in values term\n\nAlternative Step 1: Standard Algebra\n(3x-9)/(5x-9) = 12/23\n69x - 207 = 60x - 108\n9x = 99 -> x = 11\nNumbers: 33 and 55',
            answer: '33 and 55',
          },
        ],
      },
      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Inverse of A:B:C is C:B:A',
            correction: 'Inverse is 1/A : 1/B : 1/C. (e.g., Inverse of 2:3:4 is 6:4:3, not 4:3:2)',
          },
          {
            mistake: 'Adding constant to ratio terms directly',
            correction: "Ratios are multipliers (3x, 4x), not absolute numbers. Use 'x' variable.",
          },
          {
            mistake: 'Confusing Mean Proportional and Third Proportional',
            correction: 'Mean = √ab, Third = b²/a',
          },
          {
            mistake: 'Comparing ratios with different units',
            correction:
              'Ensure units match (e.g., converting minutes to hours) before forming ratio.',
          },
        ],
      },
      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Simplify ratios to lowest terms immediately.',
          "Memorize the 'Neighbor Method' for combining 3 or more ratios.",
          'For mixture problems, focus on the quantity that DOES NOT change.',
          'Use Componendo & Dividendo for equations like (x+a)/(x-a) = b/c.',
          'Check options for divisibility (if A:B = 7:9, A must be multiple of 7).',
        ],
      },
      {
        id: 11,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Proportionality',
            values: 'Mean: √ab | Third: b²/a | Fourth: bc/a',
          },
          {
            name: 'Operations',
            values: 'Invertendo: b:a | Alternendo: a:c=b:d | Componendo: (a+b):b',
          },
          {
            name: 'Variation',
            values: 'Direct: y = kx | Inverse: y = k/x',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'Product of Extremes = Product of Means',
        'Mean Proportional = √(ab)',
        'Third Proportional = b²/a',
        'A/B = C/D -> (A+B)/(A-B) = (C+D)/(C-D)',
      ],
      mustRememberFacts: [
        'Ratio has no units.',
        'To compare ratios, convert to decimal or make denominator same.',
        'Inverse of 2:3 is 3:2, but inverse of 2:3:4 is 6:4:3.',
      ],
      quickChecks: [
        'Sum of ratio parts must divide total amount.',
        'If A:B and B:C given, make B equal to merge.',
        'Check if question asks for A:C or C:A.',
      ],
    },
  },
  //10 Time and Work
  {
    id: 10,
    topic: 'Time and Work',
    description:
      'Master time and work problems - essential for understanding efficiency, work rates, and collaborative work scenarios. Learn to solve problems involving single workers, multiple workers, pipes and cisterns efficiently.',

    sections: [
      {
        id: 1,
        title: 'Introduction to Time and Work',
        content:
          'Time and Work is the study of how much work can be completed in a given time, or how much time is needed to complete a given work. It involves understanding work rates, efficiency, and how multiple workers combine their efforts.',
        importance:
          'Time and Work questions appear in 85% of quantitative aptitude tests. They are fundamental for resource planning, project management, and form the basis for pipes and cisterns problems',
      },

      {
        id: 2,
        title: 'Basic Concepts and Definitions',
        subtopics: [
          {
            name: 'Work',
            definition:
              'The total task or job to be completed. In problems, work is always considered as 1 unit (whole work) or 100%.',
            example:
              'Building a wall, filling a tank, painting a house - all considered as 1 complete work',
            properties: [
              'Always taken as unity (1) for calculations',
              'Can be divided into fractions (1/2 work, 1/3 work)',
              'Constant for a given problem',
              'Independent of who does it or how long it takes',
            ],
          },
          {
            name: 'Time',
            definition:
              'The duration taken to complete the work. Measured in days, hours, minutes, etc.',
            example: 'A can complete work in 10 days, B in 15 days',
            properties: [
              'Can be in any unit (days, hours, minutes)',
              'Inversely proportional to efficiency',
              'More efficient worker takes less time',
              'Combined work reduces total time',
            ],
          },
          {
            name: 'Work Rate (Efficiency)',
            definition:
              'The amount of work completed in one unit of time. It represents how fast someone works.',
            formula: 'Work Rate = Work / Time = 1 / Time (for complete work)',
            example: "If A completes work in 10 days, A's rate = 1/10 per day",
            properties: [
              'Higher rate means more efficient',
              'Rates can be added for combined work',
              'Rate × Time = Work',
              'Usually expressed as fraction per day',
            ],
          },
          {
            name: 'Efficiency',
            definition:
              'The capability or speed of doing work. Often expressed as percentage or ratio compared to others.',
            example: 'A is twice as efficient as B means A works at double the rate',
            properties: [
              'Efficiency ∝ 1/Time',
              'If A is twice as efficient as B, A takes half the time',
              'Can be compared using ratios',
              'Determines work rate',
            ],
          },
          {
            name: 'Man-Days (Person-Days)',
            definition:
              'A unit measuring the amount of work one person can do in one day. Used for resource planning.',
            example: '10 men × 5 days = 50 man-days of work',
            properties: [
              'Total work = Number of people × Days',
              'Constant for same work regardless of distribution',
              'Useful for workforce planning',
              'Can substitute workers with time adjustment',
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'Fundamental Formulas',
        formulas: [
          {
            category: 'Basic Formulas',
            items: [
              {
                name: 'Work Formula',
                formula: 'Work = Rate × Time',
                example: 'Rate = 1/10 per day, Time = 5 days, Work = (1/10) × 5 = 1/2',
              },
              {
                name: 'Rate Formula',
                formula: 'Rate = Work / Time',
                example: 'Complete work (1) in 10 days: Rate = 1/10 per day',
              },
              {
                name: 'Time Formula',
                formula: 'Time = Work / Rate',
                example: 'Work = 1, Rate = 1/10, Time = 1 ÷ (1/10) = 10 days',
              },
              {
                name: 'One Day Work',
                formula: 'If time to complete = n days, then 1 day work = 1/n',
                example: "If A completes in 12 days, A's 1 day work = 1/12",
              },
            ],
          },
          {
            category: 'Combined Work',
            items: [
              {
                name: 'Two Workers Together',
                formula: "(A+B)'s 1 day work = 1/a + 1/b where a, b are individual times",
                example:
                  'A completes in 10 days, B in 15 days: Together = 1/10 + 1/15 = 5/30 = 1/6 per day',
              },
              {
                name: 'Time for Combined Work',
                formula: 'Time = 1 / (Combined rate) = 1 / (1/a + 1/b) = ab/(a+b)',
                example: 'A takes 10 days, B takes 15 days: Together = (10×15)/(10+15) = 6 days',
              },
              {
                name: 'Three Workers Together',
                formula: 'Time = 1 / (1/a + 1/b + 1/c) = abc/(ab+bc+ca)',
                example:
                  'A:10 days, B:15 days, C:20 days: Together = (10×15×20)/(150+200+300) = 4.6 days',
              },
              {
                name: 'Finding Individual Time',
                formula: 'If A+B = t₁, B+C = t₂, C+A = t₃, then 2(A+B+C) = 1/t₁ + 1/t₂ + 1/t₃',
                example:
                  'AB=12, BC=15, CA=20 days: 2(A+B+C) = 1/12+1/15+1/20 = 13/60, (A+B+C) = 13/120 per day',
              },
            ],
          },
          {
            category: 'Efficiency and Time Relationship',
            items: [
              {
                name: 'Efficiency Ratio to Time Ratio',
                formula: 'If Efficiency ratio = a:b, then Time ratio = b:a (inverse)',
                example:
                  'A:B efficiency = 2:3, then Time ratio = 3:2. If A takes 15 days, B takes 10 days',
              },
              {
                name: 'Time Comparison',
                formula: 'If A is x times as efficient as B, then Time(A) = Time(B)/x',
                example: 'A is twice as efficient as B. If B takes 20 days, A takes 10 days',
              },
              {
                name: 'Work Done Ratio',
                formula: 'Work ratio = Efficiency ratio × Time ratio',
                example:
                  'A(efficiency 2) works 3 days, B(efficiency 3) works 2 days: Work = 2×3:3×2 = 6:6 = 1:1',
              },
            ],
          },
          {
            category: 'Man-Days Formula',
            items: [
              {
                name: 'Total Work in Man-Days',
                formula: 'Work = Number of people × Number of days',
                example: '15 men × 10 days = 150 man-days',
              },
              {
                name: 'Work Constant Principle',
                formula: 'M₁D₁ = M₂D₂ (for same work)',
                example: '10 men in 12 days = 6 men in how many days? 10×12 = 6×D₂, D₂ = 20 days',
              },
              {
                name: 'Man-Hours to Man-Days',
                formula: 'Man-Days = (Men × Hours) / Hours per day',
                example:
                  '20 men × 8 hours/day × 10 days = 20 × 10 = 200 man-days (if standard day is 8h)',
              },
              {
                name: 'Work with Different Efficiency',
                formula: 'M₁D₁E₁ = M₂D₂E₂ where E is efficiency',
                example:
                  '10 men (efficiency 1) in 12 days = 8 men (efficiency 1.5) in D days: 10×12×1 = 8×D×1.5, D = 10',
              },
            ],
          },
          {
            category: 'Partial Work Formulas',
            items: [
              {
                name: 'Work Remaining',
                formula: 'Remaining work = 1 - Work completed',
                example: 'If 2/5 work done, remaining = 1 - 2/5 = 3/5',
              },
              {
                name: 'Time for Remaining Work',
                formula: 'Time = Remaining work / Rate',
                example: "3/5 work remaining, A's rate = 1/10: Time = (3/5)/(1/10) = 6 days",
              },
              {
                name: 'Work Done by One, Completed by Another',
                formula: 'Work by A + Work by B = 1 (total)',
                example: 'A works 5 days (rate 1/15), completes 5/15 = 1/3. B completes 2/3',
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Key Principles and Properties',
        subtopics: [
          {
            name: 'Fundamental Principles',
            properties: [
              'Work is always considered as 1 (unity) or 100%',
              'Rates are additive: Combined rate = Sum of individual rates',
              'Time is NOT additive: Combined time ≠ Sum of individual times',
              'Efficiency ∝ 1/Time (inversely proportional)',
              'More workers working together → Less time needed',
              'Same work → Man-days remains constant',
              'Work done is proportional to time when rate is constant',
            ],
          },
          {
            name: 'Efficiency Relationships',
            properties: [
              'If A is twice as efficient as B: Time(A) = Time(B)/2',
              'If A:B efficiency = 2:3: Time ratio = 3:2',
              'Higher efficiency → Higher work rate → Less time',
              'Efficiency can be compared using ratios or percentages',
              'Combined efficiency = Sum of individual efficiencies',
            ],
          },
          {
            name: 'Work Rate Properties',
            properties: [
              'Rate × Time = Work (fundamental equation)',
              'Rate = 1/Time (for complete work)',
              'Rates can be added when working together',
              'Rates can be subtracted when working against each other',
              'Constant rate means linear work progress',
            ],
          },
          {
            name: 'Man-Days Properties',
            properties: [
              'For same work: M₁D₁ = M₂D₂',
              'If men increase, days decrease proportionally',
              'Total work in man-days is constant',
              'Can convert between different workforce sizes',
              'Useful for project planning and resource allocation',
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Problem Types and Methods',
        subtopics: [
          {
            name: 'Type 1: Single Worker',
            definition: 'Problems with one person completing work',
            example:
              'A can complete a work in 15 days. In how many days can A complete half the work?',
            solution: "A's rate = 1/15 per day. For 1/2 work: Time = (1/2)/(1/15) = 7.5 days",
            method: 'Find rate, apply work formula',
          },
          {
            name: 'Type 2: Two Workers Together',
            definition: 'Two people working together to complete work',
            example: 'A completes in 10 days, B in 15 days. Together in how many days?',
            solution: 'Combined rate = 1/10 + 1/15 = 5/30 = 1/6. Time = 1/(1/6) = 6 days',
            method: 'Add rates, find time from combined rate',
          },
          {
            name: 'Type 3: Work with Departure',
            definition: 'Workers start together, one leaves after some time',
            example:
              "A and B together start work (can finish in 12 days). After 8 days, A leaves. B finishes remaining in 10 days. Find B's time alone.",
            solution:
              'Work in 8 days = 8/12 = 2/3. Remaining = 1/3. B does 1/3 in 10 days, so complete work in 30 days',
            method: 'Calculate work done together, then remaining work by individual',
          },
          {
            name: 'Type 4: Alternating Work',
            definition: 'Workers work on alternate days',
            example:
              'A can do work in 10 days, B in 15 days. They work alternately starting with A. In how many days?',
            solution: '2 days work = 1/10 + 1/15 = 1/6. In 12 days, 6 cycles = 6/6 = complete',
            method: 'Calculate work in one cycle, find number of cycles needed',
          },
          {
            name: 'Type 5: Efficiency Ratio Problems',
            definition: 'Given efficiency ratios, find times or work done',
            example:
              "A is twice as efficient as B. Together they complete work in 6 days. Find A's time alone.",
            solution:
              'Let B take 3x days, A takes 3x/2. Together: 1/(3x/2) + 1/3x = 1/6. Solving: x = 5. A = 7.5 days',
            method: 'Use efficiency ratios to establish time relationship',
          },
          {
            name: 'Type 6: Man-Days Problems',
            definition: 'Converting workforce and time',
            example:
              '12 men can complete work in 15 days. How many men needed to complete in 10 days?',
            solution: 'Work = 12 × 15 = 180 man-days. For 10 days: Men = 180/10 = 18 men',
            method: 'Use M₁D₁ = M₂D₂ principle',
          },
          {
            name: 'Type 7: Work and Wages',
            definition: 'Distributing wages based on work done',
            example:
              'A, B, C can do work in 10, 12, 15 days. For a job paying $1200, how to divide?',
            solution:
              'Rate ratio = 1/10:1/12:1/15 = 6:5:4. Total = 15 parts. A = (6/15)×1200 = $480',
            method: 'Divide wages in ratio of work rates',
          },
          {
            name: 'Type 8: Pipes and Cisterns',
            definition: 'Filling/emptying tanks (special case of time-work)',
            example:
              'Pipe A fills tank in 10 hours, B empties in 15 hours. Both open, time to fill?',
            solution: 'Net rate = 1/10 - 1/15 = 1/30 per hour. Time = 30 hours',
            method: 'Filling is positive, emptying is negative. Add algebraically',
          },
        ],
      },

      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Quick Combined Time for Two Workers',
            method: 'Time = (Product of times) / (Sum of times) = ab/(a+b)',
            example: 'A: 10 days, B: 15 days. Together = (10×15)/(10+15) = 150/25 = 6 days',
          },
          {
            name: 'LCM Method for Combined Work',
            method: 'Take LCM of all times as total work units, calculate accordingly',
            example:
              "A: 12 days, B: 15 days. LCM = 60. A's rate = 5 units/day, B's rate = 4 units/day. Together = 9 units/day. Time = 60/9 = 6.67 days",
          },
          {
            name: 'Ratio Method for Efficiency',
            method: 'Convert efficiency ratios to time ratios (inverse)',
            example: 'Efficiency A:B = 3:2. Time ratio = 2:3. If A takes 10 days, B takes 15 days',
          },
          {
            name: 'Quick Alternating Work',
            method: 'Find work in 2 days (one cycle), multiply for full cycles',
            example: 'A: 1/10, B: 1/15. Two-day cycle = 1/10 + 1/15 = 1/6. Need 6 cycles = 12 days',
          },
          {
            name: 'Part Work Formula',
            method: "If A does work in 'a' days, in 'd' days A completes d/a of work",
            example: 'A completes in 15 days. In 5 days: Work done = 5/15 = 1/3',
          },
          {
            name: 'Efficiency Percentage to Time',
            method: 'If A is x% more efficient than B: Time(A) = Time(B) × 100/(100+x)',
            example:
              'A is 50% more efficient than B. B takes 30 days: A takes 30 × 100/150 = 20 days',
          },
          {
            name: 'Quick Man-Days Calculation',
            method: 'Use proportion directly: M₁D₁ = M₂D₂',
            example: '15 men, 20 days. For 25 men: Days = (15×20)/25 = 12 days',
          },
          {
            name: 'Work Done in Ratio',
            method: 'Work ratio = Time ratio × Efficiency ratio',
            example:
              'A works 4 days (efficiency 3), B works 6 days (efficiency 2): Work = 4×3:6×2 = 12:12 = 1:1',
          },
          {
            name: 'Pipes Positive-Negative',
            method: 'Inlet = positive rate, Outlet = negative rate, net = difference',
            example: 'Fill in 6h (+1/6), Empty in 8h (-1/8). Net = 1/6 - 1/8 = 1/24. Time = 24h',
          },
          {
            name: 'One Person Faster than Another',
            method: 'If A is n times faster, Time(A) = Time(B)/n',
            example: 'A is 3 times faster than B. B takes 18 days, A takes 6 days',
          },
        ],
      },

      {
        id: 7,
        title: 'Step-by-Step Solved Examples',
        examples: [
          {
            question:
              'A can complete a work in 20 days and B in 30 days. They worked together for 8 days, then A left. In how many more days will B complete the remaining work?',
            solution:
              "Step 1: Calculate individual rates\nA's rate = 1/20 per day\nB's rate = 1/30 per day\n\nStep 2: Calculate combined rate\nCombined rate = 1/20 + 1/30 = (3+2)/60 = 5/60 = 1/12 per day\n\nStep 3: Calculate work done in 8 days\nWork done = 8 × (1/12) = 8/12 = 2/3\n\nStep 4: Calculate remaining work\nRemaining work = 1 - 2/3 = 1/3\n\nStep 5: Calculate time for B to complete remaining work\nB's rate = 1/30 per day\nTime = (1/3) / (1/30) = (1/3) × 30 = 10 days\n\nAnswer: 10 more days",
            answer: '10 days',
          },
          {
            question:
              'A is twice as good a workman as B and together they finish a piece of work in 18 days. In how many days will A alone finish the work?',
            solution:
              "Step 1: Set up efficiency relationship\nLet B's efficiency = 1 unit/day\nA's efficiency = 2 units/day (twice as good)\n\nStep 2: Calculate combined efficiency\nCombined efficiency = 1 + 2 = 3 units/day\n\nStep 3: Calculate total work\nTotal work = Combined efficiency × Time\nTotal work = 3 × 18 = 54 units\n\nStep 4: Calculate A's time alone\nA's efficiency = 2 units/day\nTime = Total work / A's efficiency\nTime = 54 / 2 = 27 days\n\nAlternate Method:\nLet B complete work in 3x days, A in 3x/2 days\nTogether: 1/(3x/2) + 1/(3x) = 1/18\n2/(3x) + 1/(3x) = 1/18\n3/(3x) = 1/18\n1/x = 1/18\nx = 18\nA's time = 3×18/2 = 27 days\n\nAnswer: 27 days",
            answer: '27 days',
          },
          {
            question:
              '12 men can complete a work in 18 days. After 6 days, 4 more men join. In how many more days will the work be completed?',
            solution:
              'Step 1: Calculate total work in man-days\nTotal work = 12 men × 18 days = 216 man-days\n\nStep 2: Calculate work done in first 6 days\nWork done = 12 men × 6 days = 72 man-days\n\nStep 3: Calculate remaining work\nRemaining work = 216 - 72 = 144 man-days\n\nStep 4: Calculate time with increased workforce\nNew workforce = 12 + 4 = 16 men\nTime = Remaining work / New workforce\nTime = 144 / 16 = 9 days\n\nAnswer: 9 more days',
            answer: '9 days',
          },
          {
            question:
              'A and B together can complete a work in 12 days. A alone can complete it in 20 days. In how many days can B alone complete the work?',
            solution:
              "Step 1: Calculate rates\n(A+B)'s rate = 1/12 per day\nA's rate = 1/20 per day\n\nStep 2: Calculate B's rate\nB's rate = (A+B)'s rate - A's rate\nB's rate = 1/12 - 1/20\n\nStep 3: Find common denominator (LCM of 12, 20 = 60)\nB's rate = 5/60 - 3/60 = 2/60 = 1/30 per day\n\nStep 4: Calculate B's time\nTime = 1 / (B's rate) = 1 / (1/30) = 30 days\n\nAnswer: 30 days",
            answer: '30 days',
          },
          {
            question:
              'A pipe can fill a tank in 15 hours. Due to a leak at the bottom, it takes 20 hours to fill the tank. In how much time can the leak empty the full tank?',
            solution:
              "Step 1: Calculate rates\nPipe's filling rate = 1/15 per hour (positive)\nWith leak, filling rate = 1/20 per hour\n\nStep 2: Calculate leak's emptying rate\nLeak's rate = Pipe's rate - Actual filling rate\nLeak's rate = 1/15 - 1/20\n\nStep 3: Find common denominator (LCM of 15, 20 = 60)\nLeak's rate = 4/60 - 3/60 = 1/60 per hour (emptying)\n\nStep 4: Calculate time to empty full tank\nTime = 1 / (1/60) = 60 hours\n\nAnswer: 60 hours",
            answer: '60 hours',
          },
        ],
      },

      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Adding times instead of adding rates',
            correction: 'NEVER add times directly. Always add rates: 1/a + 1/b, then find time',
          },
          {
            mistake: 'Forgetting to convert efficiency ratio to time ratio',
            correction:
              'Efficiency and time are inversely proportional. If efficiency 2:3, time ratio is 3:2',
          },
          {
            mistake: 'Using wrong formula for remaining work',
            correction: 'Remaining work = 1 - Work done, not just subtracting times',
          },
          {
            mistake: 'Not considering work as unity (1)',
            correction: 'Always take complete work as 1, then calculate fractions',
          },
          {
            mistake: 'Wrong sign in pipes and cisterns',
            correction: 'Filling = positive rate, Emptying = negative rate. Net = algebraic sum',
          },
          {
            mistake: 'Confusing man-days with days',
            correction: 'Man-days is work unit. If men change, days must change proportionally',
          },
          {
            mistake: 'Forgetting to find common denominator when adding rates',
            correction: 'Always find LCM when adding fractions: 1/12 + 1/15 = 5/60 + 4/60 = 9/60',
          },
          {
            mistake: 'Assuming combined time = average of individual times',
            correction: 'Combined time is NOT (a+b)/2. Use formula: ab/(a+b)',
          },
        ],
      },

      {
        id: 9,
        title: 'Pipes and Cisterns (Special Case)',
        subtopics: [
          {
            name: 'Basic Concept',
            definition:
              'Pipes and cisterns is a special application of time-work where filling a tank = doing work, emptying = negative work',
            properties: [
              'Inlet pipe = Positive rate (adds water)',
              'Outlet pipe = Negative rate (removes water)',
              'Net rate = Sum of all rates (algebraically)',
              'Same formulas as time-work apply',
            ],
          },
          {
            name: 'Multiple Pipes',
            formula: 'Net rate = Sum of inlet rates - Sum of outlet rates',
            example:
              'Pipe A fills in 10h (+1/10), B fills in 12h (+1/12), C empties in 15h (-1/15). Net = 1/10 + 1/12 - 1/15 = 11/60',
            note: 'If net is positive, tank will fill. If negative, tank will empty',
          },
          {
            name: 'Common Problems',
            types: [
              'Time to fill with leak',
              'Time to empty with inlet open',
              'Both pipes open for some time, then one closes',
              'Pipes opening alternately',
            ],
          },
        ],
      },

      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Master the fundamental formula: Work = Rate × Time',
          'Always represent work as 1 (unity) for consistency',
          'Practice converting between rates and times quickly',
          "Remember: Rates ADD, Times DON'T add directly",
          'Use LCM method for complex problems - makes calculations easier',
          'For efficiency ratios, immediately convert to time ratios (inverse)',
          'Man-days problems: Use M₁D₁ = M₂D₂ principle',
          'In alternating work, calculate one complete cycle first',
          'For pipes: Positive for inlet, negative for outlet',
          'Always verify: Does the answer make logical sense?',
        ],
      },

      {
        id: 11,
        title: 'Exam Strategy',
        examTips: [
          'Time and Work questions are high-scoring - attempt them',
          'Time limit: 60-90 seconds per question',
          'Start by finding individual rates (1/time)',
          'For two workers together: Use quick formula ab/(a+b)',
          'Check if problem involves efficiency ratios - convert to time first',
          'Man-days problems are usually straightforward - do them quickly',
          'For alternating work, find pattern in 2-3 days',
          'Pipes problems: Watch signs carefully (+ for fill, - for empty)',
          'If stuck, assume total work = LCM of all times',
          'Verify: More workers → Less time, More efficient → Less time',
        ],
      },

      {
        id: 12,
        title: 'Advanced Concepts',
        subtopics: [
          {
            name: 'Work with Different Efficiencies',
            definition: 'When workers have different capabilities expressed as ratios',
            example:
              "A, B, C work in efficiency ratio 2:3:4. Together they complete in 10 days. Find A's time alone.",
            solution:
              "Combined efficiency = 2+3+4 = 9 units/day. Total work = 9×10 = 90 units. A's time = 90/2 = 45 days",
          },
          {
            name: 'Work, Wages, and Time',
            definition: 'Wages distributed based on work done',
            formula: 'Wages ∝ Work done ∝ Efficiency × Time',
            example:
              'A works 6 days (efficiency 2), B works 4 days (efficiency 3). Total wages $480. A gets: (12/24)×480 = $240',
          },
          {
            name: 'Time-varying Work Rate',
            definition: 'When efficiency changes during work',
            example:
              'A completes 2/5 work at normal rate, remaining at 50% efficiency. If normal time is 10 days, total time?',
            solution:
              'First part: (2/5)/(1/10) = 4 days. Remaining = 3/5. New rate = 0.5×(1/10) = 1/20. Time = (3/5)/(1/20) = 12 days. Total = 16 days',
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'Work = Rate × Time',
        'Rate = 1/Time (for complete work)',
        'Combined rate = 1/a + 1/b (rates add)',
        'Combined time = ab/(a+b) for two workers',
        'Man-days: M₁D₁ = M₂D₂ (work constant)',
        'Efficiency ratio inverse of time ratio',
        'Remaining work = 1 - Work done',
      ],

      mustRememberFacts: [
        'Work is always taken as 1 (unity)',
        'Rates are additive, times are NOT',
        'Efficiency ∝ 1/Time (inversely proportional)',
        'If A is twice efficient, A takes half the time',
        'More workers together → Less time',
        'Pipes: Filling (+), Emptying (-)',
        'Man-days remains constant for same work',
      ],

      quickShortcuts: [
        'Two workers: Time = (Time₁ × Time₂)/(Time₁ + Time₂)',
        'Efficiency A:B = 2:3 → Time ratio = 3:2',
        'Work in d days by A (time a) = d/a',
        'LCM method: Total work = LCM of all times',
        'Net rate in pipes = Σ(inlets) - Σ(outlets)',
      ],

      commonPatterns: [
        'Working together → Add rates',
        'One leaves after time → Calculate work done, then remaining',
        'Alternating work → Find 2-day cycle work',
        'Man-days → Use proportion M₁D₁ = M₂D₂',
        'Efficiency given → Convert to time ratio (inverse)',
      ],
    },
  },
  //11 Time, Speed and Distance
  {
    id: 11,
    topic: 'Time, Speed and Distance',
    description:
      'Master the relationship between Time, Speed, and Distance. This topic is fundamental for solving problems involving trains, boats, circular tracks, and races. Learn the concepts of relative speed and average speed.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Time, Speed and Distance',
        content:
          'Time, Speed, and Distance (TSD) deals with the motion of objects. It quantifies how fast an object moves, how far it travels, and how long it takes. This is a critical topic for all aptitude exams.',
        importance:
          'Questions from TSD appear in every competitive exam, including GATE, CAT, and Banking. Concepts here are also used in Physics and Data Interpretation.',
      },
      {
        id: 2,
        title: 'Basic Concepts',
        subtopics: [
          {
            name: 'Definitions',
            definition: 'Speed is the rate of change of position of an object in any direction.',
            formula: 'Speed = Distance / Time',
            example: 'If a car travels 100 km in 2 hours, Speed = 100/2 = 50 km/hr',
            properties: [
              'Distance is directly proportional to Speed (if Time is constant)',
              'Distance is directly proportional to Time (if Speed is constant)',
              'Speed is inversely proportional to Time (if Distance is constant)',
            ],
          },
          {
            name: 'Units and Conversion',
            description: 'Speed is usually measured in km/hr or m/s. Conversion is crucial.',
            types: [
              'km/hr to m/s: Multiply by 5/18',
              'm/s to km/hr: Multiply by 18/5',
              'Example: 72 km/hr = 72 * (5/18) = 20 m/s',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas and Relationships',
        formulas: [
          {
            category: 'Basic Formulas',
            items: [
              {
                name: 'Distance Formula',
                formula: 'Distance = Speed × Time',
                example: 'Speed 60 km/hr for 3 hours -> Distance = 180 km',
              },
              {
                name: 'Time Formula',
                formula: 'Time = Distance / Speed',
                example: 'Distance 200 km at 50 km/hr -> Time = 4 hours',
              },
            ],
          },
          {
            category: 'Average Speed',
            items: [
              {
                name: 'General Formula',
                formula: 'Avg Speed = Total Distance / Total Time',
                note: 'NEVER take the arithmetic mean (a+b)/2 unless time is constant.',
              },
              {
                name: 'Equal Distances',
                formula:
                  "If traveled at speeds 'a' and 'b' for equal distances: Avg Speed = 2ab / (a+b)",
                example: 'Go at 60, return at 40. Avg = (2*60*40)/(100) = 48 km/hr',
              },
              {
                name: 'Three Equal Distances',
                formula: 'Avg Speed = 3abc / (ab + bc + ca)',
              },
            ],
          },
          {
            category: 'Relative Speed',
            items: [
              {
                name: 'Same Direction',
                formula: 'Relative Speed = Speed A - Speed B',
                example: 'Car A (60) chases Car B (40). Relative Speed = 20 km/hr',
              },
              {
                name: 'Opposite Direction',
                formula: 'Relative Speed = Speed A + Speed B',
                example:
                  'Car A (60) and Car B (40) move towards each other. Relative Speed = 100 km/hr',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Motion',
        subtopics: [
          {
            name: 'Proportionality Rules',
            properties: [
              'If Distance is constant: S1/S2 = T2/T1 (Speed ratio is inverse of Time ratio)',
              'If Time is constant: S1/S2 = D1/D2 (Speed ratio matches Distance ratio)',
              'If Speed is constant: D1/D2 = T1/T2 (Distance ratio matches Time ratio)',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of TSD Problems',
        subtopics: [
          {
            name: 'Type 1: Trains',
            definition: 'Problems involving length of trains crossing objects.',
            properties: [
              'Crossing a pole/man: Distance = Length of Train',
              'Crossing a platform/bridge: Distance = Length of Train + Length of Platform',
              'Crossing another train: Distance = L1 + L2 (Always add lengths)',
            ],
            example: 'Train (100m) crosses pole in 10s. Speed = 100/10 = 10 m/s = 36 km/hr.',
          },
          {
            name: 'Type 2: Boats and Streams',
            definition: 'Motion in water considering stream speed.',
            formulas: [
              'Downstream Speed (with current) = U + V',
              'Upstream Speed (against current) = U - V',
              'Boat Speed in Still Water (U) = (Down + Up) / 2',
              'Stream Speed (V) = (Down - Up) / 2',
            ],
          },
          {
            name: 'Type 3: Races',
            definition: 'Linear or Circular races.',
            example: 'A beats B by 10 meters in a 100m race -> When A runs 100m, B runs 90m.',
            solution: 'Ratio of distances A:B = 100:90 = 10:9.',
          },
          {
            name: 'Type 4: Late/Early Concept',
            definition: 'Reaching a destination early or late due to speed change.',
            formula: 'Distance = [Product of Speeds / Difference of Speeds] × Time Difference',
            example: '6 km/hr late by 10 min, 8 km/hr early by 10 min. Time Diff = 20 min.',
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: '5/18 Conversion',
            method:
              'Remember 18 km/hr = 5 m/s. Multiples follow pattern (36->10, 54->15, 72->20, 90->25).',
            example: '72 km/hr is 4 times 18, so speed is 4 times 5 = 20 m/s.',
          },
          {
            name: 'Ratio Method for Late/Early',
            method:
              'If Speed ratio is a:b, Time ratio is b:a. Difference in time units = Actual time difference.',
            example: 'Speeds 3:4 -> Time 4:3. Diff 1 unit = 20 mins. Usual time = 4*20 = 80 mins.',
          },
          {
            name: 'Meeting Time',
            method: 'Time to meet = Initial Distance / Relative Speed.',
            example: 'Distance 100km. A(60) -> <- B(40). Time = 100/(60+40) = 1 hour.',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Two Trains Crossing',
            question:
              'Two trains 100m and 200m long cross each other running in opposite directions at 30 m/s and 20 m/s.',
            solution:
              'Total Distance = 100+200 = 300m. Relative Speed = 30+20 = 50 m/s. Time = 300/50 = 6 sec.',
          },
          {
            name: 'Pattern 2: Bullet Firing',
            question: 'Sound heard at intervals.',
            solution: 'Time taken by sound to travel distance = Time saved by person approaching.',
          },
          {
            name: 'Pattern 3: Stoppages',
            question: 'Speed without stoppage 60, with stoppage 40. Find stoppage time per hour.',
            formula: 'Time = (Difference in speed / Speed without stoppage) * 60 min',
            solution: '(60-40)/60 * 60 = 20 mins per hour.',
          },
        ],
      },
      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question:
              'A man covers a certain distance at X km/hr and comes back at Y km/hr. If he takes T hours in all, find distance.',
            solution:
              'Step 1: Understand concept\nThis is equal distance round trip.\n\nStep 2: Apply formula\nDistance = [Product of speeds / Sum of speeds] × Total Time\nDistance = (XY / X+Y) * T\n\nStep 3: Alternative\nUse Avg Speed * Time / 2 (since one way distance).',
            answer: 'Distance = T * (XY)/(X+Y)',
          },
          {
            question:
              'A thief is spotted by a policeman from a distance of 100m. Thief runs at 10km/hr, Police at 12km/hr. How far will thief run before being caught?',
            solution:
              'Step 1: Find Relative Speed\nRS = 12 - 10 = 2 km/hr.\n\nStep 2: Time to catch\nTime = Distance / RS = 0.1 km / 2 km/hr = 0.05 hours.\n\nStep 3: Distance by Thief\nDistance = Speed * Time = 10 * 0.05 = 0.5 km = 500m.',
            answer: '500 meters',
          },
        ],
      },
      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Adding speeds for Average Speed',
            correction: 'Never do (S1+S2)/2. Use Total Dist / Total Time.',
          },
          {
            mistake: 'Forgetting unit conversion',
            correction: "Don't use km/hr with seconds. Convert to m/s first.",
          },
          {
            mistake: 'Train crossing man vs platform',
            correction:
              'Man has negligible length (Dist = Train). Platform has length (Dist = Train + Platform).',
          },
          {
            mistake: 'Relative speed direction',
            correction: 'Opposite = Add speeds. Same = Subtract speeds.',
          },
        ],
      },
      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Draw diagrams for relative motion problems to visualize direction.',
          'Memorize the 18 table (18, 36, 54, 72, 90) for quick m/s conversions.',
          "In boat problems, remember 'Down' is always faster than 'Up'.",
          'For circular tracks, meeting time = LCM of individual lap times.',
          'Always check if time is in minutes or hours before calculating.',
        ],
      },
      {
        id: 11,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'General Motion',
            values: 'D = S × T | T = D / S | S = D / T',
          },
          {
            name: 'Relative Speed',
            values: 'Same Dir: S1 - S2 | Opp Dir: S1 + S2',
          },
          {
            name: 'Boats',
            values: 'Down = U+V | Up = U-V | Boat = (D+U)/2 | Stream = (D-U)/2',
          },
          {
            name: 'Average Speed',
            values: '2ab/(a+b) for equal distance',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'Distance = Speed × Time',
        'km/hr to m/s: × 5/18',
        'Avg Speed (Equal Dist) = 2xy/(x+y)',
        'Time to Meet = Distance / Relative Speed',
      ],
      mustRememberFacts: [
        'Opposite direction -> Add speeds',
        'Same direction -> Subtract speeds',
        'Train crossing pole -> Distance = Train Length',
        'Downstream is always faster than Upstream',
      ],
      quickChecks: [
        'Did I convert units?',
        'Is it a return journey (Total Dist = 2D)?',
        'For trains, did I add both lengths?',
        'Is the answer physically possible (e.g. speed not negative)?',
      ],
    },
  },
  //12 Boats and Streams
  {
    id: 12,
    topic: 'Boats and Streams',
    description:
      'Master the concepts of rowing against and with the flow. This topic is a specialized application of Time, Speed, and Distance involving relative speeds in water. Learn to calculate boat speed, stream speed, and travel times efficiently.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Boats and Streams',
        content:
          'Boats and Streams deals with the motion of a body in a moving medium (water). Unlike standard TSD problems where the ground is stationary, here the medium itself moves, affecting the effective speed of the boat or swimmer.',
        importance:
          'A crucial subset of Time, Speed & Distance for GATE, Banking, and SSC exams. It tests your understanding of relative velocity.',
      },
      {
        id: 2,
        title: 'Basic Terminology',
        subtopics: [
          {
            name: 'Stream / Current',
            definition: 'The moving water in a river.',
            notation: 'v = Speed of the stream/current',
          },
          {
            name: 'Still Water Speed',
            definition:
              'The speed of the boat or swimmer if the water were perfectly stationary (like a lake).',
            notation: 'u = Speed of boat in still water',
          },
          {
            name: 'Downstream',
            definition: 'Moving along the direction of the stream (Boat + Stream).',
            formula: 'Downstream Speed (D) = u + v',
            insight: "The water 'pushes' the boat, making it faster.",
          },
          {
            name: 'Upstream',
            definition: 'Moving against the direction of the stream (Boat - Stream).',
            formula: 'Upstream Speed (U) = u - v',
            insight: "The water 'resists' the boat, making it slower.",
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas',
        formulas: [
          {
            category: 'Finding Speeds',
            items: [
              {
                name: 'Boat Speed (u)',
                formula: 'u = (Downstream Speed + Upstream Speed) / 2',
                example: 'If Down=10, Up=6, then Boat Speed = (10+6)/2 = 8 km/hr',
              },
              {
                name: 'Stream Speed (v)',
                formula: 'v = (Downstream Speed - Upstream Speed) / 2',
                example: 'If Down=10, Up=6, then Stream Speed = (10-6)/2 = 2 km/hr',
              },
            ],
          },
          {
            category: 'Time and Distance',
            items: [
              {
                name: 'Time Taken',
                formula: 'Time = Distance / Effective Speed',
                note: 'Use (u+v) for Downstream, (u-v) for Upstream',
              },
              {
                name: 'Average Speed',
                formula: 'Avg Speed = (Upstream × Downstream) / Boat Speed in Still Water',
                note: 'For round trip: Avg = 2(u² - v²) / 2u = (u²-v²)/u',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Boat Motion',
        subtopics: [
          {
            name: 'Speed Relation',
            properties: [
              'Downstream Speed is ALWAYS greater than Upstream Speed.',
              'Boat speed (u) must be greater than Stream speed (v) to move upstream.',
              'If u < v, the boat will be swept away backward.',
            ],
          },
          {
            name: 'Time Relation',
            properties: [
              'Time taken Upstream > Time taken Downstream (for same distance).',
              'If speed doubles, time halves (Inverse proportion).',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Problems',
        subtopics: [
          {
            name: 'Type 1: Finding u and v',
            definition: 'Given Upstream and Downstream speeds or times.',
            example: 'Boat goes 6km upstream in 2 hrs and 6km downstream in 1 hr.',
            solution: 'Up Speed = 6/2 = 3. Down Speed = 6/1 = 6. u = (6+3)/2 = 4.5 km/hr.',
          },
          {
            name: 'Type 2: Average Speed Trip',
            definition: 'Round trip in a river.',
            example: 'Boat goes A to B and back. Still speed 10, Current 2.',
            solution: 'Down = 12, Up = 8. Avg Speed = (2*12*8)/(12+8) = 192/20 = 9.6 km/hr.',
            warning: 'Do not average 10 and 10.',
          },
          {
            name: 'Type 3: Distance Calculation',
            definition: 'Given total time for round trip.',
            formula: 'Distance = [Time * (u² - v²)] / 2u',
            example: 'Total time T for round trip. D = T * (SpeedProduct) / SumOfSpeeds',
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Ratio Method (Time)',
            method: 'If Time Ratio (Up:Down) = t1:t2, then Speed Ratio (u:v) = (t1+t2) : (t1-t2).',
            example: 'Takes twice as long to row up as down (Ratio 2:1). u:v = (2+1):(2-1) = 3:1.',
          },
          {
            name: 'Distance Formula Shortcut',
            method: 'If T is total time for round trip: D = T * (u² - v²) / 2u',
          },
          {
            name: 'Place of Meeting',
            method:
              'If two boats start towards each other, relative speed is (u1+v) + (u2-v) = u1 + u2. Stream speed cancels out.',
            example: 'Time to meet depends only on boat speeds, not stream.',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: "Pattern 1: 'n times' condition",
            question: 'A man takes twice as long to row up as to row down.',
            solution:
              'Speed Down = 2 * Speed Up. (u+v) = 2(u-v) -> u+v = 2u-2v -> u = 3v. Boat speed is 3x current speed.',
          },
          {
            name: 'Pattern 2: Lost Object',
            question: 'A raft floats down river (speed v). Boat starts t minutes later.',
            solution:
              "Raft travels distance = v * t. Relative speed of boat catching raft downstream is just 'u' (since both are in stream).",
            insight:
              "Stream speed adds to both, so relative speed is just boat's still water speed.",
          },
        ],
      },
      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question:
              'A boatman rows 48 km downstream in 4 hours and 30 km upstream in 5 hours. Find the speed of the current.',
            solution:
              'Step 1: Find Downstream Speed (D)\nD = Distance / Time = 48 / 4 = 12 km/hr\n\nStep 2: Find Upstream Speed (U)\nU = Distance / Time = 30 / 5 = 6 km/hr\n\nStep 3: Apply Formula for Current (v)\nv = (D - U) / 2\nv = (12 - 6) / 2 = 6 / 2 = 3 km/hr',
            answer: '3 km/hr',
          },
          {
            question:
              'A man can row 6 km/hr in still water. If the river flows at 2 km/hr, it takes him 3 hours to row to a place and come back. How far is the place?',
            solution:
              'Step 1: Determine Speeds\nu = 6, v = 2\nDownstream = 6+2 = 8 km/hr\nUpstream = 6-2 = 4 km/hr\n\nStep 2: Set up Time Equation\nLet distance be D.\nTime Down + Time Up = Total Time\nD/8 + D/4 = 3\n\nStep 3: Solve\n(D + 2D) / 8 = 3\n3D = 24 -> D = 8 km',
            answer: '8 km',
          },
        ],
      },
      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Confusing u (boat) and v (stream)',
            correction: 'Always remember u is the larger value. u - v must be positive.',
          },
          {
            mistake: 'Using Average Speed = (u+v)/2',
            correction:
              'Average speed for round trip is Harmonic Mean of Down and Up speeds: 2xy/(x+y).',
          },
          {
            mistake: 'Adding stream speed in Still Water problems',
            correction: "If problem says 'in still water', v is effectively 0.",
          },
          {
            mistake: 'Ignoring units',
            correction:
              "Ensure distance in km matches speed in km/hr. Don't mix minutes and hours.",
          },
        ],
      },
      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Always calculate Downstream (u+v) and Upstream (u-v) first.',
          'If u and v are unknown, use variables x and y.',
          'Check validity: Boat speed must be > Stream speed.',
          'Memorize the ratio trick: Time ratio a:b -> Speed ratio (a+b):(a-b).',
          'Draw a simple line diagram for round trips.',
        ],
      },
      {
        id: 11,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Speeds',
            values: 'Down = u+v | Up = u-v | Boat = (D+U)/2 | Current = (D-U)/2',
          },
          {
            name: 'Time Ratios',
            values: 'If Time_Up = n * Time_Down, then u = v * (n+1)/(n-1)',
          },
          {
            name: 'Distance',
            values: 'D = (Total Time) * (u²-v²) / 2u',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'Downstream = u + v',
        'Upstream = u - v',
        'Boat Speed = (D + U) / 2',
        'Stream Speed = (D - U) / 2',
      ],
      mustRememberFacts: [
        'Downstream is always faster.',
        'Effective speed depends on direction.',
        'Round trip average is NOT boat speed.',
        'Time taken is inversely proportional to effective speed.',
      ],
      quickChecks: [
        'Is u > v?',
        'Did I convert minutes to hours?',
        'Is the downstream speed higher than upstream?',
        'Did I subtract v for upstream?',
      ],
    },
  },
  //13 Problems on Train
  {
    id: 13,
    topic: 'Problems on Train',
    description:
      'Master train problems - a specialized application of time, speed, and distance. Learn to solve problems involving trains crossing objects, platforms, bridges, tunnels, and other trains efficiently.',

    sections: [
      {
        id: 1,
        title: 'Introduction to Train Problems',
        content:
          'Train problems are a special category of time-speed-distance problems that involve calculating the time taken by trains to cross various objects or other trains. These problems require understanding of relative speed, length considerations, and distance-time relationships.',
        importance:
          'Train problems appear in 70% of quantitative aptitude tests. They are common in railway exams, banking exams, and are excellent applications of relative motion concepts',
      },

      {
        id: 2,
        title: 'Basic Concepts and Definitions',
        subtopics: [
          {
            name: 'Length of Train',
            definition:
              'The physical length of the train from the front (engine) to the back (last coach). This is a crucial measurement in train problems.',
            example: 'A train is 200 meters long means from front to back measures 200m',
            properties: [
              'Always measured in meters or kilometers',
              'Must be added to distance when train crosses objects',
              'Two trains crossing: both lengths matter',
              'Essential for calculating crossing time',
            ],
          },
          {
            name: 'Speed of Train',
            definition: 'The rate at which the train travels, usually given in km/h or m/s.',
            example: 'Train traveling at 72 km/h = 72 × 5/18 = 20 m/s',
            properties: [
              'Often needs conversion between km/h and m/s',
              '1 km/h = 5/18 m/s',
              '1 m/s = 18/5 km/h',
              'Speed determines time to cover distance',
            ],
          },
          {
            name: 'Stationary Objects',
            definition: "Objects that don't move: poles, trees, standing person, signal posts",
            example: 'Train crossing a pole, tree, or person standing',
            properties: [
              'Length of object = 0 (point object)',
              'Distance covered = Length of train only',
              'Time = Length of train / Speed of train',
              'No relative speed calculation needed',
            ],
          },
          {
            name: 'Platform/Bridge/Tunnel',
            definition:
              'Stationary structures with significant length that the train must cross completely',
            example: 'Platform 300m long, Bridge 500m long',
            properties: [
              'Have measurable length',
              'Total distance = Train length + Platform/Bridge length',
              'Train must cross its own length PLUS object length',
              'Stationary, so no relative speed',
            ],
          },
          {
            name: 'Moving Objects',
            definition:
              'Objects moving in same or opposite direction: another train, car, person walking/running',
            example: 'Two trains moving towards each other or in same direction',
            properties: [
              'Relative speed must be calculated',
              'Same direction: subtract speeds',
              'Opposite direction: add speeds',
              'Both lengths considered if both are trains',
            ],
          },
          {
            name: 'Relative Speed',
            definition: 'The speed of one object with respect to another moving object',
            formula: 'Same direction: |v₁ - v₂|, Opposite direction: v₁ + v₂',
            example: 'Train A at 60 km/h, Train B at 40 km/h same direction: Relative = 20 km/h',
            properties: [
              'Essential for two moving objects',
              'Determines how fast objects approach/separate',
              'Always use in train-to-train problems',
              'Changes based on direction',
            ],
          },
        ],
      },

      {
        id: 3,
        title: 'Important Conversions',
        formulas: [
          {
            category: 'Speed Conversions',
            items: [
              {
                name: 'km/h to m/s',
                formula: 'Speed in m/s = Speed in km/h × 5/18',
                example: '72 km/h = 72 × 5/18 = 20 m/s',
              },
              {
                name: 'm/s to km/h',
                formula: 'Speed in km/h = Speed in m/s × 18/5',
                example: '25 m/s = 25 × 18/5 = 90 km/h',
              },
              {
                name: 'Quick Conversion Trick',
                formula: 'To convert km/h to m/s: multiply by 5/18 (or divide by 3.6)',
                example: '54 km/h = 54 × 5/18 = 15 m/s',
              },
              {
                name: 'Why 5/18?',
                formula: '1 km/h = 1000m/3600s = 5/18 m/s',
                note: '1 km = 1000m, 1 hour = 3600 seconds',
              },
            ],
          },
        ],
      },

      {
        id: 4,
        title: 'Fundamental Formulas',
        formulas: [
          {
            category: 'Basic Train Formulas',
            items: [
              {
                name: 'Time to Cross a Pole/Point',
                formula: 'Time = Length of train / Speed of train',
                example: 'Train 150m long at 30 m/s crosses pole: Time = 150/30 = 5 seconds',
              },
              {
                name: 'Time to Cross a Platform/Bridge',
                formula: 'Time = (Length of train + Length of platform) / Speed',
                example: 'Train 200m at 20 m/s, Platform 300m: Time = (200+300)/20 = 25 seconds',
              },
              {
                name: 'Speed from Crossing Time',
                formula: 'Speed = Distance covered / Time taken',
                example: 'Train 180m crosses 220m platform in 20s: Speed = (180+220)/20 = 20 m/s',
              },
              {
                name: 'Length of Train',
                formula: 'Length = Speed × Time (when crossing pole)',
                example: 'Train crosses pole in 10s at 15 m/s: Length = 15 × 10 = 150m',
              },
            ],
          },
          {
            category: 'Two Trains - Same Direction',
            items: [
              {
                name: 'Relative Speed',
                formula: 'Relative Speed = Faster speed - Slower speed',
                example: 'Train A: 60 km/h, Train B: 45 km/h same direction: Relative = 15 km/h',
              },
              {
                name: 'Time to Cross (Same Direction)',
                formula: 'Time = (Length₁ + Length₂) / Relative Speed',
                example:
                  'Train A (120m, 60 km/h) passes Train B (180m, 45 km/h): Time = (120+180)/(60-45) = 300/15 km/h = 20 km = 72 seconds',
              },
              {
                name: 'Distance Formula',
                formula: 'Distance = (Length₁ + Length₂) when completely crossing',
                note: 'Faster train must cover combined length to completely overtake',
              },
            ],
          },
          {
            category: 'Two Trains - Opposite Direction',
            items: [
              {
                name: 'Relative Speed',
                formula: 'Relative Speed = Speed₁ + Speed₂',
                example: 'Train A: 60 km/h, Train B: 40 km/h opposite: Relative = 100 km/h',
              },
              {
                name: 'Time to Cross (Opposite Direction)',
                formula: 'Time = (Length₁ + Length₂) / Relative Speed',
                example:
                  'Train A (150m, 60 km/h) crosses Train B (150m, 40 km/h) opposite: Relative = 100 km/h = 250/9 m/s. Time = 300/(250/9) = 10.8s',
              },
              {
                name: 'Meeting Time/Distance',
                formula: 'If distance between them is D: Time to meet = D / Relative Speed',
                example: 'Two trains 200 km apart, speeds 60 & 40 km/h: Meet in 200/100 = 2 hours',
              },
            ],
          },
          {
            category: 'Special Cases',
            items: [
              {
                name: 'Train Crossing Moving Person/Object',
                formula: 'Time = Length of train / Relative Speed',
                example:
                  'Train 200m at 72 km/h crosses man walking 54 km/h same direction: Relative = 18 km/h = 5 m/s. Time = 200/5 = 40s',
              },
              {
                name: 'Train Crossing Tunnel',
                formula: 'Time = (Length of train + Length of tunnel) / Speed',
                example: 'Same as crossing a bridge/platform',
              },
              {
                name: 'Train Passing Platform vs Train Crossing Platform',
                formula:
                  'Passing: Train just clears platform. Crossing: Train completely goes over',
                note: 'Both use same formula: (L_train + L_platform) / Speed',
              },
            ],
          },
        ],
      },

      {
        id: 5,
        title: 'Problem Types and Methods',
        subtopics: [
          {
            name: 'Type 1: Train Crossing a Pole/Tree/Standing Person',
            definition: 'Train crosses a point object (zero length)',
            example: 'A train 180m long passes a pole in 9 seconds. What is the speed?',
            solution: 'Speed = Distance / Time = 180 / 9 = 20 m/s = 20 × 18/5 = 72 km/h',
            method: 'Distance = Length of train only. Use Speed = Distance/Time',
            keyPoint: 'Point objects have zero length',
          },
          {
            name: 'Type 2: Train Crossing a Platform/Bridge',
            definition: 'Train must cross its own length plus structure length',
            example: 'Train 150m long at 60 km/h crosses 350m platform. Time?',
            solution:
              'Total distance = 150 + 350 = 500m. Speed = 60 km/h = 60 × 5/18 = 50/3 m/s. Time = 500 / (50/3) = 30 seconds',
            method: 'Distance = Train length + Platform length. Convert speed if needed',
            keyPoint: 'Add both lengths',
          },
          {
            name: 'Type 3: Two Trains Moving in Same Direction',
            definition: 'Faster train overtaking slower train',
            example: 'Train A (200m, 60 km/h) overtakes Train B (150m, 40 km/h). Time to cross?',
            solution:
              'Relative speed = 60 - 40 = 20 km/h = 50/9 m/s. Distance = 200 + 150 = 350m. Time = 350 / (50/9) = 63 seconds',
            method: 'Use relative speed = difference. Distance = sum of lengths',
            keyPoint: 'Subtract speeds in same direction',
          },
          {
            name: 'Type 4: Two Trains Moving in Opposite Direction',
            definition: 'Trains approaching each other',
            example:
              'Train A (120m, 72 km/h) meets Train B (180m, 54 km/h) opposite. Time to cross?',
            solution:
              'Relative speed = 72 + 54 = 126 km/h = 35 m/s. Distance = 120 + 180 = 300m. Time = 300 / 35 = 60/7 ≈ 8.57 seconds',
            method: 'Use relative speed = sum. Distance = sum of lengths',
            keyPoint: 'Add speeds in opposite direction',
          },
          {
            name: 'Type 5: Finding Length of Train',
            definition: 'Given time and speed, find train length',
            example: 'Train crosses pole in 12 seconds at 90 km/h. Find length.',
            solution: 'Speed = 90 km/h = 25 m/s. Length = Speed × Time = 25 × 12 = 300m',
            method: 'When crossing pole: Length = Speed × Time',
            keyPoint: 'Crossing pole gives direct length',
          },
          {
            name: 'Type 6: Finding Length of Platform',
            definition: 'Given train length, speed, and crossing time',
            example: 'Train 200m at 72 km/h crosses platform in 25 seconds. Find platform length.',
            solution:
              'Speed = 72 km/h = 20 m/s. Total distance = 20 × 25 = 500m. Platform = 500 - 200 = 300m',
            method: 'Total distance - Train length = Platform length',
            keyPoint: 'Subtract train length from total distance',
          },
          {
            name: 'Type 7: Train Crossing Moving Person',
            definition: 'Train crosses person walking/running',
            example: 'Train 300m at 90 km/h crosses man running 18 km/h same direction. Time?',
            solution: 'Relative speed = 90 - 18 = 72 km/h = 20 m/s. Time = 300 / 20 = 15 seconds',
            method: 'Use relative speed. Person has zero length',
            keyPoint: 'Person treated as point, use relative speed',
          },
          {
            name: 'Type 8: Train Passing vs Crossing',
            definition: 'Different wordings, same meaning',
            example: 'Train passing platform = Train crossing platform',
            solution: 'Both mean train completely clears the structure',
            method: 'Use (Train length + Structure length) / Speed',
            keyPoint: 'Passing = Crossing in train problems',
          },
        ],
      },

      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Quick km/h to m/s Conversion',
            method: 'Multiply by 5/18 or divide by 3.6',
            example: '90 km/h = 90 × 5/18 = 25 m/s (or 90 ÷ 3.6 = 25)',
          },
          {
            name: 'Quick m/s to km/h Conversion',
            method: 'Multiply by 18/5 or multiply by 3.6',
            example: '20 m/s = 20 × 18/5 = 72 km/h (or 20 × 3.6 = 72)',
          },
          {
            name: 'Memorize Common Conversions',
            method: '54 km/h = 15 m/s, 72 km/h = 20 m/s, 90 km/h = 25 m/s, 108 km/h = 30 m/s',
            example: 'These appear frequently in exams',
          },
          {
            name: 'Relative Speed Quick Check',
            method: 'Same direction → Subtract, Opposite → Add, both in same units',
            example: '60 km/h and 40 km/h: Same = 20, Opposite = 100',
          },
          {
            name: 'Point Object Distance',
            method: 'Distance = Train length only (not zero!)',
            example: "Don't forget to count train's own length when crossing pole",
          },
          {
            name: 'Two Trains Same Length',
            method: 'If both trains equal length L: Distance = 2L',
            example: 'Both 150m: Distance = 300m',
          },
          {
            name: 'Platform = 0 means Pole',
            method: 'Zero length platform is same as pole',
            example: 'If platform length not given, assume point crossing',
          },
          {
            name: 'Units Consistency Check',
            method: 'Always convert to same units before calculating',
            example: 'Length in meters, speed in m/s → Time in seconds',
          },
          {
            name: 'Opposite Direction = Faster Crossing',
            method: 'Relative speed higher in opposite direction, so less time',
            example: 'Same trains: opposite direction crosses faster than same direction',
          },
          {
            name: 'Length Finding Trick',
            method: 'If crosses pole in t₁ and platform in t₂: Platform length = Speed × (t₂ - t₁)',
            example: 'Pole in 10s, platform in 30s at 20 m/s: Platform = 20 × (30-10) = 400m',
          },
        ],
      },

      {
        id: 7,
        title: 'Step-by-Step Solved Examples',
        examples: [
          {
            question:
              'A train 150 meters long is running at 60 km/h. In how many seconds will it pass a man standing near the railway track?',
            solution:
              "Step 1: Identify the problem type\nTrain crossing a stationary point object (man)\n\nStep 2: Identify what's given\nLength of train = 150m\nSpeed = 60 km/h\nMan = point object (zero length)\n\nStep 3: Convert speed to m/s\nSpeed = 60 km/h = 60 × 5/18 = 50/3 m/s\n\nStep 4: Calculate distance to cover\nDistance = Length of train = 150m\n(Man has zero length)\n\nStep 5: Calculate time\nTime = Distance / Speed\nTime = 150 / (50/3) = 150 × 3/50 = 9 seconds\n\nAnswer: 9 seconds",
            answer: '9 seconds',
          },
          {
            question:
              'A train 200 meters long traveling at 72 km/h crosses a platform in 25 seconds. What is the length of the platform?',
            solution:
              'Step 1: Identify given information\nLength of train = 200m\nSpeed = 72 km/h\nTime to cross platform = 25 seconds\n\nStep 2: Convert speed to m/s\nSpeed = 72 km/h = 72 × 5/18 = 20 m/s\n\nStep 3: Calculate total distance covered\nDistance = Speed × Time\nDistance = 20 × 25 = 500m\n\nStep 4: Find platform length\nTotal distance = Train length + Platform length\n500 = 200 + Platform length\nPlatform length = 500 - 200 = 300m\n\nStep 5: Verification\n(200 + 300) / 20 = 500 / 20 = 25 seconds ✓\n\nAnswer: 300 meters',
            answer: '300 meters',
          },
          {
            question:
              'Two trains of length 150m and 180m are running on parallel tracks at 60 km/h and 40 km/h in the same direction. In how much time will the faster train cross the slower one?',
            solution:
              'Step 1: Identify problem type\nTwo trains, same direction (overtaking)\n\nStep 2: List given information\nTrain A: Length = 150m, Speed = 60 km/h\nTrain B: Length = 180m, Speed = 40 km/h\nDirection: Same\n\nStep 3: Calculate relative speed\nRelative speed = Faster - Slower\nRelative speed = 60 - 40 = 20 km/h\n\nStep 4: Convert to m/s\nRelative speed = 20 km/h = 20 × 5/18 = 50/9 m/s\n\nStep 5: Calculate distance to cover\nDistance = Length of Train A + Length of Train B\nDistance = 150 + 180 = 330m\n\nStep 6: Calculate time\nTime = Distance / Relative Speed\nTime = 330 / (50/9) = 330 × 9/50 = 59.4 seconds\n\nAnswer: 59.4 seconds',
            answer: '59.4 seconds',
          },
          {
            question:
              'A train 300m long crosses a man walking at 5 km/h in the opposite direction in 10 seconds. What is the speed of the train?',
            solution:
              "Step 1: Identify problem type\nTrain crossing moving person in opposite direction\n\nStep 2: List given information\nTrain length = 300m\nMan's speed = 5 km/h (opposite direction)\nTime = 10 seconds\n\nStep 3: Calculate relative speed\nLet train speed = v km/h\nRelative speed = v + 5 km/h (opposite direction)\n\nStep 4: Convert to m/s\nRelative speed = (v + 5) × 5/18 m/s\n\nStep 5: Use time-distance formula\nTime = Distance / Relative Speed\n10 = 300 / [(v + 5) × 5/18]\n\nStep 6: Solve for v\n10 × (v + 5) × 5/18 = 300\n(v + 5) × 50/18 = 300\n(v + 5) = 300 × 18/50\n(v + 5) = 108\nv = 103 km/h\n\nAnswer: 103 km/h",
            answer: '103 km/h',
          },
          {
            question:
              'A train passes a pole in 15 seconds and a platform 200m long in 35 seconds. What is the length of the train?',
            solution:
              "Step 1: Understand what's given\nTime to pass pole = 15 seconds\nTime to pass platform (200m) = 35 seconds\n\nStep 2: Set up equations\nLet length of train = L meters\nLet speed = v m/s\n\nWhen crossing pole:\nL / v = 15  →  L = 15v ... (1)\n\nWhen crossing platform:\n(L + 200) / v = 35  →  L + 200 = 35v ... (2)\n\nStep 3: Solve for L\nSubstitute (1) into (2):\n15v + 200 = 35v\n200 = 35v - 15v\n200 = 20v\nv = 10 m/s\n\nStep 4: Find length\nL = 15v = 15 × 10 = 150m\n\nStep 5: Verification\nPole: 150/10 = 15s ✓\nPlatform: (150+200)/10 = 350/10 = 35s ✓\n\nAnswer: 150 meters",
            answer: '150 meters',
          },
        ],
      },

      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Forgetting to add train length when crossing platform',
            correction: 'Distance = Train length + Platform length, NOT just platform length',
          },
          {
            mistake: 'Not converting km/h to m/s (or vice versa)',
            correction: 'Always check units match. Use 1 km/h = 5/18 m/s conversion',
          },
          {
            mistake: 'Adding speeds in same direction instead of subtracting',
            correction: 'Same direction: Subtract speeds. Opposite direction: Add speeds',
          },
          {
            mistake: 'Treating pole crossing as zero distance',
            correction: 'Pole has zero length, but train must still cover its OWN length',
          },
          {
            mistake: 'Forgetting to consider both train lengths',
            correction: 'When two trains cross: Distance = Length₁ + Length₂',
          },
          {
            mistake: 'Using wrong relative speed formula',
            correction: 'Check direction: Same → Subtract, Opposite → Add',
          },
          {
            mistake: "Confusing 'passing' with just reaching",
            correction: "'Passing' or 'crossing' means completely clearing, use full lengths",
          },
          {
            mistake: 'Not converting to same units before calculation',
            correction: 'Length in meters, speed should be in m/s (or both in km)',
          },
        ],
      },

      {
        id: 9,
        title: 'Important Concepts',
        subtopics: [
          {
            name: 'Complete Crossing',
            definition: 'Train completely crosses when its rear end clears the object',
            properties: [
              'Front reaches end + entire length passes = complete crossing',
              'Time includes movement of full train length',
              'Essential for understanding why we add lengths',
            ],
          },
          {
            name: 'Relative Motion',
            definition: 'Motion of one object as observed from another moving object',
            properties: [
              'Makes moving object problems simpler',
              'Convert to single moving object problem',
              'One object becomes stationary in relative frame',
              'Speeds add or subtract based on direction',
            ],
          },
          {
            name: 'Why Add Lengths?',
            definition: 'When two trains cross, both must clear each other completely',
            example:
              'Train A (100m) and Train B (150m): Front of A must travel past rear of B = 100m + 150m = 250m',
            note: 'Visualize: As they pass, combined length must be covered',
          },
        ],
      },

      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Always draw a diagram for complex problems - visualize the scenario',
          'Memorize speed conversions: 54 km/h = 15 m/s, 72 km/h = 20 m/s, 90 km/h = 25 m/s',
          'Check units consistency first before any calculation',
          'For two trains: Note direction FIRST, then choose relative speed formula',
          'Point objects (pole, person, tree) have ZERO length, but train still travels its length',
          'Platform/bridge problems: Always add both lengths',
          'Practice with both km/h and m/s - exams test both',
          'Remember: Speed in m/s, length in meters → Time in seconds',
          'Opposite direction crossing is FASTER than same direction',
          'Verify answer: Does it make logical sense?',
        ],
      },

      {
        id: 11,
        title: 'Exam Strategy',
        examTips: [
          'Train problems are high-scoring - attempt them confidently',
          'Time limit: 60-90 seconds per question',
          'Identify problem type first: Pole? Platform? Two trains?',
          'Check if same or opposite direction for two-train problems',
          "Convert speed immediately if needed - don't wait till end",
          'For pole crossing: Length = Speed × Time (direct formula)',
          'For platform: Remember to ADD lengths',
          'Draw quick sketch if problem seems confusing',
          'Check options: Sometimes working backwards is faster',
          'Verify: More relative speed → Less time to cross',
        ],
      },

      {
        id: 12,
        title: 'Advanced Problem Types',
        subtopics: [
          {
            name: 'Train Overtaking at Station',
            definition: 'Train overtakes another at platform/station',
            example:
              'Train A overtakes Train B while B is stationary at platform. Both 200m. A at 72 km/h. Time?',
            solution:
              "B stationary = relative speed is just A's speed. Distance = 200+200 = 400m. Speed = 72 km/h = 20 m/s. Time = 400/20 = 20s",
          },
          {
            name: 'Train Changing Speed',
            definition: 'Train travels at different speeds for different parts',
            example:
              'Train 200m crosses first half of 600m bridge at 60 km/h, second half at 40 km/h. Total time?',
            solution:
              'First: (200+300)/60 = 500/60 km = 30s. Second: 300/40 km = 27s. Total = 57s (approx)',
          },
          {
            name: 'Multiple Objects',
            definition: 'Train crosses multiple objects in sequence',
            example:
              'Train crosses pole in 10s, platform in 30s. Find: speed, train length, platform length',
            solution:
              'Let L=length, v=speed. L/v=10, (L+P)/v=30. Solve: v=L/10, L+P=30L/10. Gives relationships.',
          },
        ],
      },

      {
        id: 13,
        title: 'Special Formulas and Patterns',
        subtopics: [
          {
            name: 'Time Difference Pattern',
            formula: 'Platform length = Speed × (Time_platform - Time_pole)',
            example: 'Pole in 12s, platform in 32s at 25 m/s: Platform = 25 × (32-12) = 500m',
          },
          {
            name: 'Length Ratio Pattern',
            formula: 'If two trains with length ratio a:b, distance ratio same a:b',
            example: 'Lengths 2:3, total distance when crossing = 2x + 3x = 5x',
          },
          {
            name: 'Same Length Simplification',
            formula: 'Two trains same length L: Total distance = 2L always',
            example: 'Simplifies calculation, common in exam shortcuts',
          },
        ],
      },
    ],

    quickReference: {
      mustKnowFormulas: [
        'Time = Distance / Speed',
        'Crossing pole: Time = Length of train / Speed',
        'Crossing platform: Time = (L_train + L_platform) / Speed',
        'Two trains same direction: Relative speed = v₁ - v₂',
        'Two trains opposite: Relative speed = v₁ + v₂',
        'km/h to m/s: multiply by 5/18',
        'm/s to km/h: multiply by 18/5',
      ],

      mustRememberFacts: [
        'Pole/tree/person standing = point object (zero length)',
        'Distance for two trains = L₁ + L₂ (add both lengths)',
        'Same direction: subtract speeds (slower crossing)',
        'Opposite direction: add speeds (faster crossing)',
        'Always convert to same units before calculating',
        'Train must travel its own length even for pole',
        'Complete crossing = rear end clears the object',
      ],

      quickConversions: [
        '54 km/h = 15 m/s',
        '72 km/h = 20 m/s',
        '90 km/h = 25 m/s',
        '108 km/h = 30 m/s',
        '36 km/h = 10 m/s',
        '18 km/h = 5 m/s',
      ],

      commonPatterns: [
        'Pole crossing → Direct length calculation',
        'Platform crossing → Add both lengths',
        'Same direction → Slower (subtract speeds)',
        'Opposite direction → Faster (add speeds)',
        'Two equal lengths → Distance = 2L',
        'Person walking → Use relative speed',
      ],
    },
  },
  //14 Simple Interest
  {
    id: 14,
    topic: 'Simple Interest',
    description:
      "Master the fundamentals of Simple Interest - the linear growth of money. Learn how to calculate interest on principal, understand the relationship between Rate and Time, and solve 'doubling' problems using quick shortcuts.",
    sections: [
      {
        id: 1,
        title: 'Introduction to Simple Interest',
        content:
          'Simple Interest (SI) is the method of calculating interest where the interest is applied only to the original principal amount. Unlike Compound Interest, the interest amount remains constant for every time period.',
        importance:
          'Essential for Banking, SSC, and everyday financial literacy. It forms the base for understanding loans, installments, and Compound Interest.',
      },
      {
        id: 2,
        title: 'Basic Terminology',
        subtopics: [
          {
            name: 'Principal (P)',
            definition: 'The original sum of money borrowed or invested.',
            notation: 'P = Sum',
          },
          {
            name: 'Rate of Interest (R)',
            definition: 'The percentage of the principal charged as interest per year.',
            notation: 'R% per annum (p.a.)',
          },
          {
            name: 'Time (T)',
            definition: 'The duration for which the money is borrowed/invested.',
            notation: 'T (Must always be in Years)',
            conversion: 'If months: T/12. If days: T/365.',
          },
          {
            name: 'Amount (A)',
            definition: 'The total money paid back at the end of the time period.',
            formula: 'Amount = Principal + Simple Interest',
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas',
        formulas: [
          {
            category: 'Basic Calculation',
            items: [
              {
                name: 'Simple Interest Formula',
                formula: 'SI = (P × R × T) / 100',
                example: 'P=1000, R=10%, T=2. SI = (1000×10×2)/100 = 200',
              },
              {
                name: 'Amount Formula',
                formula: 'A = P + SI  OR  A = P(1 + RT/100)',
                example: 'A = 1000 + 200 = 1200',
              },
            ],
          },
          {
            category: 'Finding Variables',
            items: [
              {
                name: 'Find Principal',
                formula: 'P = (100 × SI) / (R × T)',
              },
              {
                name: 'Find Rate',
                formula: 'R = (100 × SI) / (P × T)',
              },
              {
                name: 'Find Time',
                formula: 'T = (100 × SI) / (P × R)',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Simple Interest',
        subtopics: [
          {
            name: 'Linear Growth',
            properties: [
              'Interest earned is the same every year.',
              'If SI for 1 year is X, SI for n years is nX.',
              'Amount grows in an Arithmetic Progression (AP).',
            ],
          },
          {
            name: 'Independence',
            properties: [
              'SI is independent of previous interest (unlike Compound Interest).',
              'Doubling P doubles SI. Doubling R doubles SI.',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Problems',
        subtopics: [
          {
            name: "Type 1: 'Becomes N times'",
            definition: 'Money multiples itself over time.',
            example: 'A sum doubles in 5 years. Find Rate.',
            solution: 'Interest = Principal (to double). SI = P. P = (P×R×5)/100 -> R = 20%.',
            formula: 'R × T = (N - 1) × 100',
          },
          {
            name: 'Type 2: Change in Rate/Time',
            definition: 'Calculating change in SI due to change in R or T.',
            example: 'If Rate increases by 2%, SI increases by 100.',
            solution: 'Extra SI = (P × Extra R × T) / 100.',
          },
          {
            name: 'Type 3: Installments (Debt)',
            definition: "Paying off 'Due Debt' in equal yearly payments.",
            formula: 'Annual Payment = (100 × Debt) / [100T + (R × T(T-1))/2]',
            note: 'Advanced topic mostly for SSC/Banking mains.',
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: "The 'N-1' Rule",
            method: 'If a sum becomes N times in T years: R × T = (N - 1) × 100.',
            example: 'Triples (3 times) in 10 years? R × 10 = (3-1)×100 = 200. R = 20%.',
          },
          {
            name: 'Comparing Time Periods',
            method: 'If sum becomes N1 times in T1 and N2 times in T2: (N1 - 1)/T1 = (N2 - 1)/T2.',
            example: 'Doubles in 5 years. Triples in? 1/5 = 2/x -> x = 10 years.',
          },
          {
            name: 'Effect of Rate Change',
            method: 'Directly calculate extra interest: Extra SI = P × (Change in R%) × T.',
            example: 'Rate increases 2% for 3 years on 1000. Extra SI = 1000 × 2% × 3 = 60.',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Different Amounts at Different Times',
            question: 'Sum becomes 800 in 3 years and 900 in 4 years.',
            solution:
              'Difference (1 year) = 900 - 800 = 100. This is SI for 1 year. P = 800 - (3×100) = 500.',
            insight: 'Difference in amounts is purely the interest for the gap period.',
          },
          {
            name: 'Pattern 2: Lending in parts',
            question: '1500 lent partly at 5% and rest at 8%. Total interest 300 in 3 years.',
            solution: 'Use Mixture and Alligation on the Rates.',
            method: 'Effective Rate = (300/3)/1500 * 100 = 6.66%. Mix 5% and 8% to get 6.66%.',
          },
        ],
      },
      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'At what rate percent per annum will a sum of money double in 8 years?',
            solution:
              "Step 1: Understand 'Double'\nAmount = 2P. Therefore, SI = P.\n\nStep 2: Apply Formula\nSI = (P × R × T) / 100\nP = (P × R × 8) / 100\n\nStep 3: Solve\n1 = 8R / 100\nR = 100 / 8 = 12.5%",
            answer: '12.5%',
          },
          {
            question: 'A sum amounts to $700 in 2 years and $1000 in 5 years. Find the sum.',
            solution:
              'Step 1: Find SI for the gap\nGap = 5 - 2 = 3 years.\nDiff in Amount = 1000 - 700 = $300.\nSo, SI for 3 years = $300.\n\nStep 2: Find SI for 1 year\nSI = 100.\n\nStep 3: Find Principal\nAmount in 2 years = P + 2×SI\n700 = P + 200\nP = 500.',
            answer: '$500',
          },
        ],
      },
      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Taking T in months directly',
            correction: 'Always convert months to years (divide by 12). 6 months = 0.5 years.',
          },
          {
            mistake: 'Confusing Amount with Interest',
            correction: "Amount = Principal + Interest. 'Amounts to' means A, not SI.",
          },
          {
            mistake: 'Calculating interest on interest',
            correction: 'That is Compound Interest. In SI, Principal remains fixed.',
          },
          {
            mistake: "Ignoring 'per annum' in Rate",
            correction: 'If rate is half-yearly, time must be in half-years (or rate halved).',
          },
        ],
      },
      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Memorize SI = RT% of P. (If R=5, T=4, SI is 20% of P).',
          "For 'N times' problems, always use the formula (N-1) × 100 / T.",
          'Check units of Time and Rate. They must match (usually per annum / years).',
          'Use Alligation for problems where money is split into two different schemes.',
        ],
      },
      {
        id: 11,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Standard',
            values: 'SI = PRT/100 | A = P + SI',
          },
          {
            name: 'Doubling/Tripling',
            values: 'Rate = 100(N-1)/T | Time = 100(N-1)/R',
          },
          {
            name: 'Effective Rate',
            values: 'Eff Rate = Total SI / Total Principal × 100',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'SI = (P*R*T)/100',
        'Principal = (100*SI)/(R*T)',
        'Amount = P + SI',
        'Doubling Time = 100/R',
      ],
      mustRememberFacts: [
        'SI is constant for every year.',
        'Time must be in Years.',
        'If sum becomes N times, Interest is (N-1) times Principal.',
      ],
      quickChecks: [
        'Did I convert months to years?',
        'Is the answer asking for Amount or Interest?',
        'If calculating for days, did I use 365?',
      ],
    },
  },
  //15 Compound Interest
  {
    id: 15,
    topic: 'Compound Interest',
    description:
      "Master the power of compounding - the 'eighth wonder of the world'. Learn how interest generates its own interest, leading to exponential growth. This topic covers formulas, half-yearly/quarterly compounding, and the critical differences between CI and SI.",
    sections: [
      {
        id: 1,
        title: 'Introduction to Compound Interest',
        content:
          'Compound Interest (CI) is the interest calculated on the initial principal as well as the accumulated interest of previous periods.',
        importance:
          'Vital for understanding investments, loans, population growth, and inflation. It is a high-weightage topic in banking and finance exams.',
      },
      {
        id: 2,
        title: 'What is Compound Interest?',
        subtopics: [
          {
            name: 'Definition',
            definition:
              'Interest on Interest. The addition of interest to the principal sum of a loan or deposit.',
            formula: 'CI = Amount - Principal',
            example:
              'If P=100, R=10%. Year 1 Interest=10. New Principal=110. Year 2 Interest=11 (10% of 110).',
            properties: [
              'Principal changes every year',
              'Interest keeps increasing every year',
              'Growth is Geometric (Exponential)',
              'For the 1st year, SI and CI are EQUAL (if compounded annually)',
            ],
          },
          {
            name: 'Compounding Frequencies',
            description: 'How often interest is added to principal.',
            types: [
              'Annually: Once a year (Standard)',
              'Half-yearly: Twice a year (Rate/2, Time*2)',
              'Quarterly: Four times a year (Rate/4, Time*4)',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas',
        formulas: [
          {
            category: 'Standard Formulas',
            items: [
              {
                name: 'Amount Formula (Annual)',
                formula: 'A = P [1 + (R/100)]^n',
                example: 'P=1000, R=10%, n=2. A = 1000(1.1)^2 = 1210',
              },
              {
                name: 'CI Formula',
                formula: 'CI = P * ([1 + (R/100)]^n - 1)',
                example: 'CI = 1210 - 1000 = 210',
              },
            ],
          },
          {
            category: 'Varying Frequencies',
            items: [
              {
                name: 'Half-Yearly Compounding',
                formula: 'A = P [1 + (R/200)]^(2n)',
                note: 'Rate becomes half, Time doubles.',
              },
              {
                name: 'Quarterly Compounding',
                formula: 'A = P [1 + (R/400)]^(4n)',
                note: 'Rate becomes one-fourth, Time quadruples.',
              },
            ],
          },
          {
            category: 'Difference between CI and SI',
            items: [
              {
                name: 'For 2 Years',
                formula: 'Diff = P (R/100)^2',
                example: 'Diff between CI and SI on 1000 at 10% for 2 yrs = 1000(10/100)^2 = 10',
              },
              {
                name: 'For 3 Years',
                formula: 'Diff = P (R/100)^2 * (3 + R/100)',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Compound Interest',
        subtopics: [
          {
            name: 'Geometric Growth',
            properties: [
              'Money grows in a Geometric Progression (GP).',
              "If a sum becomes 'k' times in 'n' years, it will become k^2 times in 2n years.",
              'Example: If sum doubles in 5 years, it becomes 4 times in 10 years (2^2), 8 times in 15 years (2^3).',
            ],
          },
          {
            name: 'Rule of 72',
            properties: [
              'Approximate time to double money = 72 / Rate%',
              'Example: At 12% interest, money doubles in approx 72/12 = 6 years.',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Problems',
        subtopics: [
          {
            name: 'Type 1: Finding Compound Interest',
            definition: 'Calculate CI given P, R, and T.',
            example: 'Find CI on 5000 at 10% for 2 years.',
            solution:
              '10% of 5000 = 500 (1st yr). New P=5500. 10% of 5500 = 550 (2nd yr). Total CI = 500+550 = 1050.',
            trick: 'Successive %: 10+10+(10*10/100) = 21%. 21% of 5000 = 1050.',
          },
          {
            name: 'Type 2: Difference Problems',
            definition: 'Given the difference between CI and SI, find Principal.',
            example: 'Diff between CI and SI for 2 years at 5% is 25. Find Sum.',
            solution: 'Diff % = R^2/100 % = 25/100 = 0.25%. If 0.25% = 25, then 100% = 10,000.',
            formula: 'P = Diff * (100/R)^2',
          },
          {
            name: 'Type 3: Multiplier Problems',
            definition: 'Sum becomes X times in Y years.',
            example: 'Sum becomes 3 times in 4 years. In how many years will it be 27 times?',
            solution: '3 times -> 4 years. 27 is 3^3. Time = Power * Years = 3 * 4 = 12 years.',
          },
          {
            name: 'Type 4: Installments',
            definition: 'Loan repayment in equal compound installments.',
            formula: 'P = x/(1+r) + x/(1+r)^2 ... where x is installment.',
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Effective Percentage Method',
            method: 'For 2 years: Net Rate = 2R + R^2/100.',
            example: 'R=10%. Net = 20 + 1 = 21%. CI = 21% of P.',
          },
          {
            name: "Pascal's Triangle (Ratio Method)",
            method: '2 Years: 2 : 1 | 3 Years: 3 : 3 : 1 | 4 Years: 4 : 6 : 4 : 1',
            example:
              'For 3 years at 10% on 1000:\n1. 10% of 1000 = 100\n2. 10% of 100 = 10\n3. 10% of 10 = 1\nResult: 3(100) + 3(10) + 1(1) = 331.',
          },
          {
            name: 'Fraction Method',
            method: 'Convert R% to fraction 1/x. Principal = x^n.',
            example:
              '16.66% = 1/6. For 2 years, assume P = 6^2 = 36 units. First year interest = 6. Second year = 6+1. Total CI = 13 units.',
          },
          {
            name: 'Digital Root',
            method: 'Check divisibility of options using digital sum of (1+R)^n.',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Rates differ each year',
            question: '1st year 4%, 2nd year 5%.',
            solution: 'A = P * (104/100) * (105/100).',
            shortcut: 'Net Rate = 4 + 5 + (4*5)/100 = 9.2%.',
          },
          {
            name: 'Pattern 2: Time is fraction',
            question: 'Time = 2 years 4 months (2 1/3 years) at 10%.',
            solution:
              'Calculate amount for 2 years normally. For remaining 1/3 year, take Rate = 1/3 of 10%.',
            formula: 'A = P(1+R/100)^2 * (1 + (1/3*R)/100).',
          },
        ],
      },
      {
        id: 8,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'Find the compound interest on $10,000 for 2 years at 10% per annum.',
            solution:
              'Step 1: Identify Method (Effective Rate is fastest)\nEffective Rate for 10% for 2 years = 10 + 10 + (100/100) = 21%.\n\nStep 2: Calculate\nCI = 21% of 10,000\nCI = (21/100) * 10,000 = 2100.',
            answer: '$2,100',
          },
          {
            question:
              'The difference between CI and SI on a sum for 2 years at 8% is $32. Find the sum.',
            solution:
              'Step 1: Formula\nDiff = P * (R/100)^2\n\nStep 2: Substitute\n32 = P * (8/100)^2\n32 = P * (64 / 10000)\n\nStep 3: Solve\nP = (32 * 10000) / 64\nP = 10000 / 2 = 5000.',
            answer: '$5,000',
          },
        ],
      },
      {
        id: 9,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Calculating for half-yearly without halving the rate',
            correction: 'Always divide annual rate by 2 for half-yearly, by 4 for quarterly.',
          },
          {
            mistake: 'Assuming CI - SI difference is zero for 1 year',
            correction:
              'True ONLY if compounded annually. If half-yearly, CI > SI even in 1st year.',
          },
          {
            mistake: 'Using Simple Interest formula for short periods',
            correction: "Even for 6 months, if it's CI, interest is added to principal.",
          },
          {
            mistake: 'Forgetting to subtract Principal from Amount',
            correction: 'Formula A = P(1+r)^n gives Amount. CI = A - P.',
          },
        ],
      },
      {
        id: 10,
        title: 'Practice Tips',
        tips: [
          'Memorize squares up to 30 and cubes up to 15 to solve (1.05)^3 quickly.',
          "Master the '2:1' and '3:3:1' method for integer rates.",
          "For 'Difference' problems, memorize the P(R/100)^2 formula.",
          "Always check if interest is compounded 'Annually', 'Half-yearly', or 'Quarterly'.",
          'Use approximation: CI is slightly more than SI. Calculate SI and guess the next higher option.',
        ],
      },
      {
        id: 11,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'General',
            values: 'A = P(1 + r/n)^(nt) | CI = A - P',
          },
          {
            name: 'Differences',
            values: '2yr Diff = P(r/100)^2 | 3yr Diff = P(r/100)^2(3 + r/100)',
          },
          {
            name: 'Growth',
            values: 'Population after n years = P(1 + R/100)^n | Depreciation = P(1 - R/100)^n',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'A = P(1 + R/100)^n',
        'Half-Yearly: R -> R/2, T -> 2T',
        '2 Year CI-SI Diff = P(R/100)^2',
        'Effective Rate (2 yr) = 2R + R²/100',
      ],
      mustRememberFacts: [
        'CI is always greater than SI (for T > 1).',
        'Growth is exponential.',
        'Money doubles in approx 72/R years.',
        'CI for 1st year = SI for 1st year (Annual).',
      ],
      quickChecks: [
        'Is the compounding frequency Annual or Half-yearly?',
        'Did I subtract Principal to get Interest?',
        'Is the answer slightly larger than the Simple Interest value?',
      ],
    },
  },
  // 16 Calendar
  {
    id: 16,
    topic: 'Calendar',
    description:
      "Master the art of calculating days and dates without looking at a calendar. Learn the concept of 'Odd Days', Leap Year rules, and the mathematical patterns that govern our Gregorian calendar system.",
    sections: [
      {
        id: 1,
        title: 'Introduction to Calendar',
        content:
          'The Calendar topic involves finding the day of the week for a given date, identifying leap years, and determining when a calendar repeats.  It is a purely mathematical system based on the solar year.',
        importance:
          'Frequent in finding days for historical dates, determining future deadlines, and solving logical reasoning puzzles in exams.',
      },
      {
        id: 2,
        title: 'Basic Concepts',
        subtopics: [
          {
            name: 'The Solar Year',
            definition: 'Time taken by Earth to orbit the Sun: approx 365 days and 6 hours.',
            types: [
              'Ordinary Year: 365 Days (52 Weeks + 1 Day)',
              'Leap Year: 366 Days (52 Weeks + 2 Days)',
            ],
          },
          {
            name: 'Odd Days',
            definition:
              'The number of days left over after converting total days into complete weeks.',
            formula: 'Odd Days = Total Days % 7',
            example: 'In 10 days: 10/7 = 1 week + 3 odd days.',
            significance: 'Odd days determine the shift in the day of the week from year to year.',
          },
          {
            name: 'Leap Year Rule',
            definition: 'A year is a leap year if it has 366 days (Feb has 29).',
            rules: [
              'General Rule: Divisible by 4 (e.g., 2004, 2024).',
              'Century Rule: Divisible by 400 (e.g., 1200, 1600, 2000).',
              'Exception: Century years divisible by 4 but NOT 400 are Ordinary (e.g., 1700, 1800, 1900).',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Key Values and Codes',
        formulas: [
          {
            category: 'Odd Days in Years',
            items: [
              {
                name: 'Ordinary Year',
                value: '1 Odd Day',
              },
              {
                name: 'Leap Year',
                value: '2 Odd Days',
              },
              {
                name: '100 Years',
                value: '5 Odd Days',
              },
              {
                name: '200 Years',
                value: '3 Odd Days',
              },
              {
                name: '300 Years',
                value: '1 Odd Day',
              },
              {
                name: '400 Years',
                value: '0 Odd Days (Cycle repeats)',
              },
            ],
          },
          {
            category: 'Day Codes',
            items: [
              { name: 'Sunday', value: '0' },
              { name: 'Monday', value: '1' },
              { name: 'Tuesday', value: '2' },
              { name: 'Wednesday', value: '3' },
              { name: 'Thursday', value: '4' },
              { name: 'Friday', value: '5' },
              { name: 'Saturday', value: '6' },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Properties of Calendar',
        subtopics: [
          {
            name: 'Repetition of Calendar',
            properties: [
              'Leap Year calendar repeats every 28 years.',
              'Ordinary Year (Leap+1) repeats every 6 years.',
              'Ordinary Year (Leap+2 or +3) repeats every 11 years.',
            ],
          },
          {
            name: 'Century Last Days',
            properties: [
              'The last day of a century cannot be Tuesday, Thursday, or Saturday.',
              'It can only be Monday, Wednesday, Friday, or Sunday.',
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Types of Problems',
        subtopics: [
          {
            name: 'Type 1: Finding Day of Week',
            definition: 'Calculate the day for any random date (e.g., Aug 15, 1947).',
            method: 'Sum of (Date + Month Code + Century Code + Year + Year/4) % 7.',
          },
          {
            name: 'Type 2: Reference Date',
            definition: 'If Jan 1, 2005 was Monday, what is Jan 1, 2006?',
            method: 'Add +1 for Ordinary Year, +2 for Leap Year.',
            example: 'Jan 1 2005 (Mon) -> Jan 1 2006 (Tue).',
          },
          {
            name: 'Type 3: Same Calendar Month',
            definition: 'Which months have the same calendar?',
            rule: 'Months where total odd days between them is 0.',
            example: 'Feb and Mar (in ordinary year), Apr and July.',
          },
        ],
      },
      {
        id: 6,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: "The '5310' Code",
            method: 'Remember century odd days: 100->5, 200->3, 300->1, 400->0.',
            example: '1900 is 1600+300. Odd days = 0 + 1 = 1.',
          },
          {
            name: 'Repetition Trick',
            method:
              'Add 28 for Leap Years. Add 11 generally (check for leap crossing). Add 6 if year is immediately after a leap year.',
            example: '2024 (Leap) repeats in 2052. 2025 (Leap+1) repeats in 2031.',
          },
          {
            name: 'Quick Month Odd Days',
            method: 'Jan(3), Feb(0/1), Mar(3), Apr(2), May(3), Jun(2)...',
            example: 'Months with 31 days = 3 odd. 30 days = 2 odd.',
          },
        ],
      },
      {
        id: 7,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'What was the day of the week on 15th August 1947?',
            solution:
              'Step 1: Break years\n1600 + 300 + 46 years + (Jan 1 to Aug 15 1947)\n\nStep 2: Calculate Century Odd Days\n1600 -> 0\n300 -> 1\n\nStep 3: Calculate 46 Years Odd Days\nLeap years in 46 = 11. Ordinary = 35.\nTotal = (11*2 + 35*1) = 57 odd days. 57%7 = 1 odd day.\n\nStep 4: Days in 1947 (Jan-Aug 15)\n3+0+3+2+3+2+3+15 = 31. 31%7 = 3 odd days.\n\nStep 5: Total Odd Days\n0 + 1 + 1 + 3 = 5.\n5 corresponds to Friday.',
            answer: 'Friday',
          },
          {
            question:
              'On 8th Dec 2007 Saturday falls. What day of the week was it on 8th Dec 2006?',
            solution:
              'Step 1: Check Year Type\n2007 is ordinary. 2006 is ordinary.\n\nStep 2: Move Backwards\nMoving back 1 year (Ordinary) -> Subtract 1 odd day.\nSaturday - 1 = Friday.',
            answer: 'Friday',
          },
        ],
      },
      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Assuming all century years (e.g., 1900) are leap years',
            correction: 'Centuries must be divisible by 400. 1900 was NOT a leap year.',
          },
          {
            mistake: 'Forgetting to include the Leap Day in calculation',
            correction:
              'Only add +2 odd days if February 29 falls strictly between the two reference dates.',
          },
          {
            mistake: 'Miscounting days',
            correction: "Remember '30 days hath September...'",
          },
        ],
      },
      {
        id: 9,
        title: 'Practice Tips',
        tips: [
          'Memorize the code: Sunday=0, Monday=1... Saturday=6.',
          "Master the 'mod 7' operation. 50 days is just 1 odd day.",
          'For dates in the same year, just sum the days of intervening months.',
          'Always calculate from the nearest Century Year (1600, 2000) as base 0.',
        ],
      },
      {
        id: 10,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Odd Days',
            values: 'Ordinary Year = 1 | Leap Year = 2',
          },
          {
            name: 'Centuries',
            values: '100yr=5 | 200yr=3 | 300yr=1 | 400yr=0',
          },
          {
            name: 'Repetition',
            values: 'Leap+0 -> +28 | Leap+1 -> +6 | Leap+2/3 -> +11',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'Odd Days = Total Days % 7',
        'Leap Year = (Year%4==0 && Year%100!=0) || (Year%400==0)',
      ],
      mustRememberFacts: [
        '100 years = 5 odd days',
        '400 years = 0 odd days',
        'Day 0 is Sunday (usually)',
        'Last day of century is never Tue, Thu, Sat',
      ],
      quickChecks: [
        'Is the year 1900 or 2000? (Check 400 rule)',
        'Does the period include Feb 29?',
        'Did I reset the count after every 7?',
      ],
    },
  },
  //17 Clock
  {
    id: 17,
    topic: 'Clock',
    description:
      'Master the geometry of time. Learn how to calculate the angle between hands, find the exact time when hands meet or are perpendicular, and solve problems involving gaining or losing time.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Clocks',
        content:
          'A clock is a circular dial divided into 60 minute spaces and 12 hour spaces.  The hands move in a circle, covering 360 degrees. Problems in this topic are essentially problems of circular motion and relative speed.',
        importance:
          'Frequent in finding angles at specific times, mirror images, and correcting faulty clocks in exams like GATE and CAT.',
      },
      {
        id: 2,
        title: 'Basic Concepts',
        subtopics: [
          {
            name: 'Structure of Dial',
            definition: 'The circumference is divided into 60 equal minute spaces.',
            values: [
              'Total Angle = 360°',
              'Angle of 1 minute space = 360° / 60 = 6°',
              'Angle of 1 hour space = 360° / 12 = 30°',
            ],
          },
          {
            name: 'Speed of Hands',
            description: 'How fast the hands move in degrees per minute.',
            values: [
              'Minute Hand (MH): Covers 360° in 60 mins -> Speed = 6° per min',
              'Hour Hand (HH): Covers 30° in 60 mins -> Speed = 0.5° per min',
              'Second Hand (SH): Covers 360° in 1 min -> Speed = 6° per sec',
            ],
          },
          {
            name: 'Relative Speed',
            definition: 'The rate at which the Minute Hand gains over the Hour Hand.',
            formula: 'Relative Speed = 6° - 0.5° = 5.5° per min (or 11/2 degrees per min)',
            significance: 'Crucial for calculating when hands meet.',
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas',
        formulas: [
          {
            category: 'Angle Calculation',
            items: [
              {
                name: 'Angle between Hands',
                formula: 'Angle = |(30 × H) - (5.5 × M)|',
                note: 'Where H is Hour and M is Minute. Take absolute value.',
                example: 'At 3:30 -> |30*3 - 5.5*30| = |90 - 165| = 75°',
              },
              {
                name: 'Reflex Angle',
                formula: 'Reflex Angle = 360° - Interior Angle',
                note: 'Used if asked for the larger outer angle.',
              },
            ],
          },
          {
            category: 'Special Positions',
            items: [
              {
                name: 'Coincidence (0°)',
                formula: 'Hands are together every 65 + 5/11 minutes.',
                frequency: '11 times in 12 hours (skip 12-1 gap), 22 times in 24 hours.',
              },
              {
                name: 'Opposite (180°)',
                formula: 'Hands are opposite every 65 + 5/11 minutes.',
                frequency: '11 times in 12 hours (skip 6-7 gap), 22 times in 24 hours.',
              },
              {
                name: 'Right Angle (90°)',
                frequency: '22 times in 12 hours, 44 times in 24 hours.',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Types of Problems',
        subtopics: [
          {
            name: 'Type 1: Finding Angle',
            definition: 'Given Time, find Angle.',
            example: 'Find angle at 4:20.',
            solution: 'Formula: |30(4) - 5.5(20)| = |120 - 110| = 10°.',
          },
          {
            name: 'Type 2: Finding Time',
            definition: 'Given Angle, find Time.',
            example: 'At what time between 4 and 5 are hands together?',
            formula: 'Time = (2/11) * (30H ± Angle)',
            solution: 'Angle=0. Time = (2/11) * (30*4) = 240/11 = 21 mins 49 sec past 4.',
          },
          {
            name: 'Type 3: Mirror Image',
            definition: 'Finding time seen in a mirror.',
            shortcut: 'Subtract given time from 11:60 (12:00) or 23:60 (24:00).',
            example: 'Mirror image of 3:15 -> 11:60 - 3:15 = 8:45.',
          },
          {
            name: 'Type 4: Incorrect Clock',
            definition: 'Clock gains or loses time.',
            example: 'Clock gains 5 mins every hour. Set right at 8am. What is true time at 1pm?',
            solution: 'Clock indicates 1 hour 5 mins for every 1 true hour.',
          },
        ],
      },
      {
        id: 5,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Meeting Time Shortcut',
            method: 'To find when hands meet between H and H+1: T = 60/11 * H.',
            example: 'Between 3 and 4: 60/11 * 3 = 180/11 = 16 4/11 min past 3.',
          },
          {
            name: 'Mirror Image Base',
            method: 'Use 11:60 for times < 12:00. Use 23:60 for times > 12:00.',
            example: 'Time 12:30 -> 23:60 - 12:30 = 11:30.',
          },
          {
            name: 'Angle Shortcut for M=5H',
            method: 'If Minutes = 5 * Hour (e.g., 4:20, 5:25, 6:30), Angle = Minute / 2.',
            example: 'Angle at 4:20 = 20/2 = 10°.',
          },
          {
            name: 'Angle Shortcut for M=4H',
            method: 'If Minutes = 4 * Hour (e.g., 4:16, 5:20), Angle = 2 * Minute.',
            example: 'Angle at 5:20 = 2 * 20 = 40°.',
          },
        ],
      },
      {
        id: 6,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Hands Coincide',
            question: 'At what time between 3 and 4 do hands coincide?',
            solution:
              'Relative distance to cover = 15 minute spaces. Time = 15 * (12/11) = 180/11 = 16 4/11 min.',
          },
          {
            name: 'Pattern 2: Hands Opposite',
            question: 'At what time between 4 and 5 are hands opposite?',
            solution:
              'Opposite means 30 min spaces apart. From 4 (20 min mark), add 30 -> 50 min mark. Time = 50 * (12/11) = 600/11 = 54 6/11 min.',
          },
          {
            name: 'Pattern 3: Right Angle',
            question: 'Right angle between 5 and 6.',
            solution: 'Two cases: (5*30 + 90) and (5*30 - 90). Solve for both.',
          },
        ],
      },
      {
        id: 7,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'Find the angle between the hour hand and minute hand at 3:40.',
            solution:
              'Step 1: Identify Formula\nAngle = |(30 × H) - (5.5 × M)|\n\nStep 2: Substitute values\nH = 3, M = 40\nAngle = |(30 × 3) - (5.5 × 40)|\n\nStep 3: Calculate\nAngle = |90 - 220| = |-130| = 130°.\nReflex Angle = 360 - 130 = 230°.',
            answer: '130°',
          },
          {
            question:
              'A clock is started at noon. By 10 minutes past 5, through what angle has the hour hand turned?',
            solution:
              'Step 1: Calculate Total Time\nFrom 12:00 to 5:10 is 5 hours and 10 minutes.\nTotal Minutes = 5*60 + 10 = 310 minutes.\n\nStep 2: Apply Hour Hand Speed\nSpeed = 0.5° per minute.\n\nStep 3: Calculate Angle\nAngle = 310 × 0.5 = 155°.',
            answer: '155°',
          },
        ],
      },
      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Ignoring Hour Hand movement',
            correction: 'At 3:30, Hour Hand is NOT at 3. It has moved halfway to 4.',
          },
          {
            mistake: 'Calculating Mirror Image of 12:xx using 11:60',
            correction: '11:60 - 12:30 gives negative. Use 23:60 for 12:xx times.',
          },
          {
            mistake: 'Confusing Time vs Angle',
            correction: "Don't mix up minutes (Time) with degrees (Angle). 1 min = 6°.",
          },
        ],
      },
      {
        id: 9,
        title: 'Practice Tips',
        tips: [
          'Visualize the clock dial. 15 mins = 90°, 30 mins = 180°.',
          'Memorize the 11/2 (5.5) relative speed constant.',
          'Remember that hands coincide 11 times in 12 hours (not 12 times).',
          "For 'Incorrect Clock', always use the ratio: (True Time / Incorrect Time).",
        ],
      },
      {
        id: 10,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'General',
            values: 'Angle = |30H - 5.5M| | Meeting Time = 60/11 * H',
          },
          {
            name: 'Coincidence',
            values: 'Occurs every 65 5/11 minutes',
          },
          {
            name: 'Speeds',
            values: 'Minute Hand: 6°/min | Hour Hand: 0.5°/min | Relative: 5.5°/min',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'Angle = |30H - 11/2 M|',
        'Mirror Time = 11:60 - Given Time',
        'Coincidence Time = (60/11) × Hour',
      ],
      mustRememberFacts: [
        'Hands meet 22 times a day.',
        'Hands are opposite 22 times a day.',
        'Hands are perpendicular 44 times a day.',
        'Hour hand moves 0.5 degrees per minute.',
      ],
      quickChecks: [
        'Did I take the absolute value of the angle?',
        'For times > 12, did I subtract from 23:60?',
        "Is the answer for 'Time' in mixed fraction format (e.g., 16 4/11)?",
      ],
    },
  },
  //18 Permutation and Combination
  {
    id: 18,
    topic: 'Permutation and Combination',
    description:
      "Master the art of counting. Understand the crucial difference between 'Arrangement' (Permutation) and 'Selection' (Combination). This topic forms the basis for Probability and appears frequently in competitive exams.",
    sections: [
      {
        id: 1,
        title: 'Introduction',
        content:
          "Permutation and Combination is about counting without actually listing everything.  The core question is: Does the order matter? If yes, it's Permutation. If no, it's Combination.",
        importance:
          'Essential for Probability, Data Interpretation, and Logical Reasoning. High weightage in banking and management exams.',
      },
      {
        id: 2,
        title: 'Fundamental Principles of Counting',
        subtopics: [
          {
            name: 'Multiplication Rule (AND)',
            definition:
              "If one job can be done in 'm' ways AND another in 'n' ways, both can be done in m × n ways.",
            example: '3 shirts and 2 pants -> 3 × 2 = 6 outfits.',
          },
          {
            name: 'Addition Rule (OR)',
            definition:
              "If a job can be done in 'm' ways OR another in 'n' ways (mutually exclusive), total ways = m + n.",
            example: 'Go to Delhi by Bus (3 ways) OR Train (2 ways) -> 3 + 2 = 5 ways.',
          },
          {
            name: 'Factorial (!)',
            definition: 'Product of first n natural numbers.',
            values: ['0! = 1', '1! = 1', '3! = 6', '5! = 120', '7! = 5040'],
          },
        ],
      },
      {
        id: 3,
        title: 'Permutations (Arrangements)',
        subtopics: [
          {
            name: 'Definition',
            definition: 'Arrangement of items where ORDER MATTERS.',
            formula: 'nPr = n! / (n-r)!',
            example: 'Arranging 3 people on 5 chairs.',
          },
          {
            name: 'Key Cases',
            types: [
              'Arranging n items in n places: n!',
              'Arranging with identical items: n! / (p! q! r!) (e.g., MISSISSIPPI)',
              'Circular Permutation: (n-1)!',
              'Circular (Necklace/Garland): (n-1)! / 2',
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Combinations (Selections)',
        subtopics: [
          {
            name: 'Definition',
            definition: 'Selection of items where ORDER DOES NOT MATTER.',
            formula: 'nCr = n! / [r! (n-r)!]',
            example: 'Selecting 3 players from a team of 11.',
            properties: ['nCr = nC(n-r)', 'nC0 = 1', 'nCn = 1', 'nC1 = n'],
          },
        ],
      },
      {
        id: 5,
        title: 'Key Formulas and Shortcuts',
        formulas: [
          {
            category: 'Basic Formulas',
            items: [
              {
                name: 'nPr',
                formula: 'n! / (n-r)!',
              },
              {
                name: 'nCr',
                formula: 'nPr / r!',
              },
              {
                name: 'Total Selections',
                formula: '2^n - 1 (Selecting at least one from n distinct items)',
              },
            ],
          },
          {
            category: 'Geometric Applications',
            items: [
              {
                name: 'Diagonals in Polygon',
                formula: 'n(n-3) / 2',
              },
              {
                name: 'Lines from n points',
                formula: 'nC2',
              },
              {
                name: 'Triangles from n points',
                formula: 'nC3',
              },
            ],
          },
          {
            category: 'Methods',
            items: [
              {
                name: 'Gap Method',
                description:
                  'Used when no two items should be together. Arrange others first, then fill gaps.',
                formula: 'Arrange m items: m!. Gaps available: m+1. Select k gaps: (m+1)Ck.',
              },
              {
                name: 'String/Bundle Method',
                description: 'Used when items MUST be together. Treat them as 1 unit.',
                formula: '(n-k+1)! × k!',
              },
            ],
          },
        ],
      },
      {
        id: 6,
        title: 'Types of Problems',
        subtopics: [
          {
            name: 'Type 1: Words',
            definition: 'Rearranging letters of a word.',
            example: "How many ways to arrange 'APPLE'?",
            solution: 'Total 5 letters. P is repeated 2 times. 5! / 2! = 60.',
          },
          {
            name: 'Type 2: Numbers',
            definition: 'Forming numbers with/without repetition.',
            example: '3 digit numbers from 1,2,3,4,5.',
            solution: 'No repetition: 5 × 4 × 3 = 60. With repetition: 5 × 5 × 5 = 125.',
          },
          {
            name: 'Type 3: Committees',
            definition: 'Selecting a group from men and women.',
            example: 'Select 2 men from 4, 2 women from 3.',
            solution: '4C2 × 3C2 = 6 × 3 = 18.',
          },
          {
            name: 'Type 4: Handshakes',
            definition: 'Total handshakes in a party.',
            formula: 'nC2 = n(n-1)/2',
          },
        ],
      },
      {
        id: 7,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: "In how many ways can the letters of the word 'LEADER' be arranged?",
            solution:
              "Step 1: Count total letters (n)\nn = 6\n\nStep 2: Check for repetitions\n'E' repeats 2 times.\n\nStep 3: Apply formula\nWays = n! / (repetitions!)\nWays = 6! / 2! = 720 / 2 = 360.",
            answer: '360',
          },
          {
            question:
              'A committee of 5 is to be formed from 6 men and 4 women. In how many ways can this be done if at least 2 women are included?',
            solution:
              'Step 1: List Cases (Total 5 members)\nCase A: 2W + 3M -> 4C2 × 6C3 = 6 × 20 = 120\nCase B: 3W + 2M -> 4C3 × 6C2 = 4 × 15 = 60\nCase C: 4W + 1M -> 4C4 × 6C1 = 1 × 6 = 6\n\nStep 2: Add all cases (OR condition)\nTotal = 120 + 60 + 6 = 186.',
            answer: '186',
          },
        ],
      },
      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Confusing nPr and nCr',
            correction:
              'Ask: Does order matter? Ranking/Seating = Permutation. Team/Group = Combination.',
          },
          {
            mistake: 'Applying circular permutation formula for semi-circles',
            correction:
              'Circular formula (n-1)! applies only to closed loops. Semi-circle is linear (n!).',
          },
          {
            mistake: 'Forgetting 0! is 1',
            correction: '0! is not 0. It is 1.',
          },
          {
            mistake: 'Double counting in handshakes',
            correction: 'Handshake A-B is same as B-A. Use Combination (nC2), not Permutation.',
          },
        ],
      },
      {
        id: 9,
        title: 'Practice Tips',
        tips: [
          'Memorize factorials up to 10!.',
          "Use Pascal's Triangle for nCr values.",
          "Always handle 'Together' items first (Bundle method), then 'Not Together' items (Gap method).",
          "For 'At least' problems, sometimes it's easier to find (Total - None).",
        ],
      },
      {
        id: 10,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Arrangements',
            values: 'Linear: n! | Circular: (n-1)! | Necklace: (n-1)!/2',
          },
          {
            name: 'Selection',
            values: 'r from n: nCr | nCr = n! / [r!(n-r)!]',
          },
          {
            name: 'Geometry',
            values: 'Diagonals: n(n-3)/2 | Lines: nC2 | Triangles: nC3',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'n! = n × (n-1) × ... × 1',
        'nCr = nC(n-r)',
        'Handshakes = n(n-1)/2',
        'Circular Arr = (n-1)!',
      ],
      mustRememberFacts: [
        'Order Matters = Permutation',
        "Order Doesn't Matter = Combination",
        'AND = Multiply',
        'OR = Add',
        '0! = 1',
      ],
      quickChecks: [
        'Is it a circular table?',
        'Are there identical items (divide by p!)?',
        "Did I handle the 'at least' condition correctly?",
      ],
    },
  },
  //19 Probability
  {
    id: 19,
    topic: 'Probability',
    description:
      'Master the mathematics of chance. Probability quantifies uncertainty, ranging from rolling dice to complex risk assessment. This topic builds directly upon Permutation & Combination.',
    sections: [
      {
        id: 1,
        title: 'Introduction',
        content: 'Probability is the measure of the likelihood of an event occurring.',
        importance:
          'Fundamental for Statistics, Machine Learning, Game Theory, and Risk Management.',
      },
      {
        id: 2,
        title: 'Basic Terminology',
        subtopics: [
          {
            name: 'Experiment',
            definition:
              'An action where the result is uncertain (e.g., tossing a coin, rolling a die).',
          },
          {
            name: 'Sample Space (S)',
            definition: 'The set of ALL possible outcomes of an experiment.',
            example: 'Rolling a die: S = {1, 2, 3, 4, 5, 6}. n(S) = 6.',
          },
          {
            name: 'Event (E)',
            definition: 'A subset of the Sample Space (outcomes we are interested in).',
            example: 'Getting an even number: E = {2, 4, 6}. n(E) = 3.',
          },
        ],
      },
      {
        id: 3,
        title: 'Key Formulas',
        formulas: [
          {
            category: 'Basic Probability',
            items: [
              {
                name: 'Definition Formula',
                formula: 'P(E) = n(E) / n(S)',
                note: 'Number of Favorable Outcomes / Total Number of Outcomes',
              },
              {
                name: 'Complementary Event',
                formula: 'P(not E) = 1 - P(E)',
                example: 'Probability of NOT winning = 1 - Probability of winning.',
              },
            ],
          },
          {
            category: 'Compound Events',
            items: [
              {
                name: 'Addition Rule (OR)',
                formula: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
                note: 'If mutually exclusive (cannot happen together), P(A ∩ B) = 0.',
              },
              {
                name: 'Multiplication Rule (AND)',
                formula: 'P(A ∩ B) = P(A) × P(B)',
                note: 'Only if events are Independent.',
              },
              {
                name: 'Conditional Probability',
                formula: 'P(A|B) = P(A ∩ B) / P(B)',
                note: 'Probability of A given B has already occurred.',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Types of Problems',
        subtopics: [
          {
            name: 'Type 1: Coins',
            definition: 'Tossing n coins.',
            properties: [
              'Total Outcomes = 2^n',
              '1 Coin: {H, T} (2)',
              '2 Coins: {HH, HT, TH, TT} (4)',
              '3 Coins: {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT} (8)',
            ],
          },
          {
            name: 'Type 2: Dice',
            definition: 'Rolling n dice.',
            properties: [
              'Total Outcomes = 6^n',
              '1 Die: 6 outcomes.',
              '2 Dice: 36 outcomes (Sum ranges from 2 to 12).',
            ],
          },
          {
            name: 'Type 3: Cards',
            definition: 'Drawing from a pack of 52.',
            properties: [
              '',
              'Total: 52 Cards',
              'Suits: Spades (Black), Clubs (Black), Hearts (Red), Diamonds (Red) - 13 each.',
              'Face Cards: King, Queen, Jack (Total 12).',
            ],
          },
          {
            name: 'Type 4: Balls/Urns',
            definition: 'Picking balls with/without replacement.',
            formula: 'Use Combinations (nCr).',
            example: 'Pick 2 Red from 5 Red, 3 Blue: 5C2 / 8C2.',
          },
        ],
      },
      {
        id: 5,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'At Least One Rule',
            method: 'P(At least one) = 1 - P(None)',
            example: 'Prob of at least one Head in 3 tosses = 1 - P(TTT) = 1 - 1/8 = 7/8.',
          },
          {
            name: 'OR means Add',
            method: "If problem says 'Either A or B', Add probabilities.",
            warning: 'Subtract overlap if not mutually exclusive.',
          },
          {
            name: 'AND means Multiply',
            method: "If problem says 'A and then B', Multiply probabilities.",
          },
          {
            name: 'Sum of 2 Dice Shortcut',
            method:
              'Distribution of sums (2 to 12) is symmetric: 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 ways.',
            example: 'Sum 7 has 6 ways. Sum 4 has 3 ways.',
          },
        ],
      },
      {
        id: 6,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question: 'Two dice are thrown. What is the probability that the sum is 7?',
            solution:
              'Step 1: Total Outcomes\nn(S) = 6 × 6 = 36.\n\nStep 2: Favorable Outcomes (Sum=7)\nPairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).\nn(E) = 6.\n\nStep 3: Probability\nP(E) = 6/36 = 1/6.',
            answer: '1/6',
          },
          {
            question:
              'A bag contains 5 Red and 3 Blue balls. If 2 balls are drawn at random, what is the probability that none is Red?',
            solution:
              "Step 1: Understand 'None is Red'\nMeans both are Blue.\n\nStep 2: Total Ways to pick 2\nn(S) = 8C2 = 28.\n\nStep 3: Favorable Ways (2 Blue from 3)\nn(E) = 3C2 = 3.\n\nStep 4: Probability\nP(E) = 3/28.",
            answer: '3/28',
          },
        ],
      },
      {
        id: 7,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: 'Confusing Replacement vs Non-Replacement',
            correction:
              'If replaced, total remains same. If not, total decreases by 1 for next pick.',
          },
          {
            mistake: "Forgetting 'At least'",
            correction: 'At least 1 includes 1, 2, 3... everything except 0.',
          },
          {
            mistake: 'Double Counting in Cards',
            correction:
              "King of Hearts is both a King and a Heart. Don't count it twice in P(King or Heart).",
          },
        ],
      },
      {
        id: 8,
        title: 'Practice Tips',
        tips: [
          'Master nCr calculation for ball problems.',
          'Memorize card deck structure (4 suits, 13 ranks).',
          'Use tree diagrams for conditional probability.',
          'Always check if answer is between 0 and 1.',
        ],
      },
      {
        id: 9,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'General',
            values: 'P(E) = Fav/Total | 0 ≤ P(E) ≤ 1',
          },
          {
            name: 'Rules',
            values: 'Add: P(A)+P(B)-P(A∩B) | Mult: P(A)×P(B)',
          },
          {
            name: 'Deck',
            values: '52 Cards | 26 Red, 26 Black | 12 Face Cards',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        'P(E) = n(E) / n(S)',
        'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
        'P(At Least One) = 1 - P(None)',
      ],
      mustRememberFacts: [
        'Probability is never > 1 or < 0.',
        'OR = Union (+) | AND = Intersection (×).',
        'Replacement keeps denominator same.',
        'Non-replacement reduces denominator.',
      ],
      quickChecks: [
        'Did I account for order (if dice/coins)?',
        "Did I subtract the intersection for 'OR' problems?",
        'Is the total count correct (e.g., 52 cards, 36 dice outcomes)?',
      ],
    },
  },
  //20 Data Interpretation
  {
    id: 20,
    topic: 'Data Interpretation',
    description:
      'Master the art of analyzing visual data. Data Interpretation (DI) tests your ability to extract, analyze, and interpret information presented in Tables, Bar Graphs, Line Charts, and Pie Charts. Speed and calculation hacks are key here.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Data Interpretation',
        content:
          'Data Interpretation is the process of reviewing data through some predefined processes which will help assign some meaning to the data and arrive at a relevant conclusion. It involves basic arithmetic (Percentage, Average, Ratio) applied to complex data structures.',
        importance:
          'High weightage in all competitive exams (Banking, CAT, GATE). It tests calculation speed rather than mathematical theory.',
      },
      {
        id: 2,
        title: 'Types of DI Charts',
        subtopics: [
          {
            name: 'Tables',
            definition: 'Data presented in rows and columns. ',
            approach:
              "Scan the headers first. Look for totals or averages. Be careful with units (e.g., 'in millions').",
          },
          {
            name: 'Bar Graphs',
            definition:
              'Data represented by rectangular bars where length is proportional to value. ',
            types: [
              'Simple Bar Graph',
              'Multiple/Grouped Bar Graph (Comparison of categories)',
              'Stacked Bar Graph (Parts of a whole)',
            ],
          },
          {
            name: 'Line Graphs',
            definition: 'Data points connected by lines, showing trends over time.',
            approach:
              'Focus on the slope. Steep slope = High growth/decline. Flat line = Stagnation.',
          },
          {
            name: 'Pie Charts',
            definition: 'Circular chart divided into sectors. Total circle = 360° = 100%.',
            formula: 'Value of Sector = (Angle / 360°) × Total Value',
            conversion: '100% = 360° | 10% = 36° | 1% = 3.6°',
          },
          {
            name: 'Caselets',
            definition: 'Data given in a paragraph form without visual charts.',
            approach: 'Read once, convert into a Table immediately, then solve questions.',
          },
        ],
      },
      {
        id: 3,
        title: 'Key Mathematical Tools',
        formulas: [
          {
            category: 'Percentage Calculations',
            items: [
              {
                name: 'Percentage Change',
                formula: '% Change = [(Final - Initial) / Initial] × 100',
                note: "Crucial for 'Growth Rate' questions.",
              },
              {
                name: 'A is what % of B',
                formula: '(A / B) × 100',
              },
              {
                name: 'A is what % more than B',
                formula: '[(A - B) / B] × 100',
              },
            ],
          },
          {
            category: 'Averages and Ratios',
            items: [
              {
                name: 'Average',
                formula: 'Sum of Observations / Number of Observations',
                shortcut: 'Use Assumed Mean method for large numbers.',
              },
              {
                name: 'Ratio',
                formula: 'A : B = A/B',
                note: 'Simplify fractions to compare ratios.',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: 'Analysis Techniques',
        subtopics: [
          {
            name: 'Visual Estimation',
            definition: 'Comparing values without calculation.',
            example:
              'In a Bar Graph, just compare heights to find the maximum year. In Line Graph, look for the steepest line segment for highest growth.',
          },
          {
            name: 'Approximation',
            definition: 'Rounding numbers to nearest convenient value.',
            example: '4892 / 121 can be approximated to 4900 / 120 or 4800 / 120 (approx 40).',
            rule: 'If options are far apart, approximate aggressively. If close, be precise.',
          },
          {
            name: 'The 10% and 1% Rule',
            definition: 'Finding percentages by shifting decimals.',
            example: 'To find 12% of 450: 10% is 45. 1% is 4.5 (so 2% is 9). Total = 45 + 9 = 54.',
          },
        ],
      },
      {
        id: 5,
        title: 'Shortcuts and Tricks',
        tricks: [
          {
            name: 'Degree to Percent Conversion',
            method: 'Degree / 3.6 = Percent. OR Percent × 3.6 = Degree.',
            example: '90° = 90/3.6 = 25%.',
          },
          {
            name: 'Comparing Fractions',
            method: 'Cross Multiplication: To compare A/B and C/D, compare AD and BC.',
            example: '5/7 vs 6/9 -> 45 vs 42. So 5/7 is greater.',
          },
          {
            name: 'Growth Rate Shortcut',
            method: 'If values double, growth is 100%. If they halve, decline is 50%.',
            example: '100 -> 150 is 50% increase.',
          },
        ],
      },
      {
        id: 6,
        title: 'Common Problem Patterns',
        subtopics: [
          {
            name: 'Pattern 1: Missing Data',
            definition: 'Tables with some empty cells. ',
            solution:
              'Use relationships (Total = Sum of parts) or ratios given in other columns to fill blanks first.',
          },
          {
            name: 'Pattern 2: Cumulative Frequency',
            definition: "Charts showing 'Up to X' or 'More than X'.",
            solution: 'Convert cumulative data to absolute data by subtracting consecutive values.',
          },
          {
            name: 'Pattern 3: Income-Expenditure',
            definition: 'Graphs showing Profit % or Income/Expense.',
            formula: 'Income = Expenditure + Profit. Profit % = (Profit/Exp) × 100.',
          },
        ],
      },
      {
        id: 7,
        title: 'Step-by-Step Examples',
        examples: [
          {
            question:
              "In a Pie Chart of total 3600 students, the 'Arts' sector is 72°. How many students are in Arts?",
            solution:
              'Step 1: Check relation\nTotal (360°) = 3600 students.\nSo, 1° = 10 students.\n\nStep 2: Calculate\n72° = 72 × 10 = 720 students.\n\nAlternative: 72° is 1/5th of 360°. So 1/5th of 3600 = 720.',
            answer: '720',
          },
          {
            question: 'Sales in 2020 = 400. Sales in 2021 = 500. Find % Growth.',
            solution:
              'Step 1: Find Difference\nDiff = 500 - 400 = 100.\n\nStep 2: Compare with Base (Initial)\n(100 / 400) × 100\n\nStep 3: Calculate\n1/4 × 100 = 25%.',
            answer: '25%',
          },
        ],
      },
      {
        id: 8,
        title: 'Common Mistakes to Avoid',
        mistakes: [
          {
            mistake: "Confusing 'Percent' and 'Percent Point'",
            correction:
              'Increase from 10% to 15% is a 50% increase (relative), but a 5 percentage point increase (absolute).',
          },
          {
            mistake: 'Ignoring the Scale',
            correction:
              "Check if axis starts at 0 or a non-zero number (break in axis). Check if values are in 'Thousands' or 'Millions'.",
          },
          {
            mistake: 'Wrong Base Year',
            correction: 'For % Growth, always use the Previous Year as the denominator.',
          },
        ],
      },
      {
        id: 9,
        title: 'Practice Tips',
        tips: [
          'Memorize reciprocal percentages (1/2=50% ... 1/12=8.33%).',
          'Practice adding numbers horizontally and vertically quickly.',
          "Always look at the options first. If options are 10, 12, 14, 80 - you don't need precise calculation.",
          'For Pie Charts, sum of % must be 100 and degrees must be 360.',
          "Read the instructions carefully for 'Note' sections in DI sets.",
        ],
      },
      {
        id: 10,
        title: 'Special Formulas Reference',
        sets: [
          {
            name: 'Conversions',
            values: 'Degree to %: × 5/18 | % to Degree: × 3.6',
          },
          {
            name: 'Growth',
            values: 'CAGR: (Final/Initial)^(1/n) - 1 | Simple Growth: (F-I)/I × 100',
          },
          {
            name: 'Profit',
            values: 'Profit % = (Income-Exp)/Exp × 100',
          },
        ],
      },
    ],
    quickReference: {
      mustKnowFormulas: [
        '% Change = (Diff/Initial) * 100',
        'Sector Value = (Angle/360) * Total',
        'Average = Total / Count',
      ],
      mustRememberFacts: [
        '1% = 3.6 degrees',
        'Visual inspection is faster than calculation.',
        'Approximation is your best friend in DI.',
      ],
      quickChecks: [
        'Did I check the units (Millions/Lakhs)?',
        'Did I use the correct denominator for percentage?',
        "Did I read the 'Note' below the chart?",
      ],
    },
  },
];

const ReasoningStudyMaterial = [
  {
    id: 1,
    topic: 'Number Series',
    description:
      'Master the art of identifying patterns and sequences in numbers - a fundamental topic for all reasoning exams.',
    sections: [
      {
        id: 1,
        title: 'Introduction to Number Series',
        content:
          'Number series questions require you to find the missing number or the wrong number in a sequence. The numbers follow a specific pattern based on mathematical operations.',
        importance: 'Very High - Appears in almost every competitive exam',
      },
      {
        id: 2,
        title: 'Common Patterns',
        patterns: [
          {
            name: 'Difference Series',
            description:
              'The difference between consecutive terms follows a pattern (constant, increasing, etc.)',
            example: '2, 5, 9, 14, 20 (+3, +4, +5, +6)',
          },
          {
            name: 'Product Series',
            description: 'Terms are obtained by multiplying previous term by a number',
            example: '3, 6, 12, 24, 48 (×2)',
          },
          {
            name: 'Squares/Cubes Series',
            description: 'Based on squares or cubes of numbers',
            example: '1, 4, 9, 16, 25 (n²)',
          },
          {
            name: 'Combination Series',
            description: 'Multiple operations involved (e.g., ×2 + 1)',
            example: '5, 11, 23, 47 (×2 + 1)',
          },
        ],
      },
      {
        id: 3,
        title: 'Example Questions',
        examples: [
          {
            question: 'Find the missing number: 4, 7, 12, 19, 28, ?',
            solution:
              'The pattern is of increasing difference:\n7-4 = 3\n12-7 = 5\n19-12 = 7\n28-19 = 9\nNext difference should be 11.\nAnswer = 28 + 11 = 39',
            answer: '39',
          },
          {
            question: 'Find the next term: 2, 6, 12, 20, 30, ?',
            solution:
              'Pattern 1: n(n+1) -> 1x2, 2x3, 3x4, 4x5, 5x6. Next is 6x7 = 42\nPattern 2: +4, +6, +8, +10. Next is +12. 30+12 = 42',
            answer: '42',
          },
        ],
      },
      {
        id: 4,
        title: 'Tips & Tricks',
        tips: [
          'Always check for difference first - it works 70% of the time',
          'If numbers grow very fast, check for multiplication or squares/cubes',
          'If numbers grow slowly, check for addition',
          'Look for twin series (alternate numbers)',
        ],
      },
    ],
  },
  //2 Analogy
  {
    id: 2,
    topic: 'Analogy - The Pattern Detective Game',
    tagline: '🎯 Think Like a Detective | Find Hidden Connections | Master Pattern Recognition',
    learningStyle: 'Interactive & Example-First Approach',

    welcome: {
      message: 'Welcome to the world of Analogy! 🎉',
      whatToExpect:
        "This isn't about math or calculations. It's about being a PATTERN DETECTIVE! You'll learn to spot hidden connections between words, numbers, letters, and shapes. Ready to become an Analogy Master? Let's dive in!",
      difficultyLevel: 'Beginner to Advanced',
      estimatedTime: '30-45 minutes to master basics',
    },

    quickStart: {
      title: '🚀 Quick Start: Solve This First!',
      challenge: 'Cat : Kitten :: Dog : ?',
      options: ['Puppy', 'Bone', 'Bark', 'Pet'],
      thinkAboutIt: 'Take 10 seconds... What do you think?',
      answer: 'Puppy',
      explanation:
        "Just like a Kitten is a baby Cat, a Puppy is a baby Dog! That's analogy - finding the SAME relationship in different pairs. Easy, right? Let's explore more! 🎯",
    },

    coreIdea: {
      title: '💡 The Big Idea (Super Simple!)',
      concept:
        'If A relates to B in a certain way, then C should relate to D in THE EXACT SAME WAY.',
      visual: 'A : B :: C : D',
      readAs: 'A is to B as C is to D',
      realLifeExample: {
        scenario: 'Think of it like this:',
        example1: 'Your Mom cooks in the Kitchen, Your Dad works in the Office',
        pattern: 'Person : Place they work',
        another: 'Mom : Kitchen :: Dad : Office ✓',
      },
      keyTakeaway:
        "⭐ It's not about the words being similar. It's about the RELATIONSHIP being the same!",
    },

    learningPath: [
      {
        level: 1,
        title: '🎮 Level 1: Word Analogy Basics',
        badge: 'Pattern Spotter',

        miniChallenge: {
          question: 'Before we start, try this:',
          puzzle: 'Hot : Cold :: Up : ?',
          hint: 'Think opposites! 🔄',
          answer: 'Down',
        },

        relationships: [
          {
            type: '🔄 Opposites (Antonyms)',
            easyToRemember: 'Things that are COMPLETELY DIFFERENT',
            examples: ['Happy : Sad', 'Day : Night', 'Big : Small', 'Love : Hate'],
            quickPractice: {
              question: 'Fast : Slow :: Tall : ?',
              answer: 'Short',
              oneLineTip: 'If first pair are opposites, second pair must also be opposites!',
            },
          },
          {
            type: '👯 Twins (Synonyms)',
            easyToRemember: 'Words that mean the SAME THING',
            examples: ['Happy : Joyful', 'Big : Large', 'Angry : Mad', 'Smart : Intelligent'],
            quickPractice: {
              question: 'Beautiful : Pretty :: Ugly : ?',
              answer: 'Hideous',
              oneLineTip: 'Same meaning = Synonym analogy',
            },
          },
          {
            type: '🧩 Part to Whole',
            easyToRemember: 'Piece → Complete Thing',
            examples: ['Wheel : Car', 'Page : Book', 'Finger : Hand', 'Key : Keyboard'],
            memoryTrick: "Is it PART OF the bigger thing? Then it's part-to-whole!",
            quickPractice: {
              question: 'Petal : Flower :: Branch : ?',
              answer: 'Tree',
              oneLineTip: 'Petal is part of Flower, Branch is part of Tree',
            },
          },
          {
            type: '👔 Job & Place',
            easyToRemember: 'Where does this person WORK?',
            examples: [
              'Doctor : Hospital',
              'Teacher : School',
              'Chef : Kitchen',
              'Pilot : Cockpit',
            ],
            trickToRemember: 'Think: WHERE do they spend their working day?',
            quickPractice: {
              question: 'Judge : Court :: Actor : ?',
              answer: 'Theater/Stage',
              oneLineTip: 'People work in specific places!',
            },
          },
          {
            type: '🔨 Tool & Job',
            easyToRemember: 'What do you USE this for?',
            examples: ['Knife : Cut', 'Pen : Write', 'Broom : Sweep', 'Hammer : Hit'],
            memoryTrick: "What's the ACTION this tool performs?",
            quickPractice: {
              question: 'Scissors : Cut :: Glue : ?',
              answer: 'Stick/Paste',
              oneLineTip: 'Tool → What it does!',
            },
          },
          {
            type: '🦁 Adult & Baby',
            easyToRemember: 'Grown-up → Its Baby',
            examples: ['Dog : Puppy', 'Cat : Kitten', 'Cow : Calf', 'Horse : Foal'],
            funFact: 'Animals have special names for their babies!',
            quickPractice: {
              question: 'Sheep : Lamb :: Duck : ?',
              answer: 'Duckling',
              oneLineTip: 'Baby animals have cute names!',
            },
          },
          {
            type: '🌳 Category & Example',
            easyToRemember: 'General Type → Specific Example',
            examples: ['Fruit : Apple', 'Vehicle : Car', 'Color : Red', 'Animal : Lion'],
            thinkOfItAs: 'Big group → One member of that group',
            quickPractice: {
              question: 'Vegetable : Carrot :: Flower : ?',
              answer: 'Rose (or any flower)',
              oneLineTip: 'Category first, then specific example',
            },
          },
          {
            type: '🏭 Product & Material',
            easyToRemember: "Final Product ← What it's MADE FROM",
            examples: ['Bread : Flour', 'Shirt : Cloth', 'Wine : Grapes', 'Paper : Wood'],
            askYourself: 'What raw material was used to make this?',
            quickPractice: {
              question: 'Butter : Milk :: Honey : ?',
              answer: 'Nectar/Bees',
              oneLineTip: "What's the source ingredient?",
            },
          },
        ],

        levelComplete: {
          message: "🎉 Level 1 Complete! You're now a WORD ANALOGY DETECTIVE!",
          skillsUnlocked: ['Spot relationships', 'Identify patterns', 'Match word pairs'],
          nextLevel: "Ready for numbers? Let's go! 🔢",
        },
      },

      {
        level: 2,
        title: '🔢 Level 2: Number Analogy',
        badge: 'Number Pattern Master',

        introduction: "Numbers have relationships too! But here, it's about MATH patterns.",

        miniChallenge: {
          question: 'Quick! Solve this:',
          puzzle: '2 : 4 :: 3 : ?',
          hint: 'What happened to 2 to become 4? 🤔',
          answer: '6 (doubled!)',
        },

        patterns: [
          {
            pattern: '✖️ Double It!',
            rule: 'Second number = First number × 2',
            examples: ['3 : 6 (3×2)', '5 : 10 (5×2)', '7 : 14 (7×2)'],
            practice: {
              question: '9 : 18 :: 12 : ?',
              answer: '24',
              solution: 'Pattern is doubling: 9×2=18, so 12×2=24',
            },
          },
          {
            pattern: '⬛ Square Power!',
            rule: 'Second number = First number²',
            examples: ['2 : 4 (2²)', '3 : 9 (3²)', '5 : 25 (5²)'],
            memorize: 'Squares up to 15: 1,4,9,16,25,36,49,64,81,100,121,144,169,196,225',
            practice: {
              question: '6 : 36 :: 8 : ?',
              answer: '64',
              solution: 'Pattern is squaring: 6²=36, so 8²=64',
            },
          },
          {
            pattern: '📦 Cube Power!',
            rule: 'Second number = First number³',
            examples: ['2 : 8 (2³)', '3 : 27 (3³)', '4 : 64 (4³)'],
            memorize: 'Cubes up to 10: 1,8,27,64,125,216,343,512,729,1000',
            practice: {
              question: '5 : 125 :: 6 : ?',
              answer: '216',
              solution: 'Pattern is cubing: 5³=125, so 6³=216',
            },
          },
          {
            pattern: '➕ Add Constant',
            rule: 'Second number = First number + Constant',
            examples: ['5 : 8 (add 3)', '10 : 13 (add 3)', '7 : 10 (add 3)'],
            trick: 'Find the difference: 8-5=3, then apply same',
            practice: {
              question: '12 : 17 :: 20 : ?',
              answer: '25',
              solution: 'Pattern is +5: 12+5=17, so 20+5=25',
            },
          },
          {
            pattern: '✖️➕ Multiply & Add',
            rule: 'Second = (First × n) + k',
            examples: ['2 : 7 (2×3+1)', '3 : 10 (3×3+1)', '4 : 13 (4×3+1)'],
            advanced: 'Find the formula by testing different operations',
            practice: {
              question: '5 : 16 :: 6 : ?',
              answer: '19',
              solution: 'Pattern is (n×3+1): 5×3+1=16, so 6×3+1=19',
            },
          },
        ],

        proTip: {
          title: '🎯 PRO TIP for Number Analogy',
          tips: [
            '✅ Always check SIMPLEST patterns first (double, triple, square)',
            '✅ If not obvious, try: square, cube, add, multiply',
            '✅ Calculate the relationship, then apply to second pair',
            '✅ Verify your answer by checking the pattern',
          ],
        },

        levelComplete: {
          message: '🎊 Level 2 Crushed! You can spot number patterns like a PRO!',
          skillsUnlocked: ['Number patterns', 'Mathematical relationships', 'Quick calculations'],
        },
      },

      {
        level: 3,
        title: '🔤 Level 3: Letter Analogy',
        badge: 'Alphabet Detective',

        introduction:
          "Letters follow SECRET patterns! Know the alphabet positions? Let's crack the code! 🕵️",

        alphabetCheatSheet: {
          forward: 'A=1, B=2, C=3, D=4, E=5, F=6...Z=26',
          reverse: 'A=26, B=25, C=24...Z=1',
          vowels: 'A=1, E=5, I=9, O=15, U=21',
          importantOnes:
            'Remember: J=10, K=11, L=12, M=13, N=14, O=15, P=16, Q=17, R=18, S=19, T=20',
        },

        patterns: [
          {
            pattern: '➡️ Next Letter',
            rule: 'Move to the next letter in alphabet',
            examples: ['A : B', 'C : D', 'M : N'],
            practice: {
              question: 'P : Q :: S : ?',
              answer: 'T',
              solution: 'Each moves to next letter',
            },
          },
          {
            pattern: '⏭️ Skip Letters',
            rule: 'Skip one or more letters',
            examples: ['A : C (skip B)', 'B : E (skip C,D)', 'A : D (skip B,C)'],
            practice: {
              question: 'A : D :: E : ? (skip 2)',
              answer: 'H',
              solution: 'Skip 2 letters: A→D, E→H',
            },
          },
          {
            pattern: '🔢 Position Number',
            rule: 'Letter paired with its position',
            examples: ['A : 1', 'C : 3', 'E : 5'],
            practice: {
              question: 'D : 4 :: G : ?',
              answer: '7',
              solution: 'G is 7th letter',
            },
          },
          {
            pattern: '🔄 Reverse Pattern',
            rule: 'Letters reverse order',
            examples: ['ABC : CBA', 'DOG : GOD', 'CAT : TAC'],
            practice: {
              question: 'STAR : RATS :: EVIL : ?',
              answer: 'LIVE',
              solution: 'Reverse the letters',
            },
          },
        ],

        quickTrick: {
          title: '⚡ Speed Trick: Alphabet Positions',
          method: 'Use your fingers! Count on fingers for quick position finding',
          example: "What's H? Count: A(1), B(2), C(3), D(4), E(5), F(6), G(7), H(8)",
        },

        levelComplete: {
          message: "🏆 Level 3 Done! You're an Alphabet Code Breaker!",
          skillsUnlocked: ['Letter patterns', 'Position calculations', 'Reverse thinking'],
        },
      },

      {
        level: 4,
        title: '🎨 Level 4: Figure Analogy',
        badge: 'Visual Pattern Expert',

        introduction:
          'Now we use our EYES! 👀 Figures rotate, flip, change... Can you spot what changes?',

        transformations: [
          {
            type: '🔄 Rotation',
            whatHappens: 'Figure turns by degrees (90°, 180°, 270°)',
            example: '⬆️ rotates 90° clockwise → ➡️',
            lookFor: 'Does it turn? By how much?',
            tip: 'Use your phone/book - physically rotate to see!',
          },
          {
            type: '🪞 Reflection (Mirror)',
            whatHappens: 'Figure flips horizontally or vertically',
            example: '◀️ flips horizontally → ▶️',
            lookFor: 'Is it a mirror image?',
            tip: 'Hold paper to mirror to check reflection',
          },
          {
            type: '📏 Size Change',
            whatHappens: 'Figure gets bigger or smaller',
            example: '● → ⚫ (enlargement)',
            lookFor: 'Same shape, different size?',
          },
          {
            type: '🎨 Shading/Color',
            whatHappens: 'Parts get filled or emptied',
            example: '○ → ● (filled)',
            lookFor: 'What parts are colored/shaded?',
          },
          {
            type: '➕ Addition/Removal',
            whatHappens: 'Elements added or removed',
            example: '△ → △△ (one more added)',
            lookFor: 'Count elements carefully',
          },
        ],

        solvingStrategy: {
          title: '🎯 How to Solve Figure Analogy',
          steps: [
            '1️⃣ Look at Figure 1 and Figure 2 carefully',
            '2️⃣ Ask: What CHANGED? (rotation, flip, size, color, number)',
            '3️⃣ Write down the change',
            '4️⃣ Apply SAME change to Figure 3',
            '5️⃣ Check all options - which one matches?',
          ],
        },

        levelComplete: {
          message: "🌟 All Levels Complete! You're now an ANALOGY MASTER!",
          totalSkills: ['Word relationships', 'Number patterns', 'Letter codes', 'Visual patterns'],
          finalBadge: '🏅 Master Pattern Detective',
        },
      },
    ],

    masterClass: {
      title: '🎓 Master Class: Advanced Tricks',

      tricks: [
        {
          trick: '⏱️ The 5-Second Rule',
          method: "If you can't find relationship in 5 seconds, SKIP and return later",
          why: "Don't waste time on one question. Come back with fresh mind!",
        },
        {
          trick: '🗣️ Say It Out Loud',
          method: "Verbalize the relationship: 'Doctor WORKS IN Hospital, so Teacher...'",
          why: 'Hearing it helps brain process better',
        },
        {
          trick: '✂️ Elimination Game',
          method: 'Cross out obviously wrong options first',
          why: 'Increases your chances even if you guess',
        },
        {
          trick: '🔄 Reverse Check',
          method: 'After finding answer, verify both pairs have SAME relationship',
          why: 'Catches your mistakes before submitting',
        },
        {
          trick: '📝 Write It Down',
          method: 'For complex patterns, write the relationship on paper',
          why: 'Visual aid helps clarity',
        },
      ],
    },

    commonTraps: {
      title: "⚠️ Don't Fall for These Traps!",

      traps: [
        {
          trap: 'Similarity Trap',
          wrong: 'Thinking Cat : Dog is analogy (both animals)',
          right: 'Need a RELATIONSHIP: Cat : Kitten (adult-young) ✓',
          remember: 'Similar ≠ Analogous',
        },
        {
          trap: 'Direction Trap',
          wrong: 'Part:Whole when it should be Whole:Part',
          example: 'Car : Wheel is WRONG if pattern is Flower : Petal (whole:part)',
          remember: 'Direction matters! Keep it consistent',
        },
        {
          trap: 'Overthinking Trap',
          wrong: 'Finding complex relationships when simple one exists',
          example: '2:4 could be 2×2 OR 2+2, but 2×2 (square) is more common',
          remember: 'Simplest explanation often correct',
        },
      ],
    },

    practiceChallenge: {
      title: '🎮 Final Boss Challenge',
      instruction: 'Can you solve these without help? Try now!',

      questions: [
        {
          id: 1,
          question: 'Clock : Time :: Thermometer : ?',
          options: ['Heat', 'Temperature', 'Measure', 'Degree'],
          answer: 'Temperature',
          explanation: 'Clock measures Time, Thermometer measures Temperature',
        },
        {
          id: 2,
          question: '6 : 36 :: 9 : ?',
          options: ['18', '27', '72', '81'],
          answer: '81',
          explanation: 'Pattern is square: 6²=36, 9²=81',
        },
        {
          id: 3,
          question: 'BDFI : EGIK :: HJLN : ?',
          options: ['KMOQ', 'IKMO', 'JLNP', 'MOQS'],
          answer: 'KMOQ',
          explanation: 'Each letter moves +2 positions',
        },
        {
          id: 4,
          question: 'Laugh : Cry :: Comedy : ?',
          options: ['Tragedy', 'Drama', 'Movie', 'Entertainment'],
          answer: 'Tragedy',
          explanation: 'Laugh opposite of Cry, Comedy opposite of Tragedy',
        },
        {
          id: 5,
          question: '4 : 11 :: 7 : ?',
          options: ['18', '20', '22', '49'],
          answer: '20',
          explanation: 'Pattern: n×2+3 → 4×2+3=11, 7×2+3=17... wait, checking: 7×3-1=20 ✓',
        },
      ],
    },

    examWarrior: {
      title: '⚔️ Exam Warrior Tips',

      beforeExam: [
        '📚 Revise relationship types list',
        '🔢 Memorize squares (1-20), cubes (1-10)',
        '🔤 Quick recall alphabet positions',
        '😴 Good sleep - brain needs rest!',
      ],

      duringExam: [
        '⏰ Time limit: 30-45 seconds per question',
        '✅ Easy ones first - build confidence',
        '🎯 Mark and move if stuck',
        '🔄 Always verify before submitting',
        "😌 Stay calm - you've practiced!",
      ],

      afterExam: [
        '📝 Note new relationship types you saw',
        '🤔 Analyze what you missed',
        '💪 Practice those weak areas',
        '🎉 Celebrate - you did great!',
      ],
    },

    funZone: {
      title: '🎪 Fun Zone - Did You Know?',

      facts: [
        "🧠 Your brain processes analogies in 0.5 seconds when you're expert!",
        '📖 Analogies appear in SAT, GRE, GMAT - worldwide!',
        '🎨 Leonardo da Vinci used analogies to solve problems',
        '🔬 Scientists discover new things using analogical thinking',
        "💡 Albert Einstein: 'Creativity is seeing what others see and thinking what no one else thought'",
      ],

      realWorldUse: [
        '🏥 Doctors use analogy to diagnose diseases',
        '💻 Programmers use patterns to write code',
        '🎨 Artists find inspiration through analogies',
        '📚 Learning new concepts by relating to known ones',
      ],
    },

    yourProgress: {
      title: '📊 Track Your Progress',

      checkList: [
        '☐ Can identify 10+ word relationships',
        '☐ Solve number patterns in <30 seconds',
        '☐ Know alphabet positions (A-Z)',
        '☐ Spot figure transformations',
        '☐ Solve 5 analogy questions in 3 minutes',
        '☐ Score 80%+ in practice tests',
      ],

      nextSteps: {
        beginner: 'Start with Level 1, spend 2 days on word analogy',
        intermediate: 'Practice mixed types, 20 questions daily',
        advanced: 'Solve previous year papers, time yourself',
        expert: 'Create your own analogy questions!',
      },
    },

    motivationalClose: {
      message: "🌟 You've Got This!",
      quote: "Every expert was once a beginner. The only difference? They didn't give up!",
      finalWords:
        "Analogy is not just an exam topic - it's a LIFE SKILL. You're learning to see connections, think logically, and solve problems creatively. These skills will help you EVERYWHERE! Now go practice and ACE those exams! 💪🚀",
      encouragement:
        "Remember: Practice makes permanent. The more you practice, the faster your brain recognizes patterns. You're training your brain to be SMARTER! Keep going! 🎯",
    },
  },
  //3 Letter And Symbol Series
  {
    id:3,
  },

  //4 Coding And Decoding
  {
  id:4,
  topic: "Coding-Decoding - The Secret Code Breaker",
  tagline: "🔐 Crack Secret Codes | Master Pattern Recognition | Become a Code Ninja",
  learningStyle: "Interactive & Challenge-Based Approach",
  
  welcome: {
    message: "Welcome to the Secret World of Codes! 🕵️",
    whatToExpect: "Ever wanted to be a spy? This is your chance! Coding-Decoding is like breaking secret messages. You'll learn to spot patterns, crack codes, and become a master decoder. It's fun, it's challenging, and it's one of the EASIEST ways to score marks in exams! Ready to unlock the secrets? 🔓",
    difficultyLevel: "Beginner to Expert",
    estimatedTime: "45-60 minutes to master"
  },
  
  quickStart: {
    title: "🚀 Crack Your First Code!",
    challenge: "If CAT is coded as DBU, how is DOG coded?",
    hint: "What happened to each letter? C→D, A→B, T→U... See the pattern? 🤔",
    options: ["EPH", "CPF", "DOH", "EPI"],
    answer: "EPH",
    explanation: "Each letter moves +1 position! C→D, A→B, T→U. So DOG becomes D→E, O→P, G→H = EPH! That's coding-decoding - finding and applying the pattern! 🎯"
  },
  
  coreIdea: {
    title: "💡 The Big Secret (It's Actually Simple!)",
    concept: "Coding = Hiding a word using a pattern. Decoding = Revealing the original word. The KEY is finding the PATTERN!",
    visual: "ORIGINAL → PATTERN → CODE",
    readAs: "Original word becomes Code using a Pattern",
    realLifeExample: {
      scenario: "Think of it like texting shortcuts:",
      example1: "You write 'LOL' instead of 'Laugh Out Loud'",
      pattern: "That's a code! Everyone who knows the pattern understands it",
      another: "In exams: APPLE → BQQMF (each letter +1). Same idea! 📱"
    },
    keyTakeaway: "⭐ Every code has a pattern. Find the pattern, crack ANY code!"
  },
  
  learningPath: [
    {
      level: 1,
      title: "🎮 Level 1: Letter Shifting - The Classic",
      badge: "Code Cadet",
      
      introduction: "The MOST common type! Letters move forward or backward in the alphabet. Master this, score easy marks! 💯",
      
      miniChallenge: {
        question: "Quick! Crack this:",
        puzzle: "If BOOK is coded as CPPL, what's the pattern?",
        hint: "Compare B→C, O→P, O→P, K→L 🔍",
        answer: "Each letter +1 position forward!"
      },
      
      patterns: [
        {
          pattern: "➡️ Forward Shift (+n)",
          rule: "Each letter moves FORWARD by n positions",
          examples: [
            "A → B (+1)",
            "A → C (+2)", 
            "CAT → DBU (+1)",
            "DOG → GRJ (+3)"
          ],
          trick: "Count how many steps the first letter moved. Apply same to all!",
          practice: {
            question: "If SUN is coded as TVQ (+2), decode XYZ",
            answer: "VWX",
            solution: "Each letter -2: X→V, Y→W, Z→X"
          }
        },
        {
          pattern: "⬅️ Backward Shift (-n)",
          rule: "Each letter moves BACKWARD by n positions",
          examples: [
            "C → B (-1)",
            "D → A (-3)",
            "CAT → BZS (-1)",
            "MOON → LJJK (-2)"
          ],
          trick: "If code comes BEFORE original in alphabet, it's backward shift!",
          practice: {
            question: "If LATE is coded as KZSD (-1), code RAIN",
            answer: "QZHM",
            solution: "Each letter -1: R→Q, A→Z, I→H, N→M"
          }
        },
        {
          pattern: "🔄 Mixed Shift (Alternating)",
          rule: "Odd positions +n, Even positions -n (or vice versa)",
          examples: [
            "CAR: C(+1)→D, A(-1)→Z, R(+1)→S = DZS",
            "DESK: D(+2)→F, E(-2)→C, S(+2)→U, K(-2)→I = FCUI"
          ],
          trick: "Check if even and odd letters shift differently!",
          practice: {
            question: "Pattern: 1st,3rd,5th +1 & 2nd,4th -1. Code: BAT",
            answer: "CZU",
            solution: "B+1=C, A-1=Z, T+1=U"
          }
        }
      ],
      
      proTip: {
        title: "⚡ Pro Tip: The Alphabet Trick",
        method: "Remember: A=1, Z=26. Quick mental alphabet helps!",
        shortcut: "If shift seems weird (like Z+2), it wraps around: Z→A→B"
      },
      
      levelComplete: {
        message: "🎉 Level 1 Complete! You're a Shifting Expert!",
        skillsUnlocked: ["Forward/Backward shifts", "Mixed patterns", "Quick decoding"],
        nextLevel: "Ready for number codes? Level 2 awaits! 🔢"
      }
    },
    
    {
      level: 2,
      title: "🔢 Level 2: Number Coding - Math Meets Letters",
      badge: "Number Ninja",
      
      introduction: "Letters become NUMBERS! A=1, B=2... or sometimes math happens! 🧮",
      
      miniChallenge: {
        question: "Decode this number code:",
        puzzle: "If A=1, B=2, C=3... what does 3-1-20 spell?",
        hint: "3=C, 1=A, 20=? (count to 20th letter) 📝",
        answer: "CAT"
      },
      
      patterns: [
        {
          pattern: "🔢 Direct Position (A=1, B=2...)",
          rule: "Each letter = its alphabetic position number",
          examples: [
            "A = 1",
            "B = 2",
            "Z = 26",
            "CAT = 3-1-20",
            "DOG = 4-15-7"
          ],
          memorize: "Remember: A=1, E=5, I=9, O=15, U=21, Z=26 (memorize these!)",
          practice: {
            question: "What number is HELLO?",
            answer: "8-5-12-12-15",
            solution: "H=8, E=5, L=12, L=12, O=15"
          }
        },
        {
          pattern: "🔄 Reverse Position (A=26, B=25...)",
          rule: "Each letter = position from END of alphabet",
          examples: [
            "A = 26",
            "B = 25",
            "Z = 1",
            "CAT = 24-26-7"
          ],
          trick: "Formula: Reverse position = 27 - Normal position",
          practice: {
            question: "In reverse, what's DOG?",
            answer: "23-12-20",
            solution: "D=27-4=23, O=27-15=12, G=27-7=20"
          }
        },
        {
          pattern: "➕ Position + Constant",
          rule: "Letter position + fixed number",
          examples: [
            "A(1) = 1+5 = 6",
            "B(2) = 2+5 = 7",
            "C(3) = 3+5 = 8"
          ],
          practice: {
            question: "If pattern is position×2, what's B?",
            answer: "4",
            solution: "B=2, 2×2=4"
          }
        },
        {
          pattern: "✖️ Position × Constant",
          rule: "Letter position multiplied by number",
          examples: [
            "A(1) = 1×3 = 3",
            "C(3) = 3×3 = 9",
            "E(5) = 5×3 = 15"
          ],
          practice: {
            question: "Pattern: position×2+1. Code for C(3)?",
            answer: "7",
            solution: "3×2+1 = 7"
          }
        }
      ],
      
      quickTrick: {
        title: "🎯 Speed Trick: Finger Counting",
        method: "Use fingers for quick position! Count A,B,C... on fingers",
        example: "What's G? Count 7 fingers = G is 7th letter!"
      },
      
      levelComplete: {
        message: "💯 Level 2 Crushed! Numbers are your friends now!",
        skillsUnlocked: ["Number-letter conversion", "Mathematical operations", "Quick calculations"],
        nextLevel: "Time for the TRICKY one - Opposite Letters! 🔄"
      }
    },
    
    {
      level: 3,
      title: "🔄 Level 3: Opposite Letters - Mirror Magic",
      badge: "Mirror Master",
      
      introduction: "The TRICKIEST but highest-scoring type! Letters swap with their alphabet opposites. A↔Z, B↔Y, C↔X... Mind-bending but awesome! 🪞",
      
      miniChallenge: {
        question: "Quick Test:",
        puzzle: "What's the opposite of A in the alphabet?",
        hint: "A is 1st from start, which letter is 1st from end? 🤔",
        answer: "Z"
      },
      
      patterns: [
        {
          pattern: "🪞 The Opposite Letter Code",
          rule: "A↔Z, B↔Y, C↔X, D↔W... (1st↔26th, 2nd↔25th, 3rd↔24th)",
          examples: [
            "A ↔ Z",
            "B ↔ Y",
            "C ↔ X",
            "M ↔ N (middle!)",
            "CAT → XZG",
            "DOG → WLT"
          ],
          memorize: "KEY PAIRS: A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N",
          trick: "Draw alphabet in 2 rows: A-M (top), Z-N (bottom). Match vertically!",
          practice: {
            question: "Code SUN using opposite letters",
            answer: "HFM",
            solution: "S→H, U→F, N→M"
          }
        },
        {
          pattern: "🧮 The Formula Method",
          rule: "Opposite Position = 27 - Original Position",
          examples: [
            "A(1) → 27-1 = 26 (Z)",
            "C(3) → 27-3 = 24 (X)",
            "E(5) → 27-5 = 22 (V)"
          ],
          practice: {
            question: "Using formula, find opposite of G(7)",
            answer: "T (position 20)",
            solution: "27-7=20, 20th letter = T"
          }
        },
        {
          pattern: "🔀 Mixed: Opposite + Shift",
          rule: "First apply opposite, THEN shift",
          examples: [
            "CAT: C→X, A→Z, T→G (opposite), then +1 = YAH",
            "Complex but follows steps!"
          ],
          advanced: "Always apply in ORDER: 1. Opposite, 2. Then shift",
          practice: {
            question: "Opposite of B, then +2",
            answer: "A",
            solution: "B→Y (opposite), Y+2=A (wraps around)"
          }
        }
      ],
      
      masterTrick: {
        title: "🎓 Master's Secret: The Hand Method",
        technique: "Use both hands! Left hand A-M, right hand Z-N. Match fingers!",
        visual: "Left pinky=A matches Right pinky=Z, Left ring=B matches Right ring=Y",
        why: "Visual + tactile = faster memory!"
      },
      
      levelComplete: {
        message: "🏆 Level 3 DOMINATED! You're officially a Mirror Master!",
        skillsUnlocked: ["Opposite letter mastery", "Formula method", "Complex patterns"],
        nextLevel: "Ready for word scrambling? Level 4! 🎲"
      }
    },
    
    {
      level: 4,
      title: "🎲 Level 4: Mixed & Substitution - Word Puzzles",
      badge: "Puzzle Pro",
      
      introduction: "Letters jump around, swap places, or follow special rules. The creative ones! 🎨",
      
      patterns: [
        {
          pattern: "🔄 Letter Reversal",
          rule: "Write the word BACKWARDS",
          examples: [
            "CAT → TAC",
            "BOOK → KOOB",
            "HELLO → OLLEH"
          ],
          trick: "Read right to left!",
          practice: {
            question: "Reverse: STAR",
            answer: "RATS",
            solution: "S-T-A-R becomes R-A-T-S"
          }
        },
        {
          pattern: "🎭 Position Swap",
          rule: "Swap specific positions (1st with last, etc.)",
          examples: [
            "STAR: S↔R, T↔A = RTAS",
            "BIRD: B↔D, I↔R = DIRB"
          ],
          practice: {
            question: "Swap 1st & 3rd letters: HELP",
            answer: "LELP",
            solution: "H↔L: HELP → LELP"
          }
        },
        {
          pattern: "➕ Adding Extra Letters",
          rule: "Insert fixed letter between each letter",
          examples: [
            "CAT + X = CXAXT",
            "DOG + Z = DZOZG"
          ],
          practice: {
            question: "Add 'Y' between: SUN",
            answer: "SYUYN",
            solution: "S-Y-U-Y-N"
          }
        },
        {
          pattern: "🎯 Consonant-Vowel Rules",
          rule: "Different shifts for vowels vs consonants",
          examples: [
            "Vowels +1, Consonants +2: CAT → ECV",
            "Vowels stay, Consonants +1: DOG → EPG"
          ],
          practice: {
            question: "Vowels +2, Consonants +1: BED",
            answer: "CGF",
            solution: "B+1=C, E+2=G, D+1=E → wait, E is vowel! = CGF"
          }
        }
      ],
      
      levelComplete: {
        message: "🎊 Level 4 Complete! You handle all pattern types!",
        skillsUnlocked: ["Reversal", "Swapping", "Complex rules"],
        nextLevel: "Final Boss: Symbol Coding! 🎮"
      }
    },
    
    {
      level: 5,
      title: "🎮 Level 5: Symbol & Advanced Codes",
      badge: "Code Master",
      
      introduction: "The FINAL challenge! Letters become symbols, or multiple patterns combine. This is where EXPERTS are born! 🌟",
      
      patterns: [
        {
          pattern: "🔣 Symbol Substitution",
          rule: "Each letter has a unique symbol",
          examples: [
            "A = @",
            "E = #",
            "I = $",
            "O = %",
            "U = &",
            "CAT = @!"
          ],
          note: "Usually given in question, just apply mapping!",
          practice: {
            question: "If A=*, E=#, I=$, code: AIR (R=!)",
            answer: "*$!",
            solution: "A=*, I=$, R=! → *$!"
          }
        },
        {
          pattern: "🔀 Double Pattern (Nightmare Mode!)",
          rule: "Two different patterns applied together",
          examples: [
            "Opposite + Reverse: CAT → XZG → GZX",
            "Shift + Numbers: A(+1)×2 = B→4"
          ],
          strategy: "Always solve step by step, never skip steps!",
          practice: {
            question: "Pattern: Opposite, then Reverse. Code: AB",
            answer: "YZ",
            solution: "A→Z, B→Y (opposite), then reverse ZY → YZ"
          }
        },
        {
          pattern: "🎲 Conditional Coding",
          rule: "Different codes for different conditions",
          examples: [
            "If 1st letter vowel: +2, else +1",
            "If word has 3 letters: opposite, if 4: +1 shift"
          ],
          practice: {
            question: "Rule: 3-letter words +1, 4-letter words +2. Code: CAT",
            answer: "DBU",
            solution: "CAT has 3 letters, so +1: C→D, A→B, T→U"
          }
        }
      ],
      
      bossTip: {
        title: "👑 Final Boss Tip",
        secret: "For complex codes: WRITE DOWN each step. Never do it all in your head!",
        example: "CAT → (opposite) → XZG → (reverse) → GZX ← Write this!",
        why: "Mistakes happen in head. Paper = accuracy = marks!"
      },
      
      levelComplete: {
        message: "👑 CONGRATULATIONS! You're now a CODING-DECODING MASTER!",
        skillsUnlocked: ["Symbol codes", "Double patterns", "Conditional logic", "Expert-level decoding"],
        totalSkills: "ALL PATTERNS MASTERED! 🎉",
        finalBadge: "🏅 Supreme Code Breaker"
      }
    }
  ],
  
  masterClass: {
    title: "🎓 Master Class: Pro Strategies",
    
    tricks: [
      {
        trick: "⚡ The 3-Second Rule",
        method: "Identify pattern type in 3 seconds: Shift? Number? Opposite? Symbol?",
        why: "Quick pattern ID = more time to solve"
      },
      {
        trick: "✍️ Always Write Alphabet",
        method: "If confused, write A-Z on rough paper. Helps visualize shifts!",
        why: "Visual reference prevents mistakes"
      },
      {
        trick: "🎯 Check with Second Example",
        method: "Pattern found? Verify with 2nd example before answering",
        why: "Confirmation = confidence = correct answer"
      },
      {
        trick: "🔢 Memorize Key Positions",
        method: "A=1, E=5, J=10, O=15, U=21, Z=26",
        why: "Quick reference saves calculation time"
      },
      {
        trick: "🪞 The Hand Trick for Opposites",
        method: "Touch matching fingers on both hands for opposite letters",
        why: "Tactile memory is fastest memory"
      }
    ]
  },
  
  commonTraps: {
    title: "⚠️ Don't Fall Into These Traps!",
    
    traps: [
      {
        trap: "Assuming Single Pattern",
        wrong: "Thinking only +1 shift exists",
        right: "Check if it could be +2, +3, or even opposite!",
        remember: "Test your pattern on ALL given examples"
      },
      {
        trap: "Forgetting Wrap-Around",
        wrong: "Z+1 = confused 😵",
        right: "Z+1 = A (alphabet wraps around like a circle)",
        remember: "After Z comes A, before A comes Z"
      },
      {
        trap: "Mixed Pattern Confusion",
        wrong: "Applying same shift to all letters",
        right: "Check if odd/even positions have different patterns",
        remember: "Look for alternating patterns"
      },
      {
        trap: "Symbol Panic",
        wrong: "Getting scared of symbols",
        right: "Symbols are just substitutes! Make a quick mapping list",
        remember: "Symbol coding is actually EASIEST - just substitution!"
      }
    ]
  },
  
  practiceChallenge: {
    title: "🎮 Final Boss Battle: Crack These!",
    instruction: "10 codes, 10 minutes. Can you crack them all? 💪",
    
    questions: [
      {
        id: 1,
        type: "Forward Shift",
        question: "If PARK is coded as SDUN, how is TREE coded?",
        options: ["WUHH", "VUFF", "TQDD", "XUJJ"],
        answer: "WUHH",
        explanation: "Pattern is +3 shift: P→S, A→D, R→U, K→N. Apply to TREE: T→W, R→U, E→H, E→H",
        difficulty: "Easy"
      },
      {
        id: 2,
        type: "Number Coding",
        question: "If A=1, B=2... what is the code for EXAM?",
        options: ["5-24-1-13", "5-1-24-13", "5-24-13-1", "24-5-1-13"],
        answer: "5-24-1-13",
        explanation: "E=5, X=24, A=1, M=13",
        difficulty: "Easy"
      },
      {
        id: 3,
        type: "Opposite Letters",
        question: "Using opposite letter code, what is WORLD?",
        options: ["DLIOM", "WLIOM", "DLOIM", "DLIOW"],
        answer: "DLIOW",
        explanation: "W→D, O→L, R→I, L→O, D→W using A↔Z pattern",
        difficulty: "Medium"
      },
      {
        id: 4,
        type: "Reversal",
        question: "If MOTHER is coded as REHTOM, decode GNIDOC",
        options: ["CODING", "DINGCO", "CODGIN", "GIDNOC"],
        answer: "CODING",
        explanation: "Pattern is reverse: GNIDOC reversed = CODING",
        difficulty: "Easy"
      },
      {
        id: 5,
        type: "Mixed Pattern",
        question: "If pattern is: 1st letter +1, 2nd letter -1, 3rd letter +1... code BIG",
        options: ["CAH", "BJF", "CJH", "BAH"],
        answer: "CAH",
        explanation: "B+1=C, I-1=H, G+1=H → CAH",
        difficulty: "Medium"
      },
      {
        id: 6,
        type: "Complex",
        question: "If vowels +2, consonants +1, code: RATE",
        options: ["SBVG", "SCUF", "SBUF", "TCUG"],
        answer: "SBUF",
        explanation: "R+1=S, A+2=C→B(wait,A is vowel so +2), T+1=U, E+2=G→F. Check: R+1=S, A+2=C, T+1=U, E+2=G",
        difficulty: "Hard"
      },
      {
        id: 7,
        type: "Backward Shift",
        question: "If ZEBRA is coded as YDAQZ, what is the shift?",
        options: ["-1", "-2", "+1", "+2"],
        answer: "-1",
        explanation: "Z→Y(-1), E→D(-1), B→A(-1), R→Q(-1), A→Z(-1 wraps)",
        difficulty: "Medium"
      },
      {
        id: 8,
        type: "Position Math",
        question: "If pattern is: position × 2, what is C's code?",
        options: ["3", "6", "9", "5"],
        answer: "6",
        explanation: "C is 3rd letter, 3×2=6",
        difficulty: "Easy"
      },
      {
        id: 9,
        type: "Double Pattern",
        question: "Apply: First +1 shift, then reverse. Code: CAR",
        options: ["SBD", "TBS", "DBS", "DBT"],
        answer: "DBS",
        explanation: "CAR +1 = DBS, then reverse = SBD → wait! Step 1: C→D,A→B,R→S=DBS. Step 2: Reverse DBS=SBD. Answer SBD!",
        difficulty: "Hard"
      },
      {
        id: 10,
        type: "Symbol",
        question: "If A=@, E=#, I=$, O=%, U=&, code: AUTO",
        options: ["@&!%", "@&T%", "@&#%", "AWTO"],
        answer: "@&T%",
        explanation: "A=@, U=&, T=T(no code given), O=% → @&T%",
        difficulty: "Medium"
      }
    ],
    
    scoring: {
      expert: "9-10 correct: CODE MASTER! 👑",
      advanced: "7-8 correct: Almost there! 💪",
      intermediate: "5-6 correct: Good progress! 📈",
      beginner: "0-4 correct: Practice more levels! 📚"
    }
  },
  
  examWarrior: {
    title: "⚔️ Exam Day Battle Plan",
    
    beforeExam: [
      "📝 Revise opposite letter pairs (A-Z, B-Y...)",
      "🔢 Memorize key positions (A=1, E=5, O=15, Z=26)",
      "💪 Practice 20 questions of each type",
      "😴 Sleep well - pattern recognition needs fresh brain!"
    ],
    
    duringExam: [
      "⏰ Time limit: 30-45 seconds per question MAX",
      "🎯 Easy patterns first (symbol, reversal)",
      "✍️ Use rough paper - don't do complex ones mentally",
      "🔍 Verify pattern with 2nd example if given",
      "😌 If stuck after 10 seconds, SKIP and return"
    ],
    
    timeManagement: [
      "Symbol/Substitution: 20 seconds",
      "Forward/Backward shift: 30 seconds",
      "Number coding: 30 seconds",
      "Opposite letters: 40 seconds",
      "Double patterns: 45 seconds",
      "If exceeding, MARK and move on!"
    ],
    
    pointersToScore: [
      "✅ ALWAYS check if pattern works for ALL examples given",
      "✅ Write down alphabet if confused (10 seconds well spent)",
      "✅ For opposite letters, remember M↔N is the middle",
      "✅ In shift patterns, check if wrap-around happened (Z→A)",
      "✅ Symbol questions are FREE marks - don't miss them!"
    ]
  },
  
  funZone: {
    title: "🎪 Fun Facts - Did You Know?",
    
    facts: [
      "🔐 Caesar Cipher used by Julius Caesar was just +3 letter shift!",
      "🎮 Game cheat codes use similar patterns",
      "💻 Internet passwords use complex coding patterns",
      "🕵️ Spies in WW2 used coding-decoding to send secret messages",
      "📱 Your WhatsApp messages are end-to-end 'encoded'!"
    ],
    
    realWorldUse: [
      "🔒 Cryptography - securing online banking",
      "🎯 Programming - hash functions use coding",
      "🎮 Gaming - unlocking achievements",
      "📧 Email encryption",
      "🏦 ATM PIN coding"
    ]
  },
  
  yourProgress: {
    title: "📊 Master Checklist",
    
    checkList: [
      "☐ Can identify pattern in 5 seconds",
      "☐ Master all 5 shift types (forward, backward, opposite, number, mixed)",
      "☐ Know opposite letter pairs by heart",
      "☐ Can decode 10 questions in 5 minutes",
      "☐ Never panic on symbol codes",
      "☐ Score 90%+ on practice tests",
      "☐ Can explain any code to a friend"
    ],
    
    nextSteps: {
      beginner: "Master Level 1-2 first, spend 3 days",
      intermediate: "Practice mixed patterns, 30 questions daily",
      advanced: "Time yourself, solve previous year papers",
      expert: "Teach someone! Teaching = mastery"
    }
  },
  
  motivationalClose: {
    message: "🌟 You're Now a Code Breaker!",
    quote: "Every code is a puzzle waiting to be solved. You now have the KEY! 🔑",
    finalWords: "Coding-Decoding looks scary but it's actually the EASIEST scoring topic once you know the patterns. You've learned ALL the patterns! From simple shifts to complex double patterns, you can crack ANY code now. Remember: Pattern recognition is a SUPERPOWER. Use it not just in exams, but in life - spotting patterns helps you predict, plan, and WIN! Now go crush those exams! 🚀💪",
    encouragement: "Pro tip: In the exam, you'll see a code and INSTANTLY know the pattern type because you've practiced! That 'aha!' moment? You're about to experience it A LOT! Trust your training, trust the patterns, and most importantly - trust YOURSELF! You're a CODE MASTER now! 🎯👑",
    finalChallenge: "Challenge: Try creating your OWN codes for your friends' names. Make them decode it! Teaching others = cementing your mastery. GO CODE! 🔐✨"
  }
},
];

const VerbalStudyMaterial = [
  
];

export { ReasoningStudyMaterial, AptitudeStudyMaterial, VerbalStudyMaterial };
