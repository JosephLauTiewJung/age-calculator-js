const btn = document.getElementById('btn');
const birthdayInput = document.getElementById('birthday')
const result = document.getElementById('result');

function calculateAge() {
    const currentDate = new Date();
    const birthdayValue = birthdayInput.value;
    const birthdayDate = new Date(birthdayValue);
    if (!birthdayValue) {
        alert('Please enter your birthday');
    } else {
        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();
        if (monthDiff <= 0) {
            age--;
        }
        if (age < 0 || (age == 0 && monthDiff < 0)) {
            result.textContent = 'You are not borned';
        }  else {
            result.textContent = `Your age is ${age} years old`
        }
    }
}
btn.addEventListener('click', calculateAge);
