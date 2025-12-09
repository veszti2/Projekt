async function torolUser(id) {
    try {
        const response = await fetch(
            `http://localhost:3500/api/users-backend/${id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }
        );

        return await response.json();
    } catch (error) {
        console.log('Backend hiba:', error.message);
        throw error;
    }
}

async function modositUser(id, nev, email, admin) {
    try {
        const response = await fetch(
            'http://localhost:3500/api/users-backend',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, nev, email, admin }),
            }
        );

        return await response.json();
    } catch (error) {
        console.log('Backend hiba:', error.message);
        throw error;
    }
}

// module.exports = { torolUser, modositUser };
