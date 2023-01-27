<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Import bootstrap-5.1 CSS-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--Own css-->
    <link rel="stylesheet" href="CSS/styleHome.css">
    <!--Import jquery 3.6.3-->
    <script src="https://code.jquery.com/jquery-3.6.3.slim.min.js" integrity="sha256-ZwqZIVdD3iXNyGHbSYdsmWP//UBokj2FHAxKuSBKDSo=" crossorigin="anonymous"></script>
    <!--Import bootstrap-5.1 JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!--Import Own JS--->
    <script src="JS/scriptHome.js" defer></script>
    
    <title>TH Sports</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-nav">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="img/logo.png" height="85" width="100" alt="Logo TH-Sports">
            </a>

            <label class="menuButton navbar-toggle" for="checkMenu" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <input class="navbar-toggle" id="checkMenu" type="checkbox" oninput="teste();">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bot"></span>
            </label>
            
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <div></div>
                
                <ul class="navbar-nav">
                    <li class="nav-item p-md-1">
                        <a class="nav-link" href="#titleAbout">Sobre</a>
                    </li>
                    
                    <li class="nav-item p-md-1">
                        <a class="nav-link" href="#tittleContact">Contato</a>
                    </li>
                    
                    <li class="nav-item p-md-1">
                        <a class="nav-link" id="btn-LogIn" data-bs-toggle="modal" data-bs-target="#LogIn-SignUp">Log in</a>
                    </li>
                    
                    <li class="nav-item p-md-1">
                        <a class="nav-link" id="btn-signUp" data-bs-toggle="modal" data-bs-target="#LogIn-SignUp">Sign up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <header>
        <div class="row m-0">
            <div class="col-12 p-0">
            <img class="img-fluid" src="img/banner.png" alt="banner TH-Sports">
            </div>
        </div>
    </header>
    <?php
    require_once "PopUps/LogIn-SignUp.php";
    ?>
    <main class="container mt-4">
        <section class="col-12 pt-4 title" id="titleAbout">
            <h3 class="text-center">Sobre o TH Sports</h3>
        </section>

        <div class="row d-flex justify-content-center">
            <article class="col-11 col-md-6 pt-5">
                <h5 class="text-center pb-1">oque é?</h5>

                <p class="text">
                    <em><b>TH Sports</b> é uma ideia</em> de uma plataforma digital para diversos esportes, que será feito para jiu jitsu primeiro. Tem o intuito de ajudar com uma forma pratica na organização do chaveamento, cronometro, pontuações e lutas ou Jogos de um campeonato,<em> sem a necessidade de um papel.</em>
                    <br>
                    Esta ideia está sendo desenvolvida por apenas uma pessoa, que sou eu que tive a ideoa observando outras plataformas e pensei em porque não expandir e juntar varias caracteristicas em uma só.
                    <br>
                    Futuramente  pretendo desenvolver rankings de atelas basedos em suas conquistas, um historico de conquistas de cada atleta e um rank por competição, tendo ideia de dar <em>mais visibilidade ao atleta.</em>
                </p>
            </article>

            <article class="col-12 col-md-6 pt-5">
                <h5 class="text-center pb-1">Como funciona?</h5>

                <p class="text">
                    O funcionamento é bem simples, você só precisa clicar no botão abaixo que te levara para o sistema de cronometro, <em>caso não tenha uma conta na plataforma.</em>
                    <br>
                    Caso já tiver uma conta, você pode gerenciar campeonato, e participar de um.
                    <br>
                    No cronometro, podera ser feito lutas e <em>controla os pontos e punições de cada atleta em uma unica luta por vez.</em>
                </p>

                <div class="col d-flex justify-content-center">
                    <a class="btn btn-use" href="score_board.php">Utilizar</a>
                </div>

            </article>
        </div>
    </main>

    <main class="container-fluid mt-4" style="background-color: #e0a954;">
        <article class="row">
            <section class="col-12 pt-4 title" id="tittleContact">
                <h3 class="text-center">Contato</h3>
            </section>
        </article>

        <article class="row center mt-4">
            <div class="col-11 col-md-11 col-lg-10 col-xl-9 col-xxl-7">
                <div class="row">
                <article class="col-12 col-md-6 p-3">
                    <fieldset class="rounded-3 d-flex justify-content-center border border-2" style="border-color: #65daf4 !important;">
                        <section class="tittleMessageContact">
                            <h5 class="rounded-3">Envie-me um email</h5>
                        </section>
                        <div class="row mt-5">
                            <form class="input-group center" action="">
                                <div class="col-11 col-sm-10 col-md-11 mb-3">
                                    <label for="email" class="form-label m-2">Seu email</label>
                                    <input class="form-control" id="email" name="email" type="email" placeholder="Digite seu Email..." maxlength="90">
                                </div>
                                <div class="col-11 col-sm-10 col-md-11 mb-3">
                                    <label for="name" class="form-label m-2">Seu nome</label>
                                    <input class="form-control" id="name" name="name" type="text" placeholder="Digite seu nome..."  maxlength="90">
                                </div>
                                <div class="col-11 col-sm-10 col-md-11 mb-3">
                                    <label for="subject" class="form-label m-2">Assunto</label>
                                    <input class="form-control" id="subject" name="subject" type="text" placeholder="Sugestões, Dúvida, Comercial..." maxlength="50">
                                </div>
                                <div class="col-11 col-sm-10 col-md-11 mb-4">
                                    <label for="message" class="form-label m-2">Menssagem</label>
                                    <textarea class="form-control" id="message" name="message" rows="3" placeholder="Digite sua menssagem..." maxlength="400"></textarea>
                                </div>
                                <div class="col-11 col-sm-10 col-md-8 col-lg-6 mb-4">
                                    <input type="submit" class="btn btn-primary form-control" id="submitMessage" name="submitMessage" value="Enviar">
                                </div>
                            </form>
                        </div>
                    </fieldset>
                </article>

                <article class="col-12 col-md-6 p-3 center">
                    <p class="text-center"> <em>Atualmente o unico meio de contato é via email,</em> futuramente será disponibilizado outros meios aqui! </p>
                </article>
                </div>
            </div>
        </article>
    </main>

    <footer style="background-color: #000000;">
        <br><br><br>
    </footer>
    <script>
        var btnLogin = document.getElementById('btn-LogIn');
        var btnSignUp = document.getElementById('btn-signUp');
        var btnClosePopUp = document.querySelector('.btn-close');
        var btnAlreadyHaveAnAcc = document.getElementById('btn-already-have-an-acc');
        
        btnLogin.addEventListener('click', function() {
            let loginTittle = document.getElementById('LogIn-tittle');
            let formLogin = document.getElementById('formLogIn');
            loginTittle.style.display = 'flex';
            formLogin.style.display = 'flex';
            document.getElementById('btn-Recover-Password').style.display = 'flex';
            document.getElementById('text-Recover-Password').style.display = 'flex';
        });

        btnSignUp.addEventListener('click', function() {
            let SignUpTittle = document.getElementById('SignUp-tittle');
            let formSignUp = document.getElementById('formSignUp');
            SignUpTittle.style.display = 'flex';
            formSignUp.style.display = 'flex';
            document.getElementById('text-already-have-an-acc').style.display = 'flex';
            btnAlreadyHaveAnAcc.style.display = 'flex';
        });

        btnAlreadyHaveAnAcc.addEventListener('click', function() {
            let signUpTittle = document.getElementById('SignUp-tittle');
            let logInTittle = document.getElementById('LogIn-tittle');
            signUpTittle.style.display = 'none';
            document.getElementById('formSignUp').style.display = 'none';
            document.getElementById('text-already-have-an-acc').style.display = 'none';
            btnAlreadyHaveAnAcc.style.display = 'none';
            logInTittle.style.display = 'flex';
            document.getElementById('formLogIn').style.display = 'flex';
            document.getElementById('btn-Recover-Password').style.display = 'flex';
                document.getElementById('text-Recover-Password').style.display = 'flex';

        });

        // close popUp
        btnClosePopUp.addEventListener('click', function() {
            if (document.getElementById('LogIn-tittle').style.display == 'flex' && document.getElementById('formLogIn').style.display == 'flex') {
                document.getElementById('LogIn-tittle').style.display = 'none';
                document.getElementById('formLogIn').style.display = 'none';
                document.getElementById('btn-Recover-Password').style.display = 'none';
                document.getElementById('text-Recover-Password').style.display = 'none';
                document.getElementById('emailLogIn').value = '';
                document.getElementById('passLogin').value = '';
            }

            if (document.getElementById('SignUp-tittle').style.display == 'flex' && document.getElementById('formSignUp').style.display == 'flex') {
                document.getElementById('SignUp-tittle').style.display = 'none';
                document.getElementById('formSignUp').style.display = 'none';
                btnAlreadyHaveAnAcc.style.display = 'none';
                document.getElementById('text-already-have-an-acc').style.display = 'none';
            }
        });
    </script>
</body>
</html>