import { useEffect, useState } from "react";
import "../styles/itemSearch.scss";

const options = [
  { value: 0, label: "전체" },
  { value: 1, label: "상품명" },
  { value: 2, label: "브랜드" },
  { value: 3, label: "상품내용" },
];

export default function ItemSearch() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [label, setLabel] = useState("");
  const openDropNav = () => {
    setOpen(!open);
  };

  const selectValue = (val) => {
    const searchOption = options?.find((i) => i.value === val);
    if (searchOption) {
      setSelected(searchOption.value);
      setLabel(searchOption.label);
    }
    setOpen(false);
  };

  useEffect(() => {
    if (selected === 0) {
      setLabel(options[0].label);
    }
  }, []);
  return (
    <div id="wrapper">
      <div class="rows items">
        <div class="title">상품 검색</div>
      </div>
      <div class="rows items search_wrapper">
        <div class="title">검색</div>
        <div class="rows search_bar">
          <div class="selectBox_wrapper">
            <div class="selectBox" onClick={openDropNav}>
              {label}
            </div>
            {open && (
              <ul class="options">
                {options.map((item) => (
                  <li class="opt">{item.label}</li>
                ))}
              </ul>
            )}
          </div>

          <input type="text" />

          <button class="search_btn">조회</button>
        </div>
      </div>
    </div>
  );
}
