import styled from 'styled-components';
import { Form } from 'antd';

export const StyledForm = styled(Form)`
  max-width: 350px;
  margin: auto;
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  button {
    width: 100%;
  }

  .login-form-forgot {
    float: right;
  }
`;
