import React from 'react';

function About() {
  return (
    <div>
        <div className="w3-justify">
          <img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="Girl Hat" style={{ width : "100%" }} className="w3-padding-16"/>
          <p><strong>More Hats!</strong> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p className="w3-left"><button className="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i className="fa fa-thumbs-up"></i> Like</b></button></p>
          <p className="w3-right"><button className="w3-button w3-black" onclick="myFunction('demo1')" id="myBtn"><b>Replies  </b> <span className="w3-tag w3-white">1</span></button></p>
          <p className="w3-clear"></p>
          <div className="w3-row w3-margin-bottom" id="demo1" style= {{ display: "none" }}>
            <hr/>
              <div className="w3-col l2 m3">
                <img src="/w3images/avatar_smoke.jpg" style= {{ width: "90px" }}/>
              </div>
              <div className="w3-col l10 m9">
                <h4>George <span className="w3-opacity w3-medium">October 21, 2019, 11:32 PM</span></h4>
                <p>Great blog post! Following</p>
              </div>
          </div>
          </div>
      <hr></hr>
    </div>
  );
}

export default About;
