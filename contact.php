<?php




    header ('Content-type: application/json');

class resultMail
{
    protected $error;
    protected $mail;
    protected $subject;
    private $message;
    private $to;
    private $htmlStarterStart;
    private $htmlStarterEnd;
    protected $s_mail;
    protected $headers;
    protected $name;
    public function __construct($s_mail, $to, $mail, $error, $subject, $htmlStarterStart, $htmlStarterEnd, $message, $headers, $name)
    {
        $this->mail = $mail;
        $this->subject = $subject;
        $this->message = $message;
        $this->to = $to;
        $this->htmlStarterStart = $htmlStarterStart;
        $this->htmlStarterEnd = $htmlStarterEnd;
        $this->s_mail = $s_mail;
        $this->error = $error;
        $this->headers;
        $this->name;

    }

}
class funcMail extends resultMail
{
    protected function index()
    {
        $this->error = [];
  
        $this->subject = trim($_POST['Fullname']);
        $this->name = trim($_POST['Fullname']);
        $this->mail = trim($_POST['Email']);
        $this->message = trim($_POST['Text']);

        $this->subject = filter_var($this->subject, FILTER_SANITIZE_STRING);
        $this->message = filter_var($this->message, FILTER_SANITIZE_STRING);
        $this->name = filter_var($this->name, FILTER_SANITIZE_STRING);
    }
}
class anotherFunc extends funcMail
{
    public function store()
    {
        $this->index();
        if (strlen($this->subject) < 3) {
            $this->error['Fullname'] = 'Minimal 3 length text';
        }


        if (!filter_var($this->mail, FILTER_SANITIZE_EMAIL)) {
            $this->error['Email'] = 'Bad address e-mail';
        }

        if (strlen($this->message) < 3) {
            $this->error['Text'] = 'Description is too short';
        }
        if (count($this->error) === 0) {
            $this->to = 'michal13171@wp.pl';
            $this->subject = "=?UTF-8?B?" . base64_encode($this->subject) . "?=";
            $this->htmlStarterStart = '
              <!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"><html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-2\">

               </head>
               <body>
        ';
            $this->htmlStarterEnd = '
             </body>
             </html>
        ';
            $this->message = $this->htmlStarterStart . $this->message . $this->htmlStarterEnd;
            $this->headers = "MIME-Version: 1.0\n";
            $this->headers .= "Content-type: text/html; charset=UTF-8\n";
            $this->headers .= "From: $this->name , $this->mail\n";
            $this->s_mail = mail($this->to, $this->subject, $this->message, $this->headers);
            if ($this->s_mail) {
                echo json_encode(['success' => 'Thank you for filling up the form.']);
            }
        } else {
            echo json_encode($this->error);
        }
    }

    /**
     * Get the value of error
     */
    public function getError()
    {
        return $this->error;
    }

    /**
     * Set the value of error
     *
     * @return  self
     */
    public function setError($error)
    {
        $this->error = $error;

        return $this;
    }

    /**
     * Get the value of mail
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * Set the value of mail
     *
     * @return  self
     */
    public function setMail($mail)
    {
        $this->mail = $mail;

        return $this;
    }

    /**
     * Get the value of subject
     */
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * Set the value of subject
     *
     * @return  self
     */
    public function setSubject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * Get the value of message
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * Set the value of message
     *
     * @return  self
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * Get the value of to
     */
    public function getTo()
    {
        return $this->to;
    }

    /**
     * Set the value of to
     *
     * @return  self
     */
    public function setTo($to)
    {
        $this->to = $to;

        return $this;
    }

    /**
     * Get the value of htmlStarterStart
     */
    public function getHtmlStarterStart()
    {
        return $this->htmlStarterStart;
    }

    /**
     * Set the value of htmlStarterStart
     *
     * @return  self
     */
    public function setHtmlStarterStart($htmlStarterStart)
    {
        $this->htmlStarterStart = $htmlStarterStart;

        return $this;
    }

    /**
     * Get the value of htmlStarterEnd
     */
    public function getHtmlStarterEnd()
    {
        return $this->htmlStarterEnd;
    }

    /**
     * Set the value of htmlStarterEnd
     *
     * @return  self
     */
    public function setHtmlStarterEnd($htmlStarterEnd)
    {
        $this->htmlStarterEnd = $htmlStarterEnd;

        return $this;
    }

    /**
     * Get the value of s_mail
     */
    public function getS_mail()
    {
        return $this->s_mail;
    }

    /**
     * Set the value of s_mail
     *
     * @return  self
     */
    public function setS_mail($s_mail)
    {
        $this->s_mail = $s_mail;

        return $this;
    }

    /**
     * Get the value of headers
     */
    public function getHeaders()
    {
        return $this->headers;
    }

    /**
     * Set the value of headers
     *
     * @return  self
     */
    public function setHeaders($headers)
    {
        $this->headers = $headers;

        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }
}

$obj = new anotherFunc('', '', '', '', '', '', '', '', '','');
echo $obj->store();
