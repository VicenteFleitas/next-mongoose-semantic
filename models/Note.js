const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Porfavor agregar titulo.'],
        unique: true,
        trim: true,
        maxLength: [40, 'No usar mas de 40 caracteres.']
    },
    description: {
        type: String,
        required: [true, 'Porfavor agregar descripcion.'],
        maxlength: [200, 'No usar mas de 200 caracteres.']
    },

});

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);