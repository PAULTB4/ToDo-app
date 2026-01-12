import { v4 as uuid } from 'uuid';
export class Todo {
    /**
     * 
     * @param {String} description crea una nueva instancia 
     */
    constructor(description = 'Sin descripcion') {

        if (!description) {
            throw new Error('Se require el descripción de la actividad');
        }
        this.id = uuid();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();

    }

}