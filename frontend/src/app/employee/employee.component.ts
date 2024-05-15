import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      email: 'john.doe@example.com',
      phone: '+1234567890',
    },
    {
      name: 'Jane Smith',
      position: 'Marketing Manager',
      department: 'Marketing',
      email: 'jane.smith@example.com',
      phone: '+1987654321',
    },
    {
      name: 'Michael Johnson',
      position: 'Financial Analyst',
      department: 'Finance',
      email: 'michael.johnson@example.com',
      phone: '+1122334455',
    },
    {
      name: 'Emily Brown',
      position: 'HR Specialist',
      department: 'Human Resources',
      email: 'emily.brown@example.com',
      phone: '+1555666777',
    },
    {
      name: 'David Wilson',
      position: 'Sales Manager',
      department: 'Sales',
      email: 'david.wilson@example.com',
      phone: '+1443322110',
    },
    {
      name: 'Amanda Lee',
      position: 'Accountant',
      department: 'Finance',
      email: 'amanda.lee@example.com',
      phone: '+1888777666',
    },
    {
      name: 'Christopher Garcia',
      position: 'Customer Service Representative',
      department: 'Customer Service',
      email: 'chris.garcia@example.com',
      phone: '+1999444555',
    },
    {
      name: 'Olivia Martinez',
      position: 'Graphic Designer',
      department: 'Marketing',
      email: 'olivia.martinez@example.com',
      phone: '+1666777888',
    },
    {
      name: 'James Rodriguez',
      position: 'Product Manager',
      department: 'Product Management',
      email: 'james.rodriguez@example.com',
      phone: '+1555666777',
    },
    {
      name: 'Sophia Hernandez',
      position: 'Operations Manager',
      department: 'Operations',
      email: 'sophia.hernandez@example.com',
      phone: '+1888333222',
    },
    {
      name: 'Logan Gonzalez',
      position: 'Quality Assurance Engineer',
      department: 'Engineering',
      email: 'logan.gonzalez@example.com',
      phone: '+1222111333',
    },
    {
      name: 'Isabella Perez',
      position: 'Content Writer',
      department: 'Marketing',
      email: 'isabella.perez@example.com',
      phone: '+1999111222',
    },
    {
      name: 'Liam Adams',
      position: 'Logistics Coordinator',
      department: 'Logistics',
      email: 'liam.adams@example.com',
      phone: '+1666555444',
    },
    {
      name: 'Emma Cook',
      position: 'Administrative Assistant',
      department: 'Administration',
      email: 'emma.cook@example.com',
      phone: '+1444333222',
    },
    {
      name: 'Noah Bailey',
      position: 'Business Analyst',
      department: 'Business Development',
      email: 'noah.bailey@example.com',
      phone: '+1333222111',
    },
    {
      name: 'Ava Price',
      position: 'UX Designer',
      department: 'Design',
      email: 'ava.price@example.com',
      phone: '+1222333444',
    },
    {
      name: 'William Turner',
      position: 'Technical Support Specialist',
      department: 'Customer Service',
      email: 'william.turner@example.com',
      phone: '+1111222333',
    },
    {
      name: 'Mia Roberts',
      position: 'Social Media Manager',
      department: 'Marketing',
      email: 'mia.roberts@example.com',
      phone: '+1888999111',
    },
    {
      name: 'Benjamin Flores',
      position: 'Network Administrator',
      department: 'IT',
      email: 'benjamin.flores@example.com',
      phone: '+1999222333',
    },
    {
      name: 'Charlotte King',
      position: 'Recruiter',
      department: 'Human Resources',
      email: 'charlotte.king@example.com',
      phone: '+1888444222',
    },
    // Add more employees as needed
  ];
}