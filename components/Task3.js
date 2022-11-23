import React, { useState } from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ReactGridLayout = WidthProvider(RGL);


const defaultProps = {
  className: "layout",
  rowHeight: 100,
};

const removeStyle = {
  position: "absolute",
  right: "2px",
  top: 0,
  cursor: "pointer",
};


export default function Task3(props) {
  const DESIGN_DETAILS = {
    sideBarWidth: 300, // in pixels
    numberOfInitialBoxes: 69,
    fontFamily: "Public Sans",
    spaceBetweenItems: 8, // vertical and horizontal, in pixels
  };
  const [items, setItems] = useState(
    Array.from(Array(50).keys()).map((i, key, list) => {
      const y = Math.ceil(Math.random() * 4) + 1;
      return {
        i: i.toString(),
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        // w: 2,
        // h: y,
        w: _.random(1, 2),
        h: _.random(1, 3),
      };
    })
  );

  const [newCounter, setCounter] = useState(0);
  const [gridValue, setGridValue] = useState({
    breakpoint: null,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  });

  const createElement = (el) => {
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        <span className="text">{i}</span>
        <span className="remove" style={removeStyle} onClick={onRemoveItem(i)}>
          x
        </span>
      </div>
    );
  };
  
  const onAddItem = () => {
    setItems((val) =>
    
      items.concat({
        i: "n" + newCounter,
        x: (items.length * 2) % 12,
        y: Infinity,
        w: _.random(1, 2),
        h: _.random(1, 3),
      })
    );
    setCounter((val) => val + 1);
  };

  const onBreakpointChange = (breakpoint, cols) => {
    setGridValue({ breakpoint, cols });
  };

  const onRemoveItem = (i) => () => {
    const updatedItems = _.reject(items, { i: i });
    setItems(updatedItems);
  };

  return (
    <div
      className="page-container"
      style={{ fontFamily: DESIGN_DETAILS.fontFamily }}
    >
      <div
        className="sidebar-content"
        style={{ width: DESIGN_DETAILS.sideBarWidth }}
      >
        <button onClick={onAddItem}>Add Item</button>
      </div>

      <div
        className="content-content"
        style={{
          width: `calc(100% - ${DESIGN_DETAILS.sideBarWidth}px)`,
          marginLeft: DESIGN_DETAILS.sideBarWidth,
        }}
      >
        <h3>First Page</h3>
        <ReactGridLayout
          onBreakpointChange={onBreakpointChange}
          {...defaultProps}
          {...props}
        >
          {_.map(items, (el) => createElement(el))}
        </ReactGridLayout>
      </div>
    </div>
  );
}