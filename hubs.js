
const data= async  () =>  {
    const posts= fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(d => console.log(d)) 
       // const data = (await posts).joson())
        console.log(data)
    }
    data()
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
            sum += num;
        }
    });
    
    console.log('Sum of even numbers:', sum);
    

    function getGreeting() {
        const now = new Date(); 
        const hours = now.getHours(); 
    
        let greeting;
        if (hours >= 5 && hours < 12) {
            greeting = 'Good Morning';
        } else if (hours >= 12 && hours < 17) {
            greeting = 'Good Afternoon';
        } else {
            greeting = 'Hello'; 
        }
    
        console.log(greeting);
    }
    
    
    getGreeting();
    
    async function getUsers() {
        try {
           
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
           
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            
            const users = await response.json();
            
            
            console.log('User data:', users);
            
            
        } catch (error) {
         
            console.error('Error fetching user data:', error);
        }
    }
    
    
    getUsers();