import React from 'react';
import "antd/dist/antd.css";
import { Row } from "antd";

function Contact() {
  return (
    <div>
        <Row>
    <div className="col-md-6 " id="form_container">
        <h2>Contact Us</h2>
        <p>
           Please send your message below. We will get back to you at the earliest!
        </p>
        <form role="form" method="post" id="reused_form">

            <Row>
                <div className="col-sm-12 form-group">
                    <label for="message">
                        Message:</label>
                    <textarea className="form-control" type="textarea" id="message" name="message" maxlength="6000" rows="7"></textarea>
                </div>
            </Row>
            <Row>
                <div className="col-sm-6 form-group">
                    <label for="name">
                        Your Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="col-sm-6 form-group">
                    <label for="email">
                        Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                </div>
            </Row>



            <Row>
                <div className="col-sm-12 form-group">
                    <button type="submit" className="btn btn-lg btn-default pull-right" >Send →</button>
                </div>
            </Row>

        </form>
        <div id="success_message" style={{ width: "100%", height:"100%",  display:"none" }}>
            <h3>Posted your message successfully!</h3>
        </div>
        <div id="error_message"
                style={{ width: "100%", height:"100%",  display:"none" }}>
                    <h3>Error</h3>
                    Sorry there was an error sending your form.

        </div>
    </div>
    </Row>
    </div>
  );
}

export default Contact;
