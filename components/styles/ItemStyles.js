import styled from 'styled-components';

const Item = styled.div`
  
  flex: 0 0 25%;
  margin-bottom: 20px;
  padding: 0 1rem;

  img {
    width: 100%;
    height: 204px;
    display: block;
    border-radius: 2px 2px 0px 0px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    font-size: 1.5rem;
    margin: 5px 0;
    height: 40px;
    text-align: left;
    padding: 0 1rem;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
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
    width: 220px;
    margin: 0 auto;
    border-radius: 2px;
    a {
      display: block;
    }
  }
`;

export default Item;
