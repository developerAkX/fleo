import React from "react";

function FeatureBox({ item }) {
  return (
    <div className="feature_box_main">
      <img src={item.image} className="feature_box_image" />
      <div style={{ flex: 0.2 }} />
      <div className="feature_box_content">
        <div
          style={{
            paddingLeft: 20,
            marginBottom: 30,
            borderLeft: "2px solid #56402A",
          }}
        >
          <span className="feature_title">{item.title}</span>
        </div>
        <p className="description_section_1">{item.description}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
