<template>
  <div class="container contentCardLogin">
    <div class="card cardLoginLarger cardCenter mt-5">
      <div class="cardCenter">
        <img src="../assets/logo.png" alt="Italian Trulli" class="logo">
        
        <h3>Entrar no Drivan</h3>
      </div>

      <div class="input-container">
        <label for="name">E-mail</label>
        <input type="text" id="name" name="name" v-model="LoginModel.email" placeholder="Digite seu e-mail">
      </div>

      <div class="input-container">
        <label for="name">Senha</label>
        <input type="text" id="name" name="name" v-model="LoginModel.senha" placeholder="Digite sua senha">
      </div>

      <div>
        <button type="button" class="btn btn-outline-warning buttonLogin" @click="doLogin()">Entrar</button>
      </div>
    </div>

    
  </div>

  <div class="container contentCardLogin">
    <div class="card cardLoginSmaller mt-2">
      <label for="newDrivan">
        Novo no Drivan?
        <a id="createAccount" href="/conductor">Crie sua conta agora!</a>
        <!-- <router-link class="colorDark" to="/conductor"> Crie sua conta agora!</router-link> -->
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    const LoginModel = {
      email: '',
      senha: ''
    }
    
    return { LoginModel };
  },
  methods: {
    doLogin() {
      if (!this.validateEmail(this.LoginModel.email)) {
          return alert('Senha formato incorreto')
      }

      if (!this.validatePassword(this.LoginModel.senha)) {
          return alert('Senha formato incorreto')
      }


      alert('login com sucesso')
    },
    validateEmail(email) {
      if (!email) {
        return false;
      }

      return true;
    },
    validatePassword(password) {
      const regexValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

      if (regexValidate.test(password)) {
        return true;
      }

      return false;
    }
  }
}
</script>

<style>
  .cardLoginLarger {
    width: 550px;
    height: 400px !important;
  }

  .cardCenter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .cardLoginSmaller {
    width: 550px;
    height: 110px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contentCardLogin {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .logo {
    width: 48px;
    height: 48px;
    margin-bottom: 20px;
  }

  .colorDark {
    color: black !important;
  }

  label {
    color: black !important;
  }

  #createAccount {
      text-decoration: none;
      outline: none;
      color: black;
      text-decoration-line: blink !important;
      font-size: 16px;
  }

  #createAccount:link,
  #createAccount:visited,
  #createAccount:focus {
      background: transparent;
      color: darkorange !important;
      outline: none !important;
  }

  #createAccount:active {
      color: orangered !important;
  }

  .buttonLogin {
    width: 400px;
  }
</style>