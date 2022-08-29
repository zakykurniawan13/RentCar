import React, { useState } from "react";

import PropTypes from "prop-types";

const Dropdown = (props) => {
  const { label, data, selected, onSelect } = props;

  const [toggleSelect, setToggleSelect] = useState(false);

  const handleSelectedItem = (id, selected) => {
    if (selected) {
      return selected.id === id ? true : false;
    }
    return false;
  };

  return (
    <div className="text-input-wrapper">
      <div className="text-input-label">{label}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="text-input-border-select"
          onClick={() => setToggleSelect(!toggleSelect)}
        >
          <div className="select-left-item">
            {selected ? selected.label : "Please Select"}
          </div>
          <div className="select-right-item">
            <div className="select-logo">▼</div>
          </div>
        </div>
        {toggleSelect && (
          <div className="select-input">
            {data &&
              data.map((item) => (
                <div
                  className="text-input-border-select-item"
                  key={item.id}
                  onClick={() => {
                    setToggleSelect(false);
                    onSelect(item);
                  }}
                  style={{
                    backgroundColor: handleSelectedItem(item.id, selected)
                      ? "gray"
                      : "white",
                  }}
                >
                  <div className="select-item">{item.label}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  onSelect: PropTypes.func,
};

Dropdown.defaultProps = {
  label: "",
  selected: null,
  onSelect: () => {},
};

export default Dropdown;
