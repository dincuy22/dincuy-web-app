import styled from "styled-components";

/**
 * @param {String} col - column
 * @param {String} jc - justify-content
 * @param {String} ai - align-items
 * @param {String} gp - gap
 * @param {String} p - padding
 * @param {String} w - width
 * @param {String} bc - background-color
 */
export const Flex = styled.div`
  ${(w) => w && `width: ${w};`}
  ${(p) => p && `padding: ${p};`}
  display: flex;
  flex-direction: ${({ col }) => col && "column"};
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  ${({ gp }) => gp && `gap: ${gp};`};

  ${({ bc }) => bc && `background-color: ${bc};`};
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="tel"],
  select,
  input[type="text"] {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 15px;

    &:focus {
      outline: none;
      border-color: #4c8bf5;
      box-shadow: 0 0 0 2px rgba(76, 139, 245, 0.2);
    }
  }

  p {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 15px;
    font-style: italic;
  }
`;
