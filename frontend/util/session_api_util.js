
export const createUser = (user) => (
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: {
            user:
            {
                username: user.username,
                password: user.password,
                email: user.email,
                name: user.name,
            }
        }
    })
);



export const login = (user) => (
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: {
            user:
            {
                username: user.username,
                password: user.password,
                email: user.email,
                name: user.name,
            }
        }
    })
);


export const logout = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE',
    })
);
