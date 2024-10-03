// ControllerCliente.test.js
const admin = require('firebase-admin');
const { createCliente, getClientes, getClienteById, updateClienteById, deleteClienteById } = require('../Controllers/ControllerCliente');

// Mock de admin.database() para simular Firebase
jest.mock('firebase-admin', () => ({
    database: jest.fn().mockReturnThis(),
    ref: jest.fn().mockReturnThis(),
    push: jest.fn(() => ({ key: 'mocked-key' })),
    once: jest.fn(),
    child: jest.fn().mockReturnThis(),
    update: jest.fn(),
    remove: jest.fn(),
}));

describe('ControllerCliente', () => {
    let req, res;

    beforeEach(() => {
        req = { body: {}, params: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    describe('createCliente', () => {
        it('debería crear un cliente y devolver el ID', async () => {
            req.body = { Nombre: 'Juan', Apellido: 'Pérez', NumeroTelefono: '123456789', Nit: '1234567', Dirección: 'Calle Falsa 123' };
            
            await createCliente(req, res);

            expect(admin.database().ref('clientes').push).toHaveBeenCalledWith({
                Nombre: 'Juan',
                Apellido: 'Pérez',
                NumeroTelefono: '123456789',
                Nit: '1234567',
                Dirección: 'Calle Falsa 123'
            });
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: 'Datos del cliente guardados exitosamente', id: 'mocked-key' });
        });

        it('debería manejar errores al crear un cliente', async () => {
            admin.database().ref('clientes').push.mockRejectedValueOnce(new Error('Error de Firebase'));

            await createCliente(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error al guardar datos del cliente' });
        });
    });

    describe('getClientes', () => {
        it('debería devolver todos los clientes', async () => {
            const mockSnapshot = { val: jest.fn().mockReturnValue({ cliente1: 'data' }) };
            admin.database().ref('clientes').once.mockResolvedValueOnce(mockSnapshot);

            await getClientes(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ cliente1: 'data' });
        });

        it('debería manejar errores al obtener clientes', async () => {
            admin.database().ref('clientes').once.mockRejectedValueOnce(new Error('Error de Firebase'));

            await getClientes(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener los clientes' });
        });
    });

    describe('getClienteById', () => {
        it('debería devolver el cliente con el ID especificado', async () => {
            const mockSnapshot = { val: jest.fn().mockReturnValue({ Nombre: 'Juan' }) };
            req.params.id = 'cliente123';
            admin.database().ref('clientes').child('cliente123').once.mockResolvedValueOnce(mockSnapshot);

            await getClienteById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ Nombre: 'Juan' });
        });

        it('debería manejar cliente no encontrado', async () => {
            const mockSnapshot = { val: jest.fn().mockReturnValue(null) };
            req.params.id = 'cliente123';
            admin.database().ref('clientes').child('cliente123').once.mockResolvedValueOnce(mockSnapshot);

            await getClienteById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Cliente no encontrado' });
        });

        it('debería manejar errores al obtener un cliente por ID', async () => {
            admin.database().ref('clientes').child('cliente123').once.mockRejectedValueOnce(new Error('Error de Firebase'));
            req.params.id = 'cliente123';

            await getClienteById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error al obtener el cliente' });
        });
    });

    describe('updateClienteById', () => {
        it('debería actualizar el cliente por ID', async () => {
            req.params.id = 'cliente123';
            req.body = { Nombre: 'Juan' };

            await updateClienteById(req, res);

            expect(admin.database().ref('clientes').child('cliente123').update).toHaveBeenCalledWith({ Nombre: 'Juan' });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Cliente actualizado exitosamente' });
        });

        it('debería manejar errores al actualizar un cliente', async () => {
            admin.database().ref('clientes').child('cliente123').update.mockRejectedValueOnce(new Error('Error de Firebase'));
            req.params.id = 'cliente123';

            await updateClienteById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error al actualizar el cliente' });
        });
    });

    describe('deleteClienteById', () => {
        it('debería eliminar el cliente por ID', async () => {
            req.params.id = 'cliente123';

            await deleteClienteById(req, res);

            expect(admin.database().ref('clientes').child('cliente123').remove).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Cliente eliminado exitosamente' });
        });

        it('debería manejar errores al eliminar un cliente', async () => {
            admin.database().ref('clientes').child('cliente123').remove.mockRejectedValueOnce(new Error('Error de Firebase'));
            req.params.id = 'cliente123';

            await deleteClienteById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error al eliminar el cliente' });
        });
    });
});
