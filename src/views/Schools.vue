<template>
    <div class="container styleCardTitle col-md-8 mt-5">
        <h3>Cadastro Drivan - Escola </h3>
    </div>

    <div class="container mt-3">
        <form>
            <div class="profileSchool">
                <div>
                    <h1>Identificação</h1>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Nome da escola">
                    </div>
                </div>
            </div>

            <div class="registrySchool mt-3">
                <div>
                    <h1>Acesso Drivan </h1>
                </div>

                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="E-mail">
                        </div>
                        
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Telefone de contato (XX) XXXX-XXXX">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Digite sua senha">
                        </div>

                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Confirme sua senha">
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
                        <div class="col-md-6">
                            <input type="text" class="form-control" id="description" placeholder="Descrição">
                        </div>

                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Complemento">
                        </div>

                        <div class="col-md-3 mt-2 mainSchool">
                            <h4>Unidade principal:</h4>
                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-3 button">
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
    .mainSchool {
        color: #FFF;
        display: flex;
        justify-content: space-between;
    }

    .button {
        display: flex;
        justify-content: flex-end;
    }
</style>