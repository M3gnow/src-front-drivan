<template>
    <div class="container styleCardTitle col-md-8 mt-5">
        <h3>Cadastro Drivan</h3>
    </div>

    <div class="container mt-3">
        <form>
            <div class="profile">
                <div>
                    <h1>Dados pessoais</h1>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Nome">
                    </div>

                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="CPF">
                    </div>

                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Digite a CNH">
                    </div>
                </div>
            </div>

            <div class="registry mt-3">
                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="E-mail">
                        </div>
                        
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Celular (XX) XXXXX-XXXX">
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

            <div class="vehicle mt-3">
                <div>
                    <h1>Preencha seu Veículo</h1>
                </div>

                <div>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Modelo do veículo">
                        </div>

                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Preencha a placa">
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Cor">
                        </div>

                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Digite a capacidade de passageiros">
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
    .styleCardTitle {
        height: 50px;
        background-color: khaki;
        border-radius: 20px;
        text-align: center;
        padding: 10px;
    }
</style>