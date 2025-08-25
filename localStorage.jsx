 const employees = [
    {
      "id": 1,
      "name": "Amit Sharma",
      "email": "amit.sharma@example.com",
      "password": "emp123",
      "role": "employee",
      "tasks": [
        {
          "taskId": 101,
          "taskTitle": "Prepare Sales Report",
          "taskDescription": "Compile and analyze sales data for Q1",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 102,
          "taskTitle": "Client Follow-up",
          "taskDescription": "Send follow-up emails to clients",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "email": "priya.verma@example.com",
      "password": "emp234",
      "role": "employee",
      "tasks": [
        {
          "taskId": 103,
          "taskTitle": "Database Backup",
          "taskDescription": "Perform weekly database backup",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "name": "Rohit Mehta",
      "email": "rohit.mehta@example.com",
      "password": "emp345",
      "role": "employee",
      "tasks": []
    },
    {
      "id": 4,
      "name": "Sneha Kapoor",
      "email": "sneha.kapoor@example.com",
      "password": "emp456",
      "role": "employee",
      "tasks": [
        {
          "taskId": 104,
          "taskTitle": "UI Design Update",
          "taskDescription": "Redesign dashboard components",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "name": "Vikram Singh",
      "email": "vikram.singh@example.com",
      "password": "emp567",
      "role": "employee",
      "tasks": []
    }
  ];


  const admin = [
    {
      "id": 101,
      "name": "Admin One",
      "email": "admin1@example.com",
      "password": "admin123",
      "role": "admin"
    },
    {
      "id": 102,
      "name": "Admin Two",
      "email": "admin2@example.com",
      "password": "admin234",
      "role": "admin"
    }
  ];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
} 

export const getLocalStorage =()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(employees,admin)
}



