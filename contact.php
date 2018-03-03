<?php
header('Content-type: application/json');

//trim usuwa spacje
$error = [];

$subject = trim($_POST['Fullname']);
$name = trim($_POST['Fullname']);
$mail = trim($_POST['Email']);
$message = trim($_POST['Text']);

$subject = filter_var($subject, FILTER_SANITIZE_STRING);
$message = filter_var($message, FILTER_SANITIZE_STRING);
$name = filter_var($name, FILTER_SANITIZE_STRING);

if (strlen($subject) < 3) {
    $error['Fullname'] = 'Minimal 3 length text';
}


if (!filter_var($mail, FILTER_SANITIZE_EMAIL)) {
    $error['Email'] = 'Bad address e-mail';
}

if (strlen($message) < 3) {
    $error['Text'] = 'Description is too short';
}

if (count($error) === 0) {
    $to = 'michal13171@wp.pl';
    $subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
    $htmlStarterStart = '
              <!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">
              <html>
                 <head>
                    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-2\">
                    <meta charset="UTF-8">
                </head>
               <body>
               <h3>Hej</h3>
        ';
    $htmlStarterEnd = '
             </body>
             </html>
        ';
    $message = $htmlStarterStart . $message . $htmlStarterEnd;
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\n";
    $headers .= "From: $name , $mail\n";
    $s_mail = mail($to, $subject, $message, $headers);
    if ($s_mail) {
        echo json_encode(['success' => 'Thank you for filling up the form.']);
    }
} else {
    echo json_encode($error);
}
