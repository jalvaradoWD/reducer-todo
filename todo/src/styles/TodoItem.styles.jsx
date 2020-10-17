import styled from "styled-components";

export default styled.div`
  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => (props.checked ? "lightgray" : "black")};
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  }

  input[type="checkbox"] {
    margin-right: 1rem;
  }
`;
