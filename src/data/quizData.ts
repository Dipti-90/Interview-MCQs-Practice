export interface QuizQuestion {
  id: number;
  category: 'Data Structures & Algorithms' | 'Object Oriented Programming' | 'Operating System' | 'Database Management System';
  unit: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-3)
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Data Structure & Algorithm Questions
  {
    id: 1,
    category: "Data Structures & Algorithms",
    unit: "Queue",
    difficulty: "easy",
    question: "Which data structure follows FIFO principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: 1,
    explanation: "Queue follows First In First Out order."
  },
  {
    id: 2,
    category: "Data Structures & Algorithms",
    unit: "Stack",
    difficulty: "easy",
    question: "Which data structure follows LIFO principle?",
    options: ["Queue", "Stack", "Array", "Graph"],
    correctAnswer: 1,
    explanation: "Stack follows Last In First Out order."
  },
  {
    id: 3,
    category: "Data Structures & Algorithms",
    unit: "Searching",
    difficulty: "easy",
    question: "Which searching algorithm works on sorted arrays?",
    options: ["Linear Search", "Binary Search", "DFS", "BFS"],
    correctAnswer: 1,
    explanation: "Binary search works only on sorted arrays by repeatedly dividing the search space."

  },
  {
    id: 4,
    category: "Data Structures & Algorithms",
    unit: "Searching",
    difficulty: "medium",
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    explanation: "Binary search reduces the search space by half each step."
  },
  {
    id: 5,
    category: "Data Structures & Algorithms",
    unit: "Stack",
    difficulty: "easy",
    question: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correctAnswer: 1,
    explanation: "Function calls are stored in the call stack."
  },
  {
    id: 6,
    category: "Data Structures & Algorithms",
    unit: "Tree Traversal",
    difficulty: "medium",
    question: "Which traversal visits root node first?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    correctAnswer: 1,
    explanation: "Preorder visits root before children."
  },
  {
    id: 7,
    category: "Data Structures & Algorithms",
    unit: "Tree Traversal",
    difficulty: "medium",
    question: "Which traversal visits root node last?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 2,
    explanation: "Postorder processes root last."
  },
  {
    id: 8,
    category: "Data Structures & Algorithms",
    unit: "Linked List",
    difficulty: "easy",
    question: "Which data structure uses nodes and pointers?",
    options: ["Array", "Linked List", "Stack", "Queue"],
    correctAnswer: 1,
    explanation: "Linked lists connect nodes using pointers."
  },
  {
    id: 9,
    category: "Data Structures & Algorithms",
    unit: "Sorting",
    difficulty: "medium",
    question: "Which sorting algorithm repeatedly swaps adjacent elements?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
    correctAnswer: 2,
    explanation: "Bubble sort repeatedly swaps neighboring values."
  },
  {
    id: 10,
    category: "Data Structures & Algorithms",
    unit: "Sorting",
    difficulty: "medium",
    question: "Which sorting algorithm divides the array into halves?",
    options: ["Insertion Sort", "Merge Sort", "Selection Sort", "Bubble Sort"],
    correctAnswer: 1,
    explanation: "Merge sort splits array and merges sorted halves."
  },
  {
    id: 11,
    category: "Data Structures & Algorithms",
    unit: "Graph",
    difficulty: "medium",
    question: "Which algorithm is used to find shortest path in graph?",
    options: ["Prim’s", "Kruskal’s", "Dijkstra’s", "DFS"],
    correctAnswer: 2,
    explanation: "Dijkstra finds shortest distance in weighted graphs."
  },
  {
    id: 12,
    category: "Data Structures & Algorithms",
    unit: "Graph",
    difficulty: "medium",
    question: "Which traversal is used in Breadth First Search?",
    options: ["Stack", "Queue", "Tree", "Array"],
    correctAnswer: 1,
    explanation: "Queue maintains level order traversal."
  },
  {
    id: 13,
    category: "Data Structures & Algorithms",
    unit: "Graph",
    difficulty: "medium",
    question: "Which traversal is used in Depth First Search?",
    options: ["Stack", "Queue", "Heap", "Graph"],
    correctAnswer: 0,
    explanation: "DFS explores depth using stack or recursion."
  },
  {
    id: 14,
    category: "Data Structures & Algorithms",
    unit: "Sorting",
    difficulty: "medium",
    question: "What is the worst-case complexity of bubble sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 2,
    explanation: "Nested loops create quadratic complexity."
  },
  {
    id: 15,
    category: "Data Structures & Algorithms",
    unit: "Heap",
    difficulty: "medium",
    question: "Which data structure is used for implementing priority queue?",
    options: ["Heap", "Stack", "Array", "Graph"],
    correctAnswer: 0,
    explanation: "Binary heap efficiently maintains priorities."
  },
  {
    id: 16,
    category: "Data Structures & Algorithms",
    unit: "Tree",
    difficulty: "easy",
    question: "What is the root node of a binary tree?",
    options: ["Topmost node", "Bottom node", "Middle node", "Leaf node"],
    correctAnswer: 0,
    explanation: "Topmost node has no parent."
  },
  {
    id: 17,
    category: "Data Structures & Algorithms",
    unit: "Sorting",
    difficulty: "medium",
    question: "Which algorithm technique divides problem into smaller parts?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    correctAnswer: 1,
    explanation: "Used in algorithms like merge sort."
  },
  {
    id: 18,
    category: "Data Structures & Algorithms",
    unit: "Array",
    difficulty: "easy",
    question: "Which data structure stores elements in contiguous memory?",
    options: ["Linked List", "Array", "Tree", "Graph"],
    correctAnswer: 1,
    explanation: "Array elements are stored sequentially."
  },
  {
    id: 19,
    category: "Data Structures & Algorithms",
    unit: "Sorting",
    difficulty: "easy",
    question: "Which sorting algorithm selects minimum element each pass?",
    options: ["Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort"],
    correctAnswer: 0,
    explanation: "Selection sort repeatedly selects smallest value."
  },
  {
    id: 20,
    category: "Data Structures & Algorithms",
    unit: "Tree",
    difficulty: "easy",
    question: "What is the maximum number of children in a binary tree node?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Binary tree nodes have at most two children."
  },
  {
    id: 21,
    category: "Data Structures & Algorithms",
    unit: "Graph",
    difficulty: "medium",
    question: "Which algorithm is used in minimum spanning tree?",
    options: ["Prim’s", "Dijkstra’s", "Binary Search", "DFS"],
    correctAnswer: 0,
    explanation: "Prim builds MST by expanding smallest edges."
  },
  {
    id: 22,
    category: "Data Structures & Algorithms",
    unit: "Sorting",
    difficulty: "hard",
    question: "Which algorithm technique solves overlapping subproblems?",
    options: ["Dynamic Programming", "Greedy", "Divide and Conquer", "Brute Force"],
    correctAnswer: 0,
    explanation: "Dynamic Programming stores results to avoid recomputation."
  },
  {
    id: 23,
    category: "Data Structures & Algorithms",
    unit: "Graph",
    difficulty: "easy",
    question: "Graph traversal level by level?",
    options: ["DFS", "BFS", "Binary Search", "Topological"],
    correctAnswer: 0,
    explanation: "BFS visits nodes layer by layer."
  },
  {
    id: 24,
    category: "Data Structures & Algorithms",
    unit: "Searching",
    difficulty: "easy",
    question: "Which algorithm is fastest for large sorted data?",
    options: ["Linear Search", "Binary Search", "Bubble Sort", "Insertion Sort"],
    correctAnswer: 1,
    explanation: "Binary search is logarithmic."
  },
  {
    id: 25,
    category: "Data Structures & Algorithms",
    unit: "Tree",
    difficulty: "easy",
    question: "Which structure is used to represent hierarchical data?",
    options: ["Array", "Tree", "Stack", "Queue"],
    correctAnswer: 1,
    explanation: "Trees represent hierarchical relationships."
  },

  // Object Oriented Programming Questions
  {
    id: 26,
    category: "Object Oriented Programming",
    unit: "Encapsulation",
    difficulty: "easy",
    question: "Which concept binds data and functions together?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    correctAnswer: 1,
    explanation: "Encapsulation wraps data and functions into one unit."
  },
  {
    id: 27,
    category: "Object Oriented Programming",
    unit: "Inheritance",
    difficulty: "easy",
    question: "Which OOP principle allows a class to inherit properties of another class?",
    options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    correctAnswer: 0,
    explanation: "Inheritance enables code reuse."
  },
  {
    id: 28,
    category: "Object Oriented Programming",
    unit: "Abstraction",
    difficulty: "medium",
    question: "Which concept hides internal implementation details?",
    options: ["Abstraction", "Inheritance", "Polymorphism", "Compilation"],
    correctAnswer: 0,
    explanation: "Abstraction hides complexity."
  },
  {
    id: 29,
    category: "Object Oriented Programming",
    unit: "Object and Classes",
    difficulty: "easy",
    question: "Which keyword is used to create an object in Java?",
    options: ["class", "object", "new", "this"],
    correctAnswer: 2,
    explanation: "'new' allocates memory for objects."
  },
  {
    id: 30,
    category: "Object Oriented Programming",
    unit: "Polymorphism",
    difficulty: "medium",
    question: "Which concept allows a method to have different implementations?",
    options: ["Polymorphism", "Inheritance", "Encapsulation", "Compilation"],
    correctAnswer: 0,
    explanation: "Polymorphism allows multiple behaviors."
  },
  {
    id: 31,
    category: "Object Oriented Programming",
    unit: "Inheritance",
    difficulty: "medium",
    question: "Which type of inheritance has one parent and multiple children?",
    options: ["Single", "Multiple", "Hierarchical", "Multilevel"],
    correctAnswer: 2,
    explanation: "Hierarchical inheritance shares one base class."
  },
  {
    id: 32,
    category: "Object Oriented Programming",
    unit: "Access Modifiers",
    difficulty: "easy",
    question: "Which access modifier allows access only within the class?",
    options: ["Public", "Private", "Protected", "Default"],
    correctAnswer: 1,
    explanation: "Private restricts access to same class."
  },
  {
    id: 33,
    category: "Object Oriented Programming",
    unit: "Object and Classes",
    difficulty: "easy",
    question: "Which keyword refers to the current object?",
    options: ["self", "object", "this", "super"],
    correctAnswer: 2,
    explanation: "'this' refers to current instance."
  },
  {
    id: 34,
    category: "Object Oriented Programming",
    unit: "Inheritance",
    difficulty: "easy",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implement", "extends", "inherit", "super"],
    correctAnswer: 1,
    explanation: "'extends' creates subclass."
  },
  {
    id: 35,
    category: "Object Oriented Programming",
    unit: "Method Overloading",
    difficulty: "medium",
    question: "Which method has the same name but different parameters?",
    options: ["Method Overloading", "Method Overriding", "Constructor", "Destructor"],
    correctAnswer: 0,
    explanation: "Method overloading changes parameters."
  },
  {
    id: 36,
    category: "Object Oriented Programming",
    unit: "Method Overloading",
    difficulty: "medium",
    question: "Which method overrides a parent class method?",
    options: ["Method Overloading", "Method Overriding", "Constructor", "Inheritance"],
    correctAnswer: 1,
    explanation: "Overriding modifies parent behavior."
  },
  {
    id: 37,
    category: "Object Oriented Programming",
    unit: "Construction",
    difficulty: "easy",
    question: "Which special method is called automatically when object is created?",
    options: ["Constructor", "Destructor", "Main", "Method"],
    correctAnswer: 0,
    explanation: "Constructor initializes object."
  },
  {
    id: 38,
    category: "Object Oriented Programming",
    unit: "OOP Languages",
    difficulty: "medium",
    question: "Which language is purely object-oriented?",
    options: ["C", "Java", "Smalltalk", "Pascal"],
    correctAnswer: 2,
    explanation: "Smalltalk is fully object oriented."
  },
  {
    id: 39,
    category: "Object Oriented Programming",
    unit: "Inheritance",
    difficulty: "easy",
    question: "Which keyword calls the parent class constructor?",
    options: ["this", "super", "parent", "base"],
    correctAnswer: 1,
    explanation: "'super' refers to parent class."
  },
  {
    id: 40,
    category: "Object Oriented Programming",
    unit: "Polymorphism",
    difficulty: "easy",
    question: "Which concept allows objects to behave differently?",
    options: ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
    correctAnswer: 1,
    explanation: "Polymorphism enables varied behavior."
  },
  {
    id: 41,
    category: "Object Oriented Programming",
    unit: "Encapsulation",
    difficulty: "easy",
    question: "Which concept restricts direct access to data?",
    options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
    correctAnswer: 0,
    explanation: "Encapsulation protects data."
  },
  {
    id: 42,
    category: "Object Oriented Programming",
    unit: "Classes",
    difficulty: "medium",
    question: "Which class cannot be inherited?",
    options: ["Abstract class", "Final class", "Parent class", "Child class"],
    correctAnswer: 1,
    explanation: "Final class prevents inheritance."
  },
  {
    id: 43,
    category: "Object Oriented Programming",
    unit: "Abstraction",
    difficulty: "medium",
    question: "Which concept focuses on what an object does rather than how?",
    options: ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"],
    correctAnswer: 0,
    explanation: "Abstraction shows functionality."
  },
  {
    id: 44,
    category: "Object Oriented Programming",
    unit: "Methods",
    difficulty: "medium",
    question: "Which keyword prevents method overriding?",
    options: ["static", "final", "private", "protected"],
    correctAnswer: 1,
    explanation: "Final method cannot be overridden."
  },
  {
    id: 45,
    category: "Object Oriented Programming",
    unit: "Inheritance",
    difficulty: "easy",
    question: "Which concept allows code reuse?",
    options: ["Inheritance", "Compilation", "Execution", "Debugging"],
    correctAnswer: 0,
    explanation: "Inheritance reuses code."
  },
  {
    id: 46,
    category: "Object Oriented Programming",
    unit: "Access Modifiers",
    difficulty: "easy",
    question: "Which access modifier allows access everywhere?",
    options: ["Private", "Public", "Protected", "Default"],
    correctAnswer: 1,
    explanation: "Public members accessible anywhere."
  },
  {
    id: 47,
    category: "Object Oriented Programming",
    unit: "Inheritaance",
    difficulty: "medium",
    question: "Which type of inheritance has a chain of classes?",
    options: ["Multilevel", "Multiple", "Hierarchical", "Single"],
    correctAnswer: 0,
    explanation: "Multilevel creates inheritance chain."
  },
  {
    id: 48,
    category: "Object Oriented Programming",
    unit: "Classes",
    difficulty: "easy",
    question: "Which OOP concept represents real world objects?",
    options: ["Class", "Loop", "Array", "Function"],
    correctAnswer: 0,
    explanation: "Class defines object structure."
  },
  {
    id: 49,
    category: "Object Oriented Programming",
    unit: "Classess",
    difficulty: "easy",
    question: "Which keyword is used to define a class in Java?",
    options: ["define", "class", "object", "structure"],
    correctAnswer: 1,
    explanation: "'class' declares new class."
  },
  {
    id: 50,
    category: "Object Oriented Programming",
    unit: "Encapsulation",
    difficulty: "easy",
    question: "Which concept combines data and methods in one unit?",
    options: ["Encapsulation", "Inheritance", "Compilation", "Execution"],
    correctAnswer: 0,
    explanation: "Encapsulation binds them together."
  },

  // Operating System Questions

  {
    id: 51,
    category: "Operating System",    
    unit: "Introduction to OS",
    difficulty: "easy",
    question: "What is the main purpose of an operating system?",
    options: ["Manage hardware and software resources", "Write programs", "Compile code", "Design websites"],
    correctAnswer: 0,
    explanation: "An operating system manages hardware resources and provides services for applications."
  },
  {
    id: 52,
    category: "Operating System",
    unit: "CPU Scheduling",
    difficulty: "medium",
    question: "Which scheduling algorithm uses time quantum?",
    options: ["FCFS", "Round Robin", "Priority", "Shortest Job First"],
    correctAnswer: 1,
    explanation: "Round Robin scheduling assigns a fixed time slice to each process."
  },
  {
    id: 53,
    category: "Operating System",
    unit: "Kernel",
    difficulty: "easy",
    question: "Which part of OS interacts directly with hardware?",
    options: ["Shell", "Kernel", "Compiler", "Interpreter"],
    correctAnswer: 1,
    explanation: "The kernel is the core of the operating system that manages hardware."
  },
  {
    id: 54,
    category: "Operating System",
    unit: "Memory Management",
    difficulty: "easy",
    question: "Which memory is volatile?",
    options: ["ROM", "RAM", "Hard Disk", "SSD"],
    correctAnswer: 1,
    explanation: "RAM loses data when the computer is turned off."
  },
  {
    id: 55,
    category: "Operating System",
    unit: "Memory Management",
    difficulty: "medium",
    question: "Which technique divides memory into fixed-size blocks?",
    options: ["Paging", "Segmentation", "Swapping", "Fragmentation"],
    correctAnswer: 0,
    explanation: "Paging divides memory into fixed-size pages."
  },
  {
    id: 56,
    category: "Operating System",
    unit: "CPU Scheduking",
    difficulty: "easy",
    question: "Which scheduling algorithm executes processes in arrival order?",
    options: ["FCFS", "SJF", "Round Robin", "Priority"],
    correctAnswer: 0,
    explanation: "First Come First Serve schedules processes based on arrival time."
  },
  {
    id: 57,
    category: "Operating System",
    unit: "OS Types",
    difficulty: "easy",
    question: "Which OS supports multiple users?",
    options: ["Single-user OS", "Multi-user OS", "Batch OS", "Embedded OS"],
    correctAnswer: 1,
    explanation: "Multi-user OS allows multiple users to access the system simultaneously."
  },
  {
    id: 58,
    category: "Operating System",
    unit: "Deadlock",
    difficulty: "medium",
    question: "What is a deadlock?",
    options: ["Process waiting forever", "Fast process execution", "Memory overflow", "CPU idle state"],
    correctAnswer: 0,
    explanation: "Deadlock occurs when processes wait indefinitely for resources."
  },
  {
    id: 59,
    category: "Operating System",
    unit: "CPU Scheduling",
    difficulty: "medium",
    question: "Which scheduling algorithm selects the shortest job?",
    options: ["SJF", "FCFS", "Round Robin", "Priority"],
    correctAnswer: 0,
    explanation: "Shortest Job First selects the process with the smallest execution time."
  },
  {
    id: 60,
    category: "Operating System",
    unit: "User Interface",
    difficulty: "easy",
    question: "Which OS component provides user interface?",
    options: ["Shell", "Kernel", "CPU", "Memory"],
    correctAnswer: 0,
    explanation: "The shell allows users to interact with the operating system."
  },
  {
    id: 61,
    category: "Operating System",
    unit: "Memory Management",
    difficulty: "easy",
    question: "Which memory is non-volatile?",
    options: ["RAM", "Cache", "ROM", "Register"],
    correctAnswer: 2,
    explanation: "ROM retains data even when power is off."
  },
  {
    id: 62,
    category: "Operating System",
    unit: "Deadlock",
    difficulty: "hard",
    question: "Which algorithm avoids deadlock?",
    options: ["Banker's Algorithm", "FCFS", "Round Robin", "Paging"],
    correctAnswer: 0,
    explanation: "Banker's algorithm is used for deadlock avoidance."
  },
  {
    id: 63,
    category: "Operating System",
    unit: "Os Types",
    difficulty: "easy",
    question: "Which OS type executes jobs in batches?",
    options: ["Batch OS", "Real-time OS", "Distributed OS", "Network OS"],
    correctAnswer: 0,
    explanation: "Batch OS processes jobs in batches without user interaction."
  },
  {
    id: 64,
    category: "Operating System",
    unit: "Process Management",
    difficulty: "easy",
    question: "Which process state means the process is executing?",
    options: ["Ready", "Running", "Waiting", "Terminated"],
    correctAnswer: 1,
    explanation: "Running state means the process is currently executing."
  },
  {
    id: 65,
    category: "Operating System",
    unit: "Device Management",
    difficulty: "easy",
    question: "Which device manages hardware components?",
    options: ["Device Driver", "Compiler", "Interpreter", "Editor"],
    correctAnswer: 0,
    explanation: "Device drivers allow the OS to communicate with hardware devices."
  },
  {
    id: 66,
    category: "Operating System",
    unit: "Memeory Management",
    difficulty: "medium",
    question: "Which technique moves sprocesses between RAM and disk?",
    options: ["Swapping", "Paging", "Segmentation", "Fragmentation"],
    correctAnswer: 0,
    explanation: "Swapping transfers processes between RAM and disk."
  },
  {
    id: 67,
    category: "Operating System",
    unit: "Os Types",
    difficulty: "easy",
    question: "Which OS is open source?",
    options: ["Windows", "Linux", "MacOS", "DOS"],
    correctAnswer: 1,
    explanation: "Linux is an open-source operating system."
  },
  {
    id: 68,
    category: "Operating System",
    unit: "Memory Managementt",
    difficulty: "medium",
    question: "Which memory is fastest?",
    options: ["RAM", "Cache", "Hard Disk", "ROM"],
    correctAnswer: 1,
    explanation: "Cache memory is the fastest memory."
  },
  {
    id: 69,
    category: "Operating System",
    unit: "Process Management",
    difficulty: "easy",
    question: "Which process state waits for I/O?",
    options: ["Ready", "Running", "Waiting", "Terminated"],
    correctAnswer: 2,
    explanation: "Waiting state occurs when a process waits for input/output."
  },
  {
    id: 70,
    category: "Operating System",
    unit: "Kernel",
    difficulty: "easy",
    question: "Kernel is the ____ of OS.",
    options: ["Core", "User", "Application", "Program"],
    correctAnswer: 0,
    explanation: "The kernel is the core component of the OS."
  },
  {
    id: 71,
    category: "Operating System",
    unit: "Memory Management",
    difficulty: "medium",
    question: "Which memory issue wastes space?",
    options: ["Fragmentation", "Paging", "Scheduling", "Swapping"],
    correctAnswer: 0,
    explanation: "Fragmentation causes unused memory spaces."
  },
  {
    id: 72,
    category: "Operating System",
    unit: "CPU Scheduling",
    difficulty: "medium",
    question: "Which scheduling algorithm is preemptive?",
    options: ["Round Robin", "FCFS", "SJF (non-preemptive)", "Batch"],
    correctAnswer: 0,
    explanation: "Round Robin is a preemptive scheduling algorithm."
  },
  {
    id: 73,
    category: "Operating System",
    unit: "File System",
    difficulty: "easy",
    question: "Which manages file storage?",
    options: ["File System", "Scheduler", "CPU", "Compiler"],
    correctAnswer: 0,
    explanation: "File system organizes and manages files."
  },
  {
    id: 74,
    category: "Operating System",
    unit: "Mobile OS",
    difficulty: "easy",
    question: "Which OS is used on smartphones?",
    options: ["Android", "Windows Server", "Linux Server", "UNIX"],
    correctAnswer: 0,
    explanation: "Android is a popular mobile operating system."
  },
  {
    id: 75,
    category: "Operating System",
    unit: "OS Types",
    difficulty: "medium",
    question: "Which OS type guarantees response time?",
    options: ["Real-time OS", "Batch OS", "Network OS", "Distributed OS"],
    correctAnswer: 0,
    explanation: "Real-time OS provides guaranteed response times."
  },

  // Database Management System Questions

  {
    id: 76,
    category: "Database Management System",
    unit: "Introduction to DBMS",
    difficulty: "easy",
    question: "What does DBMS stand for?",
    options: ["Database Management System", "Data Backup Management System", "Digital Base Management System", "Database Monitoring System"],
    correctAnswer: 0,
    explanation: "DBMS is software used to create and manage databases."
  },
  {
    id: 77,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which language is used to query databases?",
    options: ["SQL", "HTML", "CSS", "Python"],
    correctAnswer: 0,
    explanation: "SQL is used to manage relational databases."
  },
  {
    id: 78,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which command retrieves data?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correctAnswer: 0,
    explanation: "SELECT retrieves data from tables."
  },
  {
    id: 79,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which command adds new data?",
    options: ["INSERT", "SELECT", "DELETE", "DROP"],
    correctAnswer: 0,
    explanation: "INSERT adds records into a table."
  },
  {
    id: 80,
    category: "Database Management System",
    unit: "Keys",
    difficulty: "easy",
    question: "Which key uniquely identifies records?",
    options: ["Primary Key", "Foreign Key", "Candidate Key", "Composite Key"],
    correctAnswer: 0,
    explanation: "Primary key uniquely identifies each record."
  },
  {
    id: 81,
    category: "Database Management System",
    unit: "Keys",
    difficulty: "easy",
    question: "Which key links two tables?",
    options: ["Foreign Key", "Primary Key", "Super Key", "Candidate Key"],
    correctAnswer: 0,
    explanation: "Foreign key connects tables."
  },
  {
    id: 82,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "medium",
    question: "Which command removes a table?",
    options: ["DROP", "DELETE", "REMOVE", "CLEAR"],
    correctAnswer: 0,
    explanation: "DROP deletes a table permanently."
  },
  {
    id: 83,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which clause filters records?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    correctAnswer: 0,
    explanation: "WHERE filters rows."
  },
  {
    id: 84,
    category: "Database Management System",
    unit: "Normalization",
    difficulty: "medium",
    question: "Which normal form removes partial dependency?",
    options: ["2NF", "1NF", "3NF", "BCNF"],
    correctAnswer: 0,
    explanation: "Second Normal Form removes partial dependency."
  },
  {
    id: 85,
    category: "Database Management System",
    unit: "Normalization",
    difficulty: "medium",
    question: "Which normal form removes transitive dependency?",
    options: ["3NF", "2NF", "1NF", "BCNF"],
    correctAnswer: 0,
    explanation: "Third Normal Form removes transitive dependency."
  },
  {
    id: 86,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which command modifies data?",
    options: ["UPDATE", "SELECT", "INSERT", "DROP"],
    correctAnswer: 0,
    explanation: "UPDATE changes existing records."
  },
  {
    id: 87,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which command removes records?",
    options: ["DELETE", "SELECT", "INSERT", "CREATE"],
    correctAnswer: 0,
    explanation: "DELETE removes rows."
  },
  {
    id: 88,
    category: "Database Management System",
    unit: "DBMS Softwarw",
    difficulty: "easy",
    question: "Which DBMS is open source?",
    options: ["MySQL", "Oracle", "SQL Server", "DB2"],
    correctAnswer: 0,
    explanation: "MySQL is an open-source DBMS."
  },
  {
    id: 89,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which command creates a table?",
    options: ["CREATE", "INSERT", "SELECT", "DELETE"],
    correctAnswer: 0,
    explanation: "CREATE TABLE defines a new table."
  },
  {
    id: 90,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "medium",
    question: "Which operator checks NULL values?",
    options: ["IS NULL", "=", "LIKE", "BETWEEN"],
    correctAnswer: 0,
    explanation: "IS NULL checks null values."
  },
  {
    id: 91,
    category: "Database Management System",
    unit: "Joins",
    difficulty: "medium",
    question: "Which join returns matching rows?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    correctAnswer: 0,
    explanation: "INNER JOIN returns matching rows."
  },
  {
    id: 92,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which clause sorts results?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    correctAnswer: 0,
    explanation: "ORDER BY sorts records."
  },
  {
    id: 93,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which function counts rows?",
    options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
    correctAnswer: 0,
    explanation: "COUNT() returns number of rows."
  },
  {
    id: 94,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which function calculates average?",
    options: ["AVG()", "SUM()", "COUNT()", "MIN()"],
    correctAnswer: 0,
    explanation: "AVG() returns average value."
  },
  {
    id: 95,
    category: "Database Management System",
    unit: "Database Management",
    difficulty: "medium",
    question: "Which database model uses tables?",
    options: ["Relational Model", "Hierarchical Model", "Network Model", "Object Model"],
    correctAnswer: 0,
    explanation: "Relational model organizes data into tables."
  },
  {
    id: 96,
    category: "Database Management System",
    unit: "Keys",
    difficulty: "easy",
    question: "Which key can have duplicate values?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"],
    correctAnswer: 0,
    explanation: "Foreign key values can repeat."
  },
  {
    id: 97,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "medium",
    question: "Which clause groups rows?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "SELECT"],
    correctAnswer: 0,
    explanation: "GROUP BY groups rows."
  },
  {
    id: 98,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "medium",
    question: "Which command changes table structure?",
    options: ["ALTER", "UPDATE", "SELECT", "DELETE"],
    correctAnswer: 0,
    explanation: "ALTER modifies table structure."
  },
  {
    id: 99,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "easy",
    question: "Which SQL keyword removes duplicates?",
    options: ["DISTINCT", "UNIQUE", "REMOVE", "CLEAR"],
    correctAnswer: 0,
    explanation: "DISTINCT removes duplicate rows."
  },
  {
    id: 100,
    category: "Database Management System",
    unit: "SQL",
    difficulty: "medium",
    question: "Which command removes all rows but keeps table?",
    options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"],
    correctAnswer: 0,
    explanation: "TRUNCATE deletes all records but keeps the table."
  }

];

