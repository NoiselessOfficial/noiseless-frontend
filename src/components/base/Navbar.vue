<script lang="ts"></script>

<template>
    <nav class="navbar">
        <div class="noiseless-logo">
            <RouterLink to="/"><img src="/nono.ico" alt=""></RouterLink>
            <p>Noiseless</p>
        </div>

        <div class="options">
            <ul>
                <RouterLink to="/donate"><li>Donate</li></RouterLink>
                <RouterLink to="/support" href=""><li>Support</li></RouterLink>
                <RouterLink to="/product" href=""><li>Product</li></RouterLink>
                <li>|</li>
                <!-- Verificação de ID do usuário para exibir opções de login e cadastro -->
                <RouterLink to="/login" href=""><li>Login</li></RouterLink>
                <RouterLink to="/register" href=""><li>Register</li></RouterLink>
            </ul>
        </div>
    </nav>
</template>

<style>
* {
    margin: 0px;
    padding: 0px;
}

*::selection {
    background-color: transparent;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px;
    background-color: transparent;
}

nav .options ul {
    display: flex;
    flex-direction: row;
    padding: 8px;
    gap: 25px;
    font-size: 20px;
    list-style: none;
}

.options ul a {
    text-decoration: none;
    color: #000000;
}

.options ul a li:hover {
    font-size: 21px;
    color: #575757;
    transition: ease-in 0.2s;
}

.noiseless-logo {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.noiseless-logo img {
    height: 40px;
    width: 40px;
}

.noiseless-logo img:hover {
   transform: scale(1.1);
   transition: ease-in 0.1s;
}

.noiseless-logo p {
    margin-top: 6px;
    font-size: 24px;
}
</style>