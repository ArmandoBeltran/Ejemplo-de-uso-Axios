

new Vue 
({  
    el: '#app', 

    components: {

    },

    mounted: function () {
        axios.get('https://reqres.in/api/users?page=2')
            .then (response => this.users = response.data.data)
            .catch(error => this.users = [{first_name: 'No se encontraron datos'}])
            .finally(() => console.log('Se han cargado todos los datos')); 
    },

    data: {
        users: null, 
    }
}); 