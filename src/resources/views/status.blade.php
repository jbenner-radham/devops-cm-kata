<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="author" content="James Benner">
        <title>App: Status</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <div class="container">
            <article class="content">
                <h1>Data:
                    @if ($data)
                        <span class="status-ok">OK</span></h1>
                    @else
                        <span class="status-fail">FAIL</span></h1>
                    @endif
                </h1>

                <h1>Application:
                    @if ($application)
                        <span class="status-ok">OK</span></h1>
                    @else
                        <span class="status-fail">FAIL</span></h1>
                    @endif
                </h1>

                <h1>Presentation:
                    @if ($presentation)
                        <span class="status-ok">OK</span></h1>
                    @else
                        <span class="status-fail">FAIL</span></h1>
                    @endif
                </h1>
            </article>
        </div>
    </body>
</html>