// Utility functions for quiz management
export const getRandomQuestions = (count: number = 100): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getQuestionsByCategory = (category: QuizQuestion['category']): QuizQuestion[] => {
  return quizQuestions.filter(q => q.category === category);
};

export const getCategoryStats = () => {
  const stats = quizQuestions.reduce((acc, question) => {
    acc[question.category] = (acc[question.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return stats;
};

export const searchQuestions = (keyword: string) => {
  const searchTerm = keyword.toLowerCase().trim();
  
  if (!searchTerm) return [];

  return quizQuestions.filter((question) =>
    question.question.toLowerCase().includes(searchTerm) ||
    question.category.toLowerCase().includes(searchTerm) ||
    question.unit.toLowerCase().includes(searchTerm) || // Add unit to search
    question.difficulty.toLowerCase().includes(searchTerm) || // Optional: search by difficulty
    question.explanation?.toLowerCase().includes(searchTerm) // Optional: search in explanation
  );
};


export const shuffleQuestions = (questions: any[]) => {
  const shuffled = [...questions];

  for (let i = shuffled.length -1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getUnitsByCategory = (category: string)=> {
  const units = quizQuestions
  .filter((q) => q.category === category)
  .map((q) => q.unit);
  return[...new Set(units)];
};

export const getQuestionsByUnit = (category: string, unit: string) =>{
  return quizQuestions.filter(
    (q) => q.category === category && q.unit === unit
  );
};

export const getQuestionsByDificulty = (difficulty: string)=> {
  return quizQuestions.filter((q) => q.difficulty === difficulty);
};

export const getRandomDSAQuestions = (count: number = 10) => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getDSAQuestionsByUnit = (unit: string) => {
  return quizQuestions.filter(q => q.unit === unit);
};

export const getDSAQuestionsByDifficulty = (difficulty: "easy" | "medium" | "hard") => {
  return quizQuestions.filter(q => q.difficulty === difficulty);
};