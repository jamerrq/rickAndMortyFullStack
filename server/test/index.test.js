const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe('Test de rutas', () => {

    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', () => {
            return agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            return agent.get('/rickandmorty/character/1').expect((res) => {
                expect(res.body).toHaveProperty('id');
                expect(res.body).toHaveProperty('name');
                expect(res.body).toHaveProperty('species');
                expect(res.body).toHaveProperty('gender');
                expect(res.body).toHaveProperty('status');
                expect(res.body).toHaveProperty('origin');
                expect(res.body).toHaveProperty('image');
            });
        });
        it('Si hay un error responde con status: 500', () => {
            return agent.get('/rickandmorty/character/10000').expect(500);
        });
    });

    describe('GET /rickandmorty/login', () => {
        // validar que en caso que el usuario y la contraseña sean correctos, el
        // servidor responda con status: 200 y un objeto con la propiedad
        // access en true.
        const users = require('../src/utils/users');
        it('Debe devolver un objeto con la propiedad access en true' +
            ' en caso que el usuario ingresado sea válido', async () => {
                const e = users[0].email;
                const p = users[0].password;
                const url = `/rickandmorty/login?email=${e}&password=${p}`;
                return agent.get(url).expect((res) => {
                    expect(res.body).toHaveProperty('access', true);
                });
            }
        );
        // validar que en caso que el usuario y la contraseña sean incorrectos,
        // el
        // servidor responda con status: 200 y un objeto con la propiedad
        // access en false.
        it('Debe devolver un objeto con la propiedad access en false' +
            ' en caso que el usuario ingresado sea inválido', async () => {
                const bU = 'badUsername';
                const url = `/rickandmorty/login?email=${bU}&password=123`;
                return agent.get(url).expect((res) => {
                    expect(res.body).toHaveProperty('access', false);
                });
            }
        );
    });

    describe('POST /rickandmorty/fav', () => {
        const character1 = { id: '1', name: 'Rick' };
        const character2 = { id: '2', name: 'Morty' };

        it('Devuelve el elemento del arreglo', async () => {
            const response = await agent.post('/rickandmorty/fav')
                .send(character1);
            expect(response.body).toContainEqual(character1);
        });
        it('Devuelve el elemento previamente enviado', async () => {
            const response = await agent.post('/rickandmorty/fav')
                .send(character2);
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        });
    });

    describe('DELETE /rickandmorty/fav/:id', () => {
        const character1 = { id: '1', name: "Rick" };
        const character2 = { id: '2', name: "Morty" };
        let itMsg = 'Devuelve el arreglo correspondiente si no se ' +
            'elimina ningun personaje';
        it(itMsg, async () => {
            const response = await agent.delete('/rickandmorty/fav/98');
            expect(response.body).toContainEqual(character1);
            expect(response.body).toContainEqual(character2);
        });

        it('Elimina correctamente el personaje con el id correspondiente',
            async () => {
                const response = await agent.delete('/rickandmorty/fav/1');
                expect(response.body).not.toContainEqual(character1);
            });
    });
});
