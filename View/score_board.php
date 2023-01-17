<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Import bootstrap-5.1 CSS-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--Own css-->
    <link rel="stylesheet" href="CSS/styleScoreBoard.css">
    <title>Placar digital</title>
</head>
<body class="container-fluid">
    <header>
        <br>
    </header>

    <main class="row bg-dark">
        <article class="col-12 col-sm-12 col-md-4 col-lg-4 bg-dark p-2 pb-3 athlete-content1">
            <h1 class="text-white text-center text-wrap" id="athleteName1">ttttttttt</h1>
            <p class="pts mt-1 ml-1 mr-1 mb-0 center">0</p>
            
            <div class="content-punishment-advantage">
                <p class="pts-punishment rounded-2">0</p>
                <p class="pts-advantage rounded-2">0</p>
            </div>

            <div id="content-btns-pts-1">
                <button class="btn btn-sm btn-light" id="btn-pts-1">+<i class="fa-solid fa-2"></i></button>
                <button class="btn btn-sm btn-light" id="btn-pts-1">+<i class="fa-solid fa-3"></i></button>
                <button class="btn btn-sm btn-light" id="btn-pts-1">+<i class="fa-solid fa-4"></i></button>
            </div>

            <div class="mt-3" id="content-btns-punishment-advantage-1">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-punishment">+<i class="fa-solid fa-1"></i></button>
                    <button type="button" class="btn btn-sm btn-punishment">-<i class="fa-solid fa-1"></i></button>
                </div>

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-advantage">+<i class="fa-solid fa-1"></i></button>
                    <button type="button" class="btn btn-sm btn-advantage">-<i class="fa-solid fa-1"></i></button>
                </div>
            </div>
        </article>
        
        <article class="col-12 col-sm-12 col-md-4 col-lg-4 p-3 p-sm-2 p-md-2 p-2 pb-3 timer-content">
            <h2 class="text-center center" id="timer">05:00</h2>
            <div class="btn-control-timer mt-3 mt-md-0">
                <button class="btn btn-light" id="btn-start"><i class="fa-solid fa-play"></i></button>
                <button class="btn btn-light" id="btn-pause" style="display: none;"><i class="fa-solid fa-pause"></i></button> <!-- o display dos btns é: inline-block-->
                <button class="btn btn-light" id="btn-restart" style="display: none;"><i class="fa-solid fa-rotate-left"></i></button>
            </div>
        </article>
        
        <article class="col-12 col-sm-12 col-md-4 col-lg-4 bg-dark p-2 pb-3 athlete-content2">
            <h1 class="text-white text-center text-wrap" id="athleteName2"> 47 caractere</h1>
            <p class="pts mt-1 ml-1 mr-1 mb-0 center">0</p>

            <div class="content-punishment-advantage">
                <p class="pts-punishment rounded-2">20</p>
                <p class="pts-advantage  rounded-2">55</p>
            </div>

            <div id="content-btns-pts-2">
                <button class="btn btn-sm btn-light" id="btn-pts-2">+<i class="fa-solid fa-2"></i></button>
                <button class="btn btn-sm btn-light" id="btn-pts-2">+<i class="fa-solid fa-3"></i></button>
                <button class="btn btn-sm btn-light" id="btn-pts-2">+<i class="fa-solid fa-4"></i></button>
            </div>

            <div class="mt-3" id="content-btns-punishment-advantage-2">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-punishment">+<i class="fa-solid fa-1"></i></button>
                    <button type="button" class="btn btn-sm btn-punishment">-<i class="fa-solid fa-1"></i></button>
                </div>

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-sm btn-advantage">+<i class="fa-solid fa-1"></i></button>
                    <button type="button" class="btn btn-sm btn-advantage">-<i class="fa-solid fa-1"></i></button>
                </div>
            </div>
        </article>
    </main>

    <footer>

    </footer>
    <!--Import bootstrap-5.1 JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!--Import font awesome -->
    <script src="https://kit.fontawesome.com/83eee99d9d.js" crossorigin="anonymous"></script>
</body>
</html>