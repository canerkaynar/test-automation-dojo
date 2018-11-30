import styled from 'styled-components';

const Item = styled.div`
  
  flex: 0 0 33.33%;
  margin-bottom: 20px;
  padding: 0 1rem;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
  p {
    font-size: 12px;
    line-height: 1.4;
    font-weight: 300;
    font-size: 1.5rem;
    margin: 5px 0;
    text-align: left;
    padding: 0 1rem;
  }
  .buttonList {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-top: 1px solid #E1E1E1;
    background: #E1E1E1;
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
      width: 100%;
    }
  }
  .detail-wrapper {
    padding: 0.5rem 0;
  }

  .item-inner {
    background: white;
    border: 1px solid #EDEDED;
    box-shadow: 0 12px 24px 0 rgba(0,0,0,0.09);
    position: relative;
    width: 240px;
    margin: 0 auto;
  }
`;

export default Item;
