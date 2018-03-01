<?php
header('Content-type: application/json');

//trim usuwa spacje
$error = [];

$mail = trim($_POST['Email']);
$subject = trim($_POST['Fullname']);
$message = trim($_POST['Text']);

$subject = filter_var($subject, FILTER_SANITIZE_STRING);
$message = filter_var($message, FILTER_SANITIZE_STRING);

if (!filter_var($mail, FILTER_SANITIZE_EMAIL)) {
    $error['Email'] = 'Adres email nieprawidowy';
}

if (strlen($subject) < 3) {
    $error['Fullname'] = 'Musi miec wiecej niż trzy znaki';
}

if (strlen($message) < 3) {
    $error['Text'] = 'Tresć jest za krótka';
}
$write = 'ggdgsg';

if (count($error) === 0) {
    $to = 'michal13171@wp.pl';
    $subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
    $htmlStarterStart = '
              <!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"><html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-2\">

               </head>
               <body>
               <h3>Hej '.$write.' </h3>
        ';
    $htmlStarterEnd = '
             </body>
             </html>
        ';
    $message = $htmlStarterStart . $message . $htmlStarterEnd;
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\n";
    $headers .= "From: $mail\n";
    $s_mail = mail($to, $subject, $message, $headers);
    if ($s_mail) {
        echo json_encode(['success' => 'Dziekujemy za wypelnienie formularza']);
    }
} else {
    echo json_encode($error);
}