export const generateRandomId = (length=6) =>{
    let result = '';
    const characters = 'ABCDEFGHI0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }