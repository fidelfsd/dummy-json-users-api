const getAllUsers = async () => {
   const apiUrl =
      "https://dummyjson.com/users?limit=5&skip=10&select=firstName,age,image";

   const response = await axios.get(apiUrl);

   const users = response.data.users;
   renderAllUsers(users);

   //console.log(users);
};

const renderAllUsers = (users) => {
   const divUsers = document.getElementById("users");

   let userStr = "";
   for (const u of users) {
      userStr += `
      <div class="user">
         <img class=user__image src="${u.image}" alt="${u.firstName}">
         <div class="user__first-name"> ${u.firstName} </div>
         <div class="user__age"> ${u.age} años</div>
      </div>
      `;

      divUsers.innerHTML = userStr;
      //console.log(u.firstName, u.age);
   }
};

const renderSingleUser = (user) => {
    
};

const getSingleUser = (id) => {
   const apiUrl = `https://dummyjson.com/users/${id}`;
};

document.getElementById("obtener-usuarios").addEventListener("click", () => {
   // cosas
   getAllUsers();
});
