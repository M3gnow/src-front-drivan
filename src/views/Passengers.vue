<template>
    <div class="container styleCardTitle col-md-8 mt-5">
        <h3>Cadastro Drivan - Passageiro</h3>
    </div>

    <div class="container mt-3">
        <form>
            <div class="profile">
                <div>
                    <h1>Identificação</h1>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Nome">
                    </div>

                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Registro Escolar">
                    </div>
                </div>
            </div>

            <div class="registry mt-3">
                <div>
                    <h1>Periodo</h1>
                </div>

                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Descrição">
                        </div>
                        
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Entrada (xx:xx)">
                        </div>

                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Saída (xx:xx)">
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <div class="address mt-3">
                <div>
                    <h1>Preencha sua Localização </h1>
                </div>

                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Rua">
                        </div>

                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Nº">
                        </div>

                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="CEP">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="Bairro">
                        </div>

                        <div class="col-md-4">
                            <input type="text" class="form-control" placeholder="Cidade">
                        </div>

                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Estado">
                        </div>

                        <div class="col-md-1">
                            <input type="text" class="form-control" placeholder="UF">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="description" placeholder="Descrição">
                        </div>

                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Complemento">
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-light me-3">Cancelar</button>
                <button type="submit" class="btn btn-warning">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>