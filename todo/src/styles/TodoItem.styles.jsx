import styled from "styled-components";

export default styled.div`
  font-family: "Arial";
  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => (props.checked ? "lightgray" : "black")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  }

  input[type="checkbox"] {
    margin-right: 1rem;
  }
`;
