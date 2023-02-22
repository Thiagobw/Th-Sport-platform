<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require_once '../assets/vendor/autoload.php';

if (isset($_POST['sendBtn'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $result = array();
    
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        //$mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'thgleopoldo900@gmail.com';             //SMTP username
        $mail->Password   = 'gudxkunxrurwyjdn';                     //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('thgleopoldo900@gmail.com', 'Th-Sports'); //Add a recipient
        $mail->addReplyTo($email, $name);


        /*
        Attachments
        $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        */

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = 'Menssagem de contato enviada atravez do site, segue as informações a baixo: <br>
                         Nome: '.$name.'<br>
                         E-mail: '.$email.'<br>
                         Menssagem:<br>'.$message.'
                         ';


        // menssagem sem html utiliza...
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        $result['isTrue'] = true;
        $result['msg'] = 'e-mail enviado com sucesso';
        echo json_encode($result);

    } catch (Exception $e) {
        $result['isTrue'] = false;
        $result['msg'] = 'erro ao enviar menssagem';
        $result['error'] = $mail->ErrorInfo;
        echo json_encode($result);
    }
}