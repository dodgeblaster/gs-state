const setup = require('../index')
describe('state', () => {
    test('works', async () => {
       //  console.log(__dirname + '/../')

        const state = setup()

   
        await state.write(
            __dirname + '/../exampleProject',
            {
                data: 100
            }
        )


        const res = await state.read(__dirname + '/../exampleProject')


        expect(res.data).toBe(100)





        await state.remove(__dirname + '/../exampleProject')
    })
})