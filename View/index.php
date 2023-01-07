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
    <title>TH Sports</title>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="img/logo.png" height="85" width="100" alt="Logo TH-Sports">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">

                    <div></div>
                    <ul class="navbar-nav">
                    <li class="nav-item p-md-1">
                            <a class="nav-link" href="#">Sobre</a>
                        </li>

                        <li class="nav-item p-md-1">
                            <a class="nav-link" href="#">Contato</a>
                        </li>

                        <li class="nav-item p-md-1">
                            <a class="nav-link" href="#">Log in</a>
                        </li>

                        <li class="nav-item p-md-1">
                            <a class="nav-link" id="btn-sign-up" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="w-100 d-flex justify-content-center">
            <img class="img-fluid banner" src="img/banner.png" alt="banner TH-Sports">
        </div>
    </header>

    <main class="container mt-3">
        <section class="col-12 pt-4 title">
            <h3 class="text-center">Sobre o TH Sports</h3>
        </section>

        <div class="row d-flex justify-content-center">
            <article class="col-11 col-md-6 pt-5">
                <h5 class="text-center pb-1">oque é?</h5>

                <p class="text">
                    <em><b>TH Sports</b> é uma ideia</em> de uma plataforma digital para diversos esportes, com o intuito de ajudar com uma forma pratica na organização do chaveamento, cronometro, pontuações e lutas ou Jogos de um campeonato,<em> sem a necessidade de um papel.</em>
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
                    <a class="btn btn-use" href="">Utilizar</a>
                </div>

            </article>
        </div>

        <section class="col-12 pt-4 title">
            <h3 class="text-center">Contato</h3>
        </section>

        <div class="row d-flex justify-content-center pt-4">
            <article class="col-11 col-md-6">
                <h5 class="text-center">Envie-me um email</h5>

            </article>

            <article class="col-11 col-md-6">

            </article>
        </div>
    </main>

    <!--Import bootstrap-5.1 JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>