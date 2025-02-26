const employees = [
    {
        "id": 1,
        "firstname": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix login issue",
                "description": "Resolve the login issue in the React app",
                "date": "2025-02-01",
                "category": "Bug Fix",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Design homepage UI",
                "description": "Create a modern UI for the homepage",
                "date": "2025-02-02",
                "category": "UI/UX",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Setup database schema",
                "description": "Define database structure for users and posts",
                "date": "2025-02-03",
                "category": "Backend",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write API documentation",
                "description": "Document all API endpoints",
                "date": "2025-02-01",
                "category": "Documentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Optimize database queries",
                "description": "Improve SQL queries for faster execution",
                "date": "2025-02-02",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstname": "Rajesh",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Implement authentication",
                "description": "Set up JWT authentication",
                "date": "2025-02-01",
                "category": "Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix UI responsiveness",
                "description": "Ensure the website is mobile-friendly",
                "date": "2025-02-02",
                "category": "UI/UX",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Create a test suite",
                "description": "Write unit tests for core functionalities",
                "date": "2025-02-03",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Neha",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Improve website performance",
                "description": "Reduce load times using caching",
                "date": "2025-02-01",
                "category": "Performance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Debug payment gateway",
                "description": "Fix errors in the Stripe integration",
                "date": "2025-02-02",
                "category": "Payments",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 0,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstname": "Suresh",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Deploy application",
                "description": "Set up CI/CD pipeline and deploy the app",
                "date": "2025-02-01",
                "category": "DevOps",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Implement dark mode",
                "description": "Add a dark mode feature for better user experience",
                "date": "2025-02-02",
                "category": "UI/UX",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix 404 errors",
                "description": "Ensure proper error handling for missing pages",
                "date": "2025-02-03",
                "category": "Bug Fix",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];



const admin = [
    {
        "id": 1,
        "firstname": "Ravi",
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
