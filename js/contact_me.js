

$("#contact-me-form").append(`

  <form action="" method="post" role="form" class="contactForm">
    <div class="row">

      <div id="sendmessage">Your message has been sent. Thank you!</div>
      <div id="errormessage">Message failed to send!</div>

      <div class="col-lg-6">
        <div class="form-group contact-block1">
          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
          <div class="validation"></div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="form-group">
          <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
          <div class="validation"></div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validation"></div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="form-group">
          <textarea class="form-control" name="message" id="message" rows="12" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
          <div class="validation"></div>
        </div>
      </div>

      <div class="col-lg-12">
        <input id="contact-submit-button" type="submit" class="btn btn-defeault btn-send" value="Send message">
      </div>

    </div>
  </form>
`)

