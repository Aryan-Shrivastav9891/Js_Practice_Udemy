// use getAttribute and setAttribute

const UserCard =document.getElementById('userCard')
console.log(UserCard);

const UserId = UserCard.getAttribute('data-user-id')
console.log(UserId);

const UserCard1 = UserCard.getAttribute('data-user-role')
console.log(UserCard1);

UserCard.setAttribute('data-user-role' , 'super-admin')

UserCard.setAttribute('style' , 'color:red')

// ! dataSet
const userJob = UserCard.dataset.userJob
console.log(userJob );
