<template>
  <div class="container mt-3">
        <div>
            <div>
                <h2>Identificação e contato</h2>
            </div>

            <div class="layoutFormnDefault">
                <div class="input-container">
                    <label for="nameResponsible">Nome do Responsavel</label>
                    <input type="text" id="nameResponsible" name="nameResponsible" v-model="Responsible.nameResponsible" placeholder="Nome da escola">
                </div>

                <div class="input-container">
                    <label for="cpfResponsible">CPF do Responsavel</label>
                    <input type="text" id="cpfResponsible" name="cpfResponsible" v-model="Responsible.cpfResponsible" placeholder="CPF do responsavel">
                </div>

                <div class="input-container">
                    <label for="phoneResponsible">Celular do Responsavel</label>
                    <input type="text" id="phoneResponsible" name="phoneResponsible" v-model="Responsible.phoneResponsible" placeholder="Celular do responsavel">
                </div>

                <div class="input-container">
                    <label for="emailResponsible">E-mail do Responsavel</label>
                    <input type="text" id="emailResponsible" name="emailResponsible" v-model="Responsible.emailResponsible" placeholder="E-mail do responsavel">
                </div>
            </div>

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3">Cancelar</button>
                <button type="submit" class="btn btn-warning">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResponsibleForm',
    data: function() {
        const Responsible = {
            nameResponsible: '',
            cpfResponsible: '',
            phoneResponsible: '',
            emailResponsible: '',
        };


        return { Responsible }
    },
}
</script>

<style>
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        border-left: 4px solid #FCBA03;
        padding: 5px 10px;
    }

    label {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
        
        color: #222;
        
    }

    input {
        padding: 5px 10px;
        width: 400px !important;
    }
</style>