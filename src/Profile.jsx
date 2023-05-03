import "./Profile.css";
import React from "react";
import { IoAdd } from "react-icons/io5";

function Profile() {
  return (
    <div className="profile">
      <div className="top-list">
        <img src="https://placekitten.com/200/200" alt="profile" />
        <table>
          <tbody>
            <tr>
              <td>109</td>
              <td>4354</td>
              <td>4555</td>
            </tr>
            <tr>
              <td>Posts</td>
              <td>Followers</td>
              <td>Following</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="about">
        <div className="about-me">
          <p>Bill Buttlicker</p>
          <p>I like pictures of animals. Follow me!</p>
          <div className="buttons">
            <div className="button-l">
              <button>Edit Profile</button>
              <button>Share Profile</button>
            </div>
            <div className="button-r">
              <button>
                <IoAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-grid">
        <img src="https://loremflickr.com/400/600/dog" alt="" />
        <img src="https://loremflickr.com/400/600/cat" alt="" />
        <img src="https://loremflickr.com/400/600/party" alt="" />
        <img src="https://loremflickr.com/400/600/food" alt="" />
        <img src="https://loremflickr.com/400/600/beer" alt="" />
        <img src="https://loremflickr.com/400/600/romance" alt="" />
        <img src="https://loremflickr.com/400/600/beach" alt="" />
        <img src="https://loremflickr.com/400/600/pool" alt="" />
        <img src="https://loremflickr.com/400/600/cars" alt="" />
        <img src="https://loremflickr.com/400/600/boats" alt="" />
        <img src="https://loremflickr.com/400/600/fish" alt="" />
        <img src="https://loremflickr.com/400/600/house" alt="" />
        <img src="https://loremflickr.com/400/600/soap" alt="" />
        <img src="https://loremflickr.com/400/600/magic" alt="" />
        <img src="https://loremflickr.com/400/600/fruit" alt="" />
        <img src="https://loremflickr.com/400/600/guitar" alt="" />
        <img src="https://loremflickr.com/400/600/bass" alt="" />
        <img src="https://loremflickr.com/400/600/dog" alt="" />
        <img src="https://loremflickr.com/400/600/dog" alt="" />
        <img src="https://loremflickr.com/400/600/dog" alt="" />
        <img src="https://loremflickr.com/400/600/dog" alt="" />
        <img src="https://loremflickr.com/400/600/dog" alt="" />


      </div>
    </div>
  );
}

export default Profile;
