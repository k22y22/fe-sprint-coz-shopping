import styled from "styled-components";

const FooterWrapper = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: rgba(136, 136, 136, 1);
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>개인정보 처리방침 | 이용 약관</FooterText>
      <FooterText>All rights reserved @ Codestates</FooterText>
    </FooterWrapper>
  )
}

export default Footer;