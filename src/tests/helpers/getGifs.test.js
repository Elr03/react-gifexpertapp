const { getGifs } = require("../../helpers/getGifts")

describe('Test in getGifs Fetch', () => {
    test('should be 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })

    test('should be empty when not have category', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
