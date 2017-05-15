export default {
    user: {
		authenticated: false,
		role: null
	},
    login(context, creds, redirect){
        var self = this;
        context.$http.post('http://localhost:3000/auth/login',{
            email: creds.email,
			password: creds.password
        })
        .then(response => {
            localStorage.setItem('id_token', response.data.token);
			localStorage.setItem('user_role', response.data.role);
            self.user = {role:response.data.role};
            self.user.authenticated = true;
            location.reload();
            if (self.user.role = 'user') {
				context.$router.push('/');				
            }
            else if (self.user.role = 'admin') {
                context.$router.push('/users');				
            }

        })
        .catch(function(error) {
            console.log(error);
            context.error = error.body.error;
        });

    },
    register(context, creds, redirect){
        context.$http.post('http://localhost:3000/auth/register', {
				email: creds.email,
				name:creds.name,
				password: creds.password
			})
			.then(response => {
				if (response.data.success == true) {
					// context.$router.push('/verify');				
				};
			})
			.catch(function(error) {
				context.error = error.body.data;
			});

    },
    logout(context) {
		localStorage.removeItem('id_token')
		this.user.authenticated = false;
		context.$router.push('/login');				
	},
	checkAuth() {
		var jwt = localStorage.getItem('id_token');
		var role = localStorage.getItem('user_role');
		if (jwt) {
			this.user.authenticated = true;
			this.user.role = role;
		} else {
			this.user.authenticated = false;
		}
	},
    getAuthHeader() {
		return {
			'Authorization': localStorage.getItem('id_token')
		}
	}
}