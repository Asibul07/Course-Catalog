import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  courses = [
    {
      id: 101,
      name: 'JavaScript for Beginners',
      author: 'John Heikela',
      duration: 48,
      type: 'Free',
      price: 0.0,
      rating: 4.2,
      image:
        'https://media.istockphoto.com/id/1372764637/photo/coding-language-development-icon-on-yellow-background-software-development-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bICaXHSvokfweb-kmN1y7Turh2isS_XHtHtajWMCTiw=',
      description:
        'Learn the basics of JavaScript, including syntax, functions, and DOM manipulation.',
    },
    {
      id: 102,
      name: 'Introduction to Python',
      author: 'Alice Smith',
      duration: 60,
      type: 'Premium',
      price: 29.99,
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
      description:
        'Discover Python programming with hands-on projects and essential concepts.',
    },
    {
      id: 103,
      name: 'HTML & CSS Basics',
      author: 'David Johnson',
      duration: 45,
      type: 'Free',
      price: 0.0,
      rating: 4.3,
      image:
        'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh0bWwlMjBjc3Nwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Build beautiful websites using HTML and CSS with practical examples and exercises.',
    },
    {
      id: 104,
      name: 'React for Beginners',
      author: 'Sara Connor',
      duration: 75,
      type: 'Premium',
      price: 39.99,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhY3QlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Learn React from scratch and create dynamic web applications with modern techniques.',
    },
    {
      id: 105,
      name: 'Data Science with Python',
      author: 'Michael Brown',
      duration: 90,
      type: 'Premium',
      price: 49.99,
      rating: 4.8,
      image:
        'https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGF0YSUyMFNjaWVuY2UlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D',
      description:
        'Master data analysis and visualization using Python libraries like Pandas and Matplotlib.',
    },
    {
      id: 106,
      name: 'Introduction to Machine Learning',
      author: 'Emily Davis',
      duration: 120,
      type: 'Premium',
      price: 59.99,
      rating: 4.7,
      image:
        'https://plus.unsplash.com/premium_photo-1726666269043-fb16e54646d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjaGluZSUyMExlYXJuaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
      description:
        'Explore machine learning concepts and algorithms with practical applications and projects.',
    },
    {
      id: 107,
      name: 'Digital Marketing Essentials',
      author: 'Chris Lee',
      duration: 30,
      type: 'Free',
      price: 0.0,
      rating: 4.4,
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGlnaXRhbCUyME1hcmtldGluZyUyMHByb2dyYW1taW5nfGVufDB8fDB8fHww',
      description:
        'Learn the fundamentals of digital marketing, including SEO, content, and social media.',
    },
    {
      id: 108,
      name: 'Web Development Bootcamp',
      author: 'Sarah Wilson',
      duration: 180,
      type: 'Premium',
      price: 99.99,
      rating: 4.9,
      image:
        'https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
      description:
        'A comprehensive bootcamp covering front-end and back-end web development technologies.',
    },
  ];
  getTotalCourse() {
    return this.courses.length;
  }
  getTotalFreeCourse() {
    return this.courses.filter((courses) => courses.type === 'Free').length;
  }
  getTotalPremiumCourse() {
    return this.courses.filter((courses) => courses.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data;
    // console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
}
