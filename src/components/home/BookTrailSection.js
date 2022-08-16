import React from "react";
import { Button, IconBG } from "../../common/CommonElements";
import icon1 from "../../images/Vector.svg";
import icon2 from "../../images/Vector-1.svg";
import icon3 from "../../images/Vector-2.svg";
import icon4 from "../../images/Vector-3.svg";
import icon5 from "../../images/Vector-4.svg";
import icon6 from "../../images/Vector-5.svg";
import okrsList from "../../images/okrs_list.png";

function BookTrailSection() {
  const renderItem = ({ title, description, icon }) => {
    return (
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 44 }}>
        <IconBG>
          <img src={icon} />
        </IconBG>
        <div style={{ width: "70%", textAlign: "left", marginLeft: 20 }}>
          <span style={{ fontSize: 24, color: "#000" }}> {title}</span>
          <p style={{ fontSize: 14, color: "#000", lineHeight: "24px" }}>
            {description}
          </p>
        </div>
      </div>
    );
  };

  const list1 = [
    {
      title: "Bussiness Reviews",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: icon1,
    },
    {
      title: "Task Managment",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: icon2,
    },
    {
      title: "Initiatives",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: icon3,
    },
  ];

  const list2 = [
    {
      title: "KPI",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: icon4,
    },
    {
      title: "Activity Dashboard",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: icon5,
    },
    {
      title: "Goal Managment",
      description:
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: icon6,
    },
  ];

  return (
    <div className="pt-100 pb-100 padding-fluid">
      <span className="head_title">Book 30 day FREE trial</span>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <input
          className="email_input"
          placeholder="Enter Email and book for a free trial"
        />
        <Button style={{ flex: 0.2 }}>Submit</Button>
      </div>
      <div className="book_feature_div">
        <div style={{ flex: 0.3 }}>
          {list1 &&
            list1.map((i, index) => {
              return renderItem({
                icon: i.icon,
                title: i.title,
                description: i.description,
              });
            })}
        </div>
        <img src={okrsList} className="book_feature_image" />
        <div style={{ flex: 0.3 }}>
          {list2 &&
            list2.map((i, index) => {
              return renderItem({
                icon: i.icon,
                title: i.title,
                description: i.description,
              });
            })}
        </div>
      </div>
    </div>
  );
}

export default BookTrailSection;
