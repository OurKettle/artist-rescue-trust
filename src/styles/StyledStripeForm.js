import styled from "styled-components"
import { device } from "./MediaQueries"
import { theme } from "./Theme"
import { Benton, Nimbus } from "./Mixins"

export const StyledStripeForm = styled.div`

  form {
    display: flex;
    flex-direction: column;
    /* background: ${theme.cream}; */
    /* border: 1px solid ${theme.darkPurple}; */
    /* border-radius: 5px; */
    /* padding: 20px; */
  }

  section {
    background: rgba(173, 161, 206, .5);
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 5px;

    @media ${device.laptop} {
      padding: 20px 50px;
    }

    h2 {
      margin-bottom: 35px;
    }
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.laptop} {
      flex-direction: row;
    }

    p {
      margin: 0;
    }

    input[type=text],
    input[type=email] {
      ${Nimbus};
      font-size: 1rem;
      width: 100%;
      margin: 0;
      padding: 10px 20px;
      width: 100%;

      @media ${device.laptop} {
        width: 225px;
      }
    }

    /* &.comment-check {
      flex-direction: column;
    } */

    &.amount-check {
      flex-direction: column;

      .checkbox {
        cursor: pointer;

        &:hover,
        &.active {
          color: ${theme.black};
        }
      }

      .d-flex {
        span {
          ${Benton};
          font-size: 2.3rem;
          font-weight: bold;
          line-height: 1;
        }
      }
    }

    .checkbox {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 20px;

      input[type=checkbox],
      input[type=radio] {
        height: 25px;
        width: 25px;
        margin: 0 10px 0 0;
      }

      span {
        position: relative;
        top: 1px;
      }
    }

    .error {
      color: ${theme.red};
      margin-bottom: 20px;
    }
  }

  label {
    color: rgba(0, 0, 0, .6);
    font-weight: 300;
    letter-spacing: 0.025em;
  }

  input,
  textarea,
  .StripeElement {
    box-sizing: border-box;
    display: block;
    /* margin: 10px 0 20px 0; */
    /* width: 100%; */
    /* max-width: 100%; */
    padding: 10px 14px;
    font-size: 1em;
    font-family: "Source Code Pro", monospace;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
  }

  input::placeholder {
    color: #aab7c4;
  }

  input:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }

  .StripeElement.IdealBankElement,
  .StripeElement.FpxBankElement,
  .StripeElement.PaymentRequestButton {
    padding: 0;
  }

  .StripeElement.PaymentRequestButton {
    height: 40px;
  }

  button {
    white-space: nowrap;
    border: 0;
    outline: 0;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    background-color: #6772e5;
    text-decoration: none;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    margin-top: 10px;

    &:hover {
      color: #fff;
      cursor: pointer;
      background-color: #7795f8;
      transform: translateY(-1px);
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    }
  }
`
