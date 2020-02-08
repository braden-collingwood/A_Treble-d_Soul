// import React, { Component } from 'react'
// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import ScrollMenu from "react-horizontal-scrolling-menu";

// const list = [
//     { name: "item1" },
//     { name: "item2" },
//     { name: "item3" },
//     { name: "item4" },
//     { name: "item5" },
//     { name: "item6" },
//     { name: "item7" },
//     { name: "item8" },
//     { name: "item9" },
//     { name: "item10" },
//     { name: "item11" },
//     { name: "item12" },
//     { name: "item13" },
//     { name: "item14" },
//     { name: "item15" },
//     { name: "item16" },
//     { name: "item17" },
//     { name: "item18" },
//     { name: "item19" },
//     { name: "item20" },
//     { name: "item21" },
//     { name: "item22" },
//     { name: "item23" },
//     { name: "item24" },
//     { name: "item25" }
// ];

// const MenuItem = ({ text, selected }) => {
//     return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
//   };
  
//   export const Menu = (list, selected) =>
//     list.map(el => {
//       const { name } = el;
  
//       return <MenuItem text={name} key={name} selected={selected} />;
//     });

// const Arrow = ({ text, className }) => {
//     return <div className={className}>{text}</div>;
//   };
//   Arrow.propTypes = {
//     text: PropTypes.string,
//     className: PropTypes.string
//   };
  
//   export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
//   export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// class App extends Component {
//   state = {
//     alignCenter: true,
//     clickWhenDrag: false,
//     dragging: true,
//     hideArrows: true,
//     hideSingleArrow: true,
//     itemsCount: list.length,
//     selected: "item1",
//     translate: 0,
//     transition: 0.3,
//     wheel: true
//   };

// export default function SampleComponent() {
//     return (
//         <div>
//             const {
//                 alignCenter,
//                 clickWhenDrag,
//                 hideArrows,
//                 dragging,
//                 hideSingleArrow,
//                 itemsCount,
//                 selected,
//                 translate,
//                 transition,
//                 wheel
//             } = this.state;

//             const menu = this.menuItems;

//             const checkboxStyle = {
//                 margin: "5px 10px"
//             };
//             const valueStyle = {
//                 margin: "5px 10px",
//                 display: "inline-block"
//             };

//             <ScrollMenu>
//                 ref={el => (this.menu = el)}
//                 data={menu}
//                 arrowLeft={ArrowLeft}
//                 arrowRight={ArrowRight}
//                 hideArrows={hideArrows}
//                 hideSingleArrow={hideSingleArrow}
//                 transition={+transition}
//                 onUpdate={this.onUpdate}
//                 onSelect={this.onSelect}
//                 selected={selected}
//                 translate={translate}
//                 alignCenter={alignCenter}
//                 scrollToSelected={true}
//                 dragging={dragging}
//                 clickWhenDrag={clickWhenDrag}
//                 wheel={wheel}
//             </ScrollMenu>
//         </div>
//     )
// }