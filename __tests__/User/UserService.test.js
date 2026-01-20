//mockeo del modelo


import bcrypt from 'bcrypt';
import userService from '../../src/service/UserService';
import userModel from '../../src/models/UserModel';

jest.mock('../../src/models/UserModel');
jest.mock('bcrypt');


//Pruebas service
describe('Service Unit test',()=>{

    test('Ingreso de datos correctos y completos',async()=>{
        const userData={
            username:"Alexandra",
            email:"oberlin@gmail.com",
            password_hash:"123456789"
        };
        
        bcrypt.hash.mockResolvedValue("123456789");

        const spy = jest.spyOn(userModel,'create').mockResolvedValue({     
            id:"12121212",
            ...userData
        });

         const response = await userService.creatreUser(userData);

        expect(spy).toHaveBeenCalledWith(userData);
        expect(response).toHaveProperty('id');
        expect(response).toHaveProperty('username','Alexandra');
        expect(response).toHaveProperty('email','oberlin@gmail.com');
        
        spy.mockRestore();
    });
});